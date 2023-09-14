const moonImage = "./assests/moon.png";
const sunImage = "./assests/sun.png";

// Reference of required elements
const icon = document.querySelector("#icon");
const darkModeToggle = document.querySelector("#darkModeToggle");

// Function to toggle dark mode:
function toggleDarkMode() {
  const body = document.getElementById("body");
  const isDarkMode = body.classList.toggle("dark-mode");

  if (isDarkMode) {
    icon.setAttribute("src", sunImage);
  } else {
    icon.setAttribute("src", moonImage);
  }
}

darkModeToggle.addEventListener("change", toggleDarkMode);
