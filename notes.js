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

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
	guess = Math.floor(Math.random() * 10);
}
