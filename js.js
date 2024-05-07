document.addEventListener("DOMContentLoaded", function () {
    const lightRadio = document.getElementById("light");
    const darkRadio = document.getElementById("dark");

    // Function to apply the selected theme
    function applyTheme(theme) {
        const root = document.documentElement;
        if (theme === "light") {
            root.style.setProperty("--clr-body-bg", "#ffde74");
            root.style.setProperty("--clr-card-bg", "hsl(0, 0%, 100%)");
            root.style.setProperty("--clr-text", "hsl(0, 0%, 0%)");
            root.style.setProperty("--clr-heading", "#fbf2d5");
        } else if (theme === "dark") {
            root.style.setProperty("--clr-body-bg", "#2b4353");
            root.style.setProperty("--clr-card-bg", "hsl(257, 14%, 38%)");
            root.style.setProperty("--clr-text", "hsl(0, 0%, 100%)");
            root.style.setProperty("--clr-heading", "#757a79");
        }
    }

    // Event listener for theme selection
    lightRadio.addEventListener("change", function () {
        applyTheme("light");
        localStorage.setItem("theme", "light");
    });
    darkRadio.addEventListener("change", function () {
        applyTheme("dark");
        localStorage.setItem("theme", "dark");
    });

    // Retrieve the selected theme from localStorage and apply it
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
        if (selectedTheme === "light") {
            lightRadio.checked = true;
            applyTheme("light");
        } else if (selectedTheme === "dark") {
            darkRadio.checked = true;
            applyTheme("dark");
        }
    }
});
