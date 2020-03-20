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

//Even shorter arrow functions: implicit return when only returning one expression
//const square = (n) => n * n;

//but if it gets too long then no shame adding parenthesis and another line
//const arrayq = (n) => (
//    [ 1, 2, 3, 4, 5, 6, 7, 25346345673567, 563, 657356 ];
//)
// const nums = [ 1, 2, 3 ];
// const doubles1 = nums.map(function(n) {
// 	return n * 2;
// });
// const doubles2 = nums.map((n) => {
// 	return n * 2;
// });
// const doubles3 = nums.map((n) => n * 2);

// const parityList = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));

// find: receives a function that returns true or false for every element of the array
// and returns the first value that returned true.

// let movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire' ];

// const movie = movies.find((m) => {
// 	return m.includes('Mrs');
// });

// const movie2 = movies.find((m) => m.indexOf('Mrs.') === 0);

// filter: Creates a new array with all elements that pass the test implemented by the provided function
// the callback function also has to return a boolean value.
// the original is not modified

// const nums = [ 1, 2, 3, 4, 5, 6 ];

// const odds = nums.filter((n) => (n % 2 === 1 ? true : false));

//Every: tests wheter all alements in the array pass the provided boolean callback function
// const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

// const all3Letters = words.every((w) => w.length === 3);
// const allEndInG = words.every((w) => {
// 	let lastLetter = w.slice(-1);
// 	return lastLetter === 'g';
// });
// //some: similar but returns true if ANY of the array elements pass the test function

// const someElementHasI = words.some((w) => w.indexOf('i') !== -1);

// //sort revisited:
// const prices = [ 400.43, 22.3, 31, 1, 1000 ];

// prices.sort(); //converts to str and sorts.

// //To change this we have to pass a compare function
// // this function will compare a and b and return:
// // less than 0 -> sort a before b
// // 0 -> leaves a and b unchanged wrt each other
// // greater than 0 -> sorts b before a
// //these methods modify the original array. All three variables are pointing to the same array.
// const ascSort = prices.sort((a, b) => a - b);

// const desSort = prices.sort((a, b) => b - a);

// // if we want to save the sorted version into a new array we can slice first and make a copy
// const ascSort2 = prices.slice().sort((a, b) => a - b);

// // how to sort objects?
// // if we had the example with books that have a numerical rating property
// // instead of a-b ==> a.rating - b.rating
// // compare functions can get very complex to allow diff sorting methods.

// reduce: executes a reducer function on each element of the array
// resulting in a single value

// const nums = [ 1, 33, 64, 10 ];

// //accumulator will store the accumulated last value which we are keeping track of.
// const suma = nums.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// });

// //tracking maximum value
// const maxVal = nums.reduce((max, curVal) => {
// 	if (curVal > max) return curVal;
// 	return max;
// });

// //also shorter using Math functions
// const minVal = nums.reduce((min, curVal) => Math.min(min, curVal));

// //reduce accepts another arguments: an initial value.
// // if we don't specify it it uses the first value fo the
// const newMinVal = nums.reduce((min, curVal) => Math.min(min, curVal), -2);

//tallying: accumulator is an object (as init value)
// const votes = [ 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'n', 'n' ];

// const results = votes.reduce((tally, curVal) => {
// 	if (tally[curVal]) {
// 		tally[curVal]++;
// 	}
// 	else {
// 		tally[curVal] = 1;
// 	}
// 	return tally;
// }, {});

// //another way to write it:
// const results2 = votes.reduce((tally, curVal) => {
// 	tally[curVal] = (tally[curVal] || 0) + 1; //undefined or 0 in first encounter.
// 	return tally;
// }, {});

// Section 11: A few miscellaneous JS Features
// new-ish features of JS

// default parameters/arguments:
//old way:
// function multiply(x, y) {
// 	//or with terniary operators
// 	if (typeof y === 'undefined') {
// 		y = 1;
// 	}
// 	return x * y;
// }

// //new parameter syntax like in python. args with default values have to be defined after the ones without.
// function product(x, y = 1) {
// 	return x * y;
// }

// //another example
// const greet = (person, greeting = 'hi') => {
// 	console.log(`${greeting}, ${person}`);
// };

// spread
// spread syntax allows an iterable such as an array to be expanded in places
// where zero or more arguments (for function calls) or elements (for array literals)
// are expected, or an object expression to be expanded in places where zero or more
// key-value pairs (for object literals) are expected
// represented with ...

// //Spread for a function call
// const nums = [ 9, 3, 2, 8 ];

// Math.max(nums); //NaN!
// //using spread to distribute the values from [, , , ] to , , , ,
// Math.max(...nums);

// //spreading strings works exactly the same way char by char

// // Spread for an array litteral
// const nums1 = [1,2,3,4];
// const nums2 = [5,6,7,8];

// let allNumbs = [...nums1, ...nums2];
// //very usefull to make copies of arrays in new reference places so a proper copy.

// // Spread in object literals
// const feline = { legs: 4, family: 'Felidae' };
// const canine = { family: 'Caninae', furry: true };
// //using spread to "import" all values from another object
// const dog = { ...canine, isPet: true };

// const lion = { ...feline, genus: 'Panthera' };
// const catDog = { ...feline, ...canine }; //notice that if two choices show up the the last one that was copied stays.
// // in this case the canine properties replacing the family value for feline.
// // order matters!
// you can only spread an object when building another object. Otherwise now because it's not an iterable

//this is allowed although not very used
// {...[11,22,33]} //{0: 11, 1:22, 2:33} spreads by index

// REST : ...
// looks like spread but it's not!
// kind of the opposite. It collects information into a single array
//can be used when writting functions with unlimited/variable number of args
//summing a hundred numbers
//before they used an arguments object available inside every function.
//but this is not available inside arrow functions and it's MEH
// function sumOld() { //this doesn t work because arguments is an iterable but has no array methods.
// 	return arguments.reduce((total, curVal) => { //we could solve this using spread to create a proper array
//         return total+curVal
//     })
// }

// //new nicer syntax
// //Rest parameters: collects all remaining arguments into an actual array
// function sumAll(...nums) {
// 	let total = 0;
// 	for (let n of nums) total += n;
// 	return total;
// }
// //can also be used to collect all parameters that have not been matched
// function fullName(first, last, ...titles) {
// 	console.log('first', first);
// 	console.log('last', last);
// 	console.log('titles', titles);
// }
// //rest parameter has to be the last arg

// //cool multiply with double implicit return and arrow fn and rest and reduce
// const multiply = (...nums) => (
//     nums.reduce((total, curVal) => total*curVal)
// )

// Destructuring: clean syntax to unpack values from arrays or properties from objects into distinct variables
//if we have race results from a marathon
// const raceResults = [ 'Chui', 'Rodrigo', 'Hernan', 'Pablo', 'Rey del After' ];
//bad way to assign medal variables would be this
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronce = raceResults[2]

// //better way
// // const [ gold, silver, bronce ] = raceResults;

// //if we want to skip elements:
// const [ first, , , fourth ] = raceResults;
// //using rest to unpack all remaining values (after skipping would work the same way)
// const [ winner, ...others ] = raceResults;

// Destructuring objects. We unpack based on keys/name of properties
// const runner = {
// 	first   : 'Eliud',
// 	last    : 'Lpa',
// 	country : 'Kenya',
// 	title   : 'Mother of dragons'
// };

// const { first, last } = runner;
// //variables must be existing key names but then we can rename them
// const { country: nation } = runner;

// const { first, last, ...others } = runner;

// this logic works also in nested objects

// // Destructuring parameters
// //per example when using objects as args and we only want some properties in the fn
// const runner = {
// 	first   : 'Eliud',
// 	last    : 'Lpa',
// 	country : 'Kenya',
// 	title   : 'Mother of dragons'
// };

// const fullName = ({ first, last }) => {
// 	return `${first} ${last}`;
// };

//we can also use this in arrays
// in this example we only want the 2nd elements of the array as arg
const response = [ 'HHTP/1.1', '200 OK', 'application/json' ];

function parseResponde([ , statusCode ]) {
	return statusCode;
}
