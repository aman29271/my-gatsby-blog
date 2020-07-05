---
title: "Intersection observer Explained"
date: 2020-07-05T10:52:20
draft: true
thumbnail: "../thumbnails/js.png"
categories:
        - "javascript"
tags:
    - "javascript"
---
Intersection Observer is another beautiful browser API introduced recently in modern browsers. If You are previously familiar with MutationObserver API then you might find this a lot similar to that. You might have heard the term Lazy-loading images/videos at some point of time in your life. Well, It's not only limited to lazy loading assets.

### Introduction {#introduction}
<hr/>
<p>Intersection Observer is an API which observe changes for the intersection of target element with ancestor element or with top level document's viewport. It lets us register a callback function which will be executed when the element they wish to monitor enter or exit the ancestor element or viewport or when the target element intersects with requested amount.</p>

<p>One thing the Intersection Observer API can't tell you: the exact number of pixels that overlap or specifically which ones they are; however, it covers the much more common use case of "If they intersect by somewhere around N%, I need to do something."</p>

<p>Whether you're using the viewport or some other element as the root, the API works the same way, executing a callback function you provide whenever the visibility of the target element changes so that it crosses desired amounts of intersection with the root.</p>
<p>The degree of intersection between the target element and its root is the intersection ratio. This is a representation of the percentage of the target element which is visible as a value between 0.0 and 1.0.</p>

### Creating an Intersection Observer {#creating-an-intersection-observer}
<hr>
Okay. So, till now we have learnt a lot about this API lets have a look how to use it. First of All, You need to check if it's supported in your browser by using this snippet.

```js
if('IntersectionObserver' in window){
    // It is supported in your browser.
    // your code goes here
} else{
    // not supported 
    // need to use backward compatible code using events and scroll handler
}

```
In the above snippet, we check for IntersectionObserver property on `window`. If it exist then It's supported in your browser and we can proceed further. If it's not supported then you have to go through the old fashioned way of using scroll event and `getBoundingClientRect()` property.

Now Lets create an Observer. So, to create an observer we have to use it by calling its constructor.
```js
const options={
    root: document.querySelector('#scrollArea'), // ancestor or root element
    rootMargin: '0px 0px 10px 15px', // default- 0px 0px 0px 0px
    threshould: 0.1     // default- 1
}
const observer = new IntersectionObserver(callback,options)

```
Threshould of `0.1` means that when 10% of target element is visible within root element, callback is invoked. `rootMargin` is the margin around root just like CSS `margin` property e.g "0px 0px 10px 15px" (top,right,bottom,left). Once you have created an observer you need to give the target element to watch.

```js
const target = document.querySelector('#listItemToWatch');
observer.observe(target);

```
Whenever the target meets a threshold specified for the `IntersectionObserver`, the callback is invoked. The callback receives a list of `IntersectionObserverEntry` objects and the observer:

```js
function callback(entries,observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            // this element is intersecting. 
            // Do something
        }
    })
}
```

The list of entries received by the callback includes one entry for each target which reporting a change in its intersection status. Check the value of the `isIntersecting` property to see if the entry represents an element that currently intersects with the root.

### Summary {#summary}
<hr>
Lets summarize what we have learned so far.

```js
const target = document.querySelector('#listItemToWatch'); // target element
/*** 
 These values are taken randomly. 
 They are not related to anything in this context.
 You should take your own value.
 ***/
const options={
    root: document.querySelector('#root'), // root Element
    rootMargin: '0px 0px 10px 15px',
    threshould: 1
}
function callback(entries,observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            // do sth with it.
        }
    })
}
const observer = new IntersectionObserver(callback,options);
observer.observe(target);
```