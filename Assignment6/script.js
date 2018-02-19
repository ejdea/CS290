/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       2/17/17
* Class:      CS290
* Title:      Week 6 - HW Assignment: AJAX Interactions
* Filename:   script.js
******************************************************************************/

// Open Weather API Example - 
// http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=371b39cee585f67b5e36261e668c3c5a
var apiUrl = "http://api.openweathermap.org/data/2.5/weather?";
var apiKey = "APPID=371b39cee585f67b5e36261e668c3c5a";
var apiUnits = "units=Imperial";

document.getElementById("form1_submit").addEventListener("click", function(event) {
	var apiLoc;
	var location = document.getElementById("form1_loc");
	var regexZipCode = new RegExp('[0-9]{5}$');

	if (regexZipCode.test(location.value)) {
		apiLoc = "zip=" + location.value + ",us";
	} else {
		apiLoc = "q=" + location.value + ",us";
	}

	var req = new XMLHttpRequest();
	var url = apiUrl + apiLoc + '&' + apiUnits + '&' + apiKey;	
	req.open("GET", url, true);
	req.addEventListener("load", function() {
		if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			displayData(response, "table1", "weatherReport", "openWeatherApi");
		} else {
			alert("City/Zip Code not found. Please try again.");
			console.log("Error in network request: ", req.statusText);
		}
	});
	req.send(null);
	event.preventDefault();
});

document.getElementById("form2_submit").addEventListener("click", function(event) {
	var req = new XMLHttpRequest();
	var payload = { name: null, age: null, hero: null, url : null };
	payload.name = document.getElementById("form2_name").value;
	payload.age = document.getElementById("form2_age").value;
	payload.hero = document.getElementById("form2_hero").value;
	payload.url = "http://www.marvel.com";
	req.open("POST", "http://httpbin.org/post", true);
	req.setRequestHeader("Content-Type", "application/json");
	req.addEventListener("load", function() {
		if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			displayData(response, "table2", "httpBinReport", "httpBinBoxApi");
		} else {
			alert("Error in network request: " + req.statusText);
			console.log("Error in network request: " + req.statusText);
		}
	});
	req.send(JSON.stringify(payload));
	event.preventDefault();
});

function displayData(data, tableName, reportName, boxName)
{
	var report = document.getElementById(reportName);
	var boxName = document.getElementById(boxName);
	
	var table1check = document.getElementById("table1");
	if (table1check != null) {
		table1check.parentNode.removeChild(table1check);
		var boxName1 = document.getElementById("openWeatherApi");
		boxName1.style.height = "90px";
		boxName1.style.width = "500px";
	}

	var table2check = document.getElementById("table2");
	if (table2check != null) {
		table2check.parentNode.removeChild(table2check);
		var boxName2 = document.getElementById("httpBinBoxApi");
		boxName2.style.height = "130px";
		boxName2.style.width = "500px";
	}

	boxName.style.height = "370px";
	boxName.style.width = "800px";

	// Create table
	var table1 = document.createElement("table");
	table1.setAttribute("id", tableName);
	
	var tr = document.createElement("tr");
	for (var key in data)
	{
		var tr = document.createElement("tr");
		
		var td1 = document.createElement("td");
		td1.textContent = key + ":";
		
		var td2 = document.createElement("td");
		if (typeof data[key] === "object") {
			var i = length = 0;
			for (var tmp in data[key]) {
				length++;
			}
			for (var key2 in data[key]) {
				if (typeof data[key][key2] === "object") {
					var i2 = length2 = 0;
					for (var tmp2 in data[key][key2]) {
						length2++;
					}
					for (var key3 in data[key][key2]) {
						td2.textContent += key3 + ": " + data[key][key2][key3] + (++i2 < length2 ? ", " : "");
					}
				} else {
					var keyName;
					switch (key2)
					{
						case "lon":
							keyName = "longitude";
							break;
						case "lat":
							keyName = "latitude";
							break;
						case "temp":
							keyName = "temperature";
							break;
						default:
							keyName = key2;
					}
					td2.textContent += keyName + ": " + data[key][key2] + (++i < length ? ", " : "");
				}
			}
		} else {
			td2.textContent = data[key];
		}
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		table1.appendChild(tr);
	}

	report.appendChild(table1);
}
