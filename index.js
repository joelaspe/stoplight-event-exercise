"use strict";
function changeRed() {
  var stopLight = document.querySelector("#stopLight");
  if (stopLight.className.includes("stop")) {
    stopLight.className = "bulb";
  } else {
    stopLight.className += " stop";
  }
}
function changeYellow() {
  var slowLight = document.querySelector("#slowLight");
  if (slowLight.className.includes("slow")) {
    slowLight.className = "bulb";
  } else {
    slowLight.className += " slow";
  }
}
function changeGreen() {
  var goLight = document.querySelector("#goLight");
  if (goLight.className.includes("go")) {
    goLight.className = "bulb";
  } else {
    goLight.className += " go";
  }
}
function logBulb(e) {
  if (e.target.textContent == "Stop") {
    var stopLight = document.querySelector("#stopLight");
    if (stopLight.className == "bulb") {
      console.log("Stoplight bulb off!");
    } else {
      console.log("Stoplight bulb on!");
    }
  } else if (e.target.textContent == "Slow") {
    var slowLight = document.querySelector("#slowLight");
    if (slowLight.className == "bulb") {
      console.log("Slowlight bulb off!");
    } else {
      console.log("Slowlight bulb on!");
    }
  } else if (e.target.textContent == "Go") {
    var goLight = document.querySelector("#goLight");
    if (goLight.className == "bulb") {
      console.log("Golight bulb off!");
    } else {
      console.log("Golight bulb on!");
    }
  }
}
function mouseEnter(e) {
  console.log("Entered " + e.target.textContent + " button!");
}
function mouseExit(e) {
  console.log("Left " + e.target.textContent + " button!");
}

var stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", changeRed);
stopButton.addEventListener("mouseenter", mouseEnter);
stopButton.addEventListener("mouseleave", mouseExit);
stopButton.addEventListener("click", logBulb);
var slowButton = document.querySelector("#slowButton");
slowButton.addEventListener("click", changeYellow);
slowButton.addEventListener("mouseenter", mouseEnter);
slowButton.addEventListener("mouseleave", mouseExit);
slowButton.addEventListener("click", logBulb);
var goButton = document.querySelector("#goButton");
goButton.addEventListener("click", changeGreen);
goButton.addEventListener("mouseenter", mouseEnter);
goButton.addEventListener("mouseleave", mouseExit);
goButton.addEventListener("click", logBulb);
