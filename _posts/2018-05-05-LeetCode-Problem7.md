---
layout: post
title: "用C++, C#, Java, Python 四种编程语言刷LeetCode算法题 Problem 7 : Reverse Integer"
description: "用C++, C#, Java, Python 四种编程语言刷LeetCode算法题"
categories: [LeetCode]
tags: [LeetCode]
redirect_from:
  - /2018/05/05/
---

<img src="https://github.com/Peefy/PeefyLeetCode/blob/master/doc/1.TwoSum/problem.png?raw=true"/>

## C++ Solution

```c++
class Solution {
public:
    int reverse(int x) {
        char str[32] = {'\0'}; 
        string restr = "";
        sprintf(str, "%d", x);
        auto n = 0;
        for(auto i = 0;str[i] != '\0' ;++i)
        {
            ++n;
        }
        if(str[0] != '-')
        {
            for(auto i = 0;i < n;++i)
            {
                auto j = n - i - 1;
                restr += str[j];
            }
        }
        else
        {
            restr += "-";
            for(auto i = 0;i < n - 1;++i)
            {
                auto j = n - i - 1;
                restr += str[j];
            }
        }
        try
        {
            auto x = atoll(restr.c_str());
            if(x > 2147483648 || x <= -2147483648)
            {
                return 0;
            }
            return (int)x;
        }
        catch(exception& ex)
        {
            return 0;
        }
        
    }
};

```

## C# Solution

```csharp
 public class Solution
    {
        public int Reverse(int x) 
        {
            var str = x.ToString();
            var n = str.Length;
            var restr = "";
            if(str[0] != '-')
            {
                for(var i = 0;i < n;++i)
                {
                    var j = n - i - 1;
                    restr += str[j];
                }
            }
            else
            {
                restr += "-";
                for(var i = 0;i < n - 1;++i)
                {
                    var j = n - i - 1;
                    restr += str[j];
                }
            }
            try 
            {
                return System.Convert.ToInt32(restr);
            }
            catch
            {
                return 0;
            }
        }
    }

```

## Java Solution

```java
class Solution {
    public int reverse(int x) {
        String xstr = new Integer(x).toString();
        char[] arr = xstr.toCharArray();
        int n = arr.length;
        char[] rearr = new char[n];
        if(arr[0] != '-'){
            for(int i = 0;i < n;++i){
                int j = n - i - 1;
                rearr[i] = arr[j];
            }
            try {
                return new Integer(new String(rearr));
            } catch (Exception e) {
                return 0;
            }
        }
        else{
            rearr[0] = '-';
            for(int i = 0;i < n - 1;++i){
                int j = n - i - 1;
                rearr[i + 1] = arr[j];
            }
            try {
                return new Integer(new String(rearr));
            } catch (Exception e) {
                return 0;
            }
            
        }
    }
}
```

## Python Solution

```python
class Solution:
    def reverse(self, x):
        x_str = str(x)
        n = len(x_str)
        re_str = ''
        if x_str[0] != '-':
            for i in range(n):
                re_str += x_str[n - i - 1]
            return self.judge(int(re_str))
        else:
            re_str += '-'
            for i in range(n - 1):
                re_str += x_str[n - i - 1]
            return self.judge(int(re_str))

    def judge(self, x):
        if x > 2147483648 or x <= -2147483648:
            return 0
        return x
```
