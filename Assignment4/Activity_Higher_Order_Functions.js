/*
 * Name: sumArray
 * Description: Calculates the sum total of an array of numbers
 */
function sumArray(arr)
{
	var total = 0;
	
	arr.forEach(function(val) {
		total += val;
	});
	
	return total;
}

/*
 * Name: dialog
 * Description: Returns a function that outputs dialog text for a character
 */
function dialog(name)
{
	return function(text) {
		return name + " says \"" + text + "\".";
	};
}

var arr1 = [1, 2, 3, 5, 7, 11, 13, 17, 19];
	
// Calculate sum total of the array
var total = sumArray(arr1);
	
// Output total
console.log("Sum of [" + arr1 + "] = " + total);
	
// Create character object
var person = { name: "Wife" };
	
// Add method to the character that represents an action
person.talk = dialog(person.name);
	
// Output the character's words
console.log(person.talk("go take out the trash!"));