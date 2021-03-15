// Practice
// Cmd + Option + K (Console Shortcut)

const thor = {
	superhero : true,
	age       : 1500
};

// bad
const isSuperhero = thor['superhero'];

// good
// const isSuperhero = thor.superhero;
console.log(isSuperhero); // -> true
