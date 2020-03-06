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

在markdown文件中添加mathjax.js即可

```html
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
```

公式示例：一元二次方程根公式

$$ x=\frac{-b\pm\sqrt{b^2-4ac}}{2a} $$

公式示例：花体字母和希腊字母公式

$$ {L}  = 1/4F^{\mu\nu}F_{\mu\nu} + {\psi} \left(i{{D}} - m_{e} \right) \psi = 1/4F^{\mu\nu}F_{\mu\nu} + {\psi} \left(i{\partial} - m_{e} \right) \psi  + J^{\mu}A_{\mu} $$


