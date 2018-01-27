/******************************************************************************
* Author:      Edmund Dea
* Student ID:  933280343
* Date:        1/23/17
* Title:       CS290 HW2.2
* Filename:    Activity2.js
******************************************************************************/

// Demonstrate function hoisting by calling average before it is defined
average(3, 5, 7);

// Define the average function
function average(num1, num2, num3)
{
	console.log("The average of " +  num1 + ", " + num2 + ", and " + num3 +
	" is " + (num1 + num2 + num3)/3 + '.');
}

// Assign the min function to a variable
var min = function(num1, num2)
{
	if (num1 == num2)
		console.log("min(" + num1 + ", " + num2 + ") = " + num1);
	else if (num1 < num2)
		console.log("min(" + num1 + ", " + num2 + ") = " + num1);
	else
		console.log("min(" + num1 + ", " + num2 + ") = " + num2);
}

// Call getMin BEFORE it is assigned to min. This results in an error.
getMin(10,12);

// Assign getMin to min
var getMin = min;

/*
// Alternatively, handle the exception the print the error msg
try
{
	getMin(10,12);
}
catch(err)
{
	console.log("Called getMin BEFORE it is assigned to min. " +
	"This results in the following error:\n   > " + err.message);
}

// Assign getMin to min
var getMin = min;

// Call getMin AFTER it is assigned to min
console.log("Called getMin AFTER it is assigned to min.");
getMin(10,12);
*/