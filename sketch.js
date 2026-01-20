// Examples

{
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // apple
console.log(fruits[2]); // orange
}

{
let fruits = ["apple", "banana", "orange"];

fruits[1] = "pear";

console.log(fruits);
// ["apple", "pear", "orange"]
}

{
let fruits = ["apple", "banana", "orange"];

console.log(fruits.length); // 3
}

{
let fruits = ["apple", "banana"];

fruits.push("orange");

console.log(fruits);
// ["apple", "banana", "orange"]
}

{
let fruits = ["apple", "banana", "orange"];

fruits.pop();

console.log(fruits);
// ["apple", "banana"]
}

{
let fruits = ["banana", "orange"];

fruits.unshift("apple");

console.log(fruits);
// ["apple", "banana", "orange"]
}

{
let fruits = ["apple", "banana", "orange"];

fruits.shift();

console.log(fruits);
// ["banana", "orange"]
}

{
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
}

{
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
	console.log(fruit);
}
}

{
let fruits = ["apple", "banana", "orange"];

console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("pear")); // -1
}

{
let fruits = ["apple", "banana", "orange", "pear"];

let citrus = fruits.slice(1, 3);

console.log(citrus);
// ["banana", "orange"]
}

{
let fruits = ["apple", "banana", "orange"];

fruits.splice(1,1);

console.log(fruits);
// ["apple", "orange"]
}

{
let fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1, "pear");

console.log(fruits);
// ["apple", "pear", "orange"]
}

// Exercise

let basket = ["apple", "banana", "orange", "pear"];

// print first and last element
console.log(`first fruit: ${basket[0]}`);
console.log(`last fruit: ${basket.at(-1)}`);

// find 'banana' and replace it
let banana_idx = basket.indexOf('banana');
basket[banana_idx] = 'kiwi';

// remove 'pear', the last element
basket.pop();

// put 'mango' at the beginning of the array
basket.unshift('mango');

// function to dump contents of array
let dump_array = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(`Fruit ${i + 1}: ${arr[i]}`);
	}
};

// dump the basket
dump_array(basket);

// find 'orange'
let orange_idx = basket.indexOf('orange');

if (orange_idx >= 0) {
	// we found 'orange'
	console.log(`Orange found at index ${orange_idx}`);
} else {
	// we didn't find 'orange'
	console.log('Orange not found');
}

// make another array from a slice of the basket array
let citrus = basket.slice(1, 3);

// dump the citrus array
dump_array(citrus);

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);

	textSize(22);
	fill('yellow');
	text('CHECK THE CONSOLE', 32, 32);
}
