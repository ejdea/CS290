/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       2/3/17
* Class:      CS290
* Title:      Week 5 - HW Assignment: DOM and Events
* Filename:   script.js
******************************************************************************/

var table1 = document.createElement("table");
table1.setAttribute("id", "table1");

var head = document.createElement("thead");
table.appendChild(head);

var headerRow = document.createElement("tr");
head.appendChild(head);

var col1 = document.createElement("th");
col1.textContent = "Column 1";
col1.appendChild(headerRow);

var col2 = document.createElement("th");
col2.textContent = "Column 2";
col2.appendChild(headerRow);

var col3 = document.createElement("th");
col3.textContent = "Column 3";
col3.appendChild(headerRow);

var col4 = document.createElement("th");
col4.textContent = "Column 4";
col4.appendChild(headerRow);

document.getElementById("tableContainer").appendChild(table1);




/*
var newList = document.createElement("ul");
for(var i = 0; i < 3; i++){
    var newItem = document.createElement("li");
    newItem.textContent = "I am item " + i + ".";
    newList.appendChild(newItem);
}
document.getElementById("listContainer").appendChild(newList);

newList.children[0].style.backgroundColor = "red";
newList.children[1].style.backgroundColor = "green";
newList.children[2].style.backgroundColor = "violet";

newList.children[1].className = "bigger";
newList.children[1].className += " yellow";
*/
/*
var childList = newList.children;
console.log(childList.length);
newList.removeChild(newList.children[1]);
console.log(childList.length);
*/