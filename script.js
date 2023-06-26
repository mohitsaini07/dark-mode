const moonImage = "/dark theme icon/moon.png";
const sunImage = "/dark theme icon/sun.png";

// Reference of required elements
const icon = document.querySelector("#icon");
const darkModeToggle = document.querySelector("#darkModeToggle");


// Function to toggle dark mode:
function toggleDarkMode() {
  const body = document.getElementById("body");
  body.classList.toggle("dark-mode");

  if (body.classList.contains('dark-mode')) {
    icon.setAttribute("src", sunImage)
  } else {
    icon.setAttribute("src", moonImage)
  }

}

darkModeToggle.addEventListener("change", toggleDarkMode);


