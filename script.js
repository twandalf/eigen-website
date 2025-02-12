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
    logo.src =
      theme === "dark"
        ? "./images/Antoine_Comer_white.svg"
        : "./images/Antoine_Comer_black.svg";

    // Remove manual background-color setting for contact bar
  }

  // Function to update the selected theme indicator
  function updateThemeIndicator(selectedTheme) {
    themeSelector.forEach((radio) => {
      const themeButton = radio.nextElementSibling;
      themeButton.classList.toggle("selected", radio.value === selectedTheme);
    });
  }

  // Load the previously saved theme from localStorage
  const savedTheme = localStorage.getItem("selectedTheme") || "light";
  applyTheme(savedTheme);
  document.querySelector(`input[value="${savedTheme}"]`).checked = true;

  // Listen for theme changes
  themeSelector.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      applyTheme(e.target.value);
    });
  });
});

// Contact Bar Logic
document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector("header button a");
  const contactBar = document.getElementById("contact-bar");
  const closeButton = document.querySelector(".close-btn");
  const wrapper = document.querySelector(".wrapper");

  contactButton.addEventListener("click", (event) => {
    event.preventDefault();
    contactBar.classList.toggle("show");
    wrapper.classList.toggle("contact-visible");
  });

  closeButton.addEventListener("click", () => {
    contactBar.classList.remove("show");
    wrapper.classList.remove("contact-visible");
  });
});
