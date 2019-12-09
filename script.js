// Variables
var randomIcon = document.getElementsByClassName("random-icon")[0];
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

/* Function to generate random gradients 
    https://stackoverflow.com/a/1484514 */
function randomGradientGenerator() {
    var letters = '0123456789ABCDEF';
    var c1 = '#';
    var c2 = '#';

    for(var i = 0; i < 6; ++i) {
        c1 += letters[Math.floor(Math.random() * 16)];
        c2 += letters[Math.floor(Math.random() * 16)];
    }

    color1.value = c1;
    color2.value = c2;

    body.style.background = "linear-gradient(to right, "
        + c1
        + ", "
        + c2
        + ")";

    showProperty();
}

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomIcon.addEventListener("click", randomGradientGenerator);