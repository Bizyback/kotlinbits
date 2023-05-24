---
sidebar_position: 4
title: Default Values
---

### Default Arguments
_I've heard this somewhere?_

So in `Kotlin` you can give a parameter a default value, all you have to do is add an equal sign (`=`) after declaring the type and pass the default value.

_Wait what! Show me how?_
```kotlin
fun hello(greeting: String = "Jambo", name: String){
    println("$greeting $name!")
}

hello("Kotlin")
// Prints > Jambo Kotlin!
```
In the example above the `greeting` parameter has a default value of `"Jambo"`

:::info
You can ignore passing a value for a parameter that has a default value, like for `hello("Kotlin")` the first argument hasn't been passed.
:::

_So I tried it with this but it's not working, why?_

```kotlin
fun read(library: String = "any", book: String, page: Int = 1, line: Int){
     println("| Library = $library | Book = $book | Page = $page | Line = $line")
}

read("Think Fast", 120)
// Prints Error >
// The integer literal does not conform to the expected type String
// No value passed for parameter 'line'
```

> Since there are two values with default arguments spread through the function the compiler cannot determine which argument is for which value, so it expects us to pass all the arguments for the argument.

We can refactor by moving all parameters with default values at the end of the function declaration.
```kotlin
fun read(book: String, line: Int, library: String = "any", page: Int = 1,){
    println("Library = $library | Book = $book | Page = $page | Line = $line")
}

read("Think Fast", 120)
// Prints > Library = any | Book = Think Fast | Page = 1 | Line = 120
```
:::tip
It's a good practice to declare parameters with default values last in a function declaration.
You'll thank me later :wink:
:::

But an even better feature is [`named arguments`](named_arguments.md)...
