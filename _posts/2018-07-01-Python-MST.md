---
layout: post
title: "用Python实现的最小生成树算法"
description: "用Python实现的最小生成树算法"
categories: [Python]
tags: [python]
redirect_from:
  - /2018/07/01
---

# 最小生成树

最小权值生成树T,不是使T中边的数目最小化，所有生成树的边数恰好都是|V|-1

对图中每一条边(u,v)∈E,都有一个权值w(u,v)表示连接u和v的代价(需要的接线数目)

希望找出一个无回路的子集T∈E,它连接了所有的顶点，且其权值之和w(T)=∑w(u,v)最小

因为T无回路且连接了所有的顶点,所以它必然是一棵树，称为生成树

因为由最小生成树可以"生成"图G

把确定树T的问题称为最小生成树问题

最小生成树问题的两种算法：Kruskal算法和Prim算法

## Kruskal算法

用到了不相交集合算法

[不相交集合算法链接](https://github.com/Peefy/CLRS_dugu_code-master/blob/master/src/chapter21)

最小生成树算法是基于图算法

[图算法链接](https://github.com/Peefy/CLRS_dugu_code-master/blob/master/src/chapter22)

```python

if __name__ == '__main__':
    import graph as _g
    import notintersectset as _s
else:
    from . import graph as _g
    from . import notintersectset as _s

class _MST:
    def __init__(self, *args, **kwwords):
        pass

    def generic_mst(self, g: _g.Graph, w):
        '''
        通用最小生成树算法

        Args
        ===
        `g` : 图G=(V,E)

        `w` : 图的权重

        Doc
        ===
        # A = []

        # while A does not form a spanning tree

        #    do find an edge (u,v) that is safe for A (保证不形成回路)

        #       A <- A ∪ {(u, v)}

        # return A

        '''
        A = ['generic mst']
        g.edges.sort()
        return A

    def mst_kruskal(self, g: _g.Graph, w):
        '''
        最小生成树的Kruska算法
        Args
        ===
        `g` : 图G=(V,E)

        `w` : 图的权重
        '''
        s = _s.Set()
        A = []
        for v in g.veterxs:
            s.make_set(v)
        g.edges.sort()
        for e in g.edges:
            (u, v) = g.getvertexfromedge(e)
            uset = s.find(u)
            vset = s.find(v)
            if uset != vset:
                A += [(u.key, v.key)]
                s.union(uset, vset)
        return A

__mst_instance = _MST()
generic_mst = __mst_instance.generic_mst
mst_kruskal = __mst_instance.mst_kruskal

def test_mst_generic():
    w = 2
    g = _g.Graph()
    g.clear()
    g.addvertex(['a', 'b', 'c', 'd'])
    g.addedgewithweight('a', 'b', 2)
    g.addedgewithweight('a', 'd', 3)
    g.addedgewithweight('b', 'c', 1)
    print('邻接表为')
    _g._print_inner_conllection(g.adj)
    print('邻接矩阵为')
    print(g.matrix)
    print('图G=(V,E)的集合为')
    _g._print_inner_conllection(g.edges)
    print(generic_mst(g, w))
    print('边按权重排序后图G=(V,E)的集合为')
    _g._print_inner_conllection(g.edges)
    del g

def test_mst_kruskal():
    g = _g.Graph()
    g.clear()
    g.addvertex(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])
    g.addedgewithweight('a', 'b', 4)
    g.addedgewithweight('b', 'c', 8)
    g.addedgewithweight('c', 'd', 7)
    g.addedgewithweight('d', 'e', 9)
    g.addedgewithweight('a', 'h', 8)
    g.addedgewithweight('b', 'h', 11)
    g.addedgewithweight('c', 'i', 2)
    g.addedgewithweight('i', 'h', 7)
    g.addedgewithweight('h', 'g', 1)
    g.addedgewithweight('g', 'f', 2)
    g.addedgewithweight('f', 'e', 10)
    g.addedgewithweight('d', 'f', 14)
    g.addedgewithweight('c', 'f', 4)
    g.addedgewithweight('i', 'g', 4)
    print('边和顶点的数量分别为:', g.edge_num, g.vertex_num)
    print('邻接表为')
    _g._print_inner_conllection(g.adj)
    print('邻接矩阵为')
    print(g.matrix)
    print('最小生成树为：')
    mst_list = mst_kruskal(g, 1)
    _g._print_inner_conllection(mst_list)

def test():
    '''
    测试函数
    '''
    test_mst_generic()
    test_mst_kruskal()

if __name__ == '__main__':
    print('test as follows')
    test()
else:
    pass

```

[Github Code](https://github.com/Peefy/CLRS_dugu_code-master/blob/master/src/chapter23)
