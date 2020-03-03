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


