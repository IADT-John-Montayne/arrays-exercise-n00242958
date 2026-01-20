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
