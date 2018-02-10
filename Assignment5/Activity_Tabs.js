/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       2/3/17
* Class:      CS290
* Title:      Week 5 - Activity Tabs
* Filename:   Activity_Tabs.js
******************************************************************************/

function asTabs(node) {
	var tabs = [];
	for(var i = 0; i < node.childNodes.length; i++) {
		var child = node.childNodes[i];
		if (child.nodeType === document.ELEMENT_NODE)
			tabs.push(child);
	}

	tabs.forEach(function(ele) {
		ele.style.display = "none";
	});

	var tabList = document.createElement("div");
	tabs.forEach(function(ele, idx) {
		var button = document.createElement("button");
		button.textContent = ele.getAttribute("data-tabname");
		button.addEventListener("click", function() { clickButton(idx); });
		tabList.appendChild(button);
	});
	document.getElementById("wrapper").insertBefore(tabList, tabs[0]);

	function clickButton(idx) {
		tabs.forEach(function(tabEle, tabIdx) {
			if (tabIdx === idx)
				tabEle.style.display = "";
			else
				tabEle.style.display = "none";
		});

		for (var i = 0; i < tabList.childNodes.length; i++) {
			var child = tabList.childNodes[i];
			if (i === idx)
				child.style.border = "blue";
			else
				child.style.border = "";
		}
	}




















	/*var tabs = [];
	
	for (var i = 0; i < node.childNodes.length; i++) {
		var child = node.childNodes[i];
		if (child.nodeType == document.ELEMENT_NODE) {
			tabs.push(child);
		}
	}
	
	var tabsList = document.createElement("div");
	tabs.forEach(function(tab, index) {
		var button = document.createElement("button");
		button.textContent = tab.getAttribute("data-tabname");
		button.addEventListener("click", function() { clickButton(index); });
		tabsList.appendChild(button);
	});
	node.insertBefore(tabsList, node.firstChild);

	function clickButton(index) {

	}*/
}

asTabs(document.querySelector("#wrapper"));