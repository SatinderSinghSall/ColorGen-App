document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("theme-toggle");
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");
const button = document.querySelector("#generate-btn");
const h1 = document.querySelector("h1");
const colorBox = document.querySelector("#color-box");

//! Function to generate a random color:
function getRandomColor() {
  let redColor = Math.floor(Math.random() * 255);
  let greenColor = Math.floor(Math.random() * 255);
  let blueColor = Math.floor(Math.random() * 255);
  let color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  return color;
}

//! Event to tiger color function:
button.addEventListener("click", function () {
  let randomColor = getRandomColor();
  h1.innerText = randomColor;
  colorBox.style.background = randomColor;
});

//! Copy color code feature:
h1.addEventListener("click", () => {
  navigator.clipboard.writeText(h1.innerText);
  h1.innerText = "Copied!";
  setTimeout(() => {
    h1.innerText = "Click Generate to get a color!";
  }, 2000);
});

//! Theme toggle:
toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  );
});
//! Burger menu toggle:
burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
