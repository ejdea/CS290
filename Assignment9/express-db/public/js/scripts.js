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
    var data = [name, reps, weight, date, lbs];

    console.log("lbs = " + lbs);

    // Validate input
    // Reference for Date Format: https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd
    var isNumber = new RegExp('^-?[0-9]{1,}$');
    var isDate =  new RegExp('\d{4}-\d{2}-\d{2}');//^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$');

    if (!name || name.length === 0 || 
        !reps || reps.length === 0 || 
        !weight || weight.length === 0 ||
        !date || date.date === 0 ||
        lbs === undefined) {
        console.log("Error: Null value");
        return;
    }

    console.log(!isNumber.test(reps));
    console.log(!isNumber.test(weight));
    console.log(!isDate.test(date) + " / " + date);

    if (!isNumber.test(reps) || 
        !isNumber.test(weight)) {
        console.log("Error: Bad regex match");
        return;
    }

    $.post(
        $this.attr("action"),
        $this.serialize(),
        function(data) { 
            console.log(data); 
        },
        "json"
    );

    insertRow(data);
});

function insertRow(data) {
    var table = document.getElementById("workout_table");
    var newId = $("#workout_table tr").length + 1;

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

     table.appendChild(tr);
}

function deleteRow(data) {

}
