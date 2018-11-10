// ==UserScript==
// @name     	Stig's Gmail Ad Handlr
// @namespace   dk.rockland.userscript.gmail.handlr
// @description Stig's Gmail Ad Handlr highlights ads for easy recognizability
// @author      Stig Nygaard, http://www.rockland.dk, https://www.flickr.com/photos/stignygaard/
// @match       https://mail.google.com/mail/u/0/*
// @version  	1
// @run-at      document-start
// @grant    	none
// @noframes
// ==/UserScript==

var DEBUG = false;
function log(s) {
    if (DEBUG && window.console) {
        window.console.log(s);
    }
}

function insertStyle() {
    if (!document.getElementById('gmailStyle')) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'gmailStyle';
        style.innerHTML = '.aKB {background-color:#FFA; filter: sepia(90%) !important} .aKB div {opacity:0.96 !important}';      
        document.getElementsByTagName('head')[0].appendChild(style);
        log('gmailStyle has been ADDED');
    } else {
        log('gmailStyle was already present');
    }
}

// onload...
insertStyle();
