---
sidebar_position: 2
---

# Functions

[//]: # (😅 😉 😜 😝 🤭 🤔 🤫 🤨 😒 😬 😮‍💨 😌 😔 🥶 😎 🧐 😕 🥺 😯 😓 🙈 🙊 👌 👆 🤞 👍 👊 👏 🕺 💃)

`Kotlin` has a very powerful support for functional programming. Having that in mind, it is important to know functions really well :wink: and I guess that's why you're here.

### Basic
_How do I write a `kotlin` function?_
```kotlin
fun hello(){
    println("Hello!")
}
```

:::info
- we use the `fun` keyword to declare a function, isn't it **funny** and **fun** 🕺 💃
- this is followed by the `function name` which in this case is `hello`
- adding _parenthesis_ `()` that will contian our parameters
- finally adding _braces_ `{}` for our function body
:::

_But what about using it?_

```kotlin
hello()

> Hello!
```

_Another thing, you've mention parameters in the info section there, what are they?_

### Parameters
> **<mark>Parameters</mark>** are placeholders declared in a function, __*they don't have concrete values*__

> **<mark>Arguments</mark>** on the other hand are now the actual values passed to a function when it is being used

_Umm okay_ 🤨 _do you have an example?_
```kotlin
fun markAsRead(book: String){ // book here is a PARAMETER
    println("Hello $book!")
}

markAsRead("Kotlin") // "Kotlin" is an ARGUMENT
> Hello Kotlin!
```
:::info
- `book` is declared as a **<mark>parameter</mark>** (placeholder)
- `"Kotlin"` is the **<mark>argument</mark>** for the **`book`** parameter
- parameters are declared by specifiying the name of the parameter followed by the type
- you can declare more than one parameter for any function, just specify the name and type followed by a comma
:::

_What if I want to add more than one parameter?_
```kotlin
fun hello(greeting: String, name: String){
    println("$greeting $name!")
}

hello("Jambo", "Kotlin")
> Jambo Kotlin!
```
### Usecases

Functions are used everywhere in the kotlin language, an example is creating any list

```kotlin
fun main(){
    val list = listOf(1,2,3)
    println(list)
}

> [1,2,3]

```

In the example above, `listOf` and `println` are examples of Kotlin functions found in the standard library.

> There's so much more you can learn about functions like [named arguments](./named_arguments.md) and [default values](default_values.md) just to mention a few.