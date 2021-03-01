// Practice
// Cmd + Option + K (Console Shortcut)

// JavaScript
const range = document.querySelector('input[type="range"]');

// new max attribute
range.setAttribute('max', '120');
const newMax = range.max;
console.log(newMax);

// new min attribute
range.setAttribute('min', '-10');
const newMin = range.min;
console.log(newMin);
