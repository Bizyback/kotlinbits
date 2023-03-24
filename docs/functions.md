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
- we use the `fun` keyword to declare a function, isn't it funny and fun 🕺 💃
- this is followed by the function name which in this case is `hello`
- adding _brackets_ `()` to encase our parameters and
- finally adding _curly brackets_ `{}` for our function body
:::

_But what about using it?_
```kotlin
hello()
// Prints > Hello!
```

_Another thing, you've mention parameters in the info section there, what are they?_

### Parameters
> **<mark>Parameters</mark>** are placeholders declared in a function, __*they don't have concrete values*__

> **<mark>Arguments</mark>** on the other hand are now the actual values passed to a function when it is being used

_Umm okay_ 🤨 _do you have an example?_
```kotlin
fun hello(name: String){ // name here is a PARAMETER
    println("Hello $name!")
}

hello("Kotlin") // "Kotlin" is an argument
// Prints > Hello Kotlin!
```
:::info
- `name` is declared as a parameter
- `"Kotlin"` is now an argument for the name parameter
- parameters are declared by specifiying the name of the parameter followed by the type
- you can declare more than one parameter for any function, just specify the name and type followed by a comma
:::

_What if I want to add more than one parameter?_
```kotlin
fun hello(greeting: String, name: String){
    println("$greeting $name!")
}

hello("Jambo", "Kotlin")
// Prints > Jambo Kotlin!
```
### Default Arguments
_What else should I know?_

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
It's a good practise to declare parameters with default values last in a function declaration. You'll thank me later :wink:
:::

But an even better feature to help in this is `named arguments`...

### Named Arguments
_What exactly are named arguments?_
Work in progress... (come back later)