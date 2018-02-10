/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       2/3/17
* Class:      CS290
* Title:      Week 5 - Activity Table
* Filename:   Activity_Table.js
******************************************************************************/

// Given an array of objects that all have the same set of properties, builds 
// up a DOM structure representing a table
function buildTable(array) {
	var table1 = document.createElement("table");
	table1.setAttribute("id", "table1");
	document.body.appendChild(table1);
	
	var headRow = document.createElement("tr");
	var headRowCol1 = document.createElement("th");
	var headRowCol2 = document.createElement("th");
	var headRowCol3 = document.createElement("th");
	headRowCol1.textContent = "name";
	headRowCol2.textContent = "height";
	headRowCol3.textContent = "country";
	headRow.appendChild(headRowCol1);
	headRow.appendChild(headRowCol2);
	headRow.appendChild(headRowCol3);
	table1.appendChild(headRow);
	
	for (var i = 0; i < array.length; i += 3) {
		var tr = document.createElement("tr");
		
		for (var j = 0; j < 3; j++) {			
			var td = document.createElement("td");
			
			var textNode = document.createTextNode(array[i + j]);
			td.appendChild(textNode);
			//td.textContent = array[i + j];
			
			tr.appendChild(td);
		}
		
		table1.appendChild(tr);
	}
	
	//document.getElementById("table1").appendChild(table1);
}
//asTabs(document.querySelector("#wrapper"));

var arrTable = [ "Tom", "5'6\"", "USA",
				 "Jill", "5'2\"", "Australia" ];
buildTable(arrTable);