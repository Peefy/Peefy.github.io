---
layout: post
title: Arch linux安装以及后续配置过程整理
categories: [Linux]
tags: [Linux]
redirect_from:
  - /2017/05/24/
---

*  Kramdown table of contents
{:toc .toc}

> **整理一下这个教程便于以后可以无脑重装Arch Linux，美滋滋啊。**

## 准备以及分区

### 1.准备

- 准备内容

  1. USB stick
 
  2. Arch Linux ISO image

   [Arch Linux Download Addr](https://www.archlinux.org/download/)

- 创建启动盘

  1. On windows: Rufus

  2. On linux: `sudo dd if=/path_to_arch_.iso of=/dev/sdx`

> sdx代表你的U盘，可以用lsblk命令查看得到。

接下来就是设置bios启动方式，教程基于UEFI+GPT的引导启动方式。请自行设置。

**设置USB为下一次的引导路径，然后重启之后我们就能进入Arch安装环境了**

查看EFI mode是否开启

`efivar -l`

如果有输出，就说明已经开启。

### 2.分区

`lsblk`

```
gdisk /dev/sdx (x representing your drive)
x          # into expert mode
z          # clear the disk
y          # confirm
y          # confirm
```
创建分区

**分区设定如下：**

sda

- sda1(boot partition)

- sda2(our swap partition)

- sda3(our root partition)

- sda4(our home partition)

**使用cgdisk分区：**

`cgdisk /dev/sdx`


```
[New] Press Enter
First Sector: Leave this blank ->press Enter
Size in sectors: 1024MiB ->press Enter
Hex Code: EF00 press Enter
Enter new partition name: boot ->press Enter
```
**boot分区**的Hex Code为**EF00**，千万不要弄错，有些资料会说是EF02，实测EF00才有效。

arch wiki上说boot分区分配200-300mb就行了，但是为了以后的双系统等未知需求，分配1Gb。

```
[New] Press Enter
First Sector: Leave this blank ->press Enter
Size in sectors: 8GiB ->press Enter
Hex Code: 8200 ->press Enter
Enter new partition name: swap ->press Enter
```
**swap分区**的Hex Code是**8200**。

swap分区的开启与否以及大小设置一直是争论焦点。这里贴出参考：

[askubuntu\_swap](https://askubuntu.com/questions/49109/i-have-16gb-ram-do-i-need-32gb-swap/49130#49130)

[serverfault\_swap](https://serverfault.com/questions/5841/how-much-swap-space-on-a-2-4gb-system)

下面建立root分区和home分区。两者Hex code都是默认的**8300**。
如果不独立设置home分区，就可以直接把剩余空间都设置为root分区。
如果设置独立的home分区，可以分配30G左右给root分区，剩余空间分配给home分区。
分区全部建立完毕之后，我们就要设置分区格式了。

```shell
mkfs.fat -F32 /dev/sda1
mkswap /dev/sda2
swapon /dev/sda2
mkfs.ext4 /dev/sda3
mkfs.ext4 /dev/sda4
```

## 安装Arch 以及配置启动

### 挂载分区

```shell
mount /dev/sda3 /mnt
mkdir /mnt/boot
mkdir /mnt/home
mount /dev/sda1 /mnt/boot
mount /dev/sda4 /mnt/home
```

### 设置mirrorlist

> 学校有ipv6的学生可以用清华的源，ipv6直连，美滋滋。

`nano /etc/pacman.d/mirrorlist`

在最前面加上

```
# Tsinghua
Server = http://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```
### 安装系统

```
pacstrap -i /mnt base base-devel
```

将分区结构写入新系统：

```
genfstab -U -p /mnt >> /mnt/etc/fstab
```

可以通过`nano /mnt/etc/fstab`查看是否创建成功

**接下来就可以切换到我们新安装的系统了**

`arch-chroot /mnt`

### 配置系统

#### 设置语言

个人喜欢用英文，因为跟整体linux环境比较统一。

`nano /etc/locale.gen`

然后取消掉`en_US.UTF-8`和`zh_CN.UTF-8`前面的注释。

使其生效：

`locale-gen`

接下来设置语言：

```shell
echo LANG=en_US.UTF-8 > /etc/locale.conf
export LANG=en_US.UTF-8
```

#### 设置时区：

`ln -s /usr/share/zoneinfo/Asia/Shanghai > /etc/localtime`

请自觉使用tab补全以免出错。

设置硬件时钟：

`hwclock --systohc --utc`

#### 设置主机名：

`echo hostname > /etc/hostname`

#### 对`pacman.conf`的细化修改

编辑`pacman.conf`取消multilib前面的注释：

这个是为了在64位机器上运行32位程序

```
[multilib]
Include = /etc/pacman.d/mirrorlist
```

然后强烈推荐添加的yaourt

```
[archlinuxfr]
SigLevel = Never
Server = http://repo.archlinux.fr/$arch
```
一定要注意大小写。

必须添加的archlinuxcn源，里面有很多中国特色软件，比如网易云、有道词典之类的，同样推荐清华源。

```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```
然后安装`archlinuxcn-keyring`包以导入GPG key。

这个时候就可以保存`pacman.conf`文件了。

#### 账户相关

设置root账户的密码：

`passwd`

添加日常用户：

`useradd -m -g users -G wheel,storage,power -s /bin/bash yourusername`

设置密码：

`passwd yourusername`

设置sudoers：

`EDITOR=nano visudo`

然后取消注释：

`%wheel ALL=(ALL) ALL`

设置使用sudo命令的用户必须输入root密码：

`Defaults rootpw`

Done!


安装补全命令：

`pacman -S bash-completion`

### 安装引导

确保EFI变量被挂载

`mount -t efivarfs efivarfs /sys/firmware/efi/efivars`

使用`Gummiboot`作为启动管理，`Gummiboot`已经整合到了`bootctl/system-boot`里，所以安装方式为：

`bootctl install`

下面，把`/root`分区的`PARTUUID`加入到启动设置里：

`blkid -s PARTUUID -o value /dev/sdxY`

`x`代表设备代号，本次为`a`，`Y`是`/root partition`的排号，本次为3.

然后添加`gummiboot manager`配置文件：

~~~ shell
nano /boot/loader/entries/arch.conf
# 下面是内容：
title Arch Linux
linux /vmlinuz-linux
initrd /initramfs-linux.img
options root=PARTUUID=上个命令得到的 rw
~~~

保存并退出

添加intel支持：

`pacman -S intel-ucode`

然后写入到启动管理设置里：

```shell
nano /boot/loader/entries/arch.conf
initrd /intel-ucode.img
initrd /initramfs-linux.img
```

这个时候基本的操作已经完成了，我们可以重启试试了。

```shell
exit
umount -R /mnt
reboot
```
## 安装xfce4桌面环境

```shell
sudo pacman -S mesa
sudo pacman -S xorg-server xorg-server-common xorg-xinit
sudo pacman -S xfce4
sudo pacman -S xfce4-goodies
sudo pacman -S sddm
sudo systemctl enable sddm.service
reboot
```
安装完成，可以使用了。美滋滋。

## 安装Tex Live

~~~ shell
yaourt -S texlive-most
yaourt -S texlive-langchinese
yaourt -S texstudio
~~~
安装完成之后使用`tex --version`测试：

~~~
-<%>- tex --version
TeX 3.14159265 (TeX Live 2016/Arch Linux)
kpathsea version 6.2.2
Copyright 2016 D.E. Knuth.
There is NO warranty.  Redistribution of this software is
covered by the terms of both the TeX copyright and
the Lesser GNU General Public License.
For more information about these matters, see the file
named COPYING and the TeX source.
Primary author of TeX: D.E. Knuth.
~~~

使用texstudio编写测试文件：

新建test.tex,内容如下：

```latex
\documentclass{article}

\usepackage{graphicx}

\begin{document}

\begin{figure}
  \includegraphics[width=\linewidth]{favicon.jpg}
  \caption{A boat.}
  \label{fig:boat1}
\end{figure}

Figure \ref{fig:boat1} shows a boat.

\end{document}
```
Build & View查看运行结果，正常结果如下：

![results](http://oq782gkz3.bkt.clouddn.com/favicon.png)

