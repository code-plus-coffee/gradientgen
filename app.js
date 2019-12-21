let bd = getComputedStyle(body);
let cssProperty = document.getElementById("css-prop-display");

// To display the corresponding CSS property
function showProperty() {
  cssProperty.textContent = bd.backgroundImage + ";";
}

// To display the current CSS Property on load
showProperty();

let color1 = document.getElementById("c1");
let color2 = document.getElementById("c2");

// Function to set gradient
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  showProperty();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// To play the gradient
let playBtn = document.getElementsByClassName("play-icon")[0];

playBtn.addEventListener("click", () => {
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
});

/* Click to copy function
  Ref: https://codepen.io/nathanlong/pen/ZpAmjv */
let copyButton = document.getElementById("copy");

copyButton.addEventListener("click", () => {
  let = ifCopySupported = document.queryCommandSupported("copy");

  if (ifCopySupported === true) {
    let textArea = document.createElement("textarea");
    textArea.value = cssProperty.textContent;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (e) {
      console.log("Error!");
    }

    document.body.removeChild(textArea);
  } else {
    window.prompt("CTRL + C, Enter", textArea.value);
  }
});

/* Function to generate random gradients 
    https://stackoverflow.com/a/1484514 */
let randomIcon = document.getElementsByClassName("random-icon")[0];
let pauseBtnSrc = "https://img.icons8.com/material-rounded/48/000000/pause.png";
let playBtnSrc =
  "https://img.icons8.com/material-rounded/90/000000/play--v1.png";

randomIcon.addEventListener("click", () => {
  body.classList = "";

  // To toggle back the play button
  if (body.classList != "bg-play") {
    playBtn.src = playBtnSrc;
  }

  let letters = "0123456789ABCDEF";
  let c1 = "#";
  let c2 = "#";

  for (let i = 0; i < 6; ++i) {
    c1 += letters[Math.floor(Math.random() * 16)];
    c2 += letters[Math.floor(Math.random() * 16)];
  }

  color1.value = c1;
  color2.value = c2;

  body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";

  showProperty();
});

// To reset color values to defaults
window.onbeforeunload = () => {
  body.style = null;
  body.class = null;
  color1.value = "#3478cb";
  color2.value = "#b929c9";
};
