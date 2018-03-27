---
layout: post
tille: "stack overflow 高票回答之Python中的引用问题"
description: "stack overflow"
categories: [Python]
tags: [Python StackOverflow]
redirect_from:
  - /2018/03/26/
---
#### How do I pass a variable by reference?

**问题:**

Python文档并没有说清楚参数究竟是按引用传递还是按值传递的，下面的代码创造了这个不能改变的值‘Original’:

```python
class PassByReference:
    def __init__(self):
        self.variable = 'Original'
        self.change(self.variable)
        print(self.variable)

    def change(self, var):
        var = 'Changed'
```

有没有方法让我可以按照引用把这个参数传递进去？

**Blair Conrad的回答（2106票）：**

参数是通过assignment传递过去的。背后的原理有双重性：

1. 参数是通过对象引用传递的（但是这个引用是值传递的）；
2. 一些数据类型是可变的，但是另外一些是不可变的。

所以：

* 如果你传递一个可变对象到方法里，这个方法得到指向同一个对象的引用，然后你可以按照你的想法改变它。但是如果你在方法中重指了这个引用，那么外部环境是完全不知情的，当你完成了对重指的引用的操作之后，方法外部的引用仍然是指向最初的那个对象的；
* 如果你传递一个不可变对象到方法里，你仍然不能重指外部的引用，你甚至没有办法改变这个对象（在方法里）

为了更形象，让我们看几个例子：

**列表 - 可变类型 **

让我们尝试着改变传递到方法中的列表：

```python
def try_to_change_list_contents(the_list):
    print('got', the_list)
    the_list.append('four')
    print('changed to', the_list)
    
outer_list = ['one', 'two', 'three']

print('before, outer_list = ', outer_list)
try_to_change_list_contents(outer_list)
print('after, outer_list = ', outer_list)
```

结果：

```python
before, outer_list =  ['one', 'two', 'three']
got ['one', 'two', 'three']
changed to ['one', 'two', 'three', 'four']
after, outer_list =  ['one', 'two', 'three', 'four']
```

鉴于这个传入的参数是outer_list的一个引用，而不是它的一个复制，我们可以使用改变列表的方法去改变它，而且这个改变会反映到外部环境。

**现在让我们看一下如果我们尝试改变作为参数传递进来的引用的时候会发生什么？**

```python
def try_to_change_list_reference(the_list):
    print('got', the_list)
    the_list = ['and', 'we', 'can', 'not', 'lie']
    print('set to', the_list)
    
outer_list = ['we', 'like', 'proper', 'English']

print('before, outer_list = ', outer_list)
try_to_change_list_reference(outer_list)
print('after, outer_list = ', outer_list)
```

结果：

```python
before, outer_list =['we', 'like', 'proper', 'English']
got ['we', 'like', 'proper', 'English']
set to ['and', 'we', 'can', 'not', 'lie']
after, outer_list =  ['we', 'like', 'proper', 'English']
```

由于这个the_list参数是通过值传递的（是指传入的引用是值传递的），给它分配一个新列表并对外界代码没有作用。这个the_list是外界outer_list引用的一个副本，当我们把the_list指向一个新列表时，就没有办法去改变outer_list指向的对象了。

**字符串—不可变类型**

**字符串是不可变的，所以我们没有方法去改变字符串的内容，现在，让我们尝试着改变它的引用**

```python
def try_to_change_string_reference(the_string):
    print('got', the_string)
    the_string = 'In a kingdom by the sea'
    print('set to', the_string)
    
outer_string = 'It was many and many a year ago'

print('before, outer_string = ', outer_string)
try_to_change_string_reference(outer_string)
print('after, outer_string = ', outer_string)
```

结果是显而易见：

```python
before, outer_string =  It was many and many a year ago
got It was many and many a year ago
set to In a kingdom by the sea
after, outer_string =  It was many and many a year ago
```

同样的，由于the_string参数是通过值传递进来的，将它指向一个新字符串对外部环境并没有什么影响。这个the_string是outer_string引用的一个副本，我们将the_string指向一个新字符串的时候，我们就没有方法去改变outer_string指向的那个对象了。

我希望这样能把事情说的更清楚了。

**更新：这样并没有回答题主的问题：我们能不能按照真实引用传递参数？让我们来看一看。**

**我们如何解决这个问题？**

按照@Andrea's的回答，你可以返回这个新值，这并不会改变参数传递的方式，但能够让你得到你想得到的信息：

```python
def return_a_whole_new_string(the_string):
    new_string = something_to_do_with_the_old_sting(the_string)
    return new_string

# 然后你可以像这样调用它
my_string = return_a_whole_new_string(my_string)
```

如果你是在不想使用一个返回值，你可以创建一个类去保存你的值然后把它传入到函数中，或者使用一个已经存在的类，想一个列表一样：

```python
def user_a_wrapper_to_simulate_pass_by_referece(stuff_to_change):
    new_string = something_to_do_with_the_old_string(stuff_to_change[0])
    stuff_to_change[0] = new_string
    
# 然后你可以想这样调用它
wrapper = [my_string]
user_a_wrapper_to_simulate_pass_by_reference(wrapper)

do_something_with(wrapper[0])
```

虽然这样看起来有些繁琐。
