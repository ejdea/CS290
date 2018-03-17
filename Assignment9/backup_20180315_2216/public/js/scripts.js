/******************************************************************************
 * Author:     Edmund Dea
 * Student Id: 933280343
 * Date:       3/15/17
 * Class:      CS290
 * Title:      Week 9 - HW Assignment: Database and Interactions
 * Filename:   scripts.js
 ******************************************************************************/

/* Reference: 
 * https://stackoverflow.com/questions/8624093/node-js-submit-form 
 */
$("#form1").submit(function(e) {
    e.preventDefault();

    var $this = $(this);
    var name = $("#form1 input[id='name']").val();
    var reps = $("#form1 input[id='reps']").val();
    var weight = $("#form1 input[id='weight']").val();
    var date = $("#form1 input[id='date']").val();
    var lbs = $("#form1 input[name='lbs']:checked").val();
    var ajaxData = [name, reps, weight, date, lbs];
    var postData = $this.serialize() + "&cmd=insert";

    // Validate input
    // Reference for Date Format: https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd
    var isNumber = new RegExp("^-?[0-9]{1,}$");
    var isDate =  new RegExp("^[0-9]{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$");

    if (!name || name.length === 0) {
        alert("Error: Name is invalid.");
        return;
    }
    if (lbs === undefined) {
        alert("Error: Lbs or Kilos must be selected.");
        return;
    }
    if (!reps || reps.length === 0 || !isNumber.test(reps)) {
        alert("Error: Reps is invalid.");
        return;
    }
    if (!weight || weight.length === 0 || !isNumber.test(weight)) {
        alert("Error: Weight is invalid.");
        return;
    }
    if (!date || date.date === 0 || !isDate.test(date)) {
        alert("Error: Date is invalid.");
        return;
    }

    $.post(
        $this.attr("action"),
        postData,
        function(data) { 
            console.log(data); 
        },
        "json"
    );

    insertRow(ajaxData);
});

function insertRow(data) {
    var table = document.getElementById("workout_table");
    var newId = parseInt($("#workout_table tr").length);

    var tr = document.createElement("tr");

    var id = document.createElement("input");
    id.setAttribute("type", "hidden");
    id.setAttribute("value", newId);
    tr.appendChild(id);

    for (var i = 0; i < data.length; i++) {
        var td = document.createElement("td");
        td.textContent = data[i];
        tr.appendChild(td);
    }

    var editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("onclick", "editRow(this, newId)");
    editButton.classList.add("td_button");
    editButton.textContent = "Edit";
    tr.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("onclick", "deleteRow(this, newId)");
    deleteButton.classList.add("td_button");
    deleteButton.textContent = "Delete";
    tr.appendChild(deleteButton);

    table.appendChild(tr);
}

function editRow(btn, id) {
    var data = {cmd : "edit", id : id};
    var $this = $(this);

}

function deleteRow(btn, id) {
    var data = {cmd : "delete", id : id};
    var $this = $(this);

    $.post(
        $this.attr("action"),
        data,
        function(data) { 
            console.log(data); 
        },
        "json"
    );

    // Delete the row using DOM manipulation
    // Reference: https://stackoverflow.com/questions/13241005/add-delete-row-from-a-table
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
