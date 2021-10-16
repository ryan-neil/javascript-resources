/* 
JSON: JavaScript Object Notation

- JSON is used to send and receive data.
- JSON is a text format that is completely language independent.
  - This means JSON is used to send & receive data in many languages...not just JavaScript.
*/

const myObj = {
	name  : 'Ryan',
	age   : 29,
	hello : function() {
		console.log('Hello there!');
	}
};
console.log(myObj);
console.log(myObj.name); // Ryan
myObj.hello(); // Hello there!
console.log(typeof myObj); // object

// JSON.stringify() converts our object to a string in the proper data format for JSON. We can then send it off to a server or somewhere else and they would know the format coming in.
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // { "name": "Ryan", "age": 29 }
console.log(typeof sendJSON); // string

// When we receive JSON from a server or anywhere else, could be stored JSON in our local data, we can parse that string and convert it back to an object.
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); // Object { name: "Ryan", age: 29 }
console.log(typeof receiveJSON); // object
