

// 4 Create an array with 5 different strings. Log the length of your array
var myArray = ["apple","banana","orange", "kiwi", "blueberry"]
console.log(myArray)

//  5  Log the length of each of the strings in your array.
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i].length);
};

// 6  reverse the array and console the array again. 

// myArray.reverse()
// console.log(myArray)


// 7. Comment out your reverse function. Create a copy of your original array (do not simply re-type your array; create a new variable containing an empty array, and use .push() to add each item in your original array into the new, empty array). Now reverse the copied array.
 
var arrayCopy = [] // empty array copy
for(var i=0; i < myArray.length; i++){
	arrayCopy.push(myArray[i]);
};

arrayCopy.reverse()   // reversing the now copied array
console.log(arrayCopy)

// 8: Sort your array of strings alphabetically.

arrayCopy.sort()
//console.log(arrayCopy)  checking


// 9: Create an array of at least 5 numbers. Each number should be at least two digits. Sort the array numerically, in ascending order (smallest to biggest). Then sort it in descending order.


var numArray = [1, 12, 541, 190, 5330]
// console.log(numArray) // logging


// sorting ascending order
numArray.sort(function(a, b) {
  // look at values as it sorts
  console.log(a, b);
  return a - b;
});
console.log(numArray);


//    Then sort it in descending order
numArray.sort(function(a, b) {
  console.log(b, a);
  return b - a;
});
console.log(numArray);


//    10 create an array with three strings

var stringArray = ["Math", "Science", "English"]


// 11. In JS: Using array methods, add two new strings to the end of the array.

stringArray.push("History", "Art");
console.log (stringArray);  // checking to see if the push worked. 

// 12  In JS: Now remove one string from the beginning of the array. Log the final array to the console. How many strings does it have?

stringArray.shift(); 

// Console the final array - it should have four strings
console.log(stringArray);

//  13, create an empty array

var emptyArr = [];

// In JS: Create a function which will run when the button is clicked. This function should add the value of the input to your empty array. THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list in your HTML. It should do this correctly no matter how many strings are in your array (in other words, if your array has one string, you will see one list item; if your array has five strings, you will see five list items).


var myList = document.getElementsByTagName("ul")[0];



function createList() {
	var userValue = document.getElementsByTagName("input")[0].value;
		// push the value of the input into our empty array
		emptyArr.push(userValue);
		// empty out the list first (in case there's already list-items in there)
		myList.innerHTML = " ";
	for(var i = 0; i < emptyArr.length; i++) {
		// create a list item
		var newLi = document.createElement("li");
		// add the strings into the list-items
		newLi.innerText = emptyArr[i];
		// append the list-item to our list
		myList.appendChild(newLi);		
	}
};






// 17 In JS: Create a function for EACH new button which fires on click. One function will alphabetically sort your array and re-render the list items in your HTML. One function will remove the last item from your array and re-render the list items in your HTML. One function will remove the first item from your array and re-render the list items in your HTML. (To be redundantly, unnecessarily, maddeningly clear, your list items in your HTML should reflect the items contained in your array in JavaScript)




function sortArr() {
  // RUNS THE SORT METHOD ON THE ARRAY
  emptyArr.sort();
  // RUNS THE DISPLAY FUNCTION
  display();
}

function popArr() {
  // RUNS THE POP METHOD ON THE ARRAY
  emptyArr.pop();
  // RUNS THE CREATE LISTR FUNCTION
  display();
}

function shiftArr() {
  // RUNS THE SHIFT METHOD ON THE ARRAY
  emptyArr.shift();
  // RUNS THE CREATE LIST FUNCTION
  dispaly();
}
;


/// when each function is collected it should dispaly the correct array, shifting/pop should adjust array size
