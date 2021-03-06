// ==UserScript==
// @name            Stig's Gmail Ad Handlr
// @namespace       dk.rockland.userscript.gmail.handlr
// @description     Stig's Gmail Ad Handlr highlights ads for easy recognizability
// @author          Stig Nygaard, https://www.rockland.dk, https://www.flickr.com/photos/stignygaard/
// @match           https://mail.google.com/mail/u/0/*
// @version         8
// @run-at          document-start
// @grant           none
// @noframes
// ==/UserScript==

let DEBUG = false;
function log(s) {
    if (DEBUG && window.console) {
        window.console.log(s);
    }
}

let selector = 'div[role="tabpanel"] div.Cp:not(:last-child)';

function insertStyle() {
    if (!document.getElementById('gmailStyle')) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'gmailStyle';
        style.textContent = selector + ' {opacity:0.96 !important; background-color:#FFA; filter: sepia(90%) !important; display: none} #aso_search_form_anchor {background-color:#DFD}';
        // style.innerHTML = '.aKB {background-color:#FFA; filter: sepia(90%) !important} .aKB div {opacity:0.96 !important} div.J-N-Jz:contains("Edit subject"), div.J-J5-Ji.J-JN-M-I-Jm {background-color:#F00}'; // div#:1dt,  // data-tooltip="Type of response"
        document.getElementsByTagName('head')[0].appendChild(style);
        log('gmailStyle has been ADDED');
    } else {
        log('gmailStyle was already present');
    }
}

function blocker() {
    let elems = document.querySelectorAll(selector);
    for (let i = 0; i < elems.length; i++) {
        elems[i].removeEventListener('click');
        // elems[i].parent.addEventListener('click', function(e){alert('hej');e.stopPropagation()}, true);
    }
}

function styleKeeper() {
    setInterval(insertStyle, 5000);
    // setTimeout(insertStyle, 200);
}

// Try immediately
insertStyle();
// and keep trying in case missing...
document.addEventListener('DOMContentLoaded', insertStyle, false);
window.addEventListener('load', styleKeeper, false);
// window.addEventListener('load', blocker, false);
