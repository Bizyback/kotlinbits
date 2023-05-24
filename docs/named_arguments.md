---
sidebar_position: 3
title: Named Arguments
---

# Named Arguments
### _What exactly are named arguments?_

It's a way of saying exactly what parameter you're targeting when passing a value or values to functions

### _How does it work ?_
```kotlin
fun read(book: String, line: Int, library: String = "any", page: Int = 1,){
    println("Library = $library | Book = $book | Page = $page | Line = $line")
}

read(book = "Think Fast", page = 120)
// Prints > Library = any | Book = Think Fast | Page = 1 | Line = 120
```

> In the example above `book` and `page` are named arguments, you're telling the compiler the value
> for `book` is "Think Fast" and for page is `120`

:::tip
when you declare a named argument ensure that every argument after it is also named to avoid future issues
:::

### _Okay, but what is it's usecase?_
It is vastly used in `compose` for example when declaring a `Text` composable among other things...

```kotlin
Card {
    Text(text = "Books")
}
```
And so much more. You'll find it else in koltinbits so keep on browsing...
