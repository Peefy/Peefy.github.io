---
layout: post
title: "Ubuntu tips"
date: 2017-06-25 16:50:00
catagories: [Linux, tips]
tags: [Linux, tips]
redirect_from:
  - /2017/06/25/
---

* Kramdown table of contents
{:toc .toc}
---

### **1. 更换pip源为阿里云的镜像源**

[官方帮助教程](http://mirrors.aliyun.com/help/pypi)

编辑pip配置文件:

`vim ~/.pip/pip.conf`

然后写入如下内容：

```
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host = mirrors.aliyun.com
```

**如果发现没有对应文件夹以及配置文件，请直接自行创建。**

---

### **2. Ubuntu将默认的python版本换为python3.X**

Ubuntu 16.04自带了python2.7和python3.5，且默认版本为python2.7，最近一直使用python3.×版本所以需讲python默认版本修改为3.5。

可以使用`ls /usr/bin | grep python`来查看目前存在的python版本

然后设置软链接，讲python3.5设为默认：

`sudo ln -s /usr/bin/python3.5 /usr/local/bin/python`

此时python3.5已经成为默认。

![效果](http://oq782gkz3.bkt.clouddn.com/Selection_008.png)

**然后此时需要注意的就是，如果以后主要在3.×的环境下工作，请安装对应3.×的包。**

```
sudo apt install python3-pip
pip3 install package_name
```

---

### **3. Ubuntu设置ssh密钥登录并关闭ssh密码登录**

**连网的机器安全第一，所以ssh的安全性就是重中之重了。使用ssh密钥登录，并关闭密码认证是有效的防止机器被入侵的方式。**

Ubuntu设置ssh密钥登录的步骤如下：

1.首先安装ssh

`sudo apt install ssh`

2.制作密钥对

`ssh-keygen`

你应该会看到如下的内容：

```
Generating public/private rsa key pair.
Enter file in which to save the key(/home/user/.ssh/id_rsa):
...
...
```
3.将公钥写入到对应文件里

```
cd ~/.ssh
cat id_rsa.pug >> authorized_keys
```

然后确保对应文件的权限是正确的:

```bash
chmod 600 authorized_keys
chmod 700 ~/.ssh
```

4.设置ssh配置文件，打开密钥登录并关闭密码登录

编辑`/etc/ssh/sshd_config`文件，确定如下设置：

```
RSAAuthentication yes
PubkeyAuthentication yes
```
当你确定可以使用密钥方式登录成功之后，再禁用密码登录：

`PasswordAuthentication no`

**记得如果这些修改项是被注释掉的，记得把注释取消。**

5.重启ssh服务

`service sshd restart`

6.关于[putty](https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.69-installer.msi)使用id\_rsa的一点儿说明

> putty是不能直接使用id\_rsa私钥的，需要使用[puttygen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe)转换。

首先从服务器下载id\_rsa到本地，然后使用puttygen载入，然后选择Save private key讲私钥保存为putty能用的.ppk文件。然后就跟一般的putty使用key登录一样了。
