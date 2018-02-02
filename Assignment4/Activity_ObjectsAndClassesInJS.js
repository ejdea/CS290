/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       1/29/17
* Title:      CS290 HW3.1
* Filename:   Activity4.js
******************************************************************************/

function Vector(x, y) {
	this.x = x;
	this.y = y;
	Object.defineProperty(this, "length", {
		get: function() {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		},
	});
};

Vector.prototype.plus = function(vectorObj) {
	var newVectorObj = new Vector(this.x + vectorObj.x, this.y + vectorObj.y);
	return newVectorObj;
};

Vector.prototype.minus = function(vectorObj) {
	var newVectorObj = new Vector(this.x - vectorObj.x, this.y - vectorObj.y);
	return newVectorObj;
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
