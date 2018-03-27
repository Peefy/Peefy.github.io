---
layout: post
title: "Ubuntu以及Arch Linux更换清华源"
description: "换源速记"
categories: [Linux]
tags: [Linux]
redirect_from:
  - /2017/06/23/

---

### **Ubuntu**
[Ubuntu清华源更换网址](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)

这个地址里同样有其他Linux发行版的源使用帮助信息。

**更换步骤**

1.在上述网址选择ubuntu版本，生成对应的源地址；

2.备份原始文件

`sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup`

3.编辑源文件

`sudo vim /etc/apt/sources.list`

将`sources.list`中内容注释或者删除掉，然后将第一步中生成的源地址粘贴进去；

4.然后更新软件包缓存`sudo apt update`

---

### **Arch Linux**
编辑­`/etc/pacman.d/mirrorlist`,在文件最顶端添加：

`Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch`

然后更新软件包缓存`sudo pacman -Syy`

