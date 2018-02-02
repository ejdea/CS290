/******************************************************************************
* Author:     Edmund Dea
* Student Id: 933280343
* Date:       1/29/17
* Title:      CS290 HW3.1 - Closures and Loops
* Filename:   Activity4.js
******************************************************************************/

function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        result.push( function(x) {
			return function() { 
				var item = 'item' + x;
				console.log(item + ' ' + x); 
			};
		}(i) );
    }
    return result;
}
 
function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();