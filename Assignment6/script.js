/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       2/17/17
* Class:      CS290
* Title:      Week 6 - HW Assignment: AJAX Interactions
* Filename:   script.js
******************************************************************************/

// Open Weather API Example - 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=371b39cee585f67b5e36261e668c3c5a
var apiUrl = "http://api.openweathermap.org/data/2.5/weather?";
var apiKey = "APPID=371b39cee585f67b5e36261e668c3c5a";

document.getElementById("form1_submit").addEventListener("click", function(event) {
	var apiLoc;
	var location = document.getElementById("form1_loc");
	var regexZipCode = new RegExp('[0-9]{5}$');

	if (regexZipCode.test(location.value)) {
		apiLoc = "zip=" + location.value;
	} else {
		apiLoc = "city=" + location.value;
	}

	var req = new XMLHttpRequest;
	//var payload = {};
	var url = apiUrl + apiLoc + '&' + apiKey;	
	req.open("GET", url, true);
	req.addEventListener("load", function() {
		if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			console.log(response);
		} else {
			console.log("Error in network request: ", req.statusText);
		}
	});
	req.send(null);
	event.preventDefault();
});