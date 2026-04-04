/*
Author: Amir Bennett
File Name: script.js
Date: 2026-04-04
*/

//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});

// Hamburger menu function

function hamburger() {
var menu = document.getElementById("menu-links");

if (menu.style.display === "block") {
menu.style.display = "none";
} else {
menu.style.display = "block";
}
}
