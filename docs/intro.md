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
What do use to print to the standard output in `Kotlin` 🤔 ?

We have two functions to do this
- `print` which prints the arguments passed to the function
- `println` which does the same thing as `print` but adds a line break 

### Statement
Oh okay, so how do I use `print` 🤔 ?

```kotlin
  print("Jambo") // Prints "Jambo"
```

### New Line
Hmmm, is using `println` the same 🙈 ?
```kotlin
  println("Hello") 
  print("Welcome to KotlinBits") 

  // Prints
  // "Hello"
  // "Welcome to KoltinBits"

```

> Remember with `println` the next printed statement will go on the next line

### String Template
Looks simple enough, what if I have a variable and want to print it 🤷 ?
```kotlin
  val name = "Jambo"
  print("Hi $name") // Prints "Hello Jambo"
```
> You can use the dollar sign before your variable name

:::info
That is an example of a **`template expression`**, evaluated expressions added to a string
:::

Oh wow, wait! Can this work for any expression 🥺 ?
> It depends, but it pretty much  works most for expressions

```kotlin
  data class Vehicle(
    val name : String = "matatu", 
    val capacity: Int = 300
  )
  
  val vehicle = Vehicle()

  println("VEHICLE : $vehicle") 
  // Prints "VEHICLE : Vehicle(name=matatu, capacity=300)"
  
  println("NAME : ${vehicle.name}") // notice the curly braces
  // Prints "NAME : matatu" 
  
  println("CAPACITY : ${vehicle.capacity * 12}") 
  // Prints "CAPACITY : 3600" 
```

_Wow 😲, that was insightful! But I have lots of questions..._

Hold your horses 🤣 😂 that's it, you've learned your first `Kotlin` bit. Browse for more...