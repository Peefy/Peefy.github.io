---
layout: post
title: "使用vim编写fortran代码的一些相关设置"
categories: [tips]
tags: [tips]
redirect_from:
  - /2017/07/01/

---

> 最近开始干活了，实验室主流语言是fortran，一种很褒贬不一的语言。由于是Arch linux用户，所以需要对linux编写编译fortran代码做一些准备工作。

1.首先，在linux下fortran编译器还是很多的，有很方便就能安装的gfortran，还有诸如intel或者PGI这些公司提供的编译器。intel家的编译器对学生免费，所以自然就成了首选。详情请去[这个链接](https://software.intel.com/en-us/intel-parallel-studio-xe)查看。

2.安装intel parallel studio的过程是图形化的，一般不会出现什么问题。安装之后设置一下路径就能使用ifort命令编译fortran文件了。

3.在linux编写fortran代码我还是按照习惯选择了vim，然后我们需要在`.vimrc`中加入如下设置项：

```shell
"语法高亮
syntax enable
syntax on
"fortran语言制表符设置
let fortran_have_tabs=1
"设置制表符宽度
set tabstop=4
"解决中文注释乱码
set fileencodings=urf-8,gb18030,utf-16,big5
"设置代码折叠
let fortran_fold=1
set foldmethod=syntax
"设置默认文件打开后所有折叠自动展开
set foldlevelstart=99
```
vim有关代码折叠的命令如下：

```shell
zc：折叠代码
zo：展开代码
zC：折叠所有代码
zO：展开所有代码
```

最后效果图：

![效果图](http://oq782gkz3.bkt.clouddn.com/vim_fortran.png)

这里vim的配色主题为molokai。
