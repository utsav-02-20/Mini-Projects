const themeToggle = document.querySelector("#themeToggle");
const getStartedBtn = document.querySelector("#getStartedBtn");
const key = "preferred-theme";

const setTheme = (theme) => {
    document.body.classList.toggle("dark", theme === "dark");
    if (themeToggle) {
        themeToggle.textContent = theme === "dark" ? "Light Theme" : "Dark Theme";
    }
    localStorage.setItem(key, theme);
};

setTheme(localStorage.getItem(key) || "light");

themeToggle?.addEventListener("click", () => {
    setTheme(document.body.classList.contains("dark") ? "light" : "dark");
});

getStartedBtn?.addEventListener("click", () => {
    window.location.href = "projects.html";
});
