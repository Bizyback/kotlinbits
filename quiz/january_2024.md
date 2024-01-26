---
sidebar_position: 1
title: January 2024
---

# The Challenge #1
Understanding infix function and member references

### Question
```kotlin
import junit.framework.TestCase.assertEquals

/**
 * Without changing anything in the main function. 
 * Ensure all the test cases pass
 */

data class Alphabet(val value: Char, val position: Int)

val alphabets = listOf(
    Alphabet('K',11), Alphabet('L', 12), 
    Alphabet('M', 13), Alphabet('N', 14)
)

fun main() {
    
    /**
     * Ground Rules : 
     * The pair's second value should be generic
     **/
    assertEquals(
     "KotlinConf'24 Global Nairobi Edition",
     "KotlinConf'23 Global" correct Pair("23",24) merge " Nairobi Edition" 
    )

    /**
     * Ground Rules : 
     * The function should be an expression
     * The function should use a member reference
     **/
    assertEquals(
        listOf(11,12,13,14),
        alphabets.years() 
    )

    println("Everything Passed!")
}

```

### Solution
<details>
  <summary>Toggle me!</summary>
  You thought you could get the easy way out?
  😉 😜 😉 😜 😉 😜 
  Come back later, for the solution 
</details>