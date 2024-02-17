---
sidebar_position: 3
title: February 
---

# The Challenge #2
Understanding how arrays work & their overall time complexity

### Question
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

### Code
```kotlin
import kotlin.test.*
/**
* Without changing anything in the main make all test cases pass
*/
fun main() {
    
    val list = listOf(
        Pair(intArrayOf(0,1,0,3,12), intArrayOf(1,3,12,0,0)),
        Pair(intArrayOf(0), intArrayOf(0)),
        Pair(intArrayOf(0,1,0), intArrayOf(1,0,0)),
        Pair(intArrayOf(88,4,2,6), intArrayOf(88,4,2,6)),
        Pair(intArrayOf(9,3,4,0,0,4,6), intArrayOf(9,3,4,4,6,0,0)),
    )
    
    list.forEach{ (arr, expected) -> 
        println("-".repeat(30))
        println("Expected -> [${expected}]")
        println("Actual   -> [${moveZeroes(arr)}]")
        assertContentEquals(
            expected,
            moveZeroes(arr),
        )
    }
    
    println("Everything Passed!")
}

fun moveZeroes(nums: IntArray): IntArray {
    // add your solution here
}
```

### Solution
<details>
  <summary>Toggle me!</summary>
  You thought you could get the easy way out?
  😉 😜 😉 😜 😉 😜 
  Come back later, for the solution 
</details>
