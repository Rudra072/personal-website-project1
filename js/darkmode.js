let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkMode");
};

document.querySelector(".nav").addEventListener("click", (e) => {
  if (e.target.classList.contains("theme-selector")) {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
});

if (darkMode === "enabled") {
  enableDarkMode();
}
