---
sidebar_position: 4
title: Default Values
---

### _I've heard this somewhere?_

So in `Kotlin` you can give a parameter a default value when declaring it in a function.
> add an equal sign (`=`) after the type declaration and pass the default value.

### _Wait what! Show me how?_
```kotlin
fun hello(greeting: String = "Jambo", name: String){
    println("$greeting $name!")
}

hello("Kotlin")

> Jambo Kotlin!
```
In the example above the `greeting` parameter has a default value of `"Jambo"`

:::info
You can ignore passing a value for a parameter that has a default value, like for `hello("Kotlin")` the first argument hasn't been passed since it has a default value.
:::

### _So I tried it with this but it's not working, why?_

```kotlin
fun read(library: String = "any", book: String, page: Int = 1, line: Int){
     println("| Library = $library | Book = $book | Page = $page | Line = $line")
}

read("Think Fast", 120)

> The integer literal does not conform to the expected type String
> No value passed for parameter 'line'
```

> Since there are two values with default arguments spread through the function the compiler cannot determine which argument is for which parameter, so it expects us to pass all the arguments for the argument.

A neat refactor is moving all parameters with default values at the end of the function declaration.
```kotlin
fun read(book: String, line: Int, library: String = "any", page: Int = 1,){
    println("Library = $library | Book = $book | Page = $page | Line = $line")
}

read("Think Fast", 120)
> Library = any | Book = Think Fast | Page = 1 | Line = 120
```
:::tip
It's a good practice to declare parameters with default values last in a function declaration.
You'll thank me later :wink:
:::

### Where else can I use it?

You can also use it for class declaration

```kotlin
data class Library(val name: String, val books: Int = 0)

val library = Library("Plato")
```

In the example above the `books` has a default value of 0, so when creating a new Library instance we don't need to pass any value for `books`.

### Where is this used?
This is one of the most widely used feature of the Koltin language. 

> **It helps in removing a lot of redundant overloading functions.**

Instead of overloading functions in an object you can specify default values. Let's look at an example, suppose we have a `Library` class and we'd like a user to create an instance passing the name only, books only or none of the above, how can we do that?

```kotlin
data class Library(val name: String = "", val books: Int = 0)

val lib1 = Library("Plato's Library") // name only
val lib2 = Library(books = 300) // books only
val lib3 = Library() // no name or book
```
With default values we've covered all cases without creating overloading constructors.

:::info
You'll notice for the books only constructor we specified the name of the paramter using a feature called [named arguments](named_arguments.md) you'll love this feature...
:::

You can find more usages of this in other bits, so keep on browsing and add a reaction or comment below :wink: :wink:...