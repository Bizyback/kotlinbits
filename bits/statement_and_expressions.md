---
title: Statement or Expression
sidebar_position: 5
---

### _What is the difference between a statement and expression?_

A major difference is an expression has an actual value while a statement does have one.

| Title | Valued | Examples |
|:-------|:-------|:----------|
| <mark> Statement </mark> | **does not have** it's own value | `assignments` `while` `do-while` |
| <mark> Expression </mark> | **has** a value | `when` `if-else` `try-catch`  |

### _What difference does it make_?
You can assign a variable to expressions but you can't do that for statements. For example :

```kotlin
val person = if (true) "Koltiner" else "Droid" // valid

var message = "Hello"
val value = message = "Bonjour" //Assignments are not expressions, and only expressions are allowed in this context
```

### _Why is this important to know?_
Understanding the difference will save you from creating unwanted variables which can lead to errors and also help minimise using more words than needed (_verbosity_). Case and point is when an `if` expression as used to assign a value to a variable

```kotlin
val message: String
if (someCondition) message = "Hello" else message = "Bonjour"
println(message)
```

> In the example above we have repeated the variable `message` three times, this is using more words than needed. By understanding the difference between statements and expressions we can refactior the above code to remove redundancy.

```kotlin
val message = if (someCondition) "Hello" else "Bonjour"
println(message)
```

> This also works for `when` & `try-catch`

```kotlin
val message = when(someCondition){
    true -> "Hello"
    false -> "Bonjour"
}

val price = try {
    "100o".toInt() // think of this as converting a variable to int
} catch (e: Exception){
    0
}
```

### _Where else can this work?_
This is extremely useful when working with a function that has an expression body.

```kotlin
fun getMessage(someCondition: Boolean) = if (someCondition) "Hello" else "Bonjour"
```

> This is a great way to express your functions in a clear and concise manner.

You can find more usages in other bits, keep on browsing and add a reaction below or comment :wink: :wink:...
