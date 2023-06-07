---
title: Equality (== or ===)
sidebar_position: 7
---

### _Why do we have two equality checks?_
Because sometimes you want to check more than if the two object have the same value.

> == checks if two objects have the same value

> === checks if two objects have the same reference

| Type | Check | Name |
|:-------|:-------|:----------|
| <mark> == </mark> | same **value** | `structural` |
| <mark> === </mark> | same **reference** | `referential`  |

### What do you mean?
Let's use an example 
```kotlin
data class Author(val name: String = "Yoda")

val first = Author()
val second = Author()

println(first == second)  // structural equality check

> true
```

> With <mark> structural</mark> equality it checks if the values in the two classes are the same, in this case it checks if second is of type `Author` and if `second.name` is the same with `first.name`. That's what we mean when we say it checks they have the same `value`

### _How does it work_?
> When we call `==` for any two objects it is translated to `first?.equals(second) ?: (second === null)` under the hood 

- it checks if `first` is null
- if `first` **IS null**, it checks if `second` also references null
- if `first` **IS NOT null** it checks if all the values in `first` are the same with all the values in `second`

### _What about reference checks?_
Okay, let's go back to our example
```kotlin
data class Author(val name: String = "Yoda")

val first = Author()
val second = Author()

println(first === second)  // referential equality check

> false
```

> A <mark>referential</mark> check validates if two variables point to the same object in memory. In the case above `first` and `second` point to different objects so it evaluates to `false`. 

What if they point to the same object?
```kotlin
data class Author(val name: String = "Yoda")

val first = Author()
val second = first

println(first === second)  // referential equality check

> true
```
> In this case, `first` and `second` point to the same object in memory, if the `name` property changes for the value both first and second will be updated. And this is what we mean when we say it checks the **_reference_** of two objects.

### _Anything else I should know_ ?
Structural equality checks work different with data classes. That requires a bit of it's own so I'll link it here when ready...

You can find out more in other bits, keep on browsing and add a reaction below or comment :wink: :wink:...