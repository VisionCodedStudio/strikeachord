/*
Author: Amir Bennett
File Name: script.js
Date: 2026-03-16
*/

// Hamburger menu function

function hamburger() {
  var menu = document.getElementById("menu-links");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
