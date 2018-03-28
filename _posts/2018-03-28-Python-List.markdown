---
layout: post
title: "Python List"
description: "用Python实现的链表List"
categories: [Python]
tags: [python]
redirect_from:
  - /2018/03/28/
---

## 用Python实现的链表List(当然python自带list)

首先定义链表节点

```python
class ListNode:
    '''
    链表节点
    '''
    def __init__(self, value = None):
        '''
        链表节点
        >>> ListNode() 空节点   
        >>> ListNode(value) 值为value的链表节点       
        '''
        self.value = value
        self.key = -1      
        self.prev = None
        self.next = None

    def getisNone(self):
        '''
        链表节点是否为空
        '''
        return self.key == None

    isNone = property(getisNone, None)
```

定义链表

```python
class List:       
    def __init__(self):
        '''
        初始化一个空链表
        '''
        self.head = None
        self.tail = None
        self.next = None
        self.__length = 0

    def search(self, k):
        '''
        找出键值为k的链表节点元素，最坏情况为`Θ(n)`
        '''
        x = self.head
        while x.value != None and x.key != k:
            x = x.next
        return x

    def insert(self, x):
        '''
        链表插入元素x
        '''
        self.__insert(ListNode(x))

    def __insert(self, x : ListNode):
        # 插入的元素按增量键值去
        x.key = self.__length;   
        # 把上一个头节点放到下一个节点去   
        x.next = self.head
        # 判断是否第一次插入元素
        if self.head != None and self.head.isNone == False:
            self.head.prev = x
        # 新插入的元素放到头节点去
        self.head = x
        # 新插入的节点前面没有元素
        x.prev = None
        self.__increse_length()

    def delete(self, item, key):
        '''
        链表删除元素x
        '''
        if type(item) is not ListNode:
            x = ListNode(item)
            x.key = key
        else:
            x = item
        if x.prev != None and x.prev.isNone == False:
            x.prev.next = x.next
        else:
            self.head = x.next
        if x.next != None and x.next.isNone == False:
            x.next.prev = x.prev
        self.__length -= 1

    def delete_bykey(self, k : int) -> ListNode:
        '''
        根据键值删除元素
        '''
        x = self.search(k)
        self.delete(x, x.key)

    def count(self):
        '''
        返回链表中元素的数量总和
        '''
        return self.__length

    def all(self):
        '''
        返回链表中所有元素组成的集合
        '''
        array = []
        x = self.head
        count = self.count()
        while x != None:
            value = x.value
            if value != None:
                array.append(value)
            x = x.next
        array.reverse()
        return array

    def __increse_length(self):
        self.__length += 1       

    def __reduce_length(self):
        self.__length -= 1

```
