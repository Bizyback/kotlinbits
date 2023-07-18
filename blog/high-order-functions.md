---
slug: sealed-classes
title: High Order Functions
authors: [mambo]
date: 2022-10-25T16:00
tags: [functions, lambda]
enableComments: true
---

# Overview

You've started out in Kotlin or you've been already using it for some time now, but still feel like you aren't using the power of high-order functions to the max. Well, this is the article for you! Let's briefly focus on high-order functions and how they can help you in your development process.

### Definition

> Any function that can take a function as a parameter or return a function

Kotlin treats it functions as `first class` citizens and as such they can be assigned to variables, stored in data structures and even passed to other functions. Any function that can take a function as an argument is classified as a `high order function`.

### Syntax

```kotlin
fun build( block : (parameter: ParameterType) -> ReturnType ){}
```

In the syntax above `build` is our high order function. Let's breakdown it's contents :

###### `block`

This is the parameter name for the build function. Notice the explicit type of this parameter is not a literal or an object but a function represented as `() -> Unit`.

###### `parameter : ParameterType`

Since `block` is a function it can take a parameter/s.

* leave it empty if no parameter is required : `block : () -> ReturnType`
    
* the parameter name is used for and just pass the type : `block : (Type) -> ReturnType`
    

###### `ReturnType`

This is the return type of the `block` function. Since it cannot be inferred it should be explicitly specified. If the function doesn't return any value the you're required to explicitly specify it as `Unit`. This can be represented as `block : () -> Unit`

> We use the function by either `block.invoke()` or `block()`

With that let's see some examples and common use cases.

### Examples

#### without arguments

```kotlin
// declaration
fun hello( block : () -> Unit ) {
    block.invoke() // also block()
}
// usage
fun main() {
    hello( { println("Jambo Kotliner") } )
}
// output
// Jambo Kotliner
```

#### with arguments

```kotlin
// declaration
fun hello( block : (s:String) -> Unit ) {
    block.invoke("Jambo Kotliner") // also block("Jambo Kotliner")
}
// usage
fun main() {
    hello( { greeting ->  println(greeting) } )
}
// output
// Jambo Kotliner
```

#### as a return value

```kotlin
// declaration
fun hello() : () -> Unit  {
    return { println("Jambo Kotliner") }
}
// usage
fun main() {
    val greet = hello()
    greet.invoke() // also greet()
}
// output
// Jambo Kotliner
```

### Usecase

One of the most common use cases for a custom high order function is when making network requests. There are a number of exceptions that can be thrown during any of these requests and without properly handling them our app might crash and fail. This can be prevented using high order functions. Let's look at what's going on under the hood.

```kotlin
data class NetworkResult<T> (
    val success : Boolean,
    val message : String,
    val data : T?
)

suspend fun <T> safeApiCall( request : suspend () -> NetworkResult<T?> ) : NetworkResult<T?> {
    return try {
        val response = request.invoke()
        NetworkResult(success = true, message = "success", data = response)
    } catch (e : Exception) {
        NetworkResult(success = false, message = e.localizedMessage, data = null)
    }
}
```

The `safeApiCall` is our high order function which takes a suspended function `request` as a parameter. IN the function body we try to run `request` (this is the network request) and catch any exceptions thrown, which we can map it to our NetworkResult class avoiding any crashes at runtime.

## Conclusion

With these few tips and tricks you're ready to start using high order functions in your development process. But with great power comes great responsibility and for this case be careful not to use to many of them, they might introduce runtime overhead if you're not careful. Feel free to try it out yourself and leave a comment down below on your thoughts and what you'd like to know next. See you in the next article!