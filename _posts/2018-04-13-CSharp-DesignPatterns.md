---
layout: post
title: "用C#实现设计模式"
description: "用C# 和 .NET CORE 框架实现设计模式"
categories: [C#]
tags: [C#]
redirect_from:
  - /2018/04/11/
---

## 用C# 和 .NET CORE 框架实现设计模式

>以下是使用*C# dotnet core*编写的设计模式

## Requirement

*确保已经安装了netcore sdk*  [.NET Core](https://dotnet.github.io/)

>git clone https://github.com/Peefy/DotNetCore.DesignPatternByCSharp

>cd DotNetCore.DesignPatternByCSharp

>dotnet run

## 分类

### *创建者模式*

* *工厂模式*

```C#

    public interface IShape
    {
        void Draw();
    }

    public class Circle : IShape
    {
        public Circle()
        {
            Console.WriteLine($"{nameof(Circle) } construtor");
        }

        public virtual void Draw()
        {
            Console.WriteLine($"{nameof(Circle) } call draw");
        }
    } 

    public class Rectangle : IShape
    {
        public Rectangle()
        {
            Console.WriteLine($"{nameof(Rectangle) } construtor");
        }

        public virtual void Draw()
        {
            Console.WriteLine($"{nameof(Rectangle) } call draw");
        }
    }

    public class Square : IShape
    {
        public Square()
        {
            Console.WriteLine($"{nameof(Square) } construtor");
        }

        public virtual void Draw()
        {
            Console.WriteLine($"{nameof(Square) } call draw");
        }
    }

    public class ShapeFactory
    {
        public ShapeFactory()
        {
        }

        public IShape GetShape(string shapeName)
        {
            if(string.IsNullOrEmpty(shapeName) == true)
                throw new NullReferenceException(nameof(shapeName));
            switch(shapeName)
            {
                case nameof(Square) : 
                    return new Square();
                case nameof(Rectangle): 
                    return new Rectangle();
                case nameof(Circle): 
                    return new Circle();
                default: return null;
            }
        }

        public static void Test()
        {
            var factory = new ShapeFactory();
            var circle = factory.GetShape(nameof(Circle));
            circle.Draw();
            var rec = factory.GetShape(nameof(Rectangle));
            rec.Draw();
            var square = factory.GetShape(nameof(Square));
            square.Draw();
        }

    }

```

* *抽象工厂模式*

```C#
```

* *单例模式*

```C#
```

* *建造者模式*

```C#
```

* *原型模式*

```C#
```

### *结构型模式*

* *适配器模式*

```C#
```

* *桥接模式*

```C#
```

* *过滤器模式*

```C#
```

* *组合模式*

```C#
```

* *装饰器模式*

```C#
```

* *外观模式*

```C#
```

* *享元模式*

```C#
```

* *代理模式*

```C#
```


### *行为型模式*

* *责任链模式*

```C#
```

* *命令模式*

```C#
```

* *解释器模式*

```C#
```

* *迭代器模式*

```C#
```

* *中介者模式*

```C#
```

* *备忘录模式*

```C#
```

* *观察者模式*

```C#
```

* *状态模式*

```C#
```

* *空对象模式*

```C#
```

* *策略模式*

```C#
```

* *模板模式*

```C#
```

* *访问者模式*

```C#
```

### *J2EE模式*

* *MVC模式*

```C#
```

* *业务代表模式*

```C#
```

* *组合实体模式*

```C#
```

* *数据访问对象模式*

```C#
```

* *前端控制器模式*

```C#
```

* *拦截过滤器模式*

```C#
```

* *服务定位器模式*

```C#
```

* *传输对象模式*

```C#
```

[Github Code](https://github.com/Peefy/DotNetCore.DesignPatternByCSharp)

