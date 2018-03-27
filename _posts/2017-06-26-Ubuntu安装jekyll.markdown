---
layout: post
title: Ubuntu 16.04安装jekyll
date: 2017-06-26 20:13:00.000000000 +9:00
tag: Ubuntu 
---

> 一直以来在github写博客习惯于直接git提交后在github pages看效果，这样来回修改就会繁琐的commit、push,所以还是搭建jekyll本地环境预览吧。

1.安装ruby

```shell
sudo apt install ruby-full ruby-bundler
```
**这里如果下意识的使用`sudo apt install ruby`安装ruby会导致下一步安装jekyll的时候出现如下错误：**

![gem\_install\_error](http://oq782gkz3.bkt.clouddn.com/gem_install_jekyll_errors.png)

2.安装jekyll

```shell
sudo gem install jekyll
```
3.检测jekyll是否安装成功

```shell
jekyll -v
jekyll new new-site
cd new-site
jekyll serve
```
在浏览器里打开[http://localhost:4000](http://localhost:4000)可以看到预览效果。
