"use strict";
function changeColor(e) {
  if (e.target.textContent == "Stop") {
    var stopLight = document.querySelector("#stopLight");
    if (stopLight.classList.contains("stop")) {
      stopLight.classList.remove("stop");
      console.log("Stoplight bulb off!");
    } else {
      stopLight.classList.add("stop");
      console.log("Stoplight bulb on!");
    }
  } else if (e.target.textContent == "Slow") {
    var slowLight = document.querySelector("#slowLight");
    if (slowLight.classList.contains("slow")) {
      slowLight.classList.remove("slow");
      console.log("Slowlight bulb off!");
    } else {
      slowLight.classList.add("slow");
      console.log("Slowlight bulb on!");
    }
  } else if (e.target.textContent == "Go") {
    var goLight = document.querySelector("#goLight");
    if (goLight.classList.contains("go")) {
      goLight.classList.remove("go");
      console.log("Golight bulb off!");
    } else {
      goLight.classList.add("go");
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
stopButton.addEventListener("click", changeColor);
stopButton.addEventListener("mouseenter", mouseEnter);
stopButton.addEventListener("mouseleave", mouseExit);

var slowButton = document.querySelector("#slowButton");
slowButton.addEventListener("click", changeColor);
slowButton.addEventListener("mouseenter", mouseEnter);
slowButton.addEventListener("mouseleave", mouseExit);

var goButton = document.querySelector("#goButton");
goButton.addEventListener("click", changeColor);
goButton.addEventListener("mouseenter", mouseEnter);
goButton.addEventListener("mouseleave", mouseExit);

