---
layout: post
title: "用Python实现的红黑树RedBlackTree"
description: "用Python实现的红黑树RedBlackTree"
categories: [Python]
tags: [python]
redirect_from:
  - /2018/04/07/
---

## 用Python实现的红黑树RedBlackTree

redblacktree.py

```python


from __future__ import division, absolute_import, print_function
from copy import deepcopy as _deepcopy

BLACK = 0
RED = 1

class RedBlackTreeNode:
    '''
    红黑树结点
    '''
    def __init__(self, key, index = None, color = RED, \
        p = None, left = None, right = None):
        '''
        红黑树树结点

        Args
        ===
        `left` : SearchTreeNode : 左儿子结点

        `right`  : SearchTreeNode : 右儿子结点

        `index` : 结点自身索引值

        `key` : 结点自身键值

        `p` : 父节点

        '''
        self.left = left
        self.right = right
        self.key = key
        self.index = index
        self.color = color
        self.p = p

    def __str__(self):
        '''
        str({'key' : self.key, 
            'index' : self.index, 
            'color' : self.color})
        '''
        return  str({'key' : self.key, 
            'index' : self.index, 
            'color' : self.color})

    def isnil(self):
        '''
        判断红黑树结点是否是哨兵结点
        '''
        if self.key == None and self.color == BLACK:
            return True
        return False

class RedBlackTree:
    '''
    红黑树
    '''
    def __init__(self):
        '''
        红黑树
        '''
        self.nil = self.buildnil()
        self.root = self.nil

    def buildnil(self):
        '''
        构造一个新的哨兵nil结点
        '''
        nil = RedBlackTreeNode(None, color=BLACK)
        return nil

    def insertkey(self, key, index = None, color = RED):
        '''
        插入红黑树结点 时间复杂度 `O(lgn)`
        '''
        z = RedBlackTreeNode(key, index, color)
        self.insert(z)

    def successor(self, x : RedBlackTreeNode):
        '''
        前趋:结点x的前趋即具有小于x.key的关键字中最大的那个

        时间复杂度：`O(h)`, `h=lgn`为树的高度
        
        '''
        if x.right != self.nil:
            return self.minimum(x.right)
        y = x.p
        while y != self.nil and x == y.right:
            x = y
            y = y.p
        return y

    def predecessor(self, x : RedBlackTreeNode):
        '''
        后继:结点x的后继即具有大于x.key的关键字中最小的那个

        时间复杂度：`O(h)`, `h`为树的高度
        
        '''
        if x.left != self.nil:
            return self.maximum(x.left)
        y = x.p
        while y != self.nil and x == y.left:
            x = y
            y = y.p
        return y

    def tree_search(self, x : RedBlackTreeNode, key):
        '''
        查找 

        时间复杂度：`O(h)`, `h`为树的高度

        '''
        try:
            if x != self.nil and key == x.key:
                return x
            if key < x.key:
                return self.tree_search(x.left, key)
            else:
                return self.tree_search(x.right, key)            
        except :
            return self.nil

    def minimum(self, x : RedBlackTreeNode):
        '''
        最小关键字元素(迭代版本) 

        时间复杂度：`O(h)`, `h`为树的高度

        '''
        while x.left != self.nil:
            x = x.left
        return x

    def __minimum_recursive(self, x : RedBlackTreeNode):
        '''
        最小关键字元素(递归版本) 

        时间复杂度：`O(h)`, `h`为树的高度
        '''
        array = []
        if x != self.nil:
            ex = self.__minimum_recursive(x.left)
            if ex == []:
                z = x
                array.append(z)
                return array
            else:
                array = array + ex
        return array

    def minimum_recursive(self, x : RedBlackTreeNode):
        '''
        最小关键字元素(递归版本) 

        时间复杂度：`O(h)`, `h`为树的高度
        '''
        array = self.__minimum_recursive(x)
        if len(array) != 0:
            return array.pop()
        return self.nil

    def maximum(self, x : RedBlackTreeNode):
        '''
        最大关键字元素(迭代版本)

        时间复杂度：`O(h)`, `h`为树的高度

        '''
        while x.right != self.nil:
            x = x.right
        return x
    
    def __maximum_recursive(self, x : RedBlackTreeNode):
        '''
        最大关键字元素(递归版本)

        时间复杂度：`O(h)`, `h`为树的高度
        '''
        array = []
        if x != self.nil:
            ex = self.__maximum_recursive(x.right)
            if ex == []:
                z = x
                array.append(z)
                return array
            else:
                array = array + ex
        return array

    def maximum_recursive(self, x : RedBlackTreeNode):
        '''
        最大关键字元素(递归版本)

        时间复杂度：`O(h)`, `h`为树的高度
        '''
        array = self.__maximum_recursive(x)
        if len(array) != 0:
            return array.pop()
        return self.nil

    def insert(self, z : RedBlackTreeNode):
        '''
        插入红黑树结点 时间复杂度 `O(lgn)`
        '''
        y = self.nil
        x = self.root
        while x != self.nil:
            y = x
            if z.key < x.key:
                x = x.left
            else:
                x = x.right
        z.p = y
        if y == self.nil:
            self.root = z
        elif z.key < y.key:
            y.left = z
        else:
            y.right = z
        z.left = self.nil
        z.right = self.nil
        z.color = RED
        self.insert_fixup(z)

    def insert_fixup(self, z : RedBlackTreeNode):
        '''
        插入元素后 修正红黑树性质，结点重新旋转和着色
        '''
        while z.p.color == RED:
            if z.p == z.p.p.left:
                y = z.p.p.right
                if y.color == RED:
                    z.p.color = BLACK
                    y.color = BLACK
                    z.p.p.color = RED
                    z = z.p.p
                elif y.color == BLACK and z == z.p.right:
                    z = z.p
                    self.leftrotate(z)
                elif y.color == BLACK and z == z.p.left:
                    z.p.color = BLACK
                    z.p.p.color = RED
                    self.rightrotate(z.p.p)
            else:
                y = z.p.p.left
                if y.color == RED:
                    z.p.color = BLACK
                    y.color = BLACK
                    z.p.p.color = RED
                    z = z.p.p
                elif y.color == BLACK and z == z.p.right:
                    z = z.p
                    self.leftrotate(z)
                elif y.color == BLACK and z == z.p.left:
                    z.p.color = BLACK
                    z.p.p.color = RED
                    self.rightrotate(z.p.p)               
        self.root.color = BLACK    
        
    def delete_fixup(self, x : RedBlackTreeNode):
        '''
        删除元素后 修正红黑树性质，结点重新旋转和着色
        '''
        while x != self.root and x.color == BLACK:
            if x == x.p.left:
                w : RedBlackTreeNode = x.p.right
                if w.color == RED:
                    w.color = BLACK
                    x.p.color = RED
                    self.leftrotate(x.p)
                    w = x.p.right
                elif w.color == BLACK:
                    if w.left.color == BLACK and w.right.color == BLACK:
                        w.color = RED
                        x = x.p
                    elif w.left.color == RED and w.right.color == BLACK:
                        w.left.color = BLACK
                        w.color = RED
                        self.rightrotate(w)
                        w = x.p.right
                    elif w.right.color == RED:
                        w.color = x.p.color
                        x.p.color = BLACK
                        w.right.color = BLACK
                        self.leftrotate(x.p)
                        x = self.root
            else:
                w : RedBlackTreeNode = x.p.left
                if w.color == RED:
                    w.color = BLACK
                    x.p.color = RED
                    self.rightrotate(x.p)
                    w = x.p.left
                elif w.color == BLACK:
                    if w.right.color == BLACK and w.left.color == BLACK:
                        w.color = RED
                        x = x.p
                    elif w.left.color == RED and w.right.color == BLACK:
                        w.right.color = BLACK
                        w.color = RED
                        self.leftrotate(w)
                        w = x.p.left
                    elif w.right.color == RED:
                        w.color = x.p.color
                        x.p.color = BLACK
                        w.left.color = BLACK
                        self.rightrotate(x.p)
                        x = self.root
        x.color = BLACK

    def delete(self, z : RedBlackTreeNode):
        '''
        删除红黑树结点
        '''
        if z.isnil() == True:
            return
        if z.left == self.nil or z.right == self.nil:
            y = z
        else:
            y = self.successor(z)
        if y.left != self.nil:
            x = y.left
        else:
            x = y.right
        x.p = y.p
        if x.p == self.nil:
            self.root = x
        elif y == y.p.left:
            y.p.left = x
        else:
            y.p.right = x
        if y != z:
            z.key = y.key
            z.index = _deepcopy(y.index)
        if y.color == BLACK:
            self.delete_fixup(x)
        return y
    
    def deletekey(self, key):
        '''
        删除红黑树结点
        '''
        node = self.tree_search(self.root, key)
        return self.delete(node)

    def leftrotate(self, x : RedBlackTreeNode):
        '''
        左旋 时间复杂度: `O(1)`
        '''
        y : RedBlackTreeNode = x.right
        z = y.left
        if y == self.nil:
            return 
        y.left.p = x
        y.p = x.p
        if x.p == self.nil:
            self.root = y
        elif x == x.p.left:
            x.p.left = y
        else:
            x.p.right = y
        y.left = x
        x.p = y
        x.right = z

    def rightrotate(self, x : RedBlackTreeNode):
        '''
        右旋 时间复杂度:`O(1)`
        '''
        y : RedBlackTreeNode = x.left
        z = y.right
        if y == self.nil:
            return
        y.right.p = x
        y.p = x.p
        if x.p == self.nil:
            self.root = y
        elif x == x.p.left:
            x.p.left = y
        else:
            x.p.right = y
        y.right = x
        x.p = y
        x.left = z
            
    def inorder_tree_walk(self, x : RedBlackTreeNode):
        '''
        从红黑树的`x`结点后序遍历
        '''
        array = []
        if x != None:
            left = self.inorder_tree_walk(x.left)
            array = array + left
            right = self.inorder_tree_walk(x.right)  
        if x != None and x.isnil() == False:
            array.append(str(x))
            array = array + right
        return array
    
    def all(self):
        '''
        返回红黑树中所有的结点
        '''
        return self.inorder_tree_walk(self.root)

    def clear(self):
        '''
        清空红黑树
        '''
        self.destroy(self.root)
        self.root = self.buildnil()

    def destroy(self, x : RedBlackTreeNode):
        '''
        销毁红黑树结点
        '''
        if x == None:
            return
        if x.left != None:   
            self.destroy(x.left)
        if x.right != None:  
            self.destroy(x.right) 
        x = None
  
    def __preorder(self, node : RedBlackTreeNode): 
        if node.isnil() == False:
            print(str(node), end=' ')  
            self.__preorder(node.left) 
            self.__preorder(node.right)  

    def __inorder(self, node : RedBlackTreeNode): 
        if node.isnil() == False:
            self.__preorder(node.left) 
            print(str(node), end=' ') 
            self.__preorder(node.right)  

    def __postorder(self, node : RedBlackTreeNode): 
        if node.isnil() == False:
            self.__preorder(node.left)       
            self.__preorder(node.right) 
            print(str(node), end=' ') 

    def preorder_print(self):
        '''
        前序遍历红黑树
        ''' 
        print('preorder')
        self.__preorder(self.root)

    def inorder_print(self):
        '''
        中序遍历红黑树
        '''
        print('inorder')
        self.__inorder(self.root)

    def postorder_print(self):
        '''
        中序遍历红黑树
        '''
        print('postorder')
        self.__postorder(self.root)


if __name__ == '__main__':
    tree = RedBlackTree()
    tree.insertkey(41)
    tree.insertkey(38)
    tree.insertkey(31)
    tree.insertkey(12)
    tree.insertkey(19)
    tree.insertkey(8)
    tree.insertkey(1)
    tree.deletekey(12)
    tree.deletekey(38)
    tree.preorder_print()
    tree.postorder_print()
    tree.inorder_print()
    print(tree.all())
    tree.clear()
    print(tree.all())

    # python src/chapter13/redblacktree.py
    # python3 src/chapter13/redblacktree.py

else:
    pass

```

[Github Code](https://github.com/Peefy/IntroductionToAlgorithm.Python/blob/master/src/chapter13)

