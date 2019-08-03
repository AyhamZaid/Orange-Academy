	//Excersice 1:Write a function that when given an array sums only the odd values and returns that sum. Assume the array is an array of integers.*/

function oddNumber(array){
	let sum = 0;
	for (const i in array){
		if(array[i] % 2 == 0){
			sum+=array[i]
		}
	}
	return sum;
}
console.log(oddNumber([1,2,3,4,5,6]));
document.write(oddNumber([1,2,3,4,5,6]))


//Excersice 2: Write a JavaScript program to reverse the order of the characters in the string.

function reverseString(str) {
	return str.split("").reverse().join();
}
console.log(reverseString("Ayham"));
/*Excersice 3: Use `const` so `x` can't change
 * 
 * Consider renaming to const convention
 * 
var x = 1; 

if( true ) {
  var x = 2; // should raise a TypeError
}

console.log(x); // 1*/


const x = 1;

if( true ) {
	const x = 2; // should raise a TypeError
}

console.log(x); // 1*/

/* Excersice 4:  Use an ES6 Class to construct a Person instance.
 
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John*/


class Person{
	constructor(firstname, lastname){
		this.fname = firstname;
		this.lname = lastname;
	}
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John*/
/* Excersice 4: Turn `exampleFunction` into a one line "arrow function".

var exampleFunction = function() { 
  console.log('🙌');
}

exampleFunction();*/

let exampleFunction =()=>console.log('🙌');
exampleFunction();
/*
 * Exercise 5:Make a function that takes array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
let doubleNumbers = (parm) => {
  

  for (const i in parm){
    
      num=parm.map(n => n*2);
    
  }
  return num;
}
console.log(doubleNumbers([2, 5, 100]));


/*
 * Exercise 6: Make a function that takes capitalize each of an array of names 
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
let capitalizeNames =()=>{
for (let name of names) {
    n = names.map(a => a.charAt(0).toUpperCase() + a.substr(1));
  
}
 return n
}
    console.log(capitalizeNames(names));



/*Exercise 7: Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/


let even=(a) =>a.filter(function(val){return val%2===0})
var arr = [5,1,2,3,10];
console.log(even(arr));

/*Exercise 8: Write a JavaScript function to find the first not repeated character. Go to the editor
Sample arguments : 'abacddbec' 
Expected output : 'e' 
*/

let repeated =(str) =>{
    for (let ch of str) {
        if (str.indexOf(ch) === str.lastIndexOf(ch))  
          return ch;
    }
}
console.log(repeated('abacddbec'));



/*Exercise 9:Use destructuring to initialize the variables `one`, `two`, and `three` with the colors from the `things` array.
 */

// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const one = things;
// const two = '';
// const three = '';

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors);

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const one =things[0];
const two = things[3];
const three = things[7];

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

/*Exercise 10:Replace the variable declarations using let or const. */
let CHARACTER_LIMIT = 255;
let posts = [
	`#DeepLearning transforms everything from self-driving cars to language translations. AND it s our new Nanodegree!,
	Within your first week of the VR Developer Nanodegree Program, you ll make your own virtual reality app,
	I just finished @udacitys Front-End Web Developer Nanodegree. Check it out!`
];
let displayPosts=()=> {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();