---
layout: post
title: "使用nginx和uwsgi部署Django应用"
description: "部署过程记录"
categories: [Python]
tags: [Python, Django]
redirect_from:
  - /2018/03/21/
---

* Kramdown table of contents
{:toc .toc}

---
**这段儿时间使用`Python3.6 + Django 1.11`模仿慕课网某课做了一个Django小项目，已经完成了基本功能。
在基本功能完成之后，自然想部署起来，既可以学习一下部署相关知识，也可以展示一下自己的成果。
本次部署采用Nginx+uWSGI的方式。至于为什么采用这种方式，uwsgi官方文档里有一段话说的很清楚：**
> A web server faces the outside world. It can serve files (HTML, images, CSS, etc) directly from the file system. However, it can’t talk directly to Django applications; it needs something that will run the application, feed it requests from web clients (such as browsers) and return responses.
A Web Server Gateway Interface - WSGI - does this job. WSGI is a Python standard.
uWSGI is a WSGI implementation.


**部署完成后，整个的功能栈结构如下：**

```the web client <-> the web server(nginx) <-> the socket <-> uwsgi <-> Django```


部署过程看了很多个教程，也翻看了不少Nginx和uwsgi的文档，但是坑永远都在，当你踩完之后它才会消失，所以记录下自己这次部署的记录，以便以后参考。

### 1. 安装nginx
> 本次使用的是腾讯云的服务器，系统为Centos7，这里有一篇写的很好的文档：[centos7安装nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7), 当然，为了省去跳转的功夫，这里将过程记录如下：

```shell
# 1. add the Centos7 EPEL repository:
sudo yum install epel-release
# 2. Install nginx
sudo yum install nginx
# 3. start nginx
sudo systemctl start nginx
```
在Nginx启动之后，对Nginx的便捷操控命令为：
```shell
# 1. reload
sudo nginx -s reload
# 2. stop
sudo nginx -s stop
```
### 2. 安装mariadb
```shell
sudo yum install mariadb-server
```
#### 2.1 在安装mariadb之后，首先修改mariadb的一些设置，使其支持中文：
```shell
# yum安装的mariadb主配置文件在/etc/my.cnf， 并且在这个文件中包含/etc/my.cnf.d路径下的所有文件。
# 1. 编辑该目录下的client.cnf文件，在[client]下添加：
default-character-set=utf8
# 2. 编辑my.conf.d目录中的mysql-clients.cnf,在[mysql]下添加：
default-character-set=utf8
# 3. 编辑my.conf.d目录中的server.cnf，在[mysqld]下添加：
init_connect='SET collation_connection = utf8_general_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_general_ci
skip-character-set-client-handshake
```
#### 2.2 配置数据库远程访问：
```shell
# 1. 设置bind ip
vim /etc/my.cnf
# 在[mysqld]下面加上一行：
bind-address = 0.0.0.0
# 2. 进入mysql，执行下面命令
GRANT ALL PRIVILEGES ON *.* TO 'YOUUSERNAME'@'%' IDENTIFIED BY 'YOURPASSWORD' WITH GRAND OPTION;
FLUSH PRIVILEGES;
# 3. 重启mariadb服务器
systemctl restart mariadb.service
```
在完成上一步后，请开放对应的数据库端口, 自己机器防火墙要开启，对应云服务器厂商的防火墙规则也要设置开启。

**在机器上简单设置开放3306端口教程如下：**
```shell
# 首先查看3306端口是否开放
firewall-cmd --query-port=3306/tcp
# 返回为no/yes
# 然后如果是no，则放行该端口并重新加载防火墙配置：
firewall-cmd --permanent --add-port=3306/tcp
firewall-cmd --reload
```
**到目前为止，数据库已经支持中文显示，并且已经可以远程访问，数据库模块设置结束。 **

### 3. 安装uwsgi
```shell
pip install uwsgi
```

### 4. 开始配置
#### 4.1 测试uwsgi与Django链
1. 首先确认你的Django项目在`python manage.py runserver 0.0.0.0:8000`时运行完全良好。（同时确认你的云服务器8000端口是开启的）
2. 如果1通过，那么就可以使用uwsgi试一下了：
```shell
uwsgi --http :8000 --module mysite.wsgi
```
其中，mysite是你的Django项目名称，wsgi为你Django默认生成的主app文件夹下的wsgi.py文件。
如果项目仍然能正常运行，那么说明uwsgi与Django链是完好的。

#### 4.2 配置nginx
1. 你可以在你的项目下新建一个conf文件夹，用来存放Nginx以及uwsgi的配置文件，假设Nginx配置文件为`mysite_nginx.conf`

```shell
# mysite_nginx.conf

# the upstream component nginx needs to connect to
upstream django {
    # server unix:///path/to/your/mysite/mysite.sock; # for a file socket
    server 127.0.0.1:8001; # for a web port socket (we'll use this first)
}

# configuration of the server
server {
    # the port your site will be served on
    listen      80;
    # the domain name it will serve for
    server_name example.com; # substitute your machine's IP address or FQDN
    charset     utf-8;

    # max upload size
    client_max_body_size 75M;   # adjust to taste

    # Django media
    location /media  {
        alias /path/to/your/mysite/media;  # your Django project's media files - amend as required
    }

    location /static {
        alias /path/to/your/mysite/static; # your Django project's static files - amend as required
    }

    # Finally, send all non-media requests to the Django server.
    location / {
        uwsgi_pass  django;
        include     /path/to/your/mysite/uwsgi_params; # the uwsgi_params file you installed
    }
}
```
2. 配置完Nginx之后，就要部署你自己的静态文件：
- 首先，在setting文件中加入STATIC_ROOT
```python
STATIC_ROOT = os.path.join(BASE_DIR, "static/")
```
- 然后，执行：`python manage.pu collectstatic`, 并重启Nginx。
3. 然后就是配置uwsgi， 假设配置文件为：`uwsgi.ini`

```shell
[uwsgi]

# Django-related settings
# the base directory (full path)
chdir = /home/django/EduSite
# Django's wsgi file
module = edusite_final.wsgi
# the virtualenv (full path)
virtualenv = /home/django/.virtualenvs/edusite111
# process-related settings
# master
master = true
# maximum number of worker processes
processes = 10
# the socket (use the full path to be safe
socket = 127.0.0.1:8001
# ... with appropriate permissions - may be needed
# chmod-socket    = 664
# clear environment on exit
vacuum = true


logto = /tmp/mylog.log
```
然后启动uwsgi： `uwsgi -i /path/to/your/uwsgi.ini &`

* * * * *

**普遍的，大家的部署教程都是这么写的，但是在这个部署过程中，我们还需要注意的就是nginx相关的权限问题，不然的话————你去踩踩坑就知道了。**


