---
title: Block & Expression Body
sidebar_position: 6
---
## _Is there a difference really_?
Yes in `Kotlin` you can represent functions in more than one way. 

> In <mark> Block</mark> the function body is inside braces `{}`

> In <mark> Expressions</mark> the function body is declared as an expression

## _What about an example?_
Let's see how we can declare a function that adds two numbers in more than one way. 

### Block
```kotlin
fun add( a:Int, b:Int) : Int {
    return a + b
}
```

> Notice the function body is inside braces `{}`.

### Expression
```kotlin
fun add(a:Int, b:Int) = a + b
```
> The function can be expressed in one line since the expression `a + b` has a value. The return type is also infered so you don't have to specify it.
>

## Any benefits of this approach?
Before we go about benefits we should remember that

> **As developers we'll read more code than write**

So wouldn't it be helpful if we could express a lot of information but with the fewest words possible? (I know you're nodding in agreement 😆😆) 

> `Kotlin` aims at being **concise**, give a lot of information with few words.

Expression body functions do just that, you can declare what the function should do without a lot of boilerplate, hence making reading faster :wink: :wink:


:::caution
- Expression body functions can only be used with expressions such as `if`, `when` or `try`, they cannot be used with statements.
- Removing the return type only works for functions with expression body, block body functions have to specify the return type and use the keyword `return`
:::

Check out other bits and _try to guess if the functions have block or expression bodies_, don't forget to add a reaction below or comment :wink: :wink:...