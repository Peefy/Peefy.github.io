---
layout: post
title: "用Python实现的栈Stack和队列Queue"
description: "用Python实现的栈Stack和队列Queue"
categories: [Python]
tags: [python]
redirect_from:
  - /2018/04/09/
---

## 用Python实现的二叉查找树SearchTree

Module

```python

from __future__ import absolute_import, print_function
import json as _json
from random import randint as _randint

```

用一个数组实现的栈

```python
class Stack:
    '''
    栈
    '''
    def __init__(self, iterable = None):
        self.__top = -1
        self.array = []
        if iterable != None:
            self.array = list(iterable)
    
    def isEmpty(self): 
        '''
        栈是否为空

        Return
        ===
        `isempty` -> bool
        '''
        return self.__top == -1

    def push(self, item):
        '''
        入栈操作
        '''
        self.__top = self.__top + 1
        self.array.append(item)

    def pop(self):
        '''
        出栈操作
        '''
        if self.isEmpty() == True:
            raise Exception('the stack has been empty')
        else:
            self.__top = self.__top - 1
            return self.array.pop()

    def count(self):
        '''
        返回栈中所有元素的总数
        '''
        return len(self.array)
```

用一个数组实现两个栈

```python
class TwoStack:
    '''
    用一个数组实现的两个栈
    '''
    def __init__(self, size = 5):
        self.__one_top = -1
        self.__two_top = size
        self.__size = size
        self.__array = list(range(size))    
    
    def one_push(self, item):
        self.__judgeisfull()
        self.__one_top += 1
        self.__array[self.__one_top] = item

    def one_pop(self):
        self.__judgeisempty()
        x = self.__array[self.__one_top]
        self.__one_top -= 1
        return x

    def two_push(self, item):
        self.__judgeisfull()
        self.__two_top -= 1
        self.__array[self.__two_top] = item

    def two_pop(self):
        self.__judgeisempty()
        x = self.__array(self.__two_top)
        self.__two_top += 1
        return x

    def one_all(self):
        array = []
        if self.__one_top != -1:
            for i in range(self.__one_top):
                array.append(self.__array[i])
        return array

    def two_all(self):
        array = []
        if self.__two_top != self.__size:
            for i in range(self.__two_top, self.__size):
                index = self.__size + self.__two_top - i - 1
                array.append(self.__array[index])
        return array

    def __judgeisfull(self):
        if self.__one_top + 1 == self.__two_top:
            raise Exception('Exception: stack is full!')

    def __judgeisempty(self):
        if self.__one_top == -1 or self.__two_top == self.__size:
            raise Exception('stack is full!')
```

队列

```python
class Queue:
    '''
    队列
    '''
    def __init__(self, iterable = None):
        self.tail = 0
        self.array = []
        if iterable != None:
            self.array = list(iterable)

    def enqueue(self, item):
        '''
        元素`item`加入队列
        '''
        self.array.append(item)
        if self.tail == self.length:
            self.tail = 0
        else:
            self.tail = self.tail + 1

    def dequeue(self):
        '''
        元素出队列
        '''
        if self.length() == 0:
            raise Exception('Exception: the queue has been empty')
        x = self.array[0]
        self.array.remove(x)
        return x

    def length(self):
        return len(self.array)
```

双向队列

```python

class DoubleQueue:
    '''
    双向队列
    '''
    def __init__(self, iterable = None):
        self.tail = 0
        self.array = []
        if iterable != None:
            self.array = list(iterable)

    def enqueue(self, item):
        '''
        元素`item`加入队列
        '''
        self.array.append(item)
        if self.tail == self.length:
            self.tail = 0
        else:
            self.tail = self.tail + 1

    def dequeue(self):
        '''
        元素出队列
        '''
        if self.length() == 0:
            raise Exception('Exception: the queue has been empty')
        x = self.array[0]
        self.array.remove(x)
        return x

    def enqueue_reverse(self, item):
        self.array.insert(0, item)

    def dequeue_reverse(self):
        self.array.pop()

    def length(self):
        return len(self.array)

```

用队列实现的栈

```python

class StackUsingQueue:
    '''
    用队列实现的栈
    '''
    def __init__(self, iterable = None):
        self.__queue1 = Queue()
        self.__queue2 = Queue()
    
    def push(self, item):
        self.__queue1.enqueue(item)

    def pop(self):
        for i in range(self.__queue1.length() - 1):
            self.__queue2.enqueue(self.__queue1.dequeue())
        x = self.__queue1.dequeue()
        for i in range(self.__queue2.length()):
            self.__queue1.enqueue(self.__queue2.dequeue())
        return x
        
    def count(self):
        return self.__queue1.length()

```

用栈实现的队列

```python

class QueueUsingStack:
    '''
    用栈实现的队列
    '''
    def __init__(self, iterable = None):
        self.__stack1 = Stack()
        self.__stack2 = Stack()
    
    def enqueue(self, item):
        self.__stack1.push(item)

    def dequeue(self):
        for i in range(self.__stack1.count() - 1):
            self.__stack2.push(self.__stack1.pop())
        x = self.__stack1.pop()
        for i in range(self.__stack2.count()):
            self.__stack1.push(self.__stack2.pop())
        return x
    
    def count(self):
        return self.__stack1.count()

```

队列和栈测试程序

```python
if __name__ == '__main__':
    s = Stack()
    print(s.isEmpty())
    s.push('123')
    s.push(1)
    print(s.count())
    s.pop()
    print(s.pop(), s.count())

    q = Queue([1, 2, 3])
    print(q.length())
    q.enqueue(4)
    q.dequeue()
    print(q.array)
    s = c.Stack()
    s.push(4);s.push(1);s.push(3);s.pop();s.push(8);s.pop()      
    print(s.array)

    s = TwoStack()
    s.one_push(1)
    s.two_push(9)
    s.one_push(2)
    s.one_push(3)
    s.one_push(4)
    print(' ', s.one_all(), s.two_all())
    try:
        s.two_push(8)
    except Exception as err:
        print(' ', err)

    dq = DoubleQueue()
    dq.enqueue(1);dq.enqueue(2);dq.enqueue_reverse(3)
    print('双端队列：', dq.array)
    q = c.QueueUsingStack()
    q.enqueue(1);q.enqueue(2);q.enqueue(3)
    print('', q.dequeue(), q.dequeue(), q.dequeue())
    s = c.StackUsingQueue()
    s.push(1);s.push(2);s.push(3)
    print('', s.pop(), s.pop(), s.pop())

    # python src/chapter12/searchtree.py
    # python3 src/chapter12/searchtree.py
else:
    pass
```

[Github Code](https://github.com/Peefy/IntroductionToAlgorithm.Python/blob/master/src/chapter10)

