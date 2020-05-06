---
layout: post
title: 
description: 
categories: [Latex]
tags: [Latex]
redirect_from:
  - /2020/5/6/
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

<div align=center>
<h2>磁场中相对论电子OAM量子态电磁波辐射吸收的全量子推导</h1>
</div>
<div align=center>
<p font="Times New Roman">2020年4月12日&ensp;&ensp;&ensp;&ensp; 航电实验室 &ensp;&ensp;&ensp;&ensp;徐鹏飞
</div>

### **1. 研究结论**

&ensp;&ensp;&ensp;&ensp;基于全量子QED方法，推导了磁场中相对论电子辐射OAM电磁波的OAM分布，频谱分布以及电子对OAM光子的吸收和辐射截面。

&ensp;&ensp;&ensp;&ensp;**结论**：
对于磁场中相对论回旋电子，其能够辐射出携带OAM的高次谐波分量，并且谐波数与总角动量数的绝对值保持一致。另外，磁场中相对论回旋电子也能够吸收高维OAM量子并使OAM从光子直接跃迁到电子。

### **2. 研究思路**

&ensp;&ensp;&ensp;&ensp;(1) 写出匀强磁场中相对论电子的波函数以及能级；

&ensp;&ensp;&ensp;&ensp;(2) 写出OAM光子的波函数表达式；

&ensp;&ensp;&ensp;&ensp;(3) 写出电子和光子的相互作用哈密顿量，利用一阶相互作用过程计算OAM光子的辐射方向图以及吸收截面。

### **3. 推导过程**

&ensp;&ensp;&ensp;&ensp;采用闵氏四维时空度规$\left({+,-,-,-} \right)$和相对论自然单位制$\hbar = c = 1$，假设匀强磁场方向沿着$z$轴，其大小为$B$，电子的电荷为$e=-|e|$，电子的静止质量为$m_e$，电子沿着$z$轴的动量为$k_z$，那么电子满足的标准狄拉克方程可以写为：
$$
i {\partial _t}\psi  = \left[ {{\bm{\alpha }} \cdot 
\left( {\hat{\bf{p}} - {e{\bf{A}}}} \right) + {\bm{\beta }}m_e + e\Phi } \right]\psi 
$$
其中，$i$是虚数单位，$\partial _t$是对时间求偏导，$\psi$是四分量波函数，$\hat{\bf{p}}$是动量算符，$\bm {\alpha}$和$\bm {\beta}$是${{4}} \times {{4}}$的狄拉克系数矩阵，$\bf {A}$和$\Phi$分别为矢量势和标量势。根据麦克斯韦方程组，匀强磁场的矢量势和磁场矢量的关系为${\bf {B}} = \nabla \times{\bf {A}}$。并选取库伦规范，在柱坐标系${\bf {r}} = \left({r,\varphi,z} \right)$中，矢量势可以写为${\bf {A}} = 1/2 {\bf {B}} \times {\bf {r}} = 1 / 2Br \vec \varphi$，标量势取$\Phi = 0$。另外，狄拉克系数矩阵的泡利表述为：

$$
{\bm{\beta}} = \left(\begin{array}{cc}   
              \bf{I}  & 0 \\  
              0 &  -\bf{I} \\  
            \end{array}\right),{\bm{\alpha}} = \left(\begin{array}{cc}   
              0  & \sigma_{i} \\  
              \sigma_{i} &  0 \\  
            \end{array}\right) 
$$

&ensp;&ensp;&ensp;&ensp;求解上述狄拉克方程，可以得到电子波函数的具体表达式为：
$$
\begin{aligned}
    {\psi _ \uparrow } & = {e^{i\left( {k_{z}z + \mathcal{E}t + m\varphi } \right)}}{e^{ - {{\bar r}^2} / 2}} \left[ {{\bar r}^m}L_n^m\left( {{{\bar r}^2}} \right)
        \left(\begin{array}{c}   
              {\mathcal{E}}_{+} \\  
              0 \\  
              k_z \\  
              0 \\  
            \end{array}\right) + \sqrt 2 i{e^{i\varphi }}{{\bar r}^{m + 1}}L_n^{m + 1}\left( {{{\bar r}^2}} \right)
            \left(\begin{array}{c}   
              0 \\  
              0 \\  
              0 \\  
              \sqrt{B\left|e\right|} \\  
            \end{array}\right) \right]\\
    {\psi _ \downarrow } & = {e^{i\left( {k_{z}z + \mathcal{E}t + m\varphi } \right)}}{e^{ - \bar r^2 / 2}} \left[ {\bar r^m}L_n^m\left( {\bar r^2} \right)
    \left(\begin{array}{c}   
              0 \\  
              \mathcal{E}_{+} \\  
              0 \\  
              -k_z \\  
            \end{array}\right) - \sqrt 2 \left( {n + m} \right)i{e^{ - i\varphi }}{{\bar r}^{m - 1}}L_n^{m - 1}\left( {\bar r^2} \right)
            \left(\begin{array}{c}   
              0 \\  
              0 \\  
              \sqrt{B\left|e\right|} \\  
              0 \\  
            \end{array}\right) \right]
\end{aligned}
$$
其中，$\psi_\uparrow$表示上旋电子波函数，$\psi_\downarrow$表示下旋电子波函数，$\bar{r} = \mu r$是等效径向矢量，$\mu = \sqrt {\left | eB \right |} / 2$，$\mathcal{E}_{+} = m_e + \mathcal{E}$，$n$是径向量子数，$m$是角量子数，$L ^ {m} _n \left(\cdot \right)$表示广义拉盖尔多项式。并且，电子的相对论能级可以写为：
$$
\mathcal{E} = \sqrt {m_e^2 + k^{2}_{z} + B\left|e\right| \left( {2n + m + \left| m \right| + 1 + 2s} \right)} 
$$
其中，$s = \pm 1/2$表示电子自旋的正负符号，并选择磁场方向使得$m = |m|$，可以从能级表达式看出，电子的相对论能级间隔并不是等距的，并且主要由磁场大小决定了其间隔。

&ensp;&ensp;&ensp;&ensp;假设外部有一个OAM光子与磁场中的相对论电子发生了相互作用，其波矢量位于$yOz$平面，与$z$轴的夹角为$\theta$，极化矢量为$\bm{\epsilon}$，其矢量势表达式在柱坐标系${\bf{r}}'=(r',\varphi',z')$中(当$\theta = 0$时，有${\bf{r}}'={\bf{r}}$)可以写为：
$$
{\bf{A}}'_{\mu} \left( {{\bf{r}}',t} \right) = \epsilon_\mu
{\sqrt {\frac{1 }{{{{4}}{\pi ^2}\omega _0 }}} 
{J_\ell}\left( {{k_ \bot }r'} \right){a}
{e^{i\left( {k_ \parallel z' + \ell\varphi' } \right)}} + {\rm{H}}{\rm{.c}}.} 
$$
其中，${A'_ \mu} = \left(0,-{\bf {A}}' \right)$
表示四维矢量势，$\epsilon_\mu = (0, -\bm{\epsilon})$是OAM光子的极化四矢，$\omega_0$是OAM光子的角频率，$k_\bot$和$k_\parallel$分别是OAM光子的横向动量和沿着$z'$轴的横向动量，$J_\ell\left(\cdot\right)$表示$\ell$阶一型贝塞尔函数，$a \propto e ^ {-i \omega_0t}$和
$a ^ {\dagger} \propto e ^ {i \omega_0t}$分别表示OAM光子的湮灭算符和生成算符，${\rm{H}}{\rm{.c}}.$表示厄米特共轭。

&ensp;&ensp;&ensp;&ensp;光子坐标轴和电子坐标轴的几何关系如下：

$$
\left(                
    \begin{array}{c}   
        x' \\
        y' \\
        z' 
        \end{array}
\right) = \left(                
    \begin{array}{ccc}   
        1 & 0 & 0 \\
        0 & \cos\theta & -\sin\theta \\
        0 & \sin\theta & \cos\theta
        \end{array}
\right)\left(                
    \begin{array}{c}   
        x \\
        y \\
        z 
        \end{array}
\right),
\left(                
    \begin{array}{c}   
        x \\
        y \\
        z 
        \end{array}
\right) = \left(                
    \begin{array}{ccc}   
        1 & 0 & 0 \\
        0 & \cos\theta & \sin\theta \\
        0 & -\sin\theta & \cos\theta
        \end{array}
\right)\left(                
    \begin{array}{c}   
        x' \\
        y' \\
        z' 
        \end{array}
\right)

$$

&ensp;&ensp;&ensp;&ensp;设电子的初态为$\psi_i = |n,m,s,k_z\rangle$，电子的末态为$\psi_f = |n',m',s',k'_z\rangle$。
因此，磁场中相对论电子和OAM光子的相互作用哈密顿密度可写为电子四维电流与光子四维矢量势的乘积：
$$
\mathcal{H}_{\rm{int}} = J^{\mu}A'_{\mu} = e\bar{\psi}\gamma^{\mu}\psi A'_{\mu}
$$
其中，$A_{\mu}$中取湮灭算符表示OAM的光子吸收过程，取生成算符表示光子的辐射过程，$\bar{\psi} = \psi^{*}\gamma^{0}$表示狄拉克共轭，$\gamma^{\mu} = (\gamma^0,\gamma^1,\gamma^2,\gamma^3)$是在直角坐标系中的狄拉克矩阵四矢，取泡利表述，其具体表达式为：
$$
    \begin{aligned}
        & \gamma ^ 0 = \left(                
            \begin{array}{cccc}   
              1 & 0 & 0 & 0\\  
              0 & 1 & 0 & 0 \\  
              0 & 0 & -1 & 0 \\  
              0 & 0 & 0 & -1 \\  
            \end{array}
        \right), \gamma ^ 1 = \left(                
            \begin{array}{cccc}   
              0 & 0 & 0 & -1\\  
              0 & 0 & -1 & 0 \\  
              0 & 1 & 0 & 0 \\  
              1 & 0 & 0 & 0 \\  
            \end{array} 
        \right), \\ 
        & \gamma ^ 2 = \left(                
            \begin{array}{cccc}   
              0 & 0 & 0 & i\\  
              0 & 0 & -i & 0 \\  
              0 & -i & 0 & 0 \\  
              i & 0 & 0 & 0 \\  
            \end{array}
        \right), \gamma ^ {{3}} = \left(                
            \begin{array}{cccc}   
              0 & 0 & -1 & 0\\  
              0 & 0 & 0 & 1 \\  
              1 & 0 & 0 & 0 \\  
              0 & -1 & 0 &0 \\  
            \end{array}
        \right)   
    \end{aligned}      
$$

&ensp;&ensp;&ensp;&ensp;与非相对论情况不需要考虑自旋不同，相对论狄拉克电子需要考虑自旋翻转的情况。跃迁矩阵元素可以分为四种情况，其表达式可以写为如下形式
$$
\begin{aligned}
    & \mathcal{M}_{f i, \uparrow  \uparrow } = \int {\psi _{f, \uparrow }^* {\gamma ^0}{\gamma ^\mu }{\psi _{d, \uparrow }}e{A'_\mu }{{\rm{d}}^{{4}}}x} \\
    & \mathcal{M}_{fi, \downarrow  \downarrow } = \int {\psi _{f, \downarrow }^* {\gamma ^0}{\gamma ^\mu }{\psi _{d, \downarrow }}e{A'_\mu }{{\rm{d}}^{{4}}}x} \\
    & \mathcal{M}_{fi, \uparrow  \downarrow } = \int {\psi _{f, \uparrow }^* {\gamma ^0}{\gamma ^\mu }{\psi _{d, \downarrow }}e{A'_\mu }{{\rm{d}}^{{4}}}x} \\
    & \mathcal{M}_{fi, \downarrow  \uparrow } = \int {\psi _{f, \downarrow }^* {\gamma ^0}{\gamma ^\mu }{\psi _{d, \uparrow }}e{A'_\mu }{{\rm{d}}^{{4}}}x} 
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;首先考虑电子自旋转没有发生翻转的情况并取电子上旋($\psi = \psi_\uparrow$)以及OAM光子的辐射过程。将电子的波函数，狄拉克矩阵和OAM光子矢量势的表达式代入上式中，具体求解过程如下：

&ensp;&ensp;&ensp;&ensp;(1) 首先，由于矩阵乘法满足结合率，所以先写出$\gamma^{0}$和$\gamma^{\mu}$乘积的结果：

$$
\begin{aligned}
    \gamma^0\gamma^0 = \left(                
            \begin{array}{cccc}   
              1 & 0 & 0 & 0 \\  
              0 & 1 & 0 & 0 \\  
              0 & 0 & 1 & 0 \\  
              0 & 0 & 0 & 1 \\  
            \end{array}
        \right),
    \gamma^0\gamma^1 = \left(                
            \begin{array}{cccc}   
              0 & 0 & 0 & -1 \\  
              0 & 0 & -1 & 0 \\  
              0 & -1 & 0 & 0 \\  
              -1 & 0 & 0 & 0 \\  
            \end{array}
        \right)   \\
    \gamma^0\gamma^2 = \left(                
            \begin{array}{cccc}   
              0 & 0 & 0 & i\\  
              0 & 0 & -i & 0 \\  
              0 &  i & 0 & 0 \\  
              -i & 0 & 0 & 0 \\  
            \end{array}
        \right),
    \gamma^0\gamma^3 = \left(                
            \begin{array}{cccc}   
              0 & 0 & -1 & 0\\  
              0 & 0 & 0 & 1 \\  
              -1 & 0 & 0 & 0 \\  
              0 & 1 & 0 &0 \\  
            \end{array}
        \right)   \\
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;(2) 其次，写出爱因斯坦求和各分量的值：

$$
\begin{aligned}
       & {\psi^*_f } = {e^{-i\left( {k'_{z}z - \mathcal{E}'t + m'\varphi } \right)}}{e^{ - {{\bar r}^2} / 2}} \left[ {{\bar r}^{m'}}L_{n'}^{m'}\left( {{{\bar r}^2}} \right)
        \left(\begin{array}{c}   
              {\mathcal{E}'}_{+} \\  
              0 \\  
              k'_z \\  
              0 \\  
            \end{array}\right)^{\rm{T}} - \sqrt 2 i{e^{-i\varphi }}{{\bar r}^{m' + 1}}L_{n'}^{m' + 1}\left( {{{\bar r}^2}} \right)
            \left(\begin{array}{c}   
              0 \\  
              0 \\  
              0 \\  
              \sqrt{B\left|e\right|} \\  
            \end{array}\right)^{\rm{T}}  \right]\\
    & {\psi_i} = {e^{i\left( {k_{z}z - \mathcal{E}t + m\varphi } \right)}}{e^{ - {{\bar r}^2} / 2}} \left[ {{\bar r}^m}L_n^m\left( {{{\bar r}^2}} \right)
        \left(\begin{array}{c}   
              {\mathcal{E}}_{+} \\  
              0 \\  
              k_z \\  
              0 \\  
            \end{array}\right) + \sqrt 2 i{e^{i\varphi }}{{\bar r}^{m + 1}}L_n^{m + 1}\left( {{{\bar r}^2}} \right)
            \left(\begin{array}{c}   
              0 \\  
              0 \\  
              0 \\  
              \sqrt{B\left|e\right|} \\  
            \end{array}\right) \right]\\
    & {\bf{A}}'_{\mu} \left( {{\bf{r}}',t} \right) = \epsilon_\mu
{\sqrt {\frac{1 }{{{{4}}{\pi ^2}\omega _0 }}} 
{J_\ell}\left( {{k_ \bot }r'} \right)
{e^{-i\left( {k_ \parallel z' + \ell\varphi' -\omega_0t } \right)}}} 
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;计算公共系数部分：

$$
\begin{aligned}
    \mathcal{Q}_{fi} & = e \times {\sqrt {\frac{1 }{{{{4}}{\pi ^2}\omega _0 }}} 
{J_\ell}\left( {{k_ \bot }r'} \right)
{e^{i\left( {k_ \parallel z' + \ell\varphi' -\omega_0t } \right)}}} \times {e^{-i\left( {k'_{z}z - \mathcal{E}'t + m'\varphi } \right)}}{e^{ - {{\bar r}^2} / 2}} \times {e^{i\left( {k_{z}z - \mathcal{E}t + m\varphi } \right)}}{e^{ - {{\bar r}^2} / 2}} \\
& = e \sqrt {\frac{1 }{{{{4}}{\pi ^2}\omega _0 }}} {J_\ell}\left( {{k_ \bot }r'} \right) e^{ - {{\bar r}^2}}
 e^{i(k_z z -k'_z z - k_\parallel z')} e^{i( m\varphi - m'\varphi-\ell\varphi' )} e^{-i(\mathcal{E} - \mathcal{E}' - \omega_0)t}
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;然后设

$$
\begin{aligned}
    & \mathcal{A} = {{\bar r}^{m}}L_{n}^{m}\left( {{{\bar r}^2}} \right){\mathcal{E}}_{+} \\
    & \mathcal{A}^* = {{\bar r}^{m'}}L_{n'}^{m'}\left( {{{\bar r}^2}} \right){\mathcal{E}}'_{+} \\
    & \mathcal{C} = {{\bar r}^{m}}L_{n}^{m}\left( {{{\bar r}^2}} \right) k_z \\
    & \mathcal{C}^* = {{\bar r}^{m'}}L_{n'}^{m'}\left( {{{\bar r}^2}} \right) k'_z\\
    & \mathcal{D} = \sqrt 2 i{e^{i\varphi }}{{\bar r}^{m + 1}}L_n^{m + 1}\left( {{{\bar r}^2}} \right) \sqrt{B|e|}\\
    & \mathcal{D}^* = - \sqrt 2 i{e^{-i\varphi }}{{\bar r}^{m' + 1}}L_{n'}^{m' + 1}\left( {{{\bar r}^2}} \right) \sqrt{B|e|}\\
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;那么爱因斯坦求和各分量的值为：

$$
\begin{aligned}
    & e\psi^*_{f}(\gamma^0\gamma^0)\psi_{i}A_0 = 0 \\
    & e\psi^*_{f}(\gamma^1\gamma^1)\psi_{i}A_1 = \mathcal{Q}_{fi} \times (-\mathcal{D}^*\mathcal{A} - \mathbin{A}^*\mathcal{D})\epsilon_1 \\
    & e\psi^*_{f}(\gamma^2\gamma^2)\psi_{i}A_2 = \mathcal{Q}_{fi} \times i(-\mathcal{D}^*\mathcal{A} + \mathbin{A}^*\mathcal{D})\epsilon_2 \\
    & e\psi^*_{f}(\gamma^3\gamma^3)\psi_{i}A_3 = \mathcal{Q}_{fi} \times (-\mathcal{C}^*\mathcal{A} - \mathbin{A}^*\mathcal{C})\epsilon_3 \\
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;(3) 其三，求得爱因斯坦求和的值并计算四维积分的结果，也即单个OAM模态的辐射方向图表达式：

&ensp;&ensp;&ensp;&ensp;设极化矢量在直角坐标系中和三个坐标轴的夹角为$\alpha$，$\beta$和$\zeta$，则极化矢量为：

$$
\epsilon_1 = \cos\alpha\cos\theta\cos\alpha,\epsilon_2 = \cos\beta\cos\theta\sin\alpha,\epsilon_3 = \cos\zeta\sin\theta 
$$

&ensp;&ensp;&ensp;&ensp;忽略电子z轴动量的变化$k_z = k'_z$，以及取OAM光子的偶极近似有$e^{k_\parallel z'}=1$，以及积分完时间项的结果为：

$$
\begin{aligned}
       \mathcal{M}_{f i, \uparrow  \uparrow } & = e \sqrt {\frac{1 }{{{{4}}{\pi ^2}\omega _0 }}}
    \delta\left(\mathcal{E} - \mathcal{E}' - \omega_0 \right)
    \int_0^{R} r{\rm{d}}r \int_0^{2\pi} {\rm{d}}\varphi \\
    & \times \left[\left( -\epsilon_1 - i\epsilon_2 \right) \mathcal{D}^*\mathcal{A} + (i\epsilon_2 - \epsilon_1)\mathcal{A}^*\mathcal{D} - \epsilon_3 \mathcal{C}^*\mathcal{A} - \epsilon_3 \mathcal{A}^*\mathcal{C} \right] J_\ell(k_\bot r')e^{-\bar{r}^2} e^{i(m\varphi - m'\varphi - \ell\varphi')} \\
    & = e \sqrt {\frac{1 }{{{{4}}{\pi ^2}\omega _0 }}}
    \delta\left(\mathcal{E} - \mathcal{E}' - \omega_0 \right) \left(\mathcal{M}_1 + \mathcal{M}_2 + \mathcal{M}_3 + \mathcal{M}_4  \right)
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;并利用如下代换关系(假设同步辐射过程$\theta$是小量)：

$$
\begin{aligned}
& r' = \sqrt{x^2 + (y\cos\theta - z\sin\theta)^2} \approx r/\cos\theta\\
& \varphi'= \arctan\frac{y\cos\theta - z\sin\theta}{x} \approx \varphi 
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;因此将积分的结果分为4项计算：

$$
\begin{aligned}
\mathcal{M}_1 & = (i\epsilon_1 - \epsilon_2)\frac{\sqrt{2B|e|}}{\mu^2}\mathcal{E}_{+}\cos^2\theta \int {\rm{d}}r\int {\rm{d}}\varphi J_\ell(k_\bot r') L_n^m(r^2) L_{n'}^{m'+1}(r^2) r^{m+m'+2}e^{-r^2} e^{i(m\varphi - m'\varphi - \varphi - \ell \varphi')} \\
& = (i\cos\alpha - \cos\beta)\frac{ \sqrt{2B|e|}}{{{k_ \bot \mu}}} \mathcal{E}_{+}\cos^2\theta \exp \left( { - \frac{{k_ \bot ^2}}{{{{8}}{\mu ^2}\cos\theta}}} \right) \Gamma \left( {\frac{{m + m' + 3 + 2\Delta m - 2}}{{{4}}}} \right){W}\left( {m' + 1,m} \right) \delta_{m - m', \ell + 1}
\end{aligned} 
$$

$$
\begin{aligned}
\mathcal{M}_2 & = (-i\epsilon_1 + \epsilon_2)\frac{\sqrt{2B|e|}}{\mu^2}\mathcal{E}'_{+}\cos^2\theta \int {\rm{d}}r\int{\rm{d}}\varphi J_\ell(k_\bot r') L_{n'}^{m'}(r^2) L_{n}^{m+1}(r^2) r^{m+m'+2}e^{-r^2} e^{i(m\varphi - m'\varphi + \varphi - \ell \varphi')} \\
& = (-i\cos\alpha + \cos\beta)\frac{ \sqrt{2B|e|}}{{{k_ \bot \mu}}}\mathcal{E}'_{+}\cos^2\theta \exp \left( { - \frac{{k_ \bot ^2}}{{{{8}}{\mu ^2}\cos\theta}}} \right) \Gamma \left( {\frac{{m + m' + 3 + 2\Delta m - 2}}{{{4}}}} \right){W}\left( {m + 1,m'} \right) \delta_{m - m', \ell + 1}
\end{aligned}
$$

$$
\begin{aligned}
\mathcal{M}_3 = \mathcal{M}_4 & = -\epsilon_3\frac{k_z}{\mu^2} \sin\theta\cos\theta \int {\rm{d}}r\int{\rm{d}}\varphi 
J_\ell(k_\bot r') L_{n'}^{m'}(r^2) L_{n}^{m}(r^2) r^{m+m'+1}e^{-r^2} e^{i(m\varphi - m'\varphi + \ell \varphi')} \\
& = -\frac{\cos\zeta k_z}{{{k_ \bot \mu}}} \sin\theta\cos\theta\exp \left( { - \frac{{k_ \bot ^2}}{{{{8}}{\mu ^2}}\cos\theta}} \right) \Gamma \left( {\frac{{m + m' + 2 + 2\Delta m - 2}}{{{4}}}} \right){W}\left( {m,m'} \right)
\delta_{m - m', \ell + 1}
\end{aligned}
$$
其中，$\Gamma\left(\cdot\right)$是伽马函数，并且
$$
    \begin{aligned}
         {W}\left( {m,m'} \right) &= \left( {m + m' - {{7}} - 2\Delta m + 2} \right)\bar W\left( {m,m', - 2} \right) \\
        & - \left( {m + m' - 2 - 2\Delta m + 2} \right)\bar W\left( {m,m', - {{6}}} \right) + {{4}}\bar W\left( {m,m',2} \right) \\
        \bar W\left( {m,m',j} \right) & = \frac{{W_{\rm{M}}}\left( {\frac{{m + m' + j}}{{{4}}},\min\left( {\frac{{\Delta m - 1 - 1}}{2},0} \right), - \frac{{k_ \bot ^2}}{{{{4}}{\mu ^2}}}} \right)}{{\Delta m\left( {m + m' + 2\Delta m + {{4}}} \right)}} 
    \end{aligned}
$$
其中，$\Delta m = m - m'$，${W _ {\rm {M}}}$表示Whittaker M函数。并且所有量子态的跃迁概率都不为零($m$是常数，$\Delta m > 0$且可以取任意值)，当$n = n'$时，跃迁概率随着$\Delta m$的增加而减少。因为对于任何$m$和$\ell$，跃迁矩阵元素都不为零，所以相对论回旋电子可以同时发射各种频率的OAM微波光子。当电子从态$\psi _ {d,\uparrow}$跃迁到态$\psi _ {f,\uparrow}$时，减少的能量对应$\Delta m \hbar \omega$。因此总AM必须有$\Delta m \hbar$从电子跃迁到辐射光子，此时光子携带$\pm \hbar$SAM和$(\Delta m - 1)\hbar = \ell \hbar$ OAM。涡旋光子的矢量势${A}'_{\mu}$在式中使用生成和湮灭算符分别表示光子的辐射过程和吸收过程。尽管计算结果相似，但是这两个过程的解释略有不同，因为相对论电子的自发发射过程通常伴随着不同的谐波分量，但是吸收过程通常是针对单个频率的光子。

&ensp;&ensp;&ensp;&ensp;计算最终辐射/吸收截面

$$
\begin{aligned}
\frac{{\rm{d}}P}{{\rm{d}}\varOmega} & = \left| \mathcal{M}^{*}_{fi} \mathcal{M}_{fi} \right| \propto \mathcal{F}\left(\theta\right)
\end{aligned}
$$

<div align=center>
<img src="../figures/powerwithsingle.jpg" width="60%">
</div>

&ensp;&ensp;&ensp;&ensp;同理可得，其他情况的跃迁矩阵元素可以计算为
$$
\begin{aligned}
    & \mathcal{M}_{fi, \downarrow  \downarrow } \propto  \delta\left(\mathcal{E} - \mathcal{E}' - \omega_0 \right){\delta _{m - m',\ell + 1}} \\
    & \mathcal{M}_{fi, \uparrow  \downarrow } \propto  \delta\left(\mathcal{E} - \mathcal{E}' - \omega_0 \right) {\delta _{m - m',\ell + 1 - 1}} \\
    & \mathcal{M}_{fi, \downarrow  \uparrow } \propto  \delta\left(\mathcal{E} - \mathcal{E}' - \omega_0 \right) {\delta _{m - m',\ell + 1 + 1}} 
\end{aligned}
$$

&ensp;&ensp;&ensp;&ensp;综上所述，在相对论的情况下，磁场中的相对论回旋电子可以辐射和吸收OAM微波光子。辐射情况下，辐射波的$N$次谐波携带$N$倍的总AM。吸收情况下，可以使用不同频率和OAM的微波光子来产生具有不同朗道能级量子数的涡旋电子。

待解决的问题

## 1. 和经典的区别和优势

区别：

(1) 量子比经典的推导多了概率的概念，并且把辐射吸收过程中电子所有的量子态列写出来，分析电子处于每个态的概率，最终求解出所有状态转移的概率幅，因此适应任意极端情况的分析。

优势：

(1) 接收端能够解释电子吸收光子OAM变为涡旋光子；
(2) 发射端能够获得携带量子反冲的精确表达式，以及在极端相对论情况下和强磁场情况下的解答，几乎适合全电磁波频段(微波-紫外线波段)；

## 2. 四维电子波函数的物理意义

上下自旋和正负能量的自由度。四维旋量是洛伦兹群不可约表示的实现，因此$\gamma^{\mu}$中的量全是泡利算符。非相对论情况中用二维旋量表示，相对论情况用双旋量即四个独立分量表示。四维旋量与四维矢量的关系：都是正洛伦兹群同一不可约表示的实现。

**泡利矩阵->伽马矩阵->方程推导->四维物理意义**

非相对论自旋算符的推导：

首先根据斯特恩-盖拉赫实验证明，电子的自旋不同于经典物体的自旋：沿着任何方向的投影只能取离散的值（$\pm\hbar/2$分别表示上旋和下旋），并且自旋角动量是矢量，所以电子在三维空间中自旋矢量也可以取$x$,$y$和$z$轴三个分量，根据之前在群论当中学习的对称性可知，三个轴角动量分量具有以下性质：

$$
[J_i,J_k] = i\varepsilon_{ijk}J_k
$$

其中，$J$可以代表自旋角动量$S$，也可以代表轨道角动量$L$，$\varepsilon_{ijk}$是里奇张量。接着定义自旋算符：

$$
{\bm{s}} = \frac{\hbar}{2} {\bm{\sigma}}
$$

再根据角动量的对称性，可以得到自旋算符的对称性：

$$
[\sigma_i,\sigma_k] = 2i\varepsilon_{ijk}\sigma_k
$$

或者

$$
{\bm{\sigma}} \times {\bm{\sigma}} = 2i{\bm{\sigma}}
$$

因此${\bm{\sigma}}$只能取$\pm 1$，因此满足

$$
{\sigma}^{2}_{x} = {\sigma}^{2}_{y} = {\sigma}^{2}_{z} = 1
$$

如果用$\sigma_{y}$左乘$\sigma_{y}\sigma_{z} - \sigma_{z}\sigma_{y} = 2i\sigma_{x}$，可以得到:

$$
\sigma_{z} - \sigma_{y}\sigma_{z}\sigma_{y} = 2i\sigma_{y}\sigma_{x}
$$

用$\sigma_{y}$右乘$\sigma_{y}\sigma_{z} - \sigma_{z}\sigma_{y} = 2i\sigma_{x}$，则得:

$$
\sigma_{y}\sigma_{z}\sigma_{y} - \sigma_{z} = 2i\sigma_{x}\sigma_{y}
$$

将上述两个式子相加得到**反对易关系**：

$$
\sigma_{x}\sigma_{y} + \sigma_{y}\sigma_{x} = 0
$$

同理可得$\sigma_{y}\sigma_{z} + \sigma_{z}\sigma_{y} = 0$,$\sigma_{z}\sigma_{x} + \sigma_{x}\sigma_{z} = 0$

以上是泡利算符的抽象代数式，现在选一个具体表象把它表示成矩阵形式，习惯选择$\sigma_{z}$表象（该表象下$\sigma_{z}$只取$\pm 1$），因此$\sigma_{z}$的具体形式为：

$$
\sigma_z = 
    \left(\begin{array}{cc}
     1 & 0 \\ 
     0 & -1
\end{array}      \right)
$$

然后，根据待定系数法和反对易关系可以求得其他两个泡利矩阵的形式：

$$
\sigma_z = 
    \left(\begin{array}{cc}
     0 & 1 \\ 
     1 & 0
\end{array}      \right),  \sigma_y = 
    \left(\begin{array}{cc}
     0 & -i \\ 
     i & 0
\end{array}      \right)
$$

**但是相对论情况的自旋则不同，相对论理论会从理论上自动地考虑电子自旋，不需要根据实验基础**

通过引入狭义相对论，狄拉克创新性地把薛定谔方程的二次形式改写为一次形式的微分形式：

$$
i\partial_t\psi = \left( -i{\alpha} \cdot \nabla + \beta m \right)
$$

为了得到$\alpha$和$\beta$应该满足的条件，在方程两边再同时乘以$E$，得到：

$$
\begin{aligned}
  E^2\psi &= -\partial^{2}_{t} \psi = i\partial_t (-i\alpha \cdot \nabla + \beta m) \psi \\
  & = (-i\alpha \cdot \nabla + \beta m)(-i\alpha \cdot \nabla + \beta m) \psi \\
  & = [-\alpha_a\alpha_b\partial_a\partial_b - im(\alpha_a\beta + \beta\alpha_a) + \beta^2m^2]\psi \\
\end{aligned}
$$

由于$\alpha_i$与$\beta$并不一定对易，因此不能随意调换顺序。但是不妨对第一项做这样的改变：

$$
\alpha_a\alpha_b\partial_a\partial_b = \frac{1}{2} (\alpha_a \alpha_b + \alpha_a\alpha_b)\partial_a\partial_b
$$

得到：

$$
E^2\psi = [ \frac{1}{2} (\alpha_a \alpha_b + \alpha_a\alpha_b)\partial_a\partial_b -im(\alpha_a\beta + \beta\alpha_a) + \beta^2 m^2 ]\psi
$$

同时期望这个式子能够满足质能关系(质壳条件)：

$$
E^2 = (m^2 + {\bf{p}}^2 ) \psi = (m^2 - \nabla^2)\psi = (m^2 - \partial_a^2)\psi
$$

对比二者的形式：

$$
\begin{aligned}
  & \beta^2 = 1 \\
  & \alpha_a\beta + \beta\alpha_a = 0 \\
  & \alpha_a\alpha_b + \alpha_b\alpha_a = \delta_{\alpha\beta}
\end{aligned}
$$

也即:

* $\alpha_i$与$\beta$都是矩阵，否则关系式无法成立
* $\alpha_i$与$\beta$两两反对易。
* $\alpha_i$与$\beta$的平方都为单位阵，除此之外$\alpha_i$与$\beta$还需要满足下面的性质：
* ${\rm{tr}}(\alpha_i) = {\rm{tr}}(\beta) = 0$
* 矩阵的本征值为$\pm 1$
* $\alpha_i$与$\beta$都具有偶数维度，因为迹为0，因此+1和-1的本征值一样多。
* $\alpha_i$与$\beta$都是厄米的

理论上满足以上条件的的矩阵的最小维度为4并且四个四维矩阵理论上可以随便取，但是考虑到这些性质与泡利矩阵的性质十分类似，因此$\alpha_i$与$\beta$可取泡利表述：

$$
\alpha_i = \left(
  \begin{array}{cc}
    0 & \sigma_i \\
    \sigma_i & 0
  \end{array}
\right), \beta = \left(
  \begin{array}{cc}
    {\bf{I}}_2 & 0 \\
    0 & {\bf{I}}_2
  \end{array}
\right)
$$

这样的选取规则导致了波函数也是四维的，并且由狄拉克方程和其共轭方程可以直接得到流守恒方程，因此有：

$$
\begin{aligned}
  & \rho = \psi^{\dagger}\psi \\
  & j_a = \psi^{\dagger}\alpha_a\psi
\end{aligned}
$$

因此，狄拉克电子的自旋角动量为:

$$
{\bf{S}} = \frac{1}{2}\Sigma =  \frac{1}{2} \left(
  \begin{array}{cc}
    {\bm{\sigma}} & 0 \\
    0 & {\bm{\sigma}}
  \end{array}
\right)
$$

并且其和哈密顿量的对易关系为：

$$
[H, {\bf{S}}] = [\alpha_a p_a + \beta m, \frac{1}{2} \Sigma ] = \frac{1}{2} p_a {\bf{e}}_b [\alpha_a, \Sigma_b] + \frac{m}{2} {\bf{e}}_b [\beta, \Sigma_b] = i {\bm{\sigma}} \times {\bf{p}}
$$

此外有

$$
S^2 = \frac{1}{4}\Sigma^2 = \frac{3}{4} {\bf{I}} 
$$
$$
S^2|\psi\rangle = s(s + 1) |\psi\rangle
$$

因此

$$
s(s + 1) = \frac{3}{4}, s = \frac{1}{2}
$$

因此，狄拉克方程本质上是对于自旋二分之一系统的。

**四维波函数的物理意义**：波函数的概率幅解释在相对论背景下会失效，因为粒子的质量会发生变化，导致粒子数不再守恒，狄拉克波函数其实不是量子力学意义上的波函数，看作量子力学和量子场论之间的一种过渡，四维旋量场的场方程表示，表示4个内部自由度，是1/2自旋经典粒子的两倍，狄拉克方程可以写成狄拉克旋量的上下两个分量的两个方程的耦合系统。在非相对论极限中，对于两个分量自旋波函数，Dirac方程简化为熟悉的薛定谔方程。

$$
\psi = \left(
  \begin{array}{c}
    \phi \\
    \chi 
  \end{array}
\right)
$$
$$
\chi = \frac{1}{2mc} {\bm{\sigma}} \cdot {\bf{p}} \phi
$$
$$
i\partial_t \phi = -i {\bm{\sigma}} \cdot \nabla \chi + m \phi
$$
$$
i\partial_t \chi = -i {\bm{\sigma}} \cdot \nabla \phi - m \chi
$$

## 3. 生成湮灭算符的系数大小，含时和非含时的区别。

参考了《从狭义相对论到费曼图》，朗道《量子电动力学》，《量子光学》。

$$
2\omega\sqrt{\frac{V}{c}} \frac{1}{\sqrt{2\hbar\omega}} A = a
$$

$$
A = \bm{\epsilon} e^{-i\omega t}
$$

$$
\begin{aligned}
  & a = \sqrt{\frac{2\omega V}{\hbar c}} A = \sqrt{\frac{2\omega V}{\hbar c}} e^{-i\omega t} \\
  & a^{\dagger} = \sqrt{\frac{2\omega V}{\hbar c}} A^{\dagger} = \sqrt{\frac{2\omega V}{\hbar c}} e^{i\omega t}
\end{aligned}
$$

$e^{i\omega t}$在生成算符当中，表示产生光子(辐射)；$e^{-i\omega t}$在湮灭算符当中，表示湮灭光子(吸收)。是否含时利用$A$的时间项来区分。同理，电子的生成算符对应正的动量，湮灭算符对应负的动量。

## 4. 海森堡绘景算符是否含时的区别

绘景描述了系统随时间变化时，算符和态矢随时间的变化情况。在不同绘景中，作用量测量不变（作用量在态上的均值和在本征态上出现概率不变）。

薛定谔绘景：算符随时间保持不变，而态矢随时间变化；
海森堡绘景：作用量算符随时间变化，态矢不随时间改变。

将薛定谔绘景作用于时间演化算符后就得到海森堡绘景，态矢左乘时间演化算符得到含时态矢，算符左右各乘时间演化算符和时间演化算符共轭得到含时算符。

对于电磁场的非含时矢量势${\bf{A}}$，其在海森堡绘景下的表示就为${\bf{A}}e^{-i\omega t}$

## 5. 散射振幅公式推导

<div align=center>
<img src="../figures/scatter.png" width="100%">
</div>

在散射的量子理论中，设想有一系列平面波，$\psi(z) = Ae^{ikz}$，在$z$方向上传播，它与一散射势相遇，产生一系列出射球面波，也就是说，要寻找具有一下通式的薛定李普曼-薛定谔方程的解：

$$
\psi \left(r, \theta\right) = A \left[e^{ikz} + f(\theta)\frac{e^{ikr}}{r}\right]
$$

具体推导方法见：格里菲斯《量子力学》p304-p309 (渐进波函数公式的推导) 和 p316-318(求散射振幅的一阶波恩近似公式)

## 6. 狄拉克方程能否推出光子的波函数和麦克斯韦方程组

狄拉克方程是自旋1/2费米子的旋量场方程，麦克斯韦方程组是自旋1玻色子的矢量场方程。克莱因-高登场是自旋为1玻色子的标量场方程。

从狄拉克方程可以导出克莱因-高登场方程（从狭义相对论到费曼图p347-p348，狄拉克方程左右两边各乘以E算符），把克莱因高登场中的质量等于0就得到了麦克斯韦方程组的达朗贝尔方程形式(https://www.zhihu.com/question/36695708/answer/68639535)。但是对于一种特殊的电磁介质，也就是超导体，电磁波的运动方程中会出现质量项，比如超导电动力学理论中，伦敦第二方程就蕴含着光子在介质中可以有质量。
