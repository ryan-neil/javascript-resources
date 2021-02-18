![js-gif](https://user-images.githubusercontent.com/59746024/108250339-3946ac80-70fa-11eb-9441-607fce5c3843.gif)

# JavaScript Resources
This is an ever-evolving collection of the most common JavaScript features and code samples.

## Repo Features
1. Arrays
2. Arrow Functions
3. The Basics
4. Callbacks
5. Destructuring
6. The Dom
7. Functions
8. JSON Files
9. Loops
10. Objects
11. Rest
12. Spread
13. "This" Keyword

## Repo Folder Structure
`/src/` - contains the source files for the Github repo. \
`/src/js/` - contains all JavaScript files. \
`/src/js/analysis/` - contains the breakdown of JavaScript coding projects. \
`/src/js/challenges/` - contains some example JavaScript challenges for practice.

## Resources
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Fake API for testing and prototyping (JSON Placeholder)](https://jsonplaceholder.typicode.com/)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Notes

### Parameters vs. Arguments
A *parameter* is the variable name, defined in the function signature, of the value which will be given as an *argument*. 

It's important to distinguish them, as a parameter can represent many different values or even types of values, while an argument will only be that specific value at the time of evaluation.

In this "square" function, "number" is the *parameter*:

```javascript
function square(number) {
  return number * number;
}
```

The "2" is the *argument* being passed into the "square" function:

```javascript
function square(number) {
  return number * number;
}
square(2);
```