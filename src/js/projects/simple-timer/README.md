# Simple Timer
<!-- <img src="" width="800" alt=""> -->

## Introduction
A very simple countdown timer to practice System/Application Design and Vanilla JavaScript.

## 📂 File Tree
```bash
└─ simple-timer
  ├─ index.html
  ├─ style.css
  ├─ app.js
```

----

## ⚒️ Main Application Features
1. Timer display
2. Animated border around timer

----

## 🗒️ Application Architecture

### The Psuedo Code
```bash
└─ Event listener to watch for a click on "start" button
  ├─ Draw a full border around the timer
  ├─ Start counting down the timer
  ├─ Each time the timer counts down, update the border
  ├─ Each time the timer counts down, update the text
  └─ If we counted down and the timer reaches 0
    ├─ Reset the border
    ├─ Reset internal timer to get ready for another run
```
Between the 2 main features of our application, just about every line of code addresses something very different. Alternately responsibility between the timer events and border events. 

```bash
└─ Event listener to watch for a click on "start" button - (timer)
  ├─ Draw a full border around the timer - (border)
  ├─ Start counting down the timer - (timer)
  ├─ Each time the timer counts down, update the border - (border)
  ├─ Each time the timer counts down, update the text - (timer)
  └─ If we counted down and the timer reaches 0 - (timer)
    ├─ Reset the border - (border)
    ├─ Reset internal timer to get ready for another run - (timer)
```

Over time this implementation can be hard to read and maintain because we are constantly having to flip our train of thought between different logic. Instead, it's a good idea to try and isolate the different responsibilities into separate blocks of logic.

One way to implement this is to use a sort of "evented" style approach:
```bash
└─ Event listener to watch for a click on "start" button
  ├─ Emit an event stating that the timer has started
    └─ Watch for this event. When it occurs, "draw" the border
  ├─ Start counting down the timer
  ├─ Emit an event that the timer has "ticked"
    └─ Watch for this event. When it occurs, "update" the border
  ├─ Each time the timer counts down, update the text
  └─ If we counted down and the timer reaches 0
    ├─ Emit an event that the timer is done
      └─ Watch for this event. When it occurs, "reset" the border
    ├─ Reset internal timer to get ready for another run
```
By implementing our simple timer application this way we could possibly reuse our timer in different projects or for different purposes beyond just updating the border.

Additionally, we would have some implementation of updating our border that wouldn't really care about whether we are having to work with a timer or some other thing, like the progress of making a network request or downloading a file, etc.

### The Implementation


----

### Section Title

**[⬆ Top](#table-of-contents)**