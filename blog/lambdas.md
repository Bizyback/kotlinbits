---
slug: lambdas
title: Lambdas
authors: [mambo]
date: 2023-01-09T10:00
tags: [functions, lambda]
---
### Overview

Lambda expressions in full, play a very important role in the day-to-day development cycle of any Kotliner. This article gets you familiarised with what they are and how to use them to better enhance your developer experience.

### Definition

> A lambda expression is a ***<mark> function literal </mark>*** . 
 
But what is a function literal?  
It is a function that is **not declared** but it is **passed immediately** as an expression.

```kotlin
// Declared
fun add(a: Int, b: Int) = a + b

// Lambda
val sum = { a: Int, b:Int -> a + b }
```

In the example above `add` is a declared and named function while `sum` is assigned to an expression, that is a function literal a.k.a `lambda`. 

What is the syntax of a lambda expression?

### Syntax

```kotlin
val isEven : (Int) -> Boolean = { number: Int -> 
    // body
    number % 2 == 0
}
```

The lambda expression in the above code is enclosed with curly braces `{}` .

* After the curly braces, you declare a parameter
    
* The body of the expression comes after `->`
    
* The last line of the expression will be treated as the return value.
    

**NOTE:** If the last line is not a value the expression will not return any value and the return type will be of `Unit`. 

Show me some examples 😉😉	

### Examples

* Full Syntax (all types declared)
    
    ```kotlin
    val addTwo : (Int, Int) -> Int = { a:Int, b:Int -> a + b }
    println(addTwo(1, 2))
    // 3
    println(addTwo.invoke(3,4)) 
    // you can also call it using invoke
    // 7
    ```
    
* Omitting type declarations
    
    ```kotlin
    val addTwo = { a:Int, b:Int -> a % 2 == 0 }
    println(addTwo(1, 3))
    // 3
    ```
    
* Without return type
    
    ```kotlin
    val addTwo = { a:Int, b:Int -> println("${a + b}") }
    println(addTwo(1,3))
    // 3
    // Kotlin.Unit
    ```
    
    *In the function above it prints `3` but also prints the return value of the function which is `Unit`*
    
* As a function parameter
    
    ```kotlin
    fun String.takeIfOrNull (block : (String) -> Boolean) : String? {
        return if(block(this)) this else null
    }
    println("Hello".takeIfOrNull({ value -> value.length > 3 }))
    // Hello
    println("Kot".takeIfOrNull({ value -> value.length > 3 }))
    // null
    ```
    
    *In the function above it prints `Hello` since the passed lambda expression returns true. But we can write the call for `takeIfOrNull` even simpler. How?*
    
* Trailing lambdas
    
    ```kotlin
    println("Hello".takeIfOrNull { value -> value.length > 3 })
    // Hello
    ```
    
    *If the last parameter of a function is a function then the passed lambda can be placed outside the brackets. If the function takes only a function then the brackets can be completely omitted like in the example above. Could we remove more boilerplate? YES!*
    
* Accessing parameter values
    
    ```kotlin
    println("Hello".takeIfOrNull { it.length > 3 })
    // Hello
    ```
    
    *If there is only one parameter the compiler can help us omit the parameter declaration and the arrow (`->`). We can thus access the parameter under the name `it`.*
    

### Caveats

* Implicit parameter `it` of enclosing lambda is shadowed
    
Sometimes you might have a lambda inside another lambda, when this happens it's good to specify the parameter name to avoid shadowing `it`.
    
```kotlin
// Before
listOf(1,2,3).map { 
    it.toString() + listOf(3,5,7).map { it.plus(1) } 
}

// After
listOf(1,2,3).map { 
    it.toString() + listOf(3,5,7).map { value -> value.plus(1) } 
}
```
    
* Unused variables
    
In some cases the expression can have more than one parameter but you only want to use one. You can replace the name with an underscore to show it's unused.
    
```kotlin
// Before
listOf(Pair(true, 1),Pair(true, 2)).map { (bool, number) -> 
    number + 1 
}
    
// After
listOf(Pair(true, 1),Pair(true, 2)).map { (_, number) -> 
    number + 1 
}
```
    
* Returning values
    
In other cases, you may want to specify the return value of a lambda expression. In such cases using the return keyword would suffice but ensure you specify the name of the lambda to avoid exiting the parent function call.
    
```kotlin
// Before
listOf(Pair(true, 1),Pair(true, 2)).map { (bool, number) -> 
    if(bool) return number
    val value = ...
    ...
    return value     
}
    
// After
listOf(Pair(true, 1),Pair(true, 2)).map { (bool, number) -> 
    if(bool) return@map number
    val value = ...
    ...
    return@map value     
}
```
    

### Conclusion

With that you can try the inbuilt lambdas provided by Kotlin or create your own, just remember the caveats. See you in the next article!
