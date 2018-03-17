/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       3/10/17
* Class:      CS290
* Title:      Week 9 - HW Assignment: Database Interactions and UI
* Filename:   script.js
******************************************************************************/

var position_row = 0;
var position_col = 0;

function createTable(data) {
    // Create table
    var table1 = document.createElement("table");
    table1.setAttribute("id", "table1");
    document.body.appendChild(table1);

    // Create table head row
    var head_tr = document.createElement("tr");
    for (var i = 0; i < data[0].length; i++) {
        var th = document.createElement("th");
        th.setAttribute("id", "Header" + i);
        th.textContent = "Header" + i;
        th.style.font = "text:bold";
        th.style.background = "#cccccccc";
        head_tr.appendChild(th);
    }
    table1.appendChild(head_tr);

    // Create table data
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");

        for (var j = 0; j < data[i].length; j++) {
            var td = document.createElement("td");
            td.setAttribute("id", "td-" + i + ',' + j);

            var td_div = document.createElement("div");
            td_div.setAttribute("id", "td_div-" + i + ',' + j);
            td_div.style.bottom = "0";
            td_div.textContent = data[i][j];
            td.appendChild(td_div);

            tr.appendChild(td);
        }

        table1.appendChild(tr);
    }
}

function createButtons(numRow, numCol) {
    var table1 = document.getElementById("table1");
    var buttonTypes = ["Up", "Down", "Left", "Right"];

    // Get cells into a 2D-array
    var cells = [];
    for (var i = 0; i < table1.childNodes.length; i++)
    {
        var tr = table1.childNodes[i];
        var td_cells = [];

        // Iterate through each td
        for (var j = 0; j < tr.childNodes.length; j++) {
            var td = tr.childNodes[j];

            if (td.nodeName === "TD")
                td_cells.push(td);
        }

        // Add tr to cells
        if (td_cells.length > 0)
            cells.push(td_cells);
    }

    // Create direction buttons
    buttonTypes.forEach(function(direction) {
        var button = document.createElement("button");
        button.textContent = direction;
        button.style.width = "80px";
        button.addEventListener("click", function() { selectCell(direction); });
        document.body.insertBefore(button, table1);
    });

    // Detect keypress event when moving the selector
    // Reference: https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
    document.onkeydown = function(event) {
        event = event || window.event;

        switch (event.keyCode)
        {
            case 32:
                markCellButton_Click();
                break;
            case 37:
                selectCell("Left");
                break;
            case 38:
                selectCell("Up");
                break;
            case 39:
                selectCell("Right");
                break;
            case 40:
                selectCell("Down");
                break;
        }
    };

    // Create mark cell button
    var markCellButton = document.createElement("button");
    markCellButton.textContent = "Mark Cell";
    markCellButton.style.width = "85px";
    markCellButton.addEventListener("click", function() { markCellButton_Click(); });
    document.body.insertBefore(markCellButton, table1);

    // Set initial data cell state
    var currTd_div = cells[position_row][position_col].childNodes[0];
    currTd_div.style.border = "3px solid #239B56";

    function selectCell(direction) {
        var prevRow = position_row;
        var prevCol = position_col;
        var validDir = false;

        // Validate and set direction
        switch (direction)
        {
            case "Up":
                if ((position_row - 1) >= 0) {
                    validDir = true;
                    position_row--;
                }
                break;
            case "Down":
                if ((position_row + 1) < numRow) {
                    validDir = true;
                    position_row++;
                }
                break;
            case "Left":
                if ((position_col - 1) >= 0) {
                    validDir = true;
                    position_col--;
                }
                break;
            case "Right":
                if ((position_col + 1) < numCol) {
                    validDir = true;
                    position_col++;
                }
                break;
        }

        if (validDir) {
            // Remove highlight in previous cell
            var prevTd_div = cells[prevRow][prevCol].childNodes[0];
            prevTd_div.style.border = "3px solid transparent";

            // Get current data cell
            var currTd_div = cells[position_row][position_col].childNodes[0];
            currTd_div.style.border = "3px solid #239B56";
        }
    }

    function markCellButton_Click() {
        var currTd = cells[position_row][position_col];
        currTd.style.background = "#F9E79F";
    }
}

var data = [ 
    ["1, 1", "1, 2", "1, 3", "1, 4"],
    ["2, 1", "2, 2", "2, 3", "2, 4"],
    ["3, 1", "3, 2", "3, 3", "3, 4"],
];

createTable(data);
createButtons(data.length, data[0].length);