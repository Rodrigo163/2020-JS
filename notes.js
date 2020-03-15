// // Arrays:
// // empty
// let students = [];

// let stuff = [ 3, 'hallo', true ];
// //mutable!
// stuff[0] = 5;
// //manually adding to the end
// stuff[3] = 'bye';

// //push: add to end, pop:remove from end, shift: remove from start, unshift: add to start
// stuff.shift();

// //other methods
// // concat: merge arrays, includes: looks for a value, indexOf: just like str.indexOf. Only returns the first one! and -1 if not found
// // join(what to join them with. comma by default): creates a string from arr, reverse: reverse the array. Changes the original, slice: copy portion of array. No arg slice() returns copy of array
// // splice(start, how many to delete, what to include): remove/replace elements, sort: sorts an array in place. Messes up numerical arrays.

// //Value type variables: all variables's value from primitive types are stored in memory.

// //reference types: when working with arrays, the variable holds a pointer to where that object is stored in memory, not the object itself
// //that's why it's important to know when we modify the original, make copies etc

// //CONST and arrays:
// const test = [ 1, 2, 3 ];
// // the constant element here is the reference or pointer, not the content of the array itself.
// test[2] = 66;
// //what we can't do is to change the reference
// //test = [ 3 ];
// // usually use const with arrays

// //NESTED arrays
// const nested = [ [ 1, 2 ], [ 11, 22 ], [ 111, 222 ] ];

//Objects: collections of properties. Properties are a key-value pair. Same as dict in Python
//Object litteral {}
//same as with arrays, we should use const
// const fitbitData = {
// 	totalSteps       : 100,
// 	totalMiles       : 45,
// 	avgCalorieBurn   : 5666,
// 	workoutsThisWeek : '5 of 7'
// };
//to access info fitbitData.property
// all keys are converted to strings

// //another way to access properties in an object
// const numbers = {
// 	100 : 'one hundred',
// 	10  : 'ten'
// };
// //numbers.100 would work
// //numbers[100] works. This way is more robust.

// //adding and updating properties
// numbers.haha = '40';
// numbers.haha = 20;
// numbers[10] = 'lol';

// //nested objects: like Python
// // objects are also reference types
// //equality with arrays and objects
// let nums = [ 1, 2, 3 ];
// let other = [ 1, 2, 3 ];
// let moreNumbs = nums
// // nums === other false
// // nums == other false
// // both equalities would be true with moreNumbs
// // same for objects

// LOOPS
//for loops
// for (let i = 1; i < 10; i++) {
// 	console.log('Hallo', i);
// }
// for (let i = 1; i < 10; i++) {
// 	console.log(`${i}x${i} = ${i * i}`);
// }
// for (let i = 200; i > 10; i -= 20) {
// 	console.log(`${i}x${i} = ${i * i}`);
// }

//while loops
// let j = 0;
// while (j < 5) {
// 	console.log(j);
// 	j++;
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
// 	guess = Math.floor(Math.random() * 10);
// }

//BREAK
//break to get out of loops

//FOR...OF loop
//loops over elements
// for (let i of [ 1, 55, 3 ]) {
// 	console.log(i);
// }
// for (let char of 'rodrigolopez') {
// 	console.log(char.toUpperCase());
// }

//FOR..OF with objects
// const movieReviews = {
// 	Arrival     : 9.5,
// 	LOTR        : 10,
// 	'Jill Lill' : 9
// };
// for (let movie of Object.keys(movieReviews)) {
// 	console.log(movie);
// }
// for (let movie of Object.values(movieReviews)) {
// 	console.log(movie);
// }
// for (let movie of Object.keys(movieReviews)) {
// 	console.log(`${movie} - ${movieReviews[movie]}`);
// }

//FOR..IN loop
//loops over properties of objects
// const jeopWinnings = {
// 	regular : 235234,
// 	watson  : 30000,
// 	mi      : 23
// };
// //looping over properties
// for (let prop in jeopWinnings) {
// 	console.log(prop);
// }

// FUNCTIONS
//return value vs console log

// function square(x) {
// 	console.log(x * x);
// }
// square(5);

// function sum(x, y) {
// 	return x + y;
// }
//Return method breaks out of the function no matter what

// function isValidPassword(password, username) {
// 	let valid = (password.length >= 8) & (password.indexOf(' ') === -1) & (password.indexOf(username) === -1);
// 	return valid;
// }

// function averag(arr) {
// 	let total = 0;
// 	for (let num of arr) {
// 		total += num;
// 	}
// 	return total / arr.length;
// }

// function isPangram(sent) {
// 	let abc = 'abcdefghijklmnopqrstuvwxyz';
// 	for (let letter of abc) {
// 		if (sent.toLowerCase().indexOf(letter) === -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

//using .includes
// function isPangram(sent) {
// 	let abc = 'abcdefghijklmnopqrstuvwxyz';
// 	for (let letter of abc) {
// 		if (!sent.toLowerCase().includes(letter)) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function getCard() {
// 	let values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
// 	let suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

// 	let valueIndex = Math.floor(Math.random() * values.length);
// 	let suitIndex = Math.floor(Math.random() * suits.length);

// 	return `Value: ${values[valueIndex]} \n Suit: ${suits[suitIndex]}`;
// }

//AN ADVANCED LOOK AT FUNCTIONS
//SCOPE: variable visibility, global/local in Python
// block scope

//a block of code is delimited by {}. Variables defined with let or const have limited scope inside.
// with var the scoping rules are different, there is no block scope with var.
// if (true) {
// 	let animal = 'jaguar';
// }
// console.log(animal);
//this solves problems with loop indices per example.

//lexical scope
// with nested functions: functions have access to variables define in their parent functions
//First look in local scope, if not found look in parent function
// but not the other way around.

// function parent() {
// 	let movie = 'lort';

// 	function offspring() {
// 		let x = 10;
// 		console.log(movie.toUpperCase());
// 	}
// 	offspring();
// 	return x;
// }

//function expressions
// another way to define functions
//In JS functions are objects so we can store them in variables
//passing anonymous function
// const square = function(num) {
// 	return num * num;
// };
// //checking what it's made of
// console.dir(square);

// //passing named function expression
// const product = function multiply(x, y){
//     return x*y;
// }

//higher order functions: fn that accept other functions as arguments and/or return a function
//functions in an array
// function add(x, y) {
// 	return x + y;
// }
// //mixing how we define them
// const mult = function(x, y) {
// 	return x * y;
// };
// function sub(x, y) {
// 	return x - y;
// }
// function div(x, y) {
// 	return x / y;
// }

// const operations = [ add, mult, sub, div ];
// //to run any of them
// operations[0](4, 5);

// //doing all of them in a loop
// for (let func of operations) {
// 	let result = func(4, 5);
// 	console.log(result);
// }

// //we can also store them in objects
// const thing = {
// 	doIt : add
// };
// thing['doIt'](5, 4);
// //but this is a method!
// thing.doIt(4, 5);

//fn as argument
// function doTwice(fn) {
// 	fn();
// 	fn();
// }

// function haha() {
// 	console.log('haha');
// }

//fn as return value
//function generator/factory
// function multiplyBy(num) {
// 	return function(x) {
// 		return x * num;
// 	};
// }
// const double = multiplyBy(2);
// const triple = multiplyBy(3);

// function makeBetween(x, y) {
// 	return function(num) {
// 		return num >= x && num <= y;
// 	};
// }

// const isUnderage = makeBetween(0, 18);

//callbacks: a callback function is a fn passed into another fn as an arg
// which is then invoked inside the outer fn.
//in the doTwice example fn is a callback fn

//Sometimes we just need a one time use function so we use anonymous ones
// when we don't need to re use a fn
// //example with setTimeout(function, time in ms)
// function grump() {
// 	alert('GO AWAY!');
// }
// setTimeout(grump, 10000);
//works the same way with anonymous ones
// setTimeout(function() {
// 	alert('JIJI');
// }, 5000);

//adding button to page and putting script after all the content because it should all be
// loaded by the time the script runs.
//selecting the button
// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
// 	alert('HALLO');
// });

// hoisting: JS creates all variables defined with var as undefined and then runs the code
// that is why this below return undefined  and not an error
// console.log(animal);
// var animal = 'Zebra';

//What JS is doing is:
// var animal;
// console.log(animal);
// animal = 'Zebra';

//JS doesn t hoist variables created with let

// fn ARE hoisted, except when created via a function expression (using a variable)
// with fn expressions the variable is hoisted (if declared with var, not with let) but not the fn

//SECTION 10: APPLY FUNCTIONS TO COLLECTIONS OF DATA
// INTRO TO ARRAY CALLBACK METHODS
//In general these methods are meant to run a function once per element in an array

// forEach: came before for (of). Kind of the same but also gives us option to use index
//forEach(fn(element, index))
// const nums = [ 1, 2, 3, 4, 5, 10, 20, 30 ];

// nums.forEach(function(n, i) {
// 	console.log(`${i}-th element: ${n * n}`);
// });

// map: creates new array from existing array. Original is unchanged
// const texts = [ 'lol', 'haha', 'rlpa' ];
// const textsCaps = texts.map(function(t) {
// 	return t.toUpperCase(); //important to have return statement
// });

//Arrow functions intro: compact way of defining functions
// const square = (x) => {
// 	return x * x;
// };
// //if we have exactly one arg then no need for ()
// const cube = (x) => {
// 	return x * x * x;
// };
