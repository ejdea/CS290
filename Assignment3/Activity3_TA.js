/******************************************************************************
* Author: Edmund Dea
* Student ID: 933280343
* Date: 1/23/17
* Title: CS290 HW2.3
* Filename: Activity3.js
******************************************************************************/

function deepEqual(obj1, obj2)
{
	console.log(typeof obj1 + " === " + typeof obj2);
	
     // Check if obj1/obj2 is an object
     if (typeof obj1 === "object" && obj1 != null &&
         typeof obj2 === "object" && obj2 != null)
     {
          var obj1_length = Object.keys(obj1).length;
          var obj2_length = Object.keys(obj2).length;
		  
		  console.log("length: " + obj1_length + " === " + obj2_length);
		  
          // If object property length matches
          if (obj1_length === obj2_length)
          {
               // Traverse through each property in obj1/obj2
               for (var prop1 in obj1)
               {
                    for (var prop2 in obj2)
                    {
                         // If obj1/obj2 properties match
                         if (prop1 === prop2)
                         {
							 console.log("prop: " + prop1 + " === " + prop2);
							 							 
                             // Recursively call deepEqual to check equality
                             if (!deepEqual(obj1[prop1], obj2[prop2]))
								 return false;
                         }
                    }
               }
          }
          else
          {
               return false;
          }
     }
     else 
	 {
		 console.log("return: " + obj1 + " === " + obj2);
          return obj1 === obj2;
	 }
}

//var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


console.log("***** TA's tests *****");
var obj1 = {here: {is: "an"}, object: 2};
/*console.log(deepEqual(obj1, obj1));// → true
console.log(deepEqual(obj1, {here: {is: "an"}, object: 2}));// → true
console.log(deepEqual(obj1, {here: 1, object: 2}));// → false
console.log(deepEqual(null, null));// → true
console.log(deepEqual(null, 0));// → false
console.log(deepEqual(0, 0));// → true
console.log(deepEqual(0, 1));// → false
console.log(deepEqual([0,1,2], [0,1,2]));// → true*/
console.log(deepEqual([0,1,2], [0,1,3]));// → false