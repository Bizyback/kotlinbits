---
sidebar_position: 1
---

# Welcome

> _Great things are done by a series of small things brought together_

This is one of the best statements by _Vincent Van Gogh_ ! Echoing his words, our main focus will be on **bits**(small great things) that the `Kotlin` language does 

:::tip
These bits are not structured, so you can jump to any bit and start learning
:::

Let's start with a simple example

## Printing 
_What do use to print to the standard output in `Kotlin` 🤔 ?_

We have two functions to do this
- `print` which prints the arguments passed to the function
- `println` which does the same thing as `print` but adds a line break at the end

### Statement
_Oh okay, so how do I use `print`_ 🤔 ?

```kotlin
  print("Jambo") 
  > "Jambo"
```

### New Line
_Hmmm, is using `println` the same_ 🙈 ?
```kotlin
  println("Hello") 
  print("Welcome to KotlinBits") 

  > "Hello"
  > "Welcome to KoltinBits"

```

> Remember with `println` it adds a new line at the end so the next printed statement will go on the next line

### String Template
_Looks simple enough, what if I have a variable and want to print it_ 🤷 _?_
```kotlin
  val name = "Jambo"
  print("Hi $name") 
  
  > "Hello Jambo"
```
> You can use the dollar sign before your variable name

:::info
That is an example of a **`template expression`**, evaluated expressions added to a string
:::

_Oh wow, wait! Can this work for any expression_ 🥺 ?
> It depends, but it pretty much  works most for expressions

```kotlin
  data class Library(
    val name : String = "Sokrates", 
    val books: Int = 300
  )
  
  val library = Library()

  println("Library : $library") 
  > "Library : Library(name=Sokrates, books=300)"
  
  println("NAME : ${library.name}") // notice the curly braces
  > "NAME : Sokrates" 
  
  println("BOOKS : ${library.books * 12}") 
  > "BOOKS : 3600" 
```

_Wow 😲, that was insightful! But I have lots of questions..._

Hold your horses 🤣 😂 that's it, you've learned your first `Kotlin` bit. Browse for more...