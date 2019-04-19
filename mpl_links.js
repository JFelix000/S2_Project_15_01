"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

    Author: Jose Felix
    Date:   4.18.19 
   
   Filename: mpl_links.js

*/

window.addEventListener("load", function (e) {
    // This is to make the govLinks forms be selected
    var allSelect = document.forms.govLinks;
    // this is to loop through all of the code from 0 to allSelect.length
    for (var i = 0; i < allSelect.length; i++) {
        // you need to add an e to initiate the event being there and allow it to be called in the code
        allSelect[i].onchange = function (e) {
            //window.location.href gets the link of the target and uses the value to get the link that is in the select element
            window.location.href = e.target.value;
        }
    }
});

