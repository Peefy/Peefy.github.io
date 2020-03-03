---
layout: post
title: Github Pages Markdowm Latex
description: 在浏览器中显示md文件latex公式
categories: [Latex]
tags: [Latex]
redirect_from:
  - /2020/3/3/
---

<head>
    <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [['$','$']]
            }
        });
    </script>
</head>

行间公式

$$ x=\frac{-b\pm\sqrt{b^2-4ac}}{2a} $$

行内公式

\\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\\)

<img src="http://latex.codecogs.com/gif.latex?x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" title="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />

