---
title: "Secret of Javascript Array, shallow and deep cloning"
date: "2020-04-29"
draft: true
thumbnail: "../thumbnails/js.png"
tags:
  - "javascript"
---

The first time I got introduced to this was when I have to spend almost two days figuring what's wrong in my code which looks something like this.

```javascript
let arr = [{ entry: "./a.js", plugins: [{ key: value }] }];
let someAnotherArray = arr;
const returnedArray= someFunction(arr);
// inside someFunction I want to keep that `arr` Array untouched and return a new Array i.e returnedArray.
function someFunction(arr){

}

```
