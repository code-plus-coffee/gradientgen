// Variables
var randomIcon = document.getElementsByClassName("random-icon")[0];
var cssProperty = document.getElementById("css-prop-display");
var color1 = document.getElementById("c1");
var color2 = document.getElementById("c2");
var playBtn = document.getElementsByClassName("play-icon")[0];
var body = document.getElementById("body");
var bd = getComputedStyle(body);
var pauseBtnSrc =
  "https://img.icons8.com/material-rounded/100/000000/pause.png";
var playBtnSrc =
  "https://img.icons8.com/material-rounded/90/000000/play--v1.png";

// To show the default color property on loading.
cssProperty.textContent = bd.backgroundImage + ";";

// Function to display the corresponding CSS property
function showProperty() {
  cssProperty.textContent = bd.backgroundImage + ";";
}

// Function to set gradient
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  showProperty();
}

/* Function to generate random gradients 
    https://stackoverflow.com/a/1484514 */
function randomGradientGenerator() {
  body.classList = "";

  // To toggle back the play button
  if (body.classList != "bg-play") {
    playBtn.src = playBtnSrc;
  }

  var letters = "0123456789ABCDEF";
  var c1 = "#";
  var c2 = "#";

  for (var i = 0; i < 6; ++i) {
    c1 += letters[Math.floor(Math.random() * 16)];
    c2 += letters[Math.floor(Math.random() * 16)];
  }

  color1.value = c1;
  color2.value = c2;

  body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";

  showProperty();
}

// Function to play gradient
function playGradient() {
  playBtn.src = pauseBtnSrc;
  body.style = null;
  body.classList.toggle("bg-play");
  color1.value = "#e73c7e";
  color2.value = "#23a6d5";

  showProperty();

  // To toggle back the play button
  if (body.classList != "bg-play") {
    playBtn.src = playBtnSrc;
  }
}

// Function to reset color values to default.
function resetDefaults() {
  body.style = null;
  body.class = null;
  color1.value = "#3478cb";
  color2.value = "#b929c9";
}

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
playBtn.addEventListener("click", playGradient);
randomIcon.addEventListener("click", randomGradientGenerator);
window.onbeforeunload = resetDefaults;