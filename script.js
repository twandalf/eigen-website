// Wait until the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all the radio buttons for theme selection
  const themeSelector = document.querySelectorAll('input[name="theme"]');

  // Function to apply a selected theme
  function applyTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme", "yellow-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("selectedTheme", theme);
    updateThemeIndicator(theme);

    // Update the logo based on the theme
    const logo = document.getElementById("site-logo");
    if (theme === "dark") {
      logo.src = "/images/Antoine_Comer_white.svg";
    } else {
      logo.src = "/images/Antoine_Comer_black.svg";
    }
  }

  // Function to update the selected theme indicator
  function updateThemeIndicator(selectedTheme) {
    themeSelector.forEach((radio) => {
      // Find the button associated with the theme
      const themeButton = radio.nextElementSibling;
      if (radio.value === selectedTheme) {
        themeButton.classList.add("selected");
      } else {
        themeButton.classList.remove("selected");
      }
    });
  }

  // Load the previously saved theme from localStorage
  const savedTheme = localStorage.getItem("selectedTheme") || "light";

  // Apply the saved theme
  applyTheme(savedTheme);

  // Ensure the correct radio button is selected when the page loads
  document.querySelector(`input[value="${savedTheme}"]`).checked = true;

  // Listen for changes (when the user selects a theme)
  themeSelector.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      applyTheme(e.target.value); // Apply the selected theme
    });
  });
});
