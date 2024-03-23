---
sidebar_position: 2
title: January 
---

# The Challenge #1
Understanding how to use infix function and member references

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
> Add this after the main function

```kotlin
infix fun String.correct(pair: Pair<String, Int>) = this.replace(pair.first, pair.second.toString())

infix fun String.merge(value: String) = this + value

fun List<Alphabet>.years() = map(Alphabet::position)
```