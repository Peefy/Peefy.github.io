---
layout: post
title: "C++问答题"
description: "C++问答题"
categories: [C++]
tags: [C++]
redirect_from:
  - /2019/05/12/
---


# C++题目汇总

**1. C++和C的区别**

C语言是面向过程的编程，它最重要的特点是函数，通过main函数来调用各个子函数。程序运行的顺序都是程序员事先决定好的。C++是面向对象的编程，类是它的主要特点，在程序执行过程中，先由主main函数进入，定义一些类，根据需要执行类的成员函数，过程的概念被淡化了（实际上过程还是有的，就是主函数的哪些语句），以类驱动程序运行，类就是对象，所以我们称之为面向对象程序设计。面向对象在分析和解决问题的时候，将涉及到的数据和数据的操作封装在类中，通过类可以创建对象，以事件或消息来驱动对象执行处理。

C语言和C++的最大区别在于它们解决问题的思想方法不一样。C语言主要用于嵌入式领域，驱动开发等与硬件直接打交道的领域， C++可以用于应用层开发，用户界面开发等于操作系统打交道的领域。

C++比C类型检查更为严格。增加了面向对象的机制。增加了泛型编程的机制（Template）。增加了异常处理。增加了运算符重载。增加了标准模板库（STL）。增加了命名空间，避免全局命名冲突。

**C++与C不兼容的地方**

* **变量声明的位置**:C中变量声明和代码是分开的，必须在函数开始处声明；C++中，变量可以在任意处声明，只要保证先声名后使用的原则就可以。
* **struct结构体方面**：用struct定义变量。struct mystruct{ int i;float x;在c中声明struct变量要这么写：struct mystruct a;在C++中前面不用加struct：mystruct a;一种兼容的用法是：typedef struct _mystructint i;float x;} mystruct;然后用mystruct 定义变量。枚举型(enum),联合体类型(union)也是同样。
在C++中，struct结构体支持成员函数的定义，C中不行。另外要注意的是，C++中成员函数的默认访问说明符为public,这一点和类不同，类的默认访问说明符为private.
* **bool类型值**：C++中有bool(或boolean类型);C中可没有这样的bool类型，均为数值类型！需要注意的是真为非零(如：1,5.2,-5,-2等)，假的数值为0。
* **注释的不同**：C中的注释至有一种 /\*......\*/;C++中的注释包含两种/\*......\*/和//。
* **强制数据类型装换**：Ｃ中的强制转化形式为：(类型)变量；
C++中还可以使用:类型(变量)的形式。
* **赋值**：C语言中的赋值只有一中即：=;C++中除了使用=外，还可以使用()。例如：int x(5)；就等于: int x=5;我想这种写法是给C++中对象初始化时初始化属性是对象时使用的，那么对于基本类型也可以使用了。
* **函数**：Ｃ语言中函数没有参数默认值，在C++中函数有参数默认值的概念，注意参数默认值与函数重载的区别。C语言中函数的定义又两种形式，经典形式和标准形式，C++中只支持标准形式。标准形式：int string(int x,float y){......}
经典形式: int string(x,y)int x;float y;{......}
C++的函数必须先声名原型或定义才能使用,因为C++是强数据类型语言,在C语言中,未声名和定义函数之前调用函数是允许的.
* **运算符&和关键字const**：&运算符最基本的含义是取地址，C和Ｃ++中都支持这一语法。但在C++中&还可以表示引用。有了引用的概念后函数调用可以作为左值。例如：int &rtux()......rtux()=5;以上表达式在C++中完全正确，但在C语言中是非法的。const关键字要注意一点不同的就是在C++的类函数中，函数可以声名是可以用const，表示这个函数没有改变类中的任何属性。如：void unchange()const;C不能有这样的生明。
* **extern说明符**：在C语言的某些版本中，可以在程序中多次使用一个全局变量而无需使用extern说明符。但在C++中除定义全局变量外，在其他模块使用应先用extern生明。
* **void指针**：在C语言中void指针可以赋给任何类型的指针，但在C++中，却不行，但可以先进行强制数据类型转换，在赋值。

**2. C++ explicit和implicit关键字的作用**

*单参数的构造函数尽量声明为explicit，声明必须为显示转换*

C++中的explicit关键字只能用于修饰只有一个参数的类构造函数, 它的作用是表明该构造函数是显示的, 而非隐式的, 跟它相对应的另一个关键字是implicit, 意思是隐藏的,类构造函数默认情况下即声明为implicit(隐式).

**3. static关键字的作用**

1.static可以用来隐藏函数和变量:当同时编译多个文件时，所有未加static前缀的全局变量和函数都具有全局可见性(使用extern就可以)，利用这一特性可以在不同的文件中定义同名函数和同名变量，而不必担心命名冲突。static可以用作函数和变量的前缀，对于子函数来讲，static的作用仅限于隐藏

2.保持变量内容的持久(static变量的记忆功能和全局生存期)：存储在静态数据的变量会在程序刚开始运行时就完成初始化，也是唯一的一次初始化。共有两种变量存储在静态存储区：全局变量和static变量，只不过和全局变量比起来，static可以控制变量的可见范围。PS:如果作为static局部变量在函数内定义，它的生存期为整个源程序，但是其作用域仍与自动变量相同，智能在定义该变量的函数内使用该变量。退出该函数后，尽管该变量还继续存在，但不能使用它

3.默认初始化为0(static变量):全局变量也具备这一属性，因为全局变量也存储在静态数据区，内存中所有的字节默认值都是0x00,某些时候这一特点可以减少程序员的工作量。再比如要把一个字符数组当字符串来用,但又觉得每次在字符数组末尾加'\0'太麻烦.如果把字符串定义成静态的，就省去了这个麻烦。

4.static的第四个作用：C++中的类成员声明static：在类中声明static变量或者函数时，初始化时使用作用域运算符来标明它所属类。因此，静态数据成员是类的成员，而不是对象的成员。(1)类的静态成员函数是属于整个类而非类的对象，所以没有this指针，导致仅能访问类的静态数据和静态成员函数;(2)不能将静态成员函数定义为虚函数;(3)由于静态成员声明于类，操作于其外，所以对其取地址操作，就多少有些特殊，变量地址是指向其数据类型的指针，函数地址类型是一个"nonmember函数指针"；(4)由于静态成员函数没有this指针，所以就差不多等同于nonmember函数,就产生一个意想不到的好处：成为一个callback函数,(5)static并没有增加程序的时空开销，相反还缩短了子类对父类静态成员的访问时间，节省了子类的内存空间;(6)静态数据成员在<定义或说明>时前面加关键字static;(7)静态数据成员是静态存储的，所以必须对它进行*初始化*;(8)静态成员初始化与一般数据化不同,初始化在类体外进行:**\<数据类型\>\<类名\>::\<静态数据成员名\>=\<值\>**;(9)为了防止父类的影响，可以在子类定义一个与父类相同的静态变量，以屏蔽父类的影响.

**4. 数组和指针的区别**

通常情况下，C++中指针和数组是可以混用的，但是，在编写字符数组的时候，可能会出现一定问题

* 数组一旦声明，我们就不能再给它赋值，但是我们可以给指针赋值

* 用指针定义字符串时，指针所指的字符串会被理解为常量字符串，不能修改。数组定义的字符串则可以修改。

* 用sizeof运算符可以计算数组变量的数组大小，但指针指向数组时，只能计算出指针本身大小（单位：字节）

* 字符串的结束符'\0'也被sizeof计算在内，因此字符串类型比内容长1


```c++
class CxString  // 使用关键字explicit的类声明, 显示转换  
{  
public:  
    char *_pstr;  
    int _size;  
    explicit CxString(int size)  
    {  
        _size = size;  
        // 代码同上, 省略...  
    }  
    CxString(const char *p)  
    {  
        // 代码同上, 省略...  
    }  
};  
  
    // 下面是调用:  
  
    CxString string1(24);     // 这样是OK的  
    CxString string2 = 10;    // 这样是不行的, 因为explicit关键字取消了隐式转换  
    CxString string3;         // 这样是不行的, 因为没有默认构造函数  
    CxString string4("aaaa"); // 这样是OK的  
    CxString string5 = "bbb"; // 这样也是OK的, 调用的是CxString(const char *p)  
    CxString string6 = 'c';   // 这样是不行的, 其实调用的是CxString(int size), 且size等于'c'的ascii码, 但explicit关键字取消了隐式转换  
    string1 = 2;              // 这样也是不行的, 因为取消了隐式转换  
    string2 = 3;              // 这样也是不行的, 因为取消了隐式转换  
    string3 = string1;        // 这样也是不行的, 因为取消了隐式转换, 除非类实现操作符"="的重载
```

上面也已经说过了, explicit关键字只对有一个参数的类构造函数有效, 如果类构造函数参数大于或等于两个时, 是不会产生隐式转换的, 所以explicit关键字也就无效了. 例如: 

explicit关键字只需用于类内的单参数构造函数前面。由于无参数的构造函数和多参数的构造函数总是显示调用，这种情况在构造函数前加explicit无意义。

google的c++规范中提到explicit的优点是可以避免不合时宜的类型变换，缺点无。所以google约定所有单参数的构造函数都必须是显示的，只有极少数情况下拷贝构造函数可以不声明称explicit。例如作为其他类的透明包装器的类。
　　effective c++中说：被声明为explicit的构造函数通常比其non-explicit兄弟更受欢迎。因为它们禁止编译器执行非预期（往往也不被期望）的类型转换。除非我有一个好理由允许构造函数被用于隐式类型转换，否则我会把它声明为explicit，鼓励大家遵循相同的政策。

**5. 野指针**

* 指针变量没有被初始化。任何指针变量刚被创建时不会自动成为NULL指针，它的缺省值是随机的，它会乱指一气。所以，指针变量在创建的同时应当被初始化，要么将指针设置为NULL，要么让它指向合法的内存。
```c++
char *p; //此时p为野指针
```
* 指针p被free或者delete之后，没有置为NULL，让人误以为p是个合法的指针.
```c++
char *p = new char[10];  //指向堆中分配的内存首地址，p存储在栈区
cin >> p;
delete [] p; //p重新变为野指针
```
* 指针操作超越了变量的作用范围。
```c++
char *p = new char[10]; //指向堆中分配的内存首地址
cin >> p;
cout << *(p+10); //可能输出未知数据
```
*c形式的字符串内存泄露*
```c++
#include<iostream>
using namespace std;
void main()
{
    char *p=new char[3];  //分配三个字符空间，p指向该内存空间
    p="ab";             //此时p指向常量“ab”,而不再是new char分配的内存空间了，从而造成了资源泄漏
    delete []p;         //释放时报错
}
```
*改进版本*：
```c++
#include<iostream>
using namespace std;
void main()
{
    char *p=new char[3];  //分配三个字符空间，p指向该内存空间
    strcpy(p,"ab");      //将"ab"存储到p指向的内存空间
    delete []p;         //ok
}
```
* 内存越界
```c++
char *p=new char[3];  //分配三个字符空间，p指向该内存空间
strcpy(p,"abcd");    //将abcd存处在分配的内存空间中，由于strlen("abcd")=4>3，越界
delete []p;         //ok
```
* 返回值是指针：可以使用常量字符串和静态数组将字符串存到静态存储区和文字常量区
```c++
#include<iostream>
using namespace std;
char *f()
{
    char p[]="abc";
    return p;
}
void main()
{
    cout<<f()<<endl;
}
```
* 指针做形参：所谓的地址传递，我们都知道地址传递的方式，形参的改变会导致实参的改变，但要注意的是，这里的改变是指指针所指内容的改变，而不是指针值的改变。因此，当形参改变会导致实参改变时，指针所指的内容是非const类型的，否则会出错。

*注意：p="ab"和strcpy(p,"ab")，含义不一样，前者指针p指向常量“ab”存储区域的首地址，改变了p最开始指向的new申请的内存空间；而后者是将“ab”分配到new申请的内存空间中；*

**6. 智能指针的内存泄露问题**

即将基本类型指针封装为类对象指针，并在析构函数里编写delete语句删除指针所指向的内存空间。智能指针就是行为类似指针的栈对象，并非指针类型。智能指针不是指针类型，是个栈对象。

当两个对象相互使用一个shared_ptr成员变量指向对方，会造成循环引用，使引用计数失效，从而导致内存泄漏。可以通过weak_ptr解决

```c++
#include<iostream>
#include<cstdlib>
#include<boost/shared_ptr.hpp>

using namespace std;

struct Node
{

    ~Node()
    {
        cout << "析构函数" << endl;
    }
    int data;
    boost::shared_ptr<Node> next;
    boost::shared_ptr<Node> prev;
};

void test1()
{
    boost::shared_ptr<Node > sp1(new Node);
    boost::shared_ptr<Node > sp2(new Node);
    sp1->next = sp2;
    sp2->prev = sp1;
}

int main()
{
    test1();
    system("pause");
    return 0;
}
```

**7. C/C++ 中 右引用，左引用和指针的区别**

指针是指向一块内存地址的变量，这个变量可以指向其他地址；引用是一个变量的别名，只能是一个变量的别名。一个变量的引用可以转为指向它的指针。

*指针和引用的不同*

* 初始化不同，引用使用时必须初始化，且只能指向一个变量，初始化不能指向其他变量；指针不一样，指针使用时不必初始化，可以指向nullptr,初始化后仍可以改变指向的地址。
* 作为函数参数传递时，引用不需要内存拷贝，所以也就不需要申请内存，因此当函数参数传递时，很多时候使用&或者const&传递参数节省内存。
* .作为函数参数传递时，如果想改变传递进函数参数的原始变量的值，引用改变后改变原始变量，而指针的值改变后并不会改变原始变量，因为它只是一份内存副本，如果想达到改变的效果，使用**。
* 引用的++ 是变量本事的运算，而指针的++,是内存地址的++。
* 如果返回动态内存分配的对象或者内存，必须使用指针，引用可能引起内存泄漏。
* 不要返回局部变量引用，返回对象的引用最好const变量。
* 操作符<< 和 >> =返回引用，而操作符+-/*的返回对象不能是引用。

左值引用只能绑定左值，不能绑定右值.右值引用只能绑定右值，不能绑定左值.使用两个&&表示右值引用.

```c++
int x = 1;
int &y = x;                //绑定左值，正确
int &z = 2;                //绑定右值2，编译错误

int&& i = 8;            
int j = 18;       
int&& k = j;               //编译错误
```

**move语义**

move的作用是避免复制，提高效率.考虑一个函数以std::vector\<int\>作为参数，函数作用是在不改变实参的情况下，在vector中添加元素，旧方法使用常量左值引用作为参数，在内部先拷贝，再添加。如下所示：

```c++
void process_copy(std::vector<int> const& vec_)
{
    std::vector<int> vec(vec_);
    vec.push_back(42);
}

void process_copy(std::vector<int> && vec)
{
    vec.push_back(42);
}
```

注意，尽管右值引用能够绑定右值，但在函数体中，右值引用将会被函数”定义“为左值。如下：

右值引用和函数模板
当右值引用作为函数模板参数，会有差异。如果函数参数是一个模板参数的右值引用，模板推演参数类型将分两种:

```c++
template<typename T>
void foo(T&& t)
{}

int i=42;
foo(i);           //函数将被推演为：foo<int&>(i)

foo(42);         //推演为foo<int>(42)
foo(3.14159);    //推演为foo<float>(3.14159)
foo(std::string()); //推演为foo<std::string>(std::string())
```

move构造函数允许拥有者的指针在对象之间传递，允许unique_ptr<>（拥有move构造函数）作为一个函数的返回值，函数返回值属于临时对象，可以作为右值传递给右值引用，避免了拷贝。

**8. 为什么析构函数必须是虚函数？为什么C++默认的析构函数不是虚函数**

采用虚函数为了实现动态多态，用于基类指针指向派生类对象时，通过基类指针直接调用派生类的对象函数，析构函数也不例外。如果构函数不是虚函数，那么在调用该函数时（对象被删除时）则只会调用当前对象对应的类的析构函数，这对于直接定义的对象是没有什么影响的，但是对于使用基类指向派生类的指针而言，因为基类指针实际上是基类类型，所以析构时自然只会调用基类的析构函数，这就可能产生内存泄漏（因为派生类的析构函数不被调用）。所以如果确定程序中有基类指针指向派生类的问题，则必须将基类的析构函数指定为虚函数，如此才能确保NEW出来的对象被正确的DELETE。

```c++
class ClxBase{
public:
ClxBase() {};
virtual ~ClxBase() {cout << "Output from the destructor of class ClxBase!" << endl;};
virtual void DoSomething() { cout << "Do something in class ClxBase!" << endl; };
};

class ClxDerived : public ClxBase{
public:
ClxDerived() {};
~ClxDerived() { cout << "Output from the destructor of class ClxDerived!" << endl; };
void DoSomething() { cout << "Do something in class ClxDerived!" << endl; };
};

int main(){ 
ClxBase *p = new ClxDerived;
p->DoSomething();
delete p;
return 0;
}
```

**9. c++ fork函数**

Linux下一个进程在内存里有三部分的数据，就是”代码段”、”堆栈段”和”数据段”。接触过汇编语言的人了解，一般的CPU都有上述三种段寄存器，以方便操作系统的运行。这三个部分也是构成一个完整的执行序列的必要的部分。

有两个基本的操作用于创建和修改进程：函数fork()用来创建一个新的进程，该进程几乎是当前进程的一个完全拷贝，利用了父进程的代码段、堆栈段、数据段，当父子进程中对共有的数据段进行重新设值或调用不同方法时，才会导致数据段及堆栈段的不同；函数族exec()用来启动另外的进程以取代当前运行的进程，除了PID仍是原来的值外，代码段、堆栈段、数据段已经完全被改写了。 　　

fork()子进程只进行fork后面的语句,复制前面的父进程的数据，但不执行语句

//头文件

\#include \<unistd.h\>

//函数定义

pid_t fork( void );

```c++
#include <unistd.h>
#include <sys/types.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(int argc, const char* argv[])
{
	
	for(int i=0;i<2;++i)
	{
 
		fork();
		printf("hello,pid%d,ppid%d\n",getpid(),getppid());
 
	}
	sleep(1);
	return 0;
}

hello,pid13610,ppid2978
hello,pid13610,ppid2978
hello,pid13612,ppid13610
hello,pid13611,ppid13610
hello,pid13611,ppid13610
hello,pid13613,ppid13611
```

**10. 析构函数的作用**

定义的对象消亡时，自动被调用，用来释放对象占用的空间

**11. 静态函数和虚函数的区别**

C++中，静态成员函数不能被声明为virtual函数。static成员不属于任何类对象或类实例，所以即使给此函数加上virutal也是没有任何意义的。
静态与非静态成员函数之间有一个主要的区别。那就是静态成员函数没有this指针。

**12. 重载、覆盖和隐藏的区别**

**重载**-是指同一可访问区内被声明的几个具有不同参数列（参数的类型，个数，顺序不同）的同名函数，根据参数列表确定调用哪个函数，重载不关心函数返回类型。

```c++
class A{
public:
  void test(int i);
  void test(double i);//overload
  void test(int i, double j);//overload
  void test(double i, int j);//overload
  int test(int i);         //错误，非重载。注意重载不关心函数返回类型。
};
```

**隐藏**-是指派生类的函数屏蔽了与其同名的基类函数，注意只要同名函数，不管参数列表是否相同，基类函数都会被隐藏。

```c++
#include "stdafx.h"
#include "iostream"

using namespace std;

class Base
{
public:
    void fun(double ,int ){ cout << "Base::fun(double ,int )" << endl; }
};

class Derive : public Base
{
public:
    void fun(int ){ cout << "Derive::fun(int )" << endl; }
};

int main()
{
    Derive pd;
    pd.fun(1);//Derive::fun(int )
    pb.fun(0.01, 1);//error C2660: “Derive::fun”: 函数不接受 2 个参数

    Base *fd = &pd;
    fd->fun(1.0,1);//Base::fun(double ,int);
    fd->fun(1);//error 
    system("pause");
    return 0;
}
```

**重载和重写的区别**：
* 范围区别：重写和被重写的函数在不同的类中，重载和被重载的函数在同一类中。
* 参数区别：重写与被重写的函数参数列表一定相同，重载和被重载的函数参数列表一定不同。
* virtual的区别：重写的基类必须要有virtual修饰，重载函数和被重载函数可以被virtual修饰，也可以没有。
**隐藏和重写，重载的区别**:
* 与重载范围不同：隐藏函数和被隐藏函数在不同类中。
* 参数的区别：隐藏函数和被隐藏函数参数列表可以相同，也可以不同，但函数名一定同；当参数不同时，无论基类中的函数是否被virtual修饰，基类函数都是被隐藏，而不是被重写。 

如下例子：函数Derived::f(float)覆盖了Base::f(float)。函数Derived::g(int)隐藏了Base::g(float)，而不是重载。函数Derived::h(float)隐藏了Base::h(float)，而不是覆盖。

```c++
#include "stdafx.h"
#include <iostream>

using namespace std;

class Base
{
public:
    virtual void f(float x){ cout << "Base::f(float) " << x << endl; }
    void g(float x){ cout << "Base::g(float) " << x << endl; }
    void h(float x){ cout << "Base::h(float) " << x << endl; }
};

class Derived : public Base
{
public:
    virtual void f(float x){ cout << "Derived::f(float) " << x << endl; }
    void g(int x){ cout << "Derived::g(int) " << x << endl; }
    void h(float x){ cout << "Derived::h(float) " << x << endl; }
};

int main(void)
{
    Derived d;
    Base *pb = &d;
    Derived *fd = &d;
    // Good : behavior depends solely on type of the object
    pb->f(3.14f); //Derived::f(float) 3.14
    fd->f(3.14f); //Derived::f(float) 3.14

    // Bad : behavior depends on type of the pointer
    pb->g(3.14f); //Base::g(float) 3.14
    fd->g(3.14f); //Derived::g(int) 3

    // Bad : behavior depends on type of the pointer
    pb->h(3.14f); //Base::h(float) 3.14
    fd->h(3.14f); //Derived::h(float) 3.14

    system("pause");
    return 0;
}
```

**13. strcpy和strlen**

* **strlen(s)** : 返回S的长度，不包括字符串结束符NULL；
* **strcmp(s1,s2)** : 比较两个字符串是否相同，若s1==s2，返回0，若s1>s2则返回正数，若s1\<s2则返回负数；
* **strcat(s1,s2)** : 将字符串s2连接到s1上，返回 s1；
* **strcpy(s1,s2)** : 将s2，复制到s1，返回 s1.

**14. c++ 面向对象**

封装、继承、多态

**15. ++i和i++的区别**

* i++ 返回原来的值，++i 返回加1后的值。
* i++ 不能作为左值，而++i 可以。

++运算符重载
```c++
int& int::operator++() //这里返回的是一个引用形式，就是说函数返回值也可以作为一个左值使用。
{//函数本身无参，意味着是在自身空间内增加1的
  *this += 1;  // 增加
  return *this;  // 取回值
}

const int int::operator++(int) //函数返回值是一个非左值型的，与前缀形式的差别所在。
{//函数带参，说明有另外的空间开辟
  int oldValue = *this;  // 取回值
  ++(*this);  // 增加
  return oldValue;  // 返回被取回的值
}
//如上所示，i++ 最后返回的是一个临时变量，而临时变量是右值。
```

**16. c++ 定义常量的方式。常量存放在内存的哪个位置**

\#define 、const 
其中#define是定义宏变量，它其实是在编译之前，由预处理指令把代码里面的宏变量用指定的字符串替换，它不做语法检查

const常量存放在常量存储区

**17. const修饰成员函数的目的**

const对C++成员函数的修饰分为三种：

* **修饰参数**；

const只能用来修饰输入参数。输出型参数不能用const来修饰。

如果输入参数采用“指针传递”，那么加const修饰可以防止意外地改动该指针，起到保护作用。

如果输入参数采用“值传递”，函数将产生临时变量（局部变量），复制该参数的值并且压入函数栈。函数中使用该参数时，访问的是函数栈中临时变量的值，原变量无需保护，所以不要加const修饰。

基本变量类型的参数作为“值传递”的输入参数，无需采用引用。自定义变量类型（class类型，struct类型）参数作为“值传递”的输入参数，最好采用"const+引用"格式，即 void func（const A& a）。原因是自定义变量类型作为值传递时，设计创建临时变量，构造，复制，析构，这些过程很消耗时间。

* **修饰返回值**；

这个应用比较少。大部分返回值采用的时“值传递”。如果将返回值修饰为const，那么接收返回值的变量也必须定义为const。

* **修饰this指针**；

如果我们设计一个成员函数时，不想让其修改成员变量，那么就应该将this指针定义为底层指针。c++定义的方式就是在函数签名后面加上const，即

**18. c++ 隐式类型转换**

隐式转换：低精度->高精度转换

* 混合类型的算术运算表达式中。例如：
```c++
int a = 3;
double b = 4.5;
a + b; // a将会被自动转换为double类型，转换的结果和b进行加法操作
```
* 不同类型的赋值操作。例如：
```c++
int a = true; (bool类型被转换为int类型)
int * ptr = null;（null被转换为int*类型）
```
* 函数参数传值。例如：
```c++
void func(double a);
func(1); // 1被隐式的转换为double类型1.0
```
* 函数返回值。例如：
```c++
double add(int a, int b)
{
    return a + b;
} //运算的结果会被隐式的转换为double类型返回
```

**19. c++ 函数栈空间的最大值**

**栈**

在Windows下，栈是向低地址扩展的数据结构，是一块连续的内存区域。栈顶的地址和栈的最大容量是系统预先规定好的，在Window下，栈的大小是**2MB**，Linux下，默认栈空间大小为**8MB**，可通过ulimit -s来设置。

特点：栈的速度快、空间小，不灵活

**堆**

堆是向高地址扩展的数据结构，是不联系的内存区域。这是由于系统是用链表来存储空闲内存地址的，自然是不连续的，而链表的便利方向是由低地址向高地址的。在Window下，栈的大小一般小于**2GB**。

特点：堆的大小受限于计算机系统中有效的虚拟内存，所以堆获得的空间比较灵活，也比较大，但速度相对慢一些，也容易产生内存泄露问题。

**20. extern “C”**

extern "C"的主要作用就是为了能够正确实现C++代码调用其他C语言代码。加上extern "C"后，会指示编译器这部分代码按C语言的进行编译，而不是C++的。由于C++支持函数重载，因此编译器编译函数的过程中会将函数的参数类型也加到编译后的代码中，而不仅仅是函数名；而C语言并不支持函数重载，因此编译C语言代码的函数时不会带上函数的参数类型，一般之包括函数名。

用处

* C++代码调用C语言代码
* 在C++的头文件中使用
* 在多个人协同开发时，可能有的人比较擅长C语言，而有的人擅长C++，这样的情况下也会有用到

使用要点

* 可以是单一语句
* 可以是复合语句, 相当于复合语句中的声明都加了extern "C"
* 可以包含头文件，相当于头文件中的声明都加了extern "C"
* 不可以将extern "C" 添加在函数内部
* 如果函数有多个声明，可以都加extern "C", 也可以只出现在第一次声明中，后面的声明会接受第一个链接指示符的规则。
* 除extern "C", 还有extern "FORTRAN" 等。

**21. new/delete与malloc/free的区别**

* **属性**：new/delete是C++关键字，需要编译器支持。malloc/free是库函数，需要头文件支持c。
* **参数**：使用new操作符申请内存分配时无须指定内存块的大小，编译器会根据类型信息自行计算。而malloc则需要显式地指出所需内存的尺寸。
* **返回类型**：new操作符内存分配成功时，返回的是对象类型的指针，类型严格与对象匹配，无须进行类型转换，故new是符合类型安全性的操作符。而malloc内存分配成功则是返回void * ，需要通过强制类型转换将void*指针转换成我们需要的类型。
* **分配失败**：new内存分配失败时，会抛出bac_alloc异常。malloc分配内存失败时返回NULL。
* **自定义类型**：new会先调用operator new函数，申请足够的内存（通常底层使用malloc实现）。然后调用类型的构造函数，初始化成员变量，最后返回自定义类型指针。delete先调用析构函数，然后调用operator delete函数释放内存（通常底层使用free实现）。malloc/free是库函数，只能动态的申请和释放内存，无法强制要求其做自定义类型对象构造和析构工作。
* **重载**：C++允许重载new/delete操作符，特别的，布局new的就不需要为对象分配内存，而是指定了一个地址作为内存起始区域，new在这段内存上为对象调用构造函数完成初始化工作，并返回此地址。而malloc不允许重载。
* **内存区域**：new操作符从自由存储区（free store）上为对象动态分配内存空间，而malloc函数从堆上动态分配内存。自由存储区是C++基于new操作符的一个抽象概念，凡是通过new操作符进行内存申请，该内存即为自由存储区。而堆是操作系统中的术语，是操作系统所维护的一块特殊内存，用于程序的内存动态分配，C语言使用malloc从堆上分配内存，使用free释放已分配的对应内存。自由存储区不等于堆，如上所述，布局new就可以不位于堆中。

**P.S.**

在C++中，内存区分为5个区，分别是堆、栈、自由存储区、全局/静态存储区、常量存储区；

在C中，C内存区分为堆、栈、全局/静态存储区、常量存储区；

**22. RTTI**

多态（Polymorphism）按字面的意思就是“多种状态”。在面向对象的语言中，接口的多种不同的实现方式即为多态。引用Charlie Calverts对多态的描述——多态性是允许你将基类设置成为和一个或更多的他的子类相等的技术，赋值之后，父对象就可以根据当前赋值给它的子对象的特性以不同的方式运作。

RTTI 是“Runtime Type Information”的缩写，意思是：运行时类型信息。它提供了运行时确定对象类型的方法。本文将简略介绍 RTTI 的一些背景知识、描述 RTTI 的概念，并通过具体例子和代码介绍什么时候使用以及如何使用 RTTI；

本文还将详细描述两个重要的 RTTI 运算符的使用方法，它们是 typeid 和 dynamic_cast。 

```c++
class Human
{

};

class Chinese : public Human
{

};

class Japanese : public Human
{

};
```

```c++
void Kill(Human *pHuman)
{
　　if(typeid(*pHuman) == typeid(Japanese))
　　{
　　　　// kill
　　}
　　else if(typeid(*pHuman) == typeid(Chinese))
　　{
　　　　// not kill
　　}
}
```

dynamic_cast，这个运算符用于多态编程中保证在运行时发生正确的转换（即编译器无法验证是否发生正确的转换）。dynamic_cast 常用于从多态编程基类指针向派生类指针的向下类型转换。它有两个参数：一个是类型名；另一个是多态对象的指针或引用。其功能是在运行时将对象强制转换为目标类型并返回布尔型结果。

```c++
void Kill(Human *pHuman)
{
　　if(dynamic_cast<Japanese*>(pHuman))
　　{
　　　　// kill
　　}
　　else
　　{
　　　　// not kill
　　}
}
```

```c++
void menu::build(const File * pfile) { 
    if (typeid(*pfile)==typeid(TextFile)) { 
        add_option("edit"); 
    } 
    else if (typeid(*pfile)==typeid(MediaFile)) { 
        add_option("play"); 
    } 
}
```

**23. 虚函数在运行时如何实现多态**

```c++
class Base
{
public:
    Base(string data) :m_data(data){}
    void show(){ cout << "Base:: " << m_data << endl; }
    string GetData(){ return m_data; }
private:
    string m_data;
};

class Derived :public Base
{
public:
    Derived(int id, string data) : m_id(id), Base(data){ }
    void show(){ cout << "Derived:: " << m_id<<"  " << GetData() << endl; }
private:
    const int m_id;
};

int main()
{
    Base *A = new Base("hello");        //指向基类对象的指针
    A->show();
    Base *B = new Derived(1, "hello");  //指向派生类对象的指针
    B->show();;
//对于这两个指针，我们希望它们分别对应基类和派生类的 show()函数
    system("pause");
    return 0;
}
```

此时可以发现：并没有如我们预想的那样，基类的show()函数遮蔽了派生类的show()函数，原因在于我们没有使用虚函数，虚函数是实现运行是多态。 
所以想要实现运行时多态，很简单，只需要将基类的show()前加上virtual 关键字即可。

```c++
class Base
{
public:
    Base(string data) :m_data(data){}
    virtual void show(){ cout << "Base:: " << m_data << endl; }
    string GetData(){ return m_data; }
private:
    string m_data;
};
```

**24. c语言怎么实现函数调用**

使用调用语句，先声明，再调用

**25. c语言参数压栈顺序**

由于汇编语言是底层的编程语言，各种函数参数都要直接控制栈进行存取，在混合编程中，要用汇编来调用C函数，当然就要知道参数的压栈情况了。

C函数的参数压栈顺序是从右到左时

对于不定参数printf，从右往左压栈可以知道参数的个数

**26. 请你说说C++如何处理返回值？**

* 不要返回局部对象的引用或者指针
* 引用返回左值，其他返回类型得到右值
* main函数返回值中，0表示成功，其他表示识别。

* **函数返回值**-c++ 11新标准规定， 函数可以返回花括号包围的值列表。其实，就是使用列表初始化的方式对表示函数返回的临时变量进行初始化。
```c++
vector<string> process()
{
    return {"funca", "funcb"};
}
```
* **返回数组指针**-因为数组不能被拷贝， 所以不能返回数组。 不过函数可以返回数组的指针或引用， 只是返回类型的定义比较繁琐。
```c++
int  (*func(int i))[10] {} // 表示返回一个大小为10，类型为int型的数组。
```
或者
```c++
typedef int Array[10]; // Array是一个类型别名

Array* func(int i){}
```

**27. 请你回答一下C++中拷贝赋值函数的形参能否进行值传递？**

参数为引用，不为值传递是为了防止拷贝构造函数的无限递归，最终导致栈溢出。

赋值构造函数如果为值传递，仅仅是多了一次拷贝，并不会无限递归。

**28. 请你说一说select**

select函数用于决定一个或者多个套接字的状态。对于每一个套接字，调用者可以请求读、写或者错误状态信息。一个请求给定状态的套接字集由fd_set结构体指定。在fd_set结构体中的套接字必须和单个服务提供者联系在一起。基于此，如果WSAPROTOCOL_INFO结构体中有相同的providerId值，套接字被认为来自同一个服务提供者。直到返回，结构体更新去反映满足指定条件套接字子集。select函数返回满足条件的套接字个数。fd_set集合可以通过一些宏手动操作。这些宏也适合伯克利套接字，但是它们的机理是根本不同的。

**29. 请你说说fork,wait,exec函数**

//头文件

\#include \<unistd.h\>

//函数定义

pid_t fork( void );

返回值：子进程中返回0，父进程中返回子进程ID，出错返回-1函数说明：一个现有进程可以调用fork函数创建一个新进程。由fork创建的新进程被称为子进程（child process）。fork函数被调用一次但返回两次。两次返回的唯一区别是子进程中返回0值而父进程中返回子进程ID。子进程是父进程的副本，它将获得父进程数据空间、堆、栈等资源的副本。

注意，在fork()的调用处，整个父进程空间会原模原样地复制到子进程中，包括指令，变量值，程序调用栈，环境变量，缓冲区，等等。 子进程持有的是上述存储空间的“副本”，这意味着父子进程间不共享这些存储空间，它们之间共享的存储空间只有代码段。

```c++
#include <stdio.h>
#include <unistd.h>
 
void main()
{
    int i;
    printf("hello, %d\n",getpid());
    i=2;
    fork();
    printf("var %d in %d\n", i, getpid());
}
```

输出结果
```c++
hello, 2808 
var 2 in 2808 
var 2 in 2809
```

fork英文是叉的意思.在这里的意思是进程从这里开始分叉,分成了两个进程,一个是父进程,一个子进程.子进程拷贝

**30. 请你回答一下静态函数和虚函数的区别**

```c++
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
void main()
{
    int i=0;
    pid_t fork_result;
    printf("pid:%d->main begin()\n",getpid());
    fork_result=fork();
    if(fork_result<0)
    {   
        printf("fork fail\n");
        exit(1);
    }   
    for(i=0; i<3; i++)
    {   
        if(fork_result==0)
            printf("in ID %d child process: %d\n", getpid(), i);
        else
            printf("in ID %d parent process: %d\n", getpid(), i);
    }   
} 
```

```c++
pid:3881->main begin()
in ID 3881 parent process: 0
in ID 3881 parent process: 1
in ID 3881 parent process: 2
in ID 3882 child process: 0
in ID 3882 child process: 1
in ID 3882 child process: 2
```

```c++
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
 
void main()
{
    printf("hello world %d",getpid());
    //fflush(0);
    fork();
}
```

```c++
#include <unistd.h>
#include <stdio.h>
int main(void)
{
    pid_t pid;
    int count=0;
    pid=vfork();
    count++;
    printf("count= %d\n",count);
    return 0;
}
```

pid_t wait(int *status) 　
参数status用来保存被收集进程退出时的一些状态，它是一个指向int类型的指针。进程一旦调用了wait，就立即阻塞自己，由wait自动分

析是否当前进程的某个子进程已经退出，如果让它找到了这样一个已经变成僵尸的子进程， wait就会收集这个子进程的信息，并把它彻底

UNIX的信号往往是不会排队的

```c++
int execl(const char *path, const char *arg, ......);

int execle(const char *path, const char *arg, ...... , char * const envp[]);

int execv(const char *path, char *const argv[]);

int execve(const char *path, char *const argv[], char *const envp[]);

int execvp(const char *file, char * const argv[]);

int execlp(const char *file, const char *arg, ......);
```

```c++
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/time.h>
#include <sys/resource.h>
#include <signal.h>
#include <sys/wait.h>
 
int main()
{
   int status;
   struct rlimit memlim,timlim;
    getrlimit(RLIMIT_CPU,&timlim);
    getrlimit(RLIMIT_AS ,&memlim);
    memlim.rlim_cur=3*1024*1024; // MB
    timlim.rlim_cur=1;// s
 
    int pid = vfork();//用vfork可以保证子进程比父进程先运行
    if(pid==0)
    {
        setrlimit( RLIMIT_CPU,&timlim);
        setrlimit( RLIMIT_AS,&memlim);
        int *p = (int *)calloc(8*1024*1024, sizeof(int));
        if(-1==execl("/home/daniel/my_linux/apue/my_programming/my",\
						"my", (char *)0))
        {
            perror( "execl error\n ");
            exit(1);
        }
        exit(0);
    }
  wait(&status);
  printf("%d\n",status);
  if(!WIFEXITED(status))
  {
    int sig=0;
       //处理程序非正常结束状态
    if(WIFSIGNALED(status))
      sig=WTERMSIG(status);
    else
     return 1;
   // printf("%d\n",sig);
    if(sig == SIGXCPU)//24
        {
                printf("tle\n");
            }
            if(sig == SIGXFSZ)
        {
                printf("ole\n");
            }
            if(sig == SIGSEGV)
       {
                printf("re\n");
            }
            if(sig==SIGKILL) // 6
       {
                printf("mle\n");         
            }
           //if (WCOREDUMP(status))
        //printf("mle\n");
 
    }
  return 0;
 
}
```

**31. map和set的区别和实现**

map和set都是关联式容器，底层容器都是红黑树RBTree,区别是map区分键和值，set属于集合，不区分键值，如在Java里面HashSet就是用HashMap实现的，不允许键重复，所有元素是通过键进行自动排序的

**32. c++ STL的allocate**

简单来说，是为了各种泛型容器如vector，map等分配内存，使程序员不比为内存而担心，只需添加数据即可。空间配置器，由两级分配器构成，大于128字节，调用一级配置器，malloc/free，realloc；小于128字节，默认二级配置器，分配内存池。为了便于内存管理，减少内存碎片产生

**33. STL迭代器删除元素**

使用容器的erase方法删除

* 对于`关联容器`（如map， set，multimap，multiset），删除当前的iterator，仅仅会使当前的iterator失效，只要在erase时，递增当前iterator即可。这是因为map之类的容器，使用了红黑树来实现，插入、删除一个结点不会对其他结点造成影响。
* 对于`序列式容器`（如vector，deque），删除当前的iterator会使后面所有元素的iterator都失效。这是因为vetor，deque使用了连续分配的内存，删除一个元素导致后面所有的元素会向前移动一个位置。还好erase方法可以返回下一个有效的iterator。
* 对于list来说，它使用了不连续分配的内存，并且它的erase方法也会返回下一个有效的iterator，因此上面两种正确的方法都可以使用。

```c++
for(auto iter = v.begin(), iter!=v.end(); /*iter++*/)
{
    if(iter == 3)
        iter = v.erase(iter);
    else
        iter++;
}
```

```c++
for(auto iter1 = theMap.begin(); iter1 != theMap.end(); )  
{  
    if(iter1->second == xxx)  
    {  
        theMap.erase(iter1++);  
    }  
    else  
    {  
        ++iter1;  
    }  
}
```

**34. STL中MAP数据存放形式**

map作为关联式容器，底层由RBTree红黑树实现，map\<key_type,value_type\>，以键值对的形式存储，与python的dict和Java的HashMap类似

**35. STL有什么基本组成**

STL有三大核心部分：容器（Container）、算法（Algorithms）、迭代器（Iterator），容器适配器（container adaptor），函数对象(functor)，除此之外还有STL其他标准组件。通俗的讲：

* **容器(container)**器是数据在内存中组织的方法，例如，数组、堆栈、队列、链表或二叉树（不过这些都不是STL标准容器）。STL中的容器是一种存储T（Template）类型值的有限集合的数据结构,容器的内部实现一般是类。这些值可以是对象本身，如果数据类型T代表的是Class的话。
* **算法(algorithms)**算法是应用在容器上以各种方法处理其内容的行为或功能。例如，有对容器内容排序、复制、检索和合并的算法。在STL中，算法是由模板函数表现的。这些函数不是容器类的成员函数。相反，它们是独立的函数。令人吃惊的特点之一就是其算法如此通用。不仅可以将其用于STL容器，而且可以用于普通的C＋＋数组或任何其他应用程序指定的容器。
* **迭代器(iterator)**一旦选定一种容器类型和数据行为(算法)，那么剩下唯一要他做的就是用迭代器使其相互作用。可以把达代器看作一个指向容器中元素的普通指针。可以如递增一个指针那样递增迭代器，使其依次指向容器中每一个后继的元素。迭代器是STL的一个关键部分，因为它将算法和容器连在一起。
* **容器适配器(container adaptpr)**包括栈（stack）、队列(queue)、优先(priority_queue)。使用容器适配器，stack就可以被实现为基本容器类型（vector,dequeue,list）的适配。可以把stack看作是某种特殊的vctor、deque或者list容器，只是其操作仍然受到stack本身属性的限制。queue和priority_queue与之类似。容器适配器的接口更为简单，只是受限比一般容器要多；
* **函数对象(functor)**

**36. STL中map与unordered_map**

unordered_map和map类似，都是存储的key-value的值，可以通过key快速索引到value。不同的是unordered_map不会根据key的大小进行排序，

存储时是根据key的hash值判断元素是否相同，即unordered_map内部元素是无序的，而map中的元素是按照二叉搜索树存储，进行中序遍历会得到有序遍历。

所以使用时map的key需要定义operator<。而unordered_map需要定义hash_value函数并且重载operator==。但是很多系统内置的数据类型都自带这些，

那么如果是自定义类型，那么就需要自己重载operator<或者hash_value()了。

```c++
#include<string>  
#include<iostream>  
#include<map>  
  
using namespace std;  
  
struct person  
{  
    string name;  
    int age;  
  
    person(string name, int age)  
    {  
        this->name =  name;  
        this->age = age;  
    }  
  
    bool operator < (const person& p) const  
    {  
        return this->age < p.age;   
    }  
};  
  
map<person,int> m;  
int main()  
{  
    person p1("Tom1",20);  
    person p2("Tom2",22);  
    person p3("Tom3",22);  
    person p4("Tom4",23);  
    person p5("Tom5",24);  
    m.insert(make_pair(p3, 100));  
    m.insert(make_pair(p4, 100));  
    m.insert(make_pair(p5, 100));  
    m.insert(make_pair(p1, 100));  
    m.insert(make_pair(p2, 100));  
      
    for(map<person, int>::iterator iter = m.begin(); iter != m.end(); iter++)  
    {  
        cout<<iter->first.name<<"\t"<<iter->first.age<<endl;  
    }  
      
    return 0;  
}
```

**37. vector和list的区别，应用**

vector和数组类似，拥有一段连续的内存空间，并且起始地址不变。因此能高效的进行随机存取，时间复杂度为o(1);
但因为内存空间是连续的，所以在进行插入和删除操作时，会造成内存块的拷贝，时间复杂度为o(n)。另外，当数组中内存空间不够时，会重新申请一块内存空间并进行内存拷贝。

list是由双向链表实现的，因此内存空间是不连续的。只能通过指针访问数据，所以list的随机存取非常没有效率，时间复杂度为o(n);但由于链表的特点，能高效地进行插入和删除。

*区别*

vector拥有一段连续的内存空间，能很好的支持随机存取，因此vector\<int\>::iterator支持“+”，“+=”，“<”等操作符。

list的内存空间可以是不连续，它不支持随机访问，因此list\<int\>::iterator则不支持“+”、“+=”、“<”等

vector\<int\>::iterator和list\<int\>::iterator都重载了“++”运算符。

总之，如果需要高效的随机存取，而不在乎插入和删除的效率，使用vector;
如果需要大量的插入和删除，而不关心随机存取，则应使用list。

```c++
#include<iostream>
#include<vector>
#include<list>
using namespace std;
int main()
{
    vector<int> v;
    list<int> l;
    for(int i=0;i<8;i++) ////往v和l中分别添加元素
    {
        v.push_back(i);
        l.push_back(i);
    }
    cout<<"v[2]="<<v[2]<<endl;
    //cout<<"l[2]="<<l[2]<<endl;  //编译错误,list没有重载[]
    cout<<(v.begin()<v.end())<<endl; 
    //cout<<(l.begin()<l.end())<<endl; /编译错误,list::iterator没有重载<或>
    cout<<*(v.begin()+1)<<endl;
    //cout<<*(l.begin()+1)<<endl; //编译错误,list::iterator没有重载+
    vector<int>::iterator itv=v.begin();
    list<int>::iterator itl=l.begin();
    itv = itv+2;
    //itl=itl+2; //编译错误,list::iterator没有重载+
    itl++; //list::iterator中重载了++，只能使用++进行迭代访问。
    itl++;
    cout<<*itv<<endl;
    cout<<*itl<<endl;
    getchar();
    return 0;
}
```

**38. STL中迭代器的作用，有指针为何还要迭代器**

迭代器不是指针，是类模板，表现的像指针。他只是模拟了指针的一些功能，通过重载了指针的一些操作符，->,*,++ --等封装了指针，是一个“可遍历STL（ Standard Template Library）容器内全部或部分元素”的对象， 本质是封装了原生指针，是指针概念的一种提升（lift），提供了比指针更高级的行为，相当于一种智能指针，他可以根据不同类型的数据结构来实现不同的++，--等操作；迭代器返回的是对象引用而不是对象的值，所以cout只能输出迭代器使用\*取值后的值而不能直接输出其自身。

在设计模式中有一种模式叫迭代器模式，简单来说就是提供一种方法，在不需要暴露某个容器的内部表现形式情况下，使之能依次访问该容器中的各个元素，这种设计思维在STL中得到了广泛的应用，是STL的关键所在，通过迭代器，容器和算法可以有机的粘合在一起，只要对算法给予不同的迭代器，就可以对不同容器进行相同的操作。

注：*迭代器在使用后就释放了，不能再继续使用，但是指针可以*

指针能指向函数而迭代器不行，迭代器只能指向容器；指针是迭代器的一种。指针只能用于某些特定的容器；迭代器是指针的抽象和泛化。所以，指针满足迭代器的一切要求。

**39. epoll原理**

epoll是Linux内核为处理大批量文件描述符而作了改进的poll，是Linux下多路复用IO接口select/poll的增强版本，它能显著提高程序在大量并发连接中只有少量活跃的情况下的系统CPU利用率。另一点原因就是获取事件的时候，它无须遍历整个被侦听的描述符集，只要遍历那些被内核IO事件异步唤醒而加入Ready队列的描述符集合就行了。epoll除了提供select/poll那种IO事件的水平触发（Level Triggered）外，还提供了边缘触发（Edge Triggered），这就使得用户空间程序有可能缓存IO状态，减少epoll_wait/epoll_pwait的调用，提高应用程序效率。

**40. STL迭代器是怎么删除元素的呢**

使用容器的erase方法删除

* 对于`关联容器`（如map， set，multimap，multiset），删除当前的iterator，仅仅会使当前的iterator失效，只要在erase时，递增当前iterator即可。这是因为map之类的容器，使用了红黑树来实现，插入、删除一个结点不会对其他结点造成影响。
* 对于`序列式容器`（如vector，deque），删除当前的iterator会使后面所有元素的iterator都失效。这是因为vetor，deque使用了连续分配的内存，删除一个元素导致后面所有的元素会向前移动一个位置。还好erase方法可以返回下一个有效的iterator。
* 对于list来说，它使用了不连续分配的内存，并且它的erase方法也会返回下一个有效的iterator，因此上面两种正确的方法都可以使用。

```c++
for(auto iter = v.begin(), iter!=v.end(); /*iter++*/)
{
    if(iter == 3)
        iter = v.erase(iter);
    else
        iter++;
}
```

```c++
for(auto iter1 = theMap.begin(); iter1 != theMap.end(); )  
{  
    if(iter1->second == xxx)  
    {  
        theMap.erase(iter1++);  
    }  
    else  
    {  
        ++iter1;  
    }  
}
```

**41. STL里resize和reserve的区别**

reserve是容器预留空间，但并不真正创建元素对象，在创建对象之前，不能引用容器内的元素，因此当加入新的元素时，需要用push_back()/insert()函数。

resize是改变容器的大小，并且创建对象，因此，调用这个函数之后，就可以引用容器内的对象了，因此当加入新的元素时，用operator[]操作符，或者用迭代器来引用元素对象。
其次，两个函数的形式是有区别的：
reserve函数之后一个参数，即需要预留的容器的空间；
resize函数可以有两个参数，第一个参数是容器新的大小，第二个参数是要加入容器中的新元素，如果这个参数被省略，那么就调用元素对象的默认构造函数。

初次接触这两个接口也许会混淆，其实接口的命名就是对功能的绝佳描述，resize就是重新分配大小，reserve就是预留一定的空间。这两个接口即存在差别，也有共同点。

**42. C++中类成员的访问权限**

* **private**-只能由该类中的函数、其友元函数访问，不能被任何其他函数访问，该类的对象也不能访问. 
* **protected**-可以被该类中的函数、子类的函数、以及其友元函数访问,但不能被该类的对象访问 
* **public**-可以被该类中的函数、子类的函数、其友元函数访问,也可以由该类的对象访问
注：友元函数包括两种：设为友元的全局函数，设为友元类中的成员函数

**43. C++中struct和class的区别**

* **默认的继承权限区别**-这里的默认指的是不做特殊说明的情况下，即直接用class和struct来定义一个类，此时，对于class，按照private来继承，对于struct，按照public继承
* **成员默认访问权限**-跟1差不多，class是private权限，struct是public
基本除了以上两点，class和struck没什么区别，就是一个东西
* **struct的类型名同时可以作为变量名**-显然class是不可以的，也可以理解，因为class各类型变量定义时直接是类名，而struct的是struct+结构体名来定义变量的。

**44. C++类内可以定义引用数据成员吗？**

C++引用在定义时必须初始化，否则编译时便会报错。如果类（自定义类型）的成员是引用类型，需要注意一些问题:

* **不能有默认构造函数，必须提供构造函数**-凡是有引用类型的成员变量的类，不能有缺省构造函数。默认构造函数没有对引用成员提供默认的初始化机制，也因此造成引用未初始化的编译错误。
* **构造函数的形参必须为引用类型**-
* **初始化必须在成员初始化链表内完成**-不能直接在构造函数里初始化，必须用到初始化列表，且形参也必须是引用类型。构造函数分为初始化和计算两个阶段，前者对应成员初始化链表，后者对应构造函数函数体。引用必须在初始化阶段，也即在成员初始化链表中完成，否则编译时会报错（引用未初始化）。

```c++
#include <iostream>
 
using namespace std;
 
class Ref
{
    public:
        // 构造函数形参为传值，不能保证正确性
        // Ref (int target) :myref(target) {
            // cout << "Ref constructor" << endl;
        // }
 
        // 函数体对引用赋值，编译错误：引用未初始化
        // Ref (int &target)  {
            // myref = target;
            // cout << "Ref constructor" << endl;
        // }
 
        // 如果成员为变量为引用类型，那么构造函数的参数为应用类型
        // 引用必须在成员初始化链表里面初始化，不能在函数体里面初始化
        // 在函数体里面修改myref，相当于赋值，显然引用不能赋值
        Ref (int &target) :myref(target) {
            cout << "Ref constructor" << endl;
        }
 
        void printRef() {
            cout << "myref is: " << myref << endl;
        }
 
        virtual ~Ref () {} // 注意析构函数一般定义成虚函数
 
    private:
        int &myref;
        /* data */
};
 
int main(int argc, char *argv[])
{
    int a = 20;
    Ref r(a);
    r.printRef();
 
    int &b = a;
    Ref r1(b);
    r1.printRef();
 
    // error:引用定义时必须初始化
    // int &c;
 
    return 0;
}
```

**45. C++源文件从文本到可执行文件经历的过程？**

* **预处理**，产生.ii文件
* **编译**，产生汇编文件(.s文件)
* **汇编**，产生目标文件(.o或.obj文件)
* **链接**，产生可执行文件(.out或.exe文件)

**46. include头文件的顺序以及双引号””和尖括号的区别？**

系统头文件在前，然后是第三方库文件，最后是自己定义的头文件。""先在当前目录下查找头文件，若找如便去第三方库文件里查找，最后去库文件查找，<>直接到库文件里查找

**47. malloc的原理，另外brk系统调用和mmap系统调用的作用分别是什么？**

malloc的原理
* malloc小于128k的内存，使用brk分配内存，将_edata往高地址推(只分配虚拟空间，不对应物理内存(因此没有初始化)，第一次读/写数据时，引起内核缺页中断，内核才分配对应的物理内存，然后虚拟地址空间建立映射关系)，
* malloc大于128k的内存，使用mmap分配内存，在堆和栈之间找一块空闲内存分配(对应独立内存，而且初始化为0)

从操作系统角度来看，进程分配内存有两种方式，分别由两个系统调用完成：**brk**和**mmap**（不考虑共享内存）。这两种方式分配的都是虚拟内存，没有分配物理内存。在第一次访问已分配的虚拟地址空间的时候，发生缺页中断，操作系统负责分配物理内存，然后建立虚拟内存和物理内存之间的映射关系。

* **brk**-brk是将数据段(.data)的最高地址指针_edata往高地址推；
* **mmap**-mmap是在进程的虚拟地址空间中（堆和栈中间，称为文件映射区域的地方）找一块空闲的虚拟内存。

**48. C++的内存管理是怎样的？**

* **分配方式**-在C++中，内存分成5个区，他们分别是堆、栈、自由存储区、全局/静态存储区和常量存储区。栈，在执行函数时，函数内局部变量的存储单元都可以在栈上创建，函数执行结束时这些存储单元自动被释放。栈内存分配运算内置于处理器的指令集中，效率很高，但是分配的内存容量有限。堆，就是那些由new分配的内存块，他们的释放编译器不去管，由我们的应用程序去控制，一般一个new就要对应一个delete。如果程序员没有释放掉，那么在程序结束后，操作系统会自动回收。自由存储区，就是那些由malloc等分配的内存块，他和堆是十分相似的，不过它是用free来结束自己的生命的。全局/静态存储区，全局变量和静态变量被分配到同一块内存中，在以前的C语言中，全局变量又分为初始化的和未初始化的，在C++里面没有这个区分了，他们共同占用同一块内存区。常量存储区，这是一块比较特殊的存储区，他们里面存放的是常量，不允许修改。

常见的内存分配错误

* 内存分配未成功，却使用了它
* 内存分配虽然成功，但是尚未初始化就引用它
* 内存分配成功并且已经初始化，但操作越过了内存的边界
* 忘记了释放内存，造成内存泄露。
* 放了内存却继续使用它。

**49. C++/C的内存分配**

* **分配方式**-在C++中，内存分成5个区，他们分别是堆、栈、自由存储区、全局/静态存储区和常量存储区。栈，在执行函数时，函数内局部变量的存储单元都可以在栈上创建，函数执行结束时这些存储单元自动被释放。栈内存分配运算内置于处理器的指令集中，效率很高，但是分配的内存容量有限。堆，就是那些由new分配的内存块，他们的释放编译器不去管，由我们的应用程序去控制，一般一个new就要对应一个delete。如果程序员没有释放掉，那么在程序结束后，操作系统会自动回收。自由存储区，就是那些由malloc等分配的内存块，他和堆是十分相似的，不过它是用free来结束自己的生命的。全局/静态存储区，全局变量和静态变量被分配到同一块内存中，在以前的C语言中，全局变量又分为初始化的和未初始化的，在C++里面没有这个区分了，他们共同占用同一块内存区。常量存储区，这是一块比较特殊的存储区，他们里面存放的是常量，不允许修改。

常见的内存分配错误

* 内存分配未成功，却使用了它
* 内存分配虽然成功，但是尚未初始化就引用它
* 内存分配成功并且已经初始化，但操作越过了内存的边界
* 忘记了释放内存，造成内存泄露。
* 放了内存却继续使用它。

**50. 什么是内存泄露、如何判断内存泄漏？**

内存泄漏（Memory Leak）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

无论是C还是C++程序，运行时候的变量主要有三种分配方式：堆分配、栈分配、全局和静态内存分配。内存泄漏主要是发生在堆内存分配方式中，即“配置了内存后，所有指向该内存的指针都遗失了”，若缺乏语言这样的垃圾回收机制，这样的内存片就无法归还系统。因为内存泄漏属于程序运行中的问题，无法通过编译识别，所以只能在程序运行过程中来判别和诊断。下面将介绍几种常用的内存检测方法，每种方法均以现有的内存检测工具为分析范例，并对各种方法进行比较。

* 静态分析技术
* 源代码插装技术
* 目标代码插装技术
* 被测代码预处理
* 测试执行阶段
* 数据统计与结果汇总

**51. 共享内存相关api** 

```c++
#include <sys/shm.h>
void *shmat(int shm_id, const void *shm_addr, int shmflg);//shmat()是用来允许本进程访问一块共享内存的函数，将这个内存区映射到本进程的虚拟地址空间。
int shmctl(int shm_id, int cmd, struct shmid_ds *buf);//shmctl控制对这块共享内存的使用
int shmdt(const void *shm_addr);//当一个进程不再需要共享内存时，需要把它从进程地址空间中多里。
int shmget(key_t key, size_t size, int shmflg);//shared Memory GET 获取共享内存
```

C++内存共享示例
```c++
#include <stdio.h>
#include <stdlib.h>

#include <sys/ipc.h>
#include <sys/shm.h>
#include <string.h>

#define IPCKEY 0x366378

typedef struct st_setting
{
    char agen[10];
    unsigned char file_no;
}st_setting;

int main(int argc, char** argv)
{
    int         shm_id;
    //key_t       key;
    st_setting  *p_setting;
    //  首先检查共享内存是否存在，存在则先删除
    shm_id = shmget(IPCKEY , 1028, 0640);
    if(shm_id != -1)
    {
        p_setting = (st_setting *)shmat(shm_id, NULL, 0);

        if (p_setting != (void *)-1)
        {
            shmdt(p_setting);

            shmctl(shm_id,IPC_RMID,0) ;
        }
    }
    //  创建共享内存
    shm_id = shmget(IPCKEY, 1028, 0640 | IPC_CREAT | IPC_EXCL);
    if(shm_id == -1)
    {
        printf("shmget error\n");
        return -1;
    }
    //  将这块共享内存区附加到自己的内存段
    p_setting = (st_setting *)shmat(shm_id, NULL, 0);
    strncpy(p_setting->agen, "gatieme", 10);
    printf("agen : %s\n", p_setting->agen);
    p_setting->file_no = 1;
    printf("file_no : %d\n",p_setting->file_no);
    system("ipcs -m");//  此时可看到有进程关联到共享内存的信息，nattch为1
    //  将这块共享内存区从自己的内存段删除出去
    if(shmdt(p_setting) == -1)
       perror(" detach error ");
    system("ipcs -m");//  此时可看到有进程关联到共享内存的信息，nattch为0
    //  删除共享内存
    if (shmctl( shm_id , IPC_RMID , NULL ) == -1)
    {
        perror(" delete error ");
    }
    system("ipcs -m");//  此时可看到有进程关联到共享内存的信息，nattch为0
    return EXIT_SUCCESS;
}
```

**52. reactor模型组成**

Reactor模式是处理并发I/O比较常见的一种模式，用于同步I/O，中心思想是将所有要处理的I/O事件注册到一个中心I/O多路复用器上，同时主线程/进程阻塞在多路复用器上；一旦有I/O事件到来或是准备就绪(文件描述符或socket可读、写)，多路复用器返回并将事先注册的相应I/O事件分发到对应的处理器中。

Reactor是一种事件驱动机制，和普通函数调用的不同之处在于：应用程序不是主动的调用某个API完成处理，而是恰恰相反，Reactor逆置了事件处理流程，应用程序需要提供相应的接口并注册到Reactor上，如果相应的事件发生，Reactor将主动调用应用程序注册的接口，这些接口又称为“回调函数”。用“好莱坞原则”来形容Reactor再合适不过了：不要打电话给我们，我们会打电话通知你。

Reactor模式与Observer模式在某些方面极为相似：当一个主体发生改变时，所有依属体都得到通知。不过，观察者模式与单个事件源关联，而反应器模式则与多个事件源关联 。

在Reactor模式中，有5个关键的参与者：

* **描述符（handle）：**-由操作系统提供的资源，用于识别每一个事件，如Socket描述符、文件描述符、信号的值等。在Linux中，它用一个整数来表示。事件可以来自外部，如来自客户端的连接请求、数据等。事件也可以来自内部，如信号、定时器事件。
* **同步事件多路分离器（event demultiplexer）：**-事件的到来是随机的、异步的，无法预知程序何时收到一个客户连接请求或收到一个信号。所以程序要循环等待并处理事件，这就是事件循环。在事件循环中，等待事件一般使用I/O复用技术实现。在linux系统上一般是select、poll、epol_waitl等系统调用，用来等待一个或多个事件的发生。I/O框架库一般将各种I/O复用系统调用封装成统一的接口，称为事件多路分离器。调用者会被阻塞，直到分离器分离的描述符集上有事件发生。
* **事件处理器（event handler）：**-I/O框架库提供的事件处理器通常是由一个或多个模板函数组成的接口。这些模板函数描述了和应用程序相关的对某个事件的操作，用户需要继承它来实现自己的事件处理器，即具体事件处理器。因此，事件处理器中的回调函数一般声明为虚函数，以支持用户拓展。
* **具体的事件处理器（concrete event handler）：**-是事件处理器接口的实现。它实现了应用程序提供的某个服务。每个具体的事件处理器总和一个描述符相关。它使用描述符来识别事件、识别应用程序提供的服务。
* **Reactor 管理器（reactor）：**-定义了一些接口，用于应用程序控制事件调度，以及应用程序注册、删除事件处理器和相关的描述符。它是事件处理器的调度核心。 Reactor管理器使用同步事件分离器来等待事件的发生。一旦事件发生，Reactor管理器先是分离每个事件，然后调度事件处理器，最后调用相关的模 板函数来处理这个事件。

**53. 设计一下如何采用单线程的方式处理高并发**

使用I/O多路复用，select或者epool

**54. select，epoll的区别，原理，性能，限制都说一说**

epoll是Linux内核为处理大批量文件描述符而作了改进的poll，是Linux下多路复用IO接口select/poll的增强版本，它能显著提高程序在大量并发连接中只有少量活跃的情况下的系统CPU利用率。另一点原因就是获取事件的时候，它无须遍历整个被侦听的描述符集，只要遍历那些被内核IO事件异步唤醒而加入Ready队列的描述符集合就行了。epoll除了提供select/poll那种IO事件的水平触发（Level Triggered）外，还提供了边缘触发（Edge Triggered），这就使得用户空间程序有可能缓存IO状态，减少epoll_wait/epoll_pwait的调用，提高应用程序效率。

select函数用于决定一个或者多个套接字的状态。对于每一个套接字，调用者可以请求读、写或者错误状态信息。一个请求给定状态的套接字集由fd_set结构体指定。在fd_set结构体中的套接字必须和单个服务提供者联系在一起。基于此，如果WSAPROTOCOL_INFO结构体中有相同的providerId值，套接字被认为来自同一个服务提供者。直到返回，结构体更新去反映满足指定条件套接字子集。select函数返回满足条件的套接字个数。fd_set集合可以通过一些宏手动操作。这些宏也适合伯克利套接字，但是它们的机理是根本不同的。

**55. C++ STL 的内存优化**

* allocator类是一个类模板，它可以提供类型化内存分配和对象的构造与撤销

```c++
allocator<T> a;//a为allocator对象，处理T类型内存
a.allocate(n);//分配n*sizeof(T)大小的未构造的内存
a.deallocate(p,n);//释放内存n*sizeof(T)，p为指向内存对象,并不运行析构函数
a.construct(p,t);//在指针p处构造对象，运行T类型的复制构造函数，用t初始化
a.destroy(p);//运行p指针处对象的析构函数
```

