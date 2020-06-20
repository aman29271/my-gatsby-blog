---
title: "Secret of Array's shallow and deep cloning"
date: "2020-04-29"
draft: false
thumbnail: "../thumbnails/js.png"
tags:
  - "javascript"
---

Let's do a quick test. Evaluate the script given below.

```javascript
let arr = [{ a: 1 }]
let arr1 = arr
arr1.a = 2
// evaluate this
console.log(arr.a)
```

Okay, Now that I guess you have probably think of answer. Let me tell you my answer when i first encountered this problem. It was `1`. But it's not correct. Correct answer is 2. Let me explain why?.

## Introduction

You might find this answer unusual if you are coming from other programming language. In Javascript, There are two types of values.

- `Simple values` aka primitives like String, Number, undefined, Boolean, Symbol, null are always assigned/passed by value-copy. Let's illustrate.

```js
var a = 2
var b = a // `b` is always a copy of the value in `a`
b++
a // 2
b // 3
```
In the above snippet, because 2 is a scalar primitive, `a` holds one initial copy of that value, and `b` is assigned another copy of the value. When changing `b` , you are in no way changing the value in `a` .

- `Compound values` like Object, Array, Function always create a copy of reference on assignment or passing.

```js
var c = [1,2,3]
var d = c // `d` is a reference to the shared `[1,2,3]` value
d.push( 4 )
c // [1,2,3,4]
d // [1,2,3,4]
```
But here, both `c` and `d` are separate references to the same shared value [1,2,3] , which is a compound value. It’s important to note that neither `c` nor `d` more “owns” the [1,2,3] value. both are just equal peer references to the value. So, when using either reference to modify ( .push(4) ) the actual shared array value itself, it’s affecting just the one shared value, and both references will reference the newly
modified value [1,2,3,4].

### Explaination

Now that you have some basic knowledge of Javascript. Let's do some experiments on object also.

```js
var obj = {name:"bob"}
obj1 = obj //  Here, creates new reference --> {name:"bob"} 
obj1.name = "alex" // It will modify the original Object property
console.log(obj.name) // alex  Note:- Obj still points to same value
obj= {name: "baz"} //  reassigns `obj` to point to a new object
// now both variables point to different values  
console.log(obj1.name) // alex   obj1 points --> {name:"alex"}
console.log(obj.name) // baz    obj points --> {name: "baz"}
```
In above snippet, when assigning a Object to a variable. The variable stores a reference to the object. In this case, `obj` and `obj1` points to same value. It should also be noted that we are not creating another fresh copy of the object. So, modifing one property will change the original value and reflects in all of its references. Assigning another completely new object forces the variable to point to new value. And Now, Those two references are completely independent of each other.

So, the question arises how can we assign a clone copy of an object to another variable. We can achieve this by using `Object.assign` method or `JSON.parse`. Let's have a look at both of these.

```js
// Using Object.assign

var obj = {name: "alex"}
var obj1 = Object.assign({},obj) // creates a clone of object
// let's verify
obj === obj1 // false
obj.name = "bob"
console.log(obj1.name) // alex
```
Here, We have created a completely new object which is a clone of `obj` and passes it's reference to variable to `obj1`. So, if those object are completely different then changing one's property will not affect another variable. And Yes, This is happened. So, those variables keeps a reference of completely different object and seperate from each other. 

One of the way to check whether two variables points to same value or not is by using `===` operator. As I did in above snippet.

```js
// Using JSON.parse and JSON.stringify

var obj = {name: "alex"}
var obj1 = JSON.parse(JSON.stringify(obj)) // creates a clone of object
// let's verify
obj === obj1 // false
obj.name = "bob"
console.log(obj1.name) // alex
```
Difference between the above two is that JSON.parse() method destroys the Object inheritance chain if the object is created using constructor while Object.assign() preserve the inheritance chain and reflects it in the cloned object also.