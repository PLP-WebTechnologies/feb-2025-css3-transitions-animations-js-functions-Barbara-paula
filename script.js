// Button Animation
document.getElementById("animateBtn").addEventListener("click", function() {
    this.classList.toggle("animate");
});

// Save Theme to Local Storage
document.getElementById("saveTheme").addEventListener("click", function() {
    let selectedTheme = document.getElementById("theme").value;
    localStorage.setItem("preferredTheme", selectedTheme);
    applyTheme(selectedTheme);
});

// Apply Theme from Local Storage
function applyTheme(theme) {
    document.body.className = theme === "dark" ? "dark-mode" : "";
}

// Check Local Storage on Page Load
document.addEventListener("DOMContentLoaded", function() {
    let savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme) {
        document.getElementById("theme").value = savedTheme;
        applyTheme(savedTheme);
    }
});
