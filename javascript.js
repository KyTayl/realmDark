// ==UserScript==
// @name     SPC Dark JS
// @description  Makes realm actually useful!
// @namespace    http://tampermonkey.net/
// @author       Kye Taylor
// @version      1.0.1
// @updateURL    https://raw.githubusercontent.com/KyTayl/realmDark/master/javascript.js
// @downloadURL  https://raw.githubusercontent.com/KyTayl/realmDark/master/javascript.js
// @include  https://realm.stpatricks.qld.edu.au/*
// @run-at document-end
// ==/UserScript==

function hide(e) {
    var x = document.getElementById(e);
    if(x){
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}
hide("component4669"); // Hello (Name)
hide("component15384"); // Large Boxes
hide("component4670"); // News
hide("footer"); // Footer
