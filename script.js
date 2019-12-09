// Variables
var cssProperty = document.getElementById("css-prop-display");
var color1 = document.getElementById("c1");
var color2 = document.getElementById("c2");
var body = document.getElementById("body");
var bg = getComputedStyle(body)

cssProperty.textContent = bg.backgroundImage + ";";

// Function to display the corresponding CSS property
function showProperty() {
    cssProperty.textContent = body.style.background + ";";
}

// Function to set gradient
function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    showProperty();
}

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
