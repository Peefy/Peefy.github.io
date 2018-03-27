---
layout: post
title: latex tips
date: 2017-06-26 19:52:00.000000000 +9:00
tag: Latex Tips
---

* Kramdown table of contents
{:toc .toc}
---

### **1.\min的两种表示方法**

```latex
\min\limits_{a}
\min\nolimits{a}
```
对应的显示效果如下：

![\min\limits\_{a}](http://oq782gkz3.bkt.clouddn.com/4.png)
![\min\nolimits\_{a}](http://oq782gkz3.bkt.clouddn.com/5.png)

---

### **2. latex插入python代码**

> 在latex里插入python代码需要使用包`pythonhighlight`,如果你使用tex live 2017的话，这个包已经安装了，可以直接使用；
> 
> 如果你安装的latex版本默认没有这个包，你可以去[这个地址](https://github.com/olivierverdier/python-latex-highlighting)下载pythonhighlight.sty文件，然后放到自己的.tex文件目录下，就可以使用了。

使用过程如下：

先在latex导言区输入：

```latex
\usepackage{graphicx}
\usepackage{pythonhighlight}
```
**插入python代码有两种方式：**

然后在需要插入代码的地方：

```latex
\inputpython{python_filename.py}{begin line number}{end line number}
%或者使用这种方式
\begin{python}
contents
\end{python}
```


