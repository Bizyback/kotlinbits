---
sidebar_position: 3
title: March 
---

#  Learnings
Understanding loops and recursion

### Question
```kotlin
import junit.framework.TestCase.assertEquals

/**
 * Without changing anything in the main function and Node class
 * Ensure all the test cases pass
 */

data class Node(val value: Int, var next: Node? = null) 

fun main() {
    
    fun show(node: Node): List<Int> {
        val list = mutableListOf<Int>()
        var current: Node? = node 
        while(current != null){
            list.add(current?.value ?: 0)
            current = current?.next
        }
        return list
    }

    var count = 1
    val head = Node(value = count)
    var current: Node = head
    while (count < 5){
        count++
        val update = Node(value = count)
        current.next = update
        current = update
    }
    
    /**
     * Ground Rules : 
     * the inverse function should reverse the Linked List using recursion 
     **/
    assertEquals(listOf(5,4,3,2,1), show(reverse(head)))

    /**
     * Ground Rules : 
     * the inverse function should reverse the Linked List without using recursion 
     **/
    assertEquals(listOf(5,4,3,2,1), show(inverse(head)))

    println("Everything Passed!!!")
}
```

### Solution
<details>
  <summary>Toggle me!</summary>
  You thought you could get the easy way out?
  😉 😜 😉 😜 😉 😜 
  Come back later, for the solution 
</details>