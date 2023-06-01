---
sidebar_position: 3
title: Named Arguments
---

# Named Arguments
### _What exactly are named arguments?_

It's a way of saying exactly what parameter you're targeting when passing a value or values to a function

### _How does it work ?_
```kotlin
fun read(book: String, line: Int, library: String = "any", page: Int = 1,){
    println("Library = $library | Book = $book | Page = $page | Line = $line")
}

read(book = "Think Fast", page = 120)

> Library = any | Book = Think Fast | Page = 1 | Line = 120
```

> In the example above `book` and `page` are named arguments
> You're telling the compiler explicitly the value
> for `book` is **<mark>"Think Fast"</mark>** and for `page` is **<mark>120</mark>**

:::tip
when you declare a named argument ensure that every argument after it is also named to avoid future issues and confusion
:::

### _Okay, but what is it's usecase?_
Named arguments helps when a funtion has too many arguments and you want to make it more readable among other things. Let's look at an example, say we have a list and we want to print it's contents

```kotlin
val list = listOf(1,2,3)
println(list.joinToString(",", "(", ")"))
```

Without printing the value you wouldn't know what is the separator and what encases the list. So here's where named arguments come along

```kotlin
val list = listOf(1,2,3)
println(list.joinToString(separator = ",", prefix = "(", postfix = ")"))
```
Now it is clear that the list **starts** with an opening parenthesis `(` and after each item it adds a comma `,` as a **separator** finally **finishes** with the closing parenthesis `)` to print : 

```kotlin
> (1,2,3)
```

You can find more usages in other bits, so keep on browings and add a reaction below or comment :wink: :wink:...
