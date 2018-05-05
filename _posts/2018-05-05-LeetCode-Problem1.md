---
layout: post
title: "用C++, C#, Java, Python 四种编程语言刷LeetCode算法题 Problem 1: Two Sum"
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
        vector<int> twoSum(vector<int>& nums, int target) {
            vector<int> result;
            result.push_back(0);
            result.push_back(0);
            auto count = 0;
            for(auto num : nums)
            {
                count++;
            }
            for(auto i = 0;i < count;++i)
            {
                for(auto j = i + 1;j < count;++j)
                {
                    if(nums[i] + nums[j] == target)
                    {
                        result[0] = i;
                        result[1] = j;
                    }
                }
            }      
            return result;
        }
    };
}

```

## C# Solution

```csharp
public class Solution
    {
        public int[] TwoSum(int[] nums, int target) 
        {      
            var dict = new Dictionary<int, int>();
            for (int i = 0; i < nums.Length; i++)
            {
                if(dict.TryGetValue(target - nums[i], out var j) == true)
                {
                    var result = new int[]{0, 0};
                    result[0] = j;
                    result[1] = i;
                    return result;
                }
                if(dict.ContainsKey(nums[i]) == false)
                {
                    dict.Add(nums[i], i);
                }
            }    
            return null;    
        }

    }

```

## Java Solution

```java
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        result[0] = 1;
        result[1] = 2;
        ArrayList<Integer> list = new ArrayList<Integer>(10);
        for(int num : nums)
        {
            list.add(num);
        }
        Collections.sort(list);
        int num = nums.length;
        for(int i = 0;i < num;++i)
        {
            for(int j = i + 1;j < num; ++j)
            {
                if(nums[i] + nums[j] == target){
                    result[0] = i;
                    result[1] = j;
                }
            }
        }
        return result;
    }
}
```

## Python Solution

```python
class Solution:

    isfind = False

    def twoSum(self, nums, target):
        """
        :type nums: List[int]

        :type target: int

        :rtype: List[int]
        """
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]

        # 使用递归会溢出
        # return self.__twoSum(nums, n - 1, target)
   
    def __twoSum(self, nums, index, target):
        if index >= 0 and self.isfind == False:
            result = self.__twoSum(nums, index - 1, target)
            if result != None:
                return result
        for i in range(index):
            self.isfind = (nums[i] + nums[index]) == target
            if self.isfind == True:
                return [i, index]
```