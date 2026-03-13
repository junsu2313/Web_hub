(function () {
  const storageKey = "web-hub-theme";

  function applyTheme(theme) {
    const root = document.documentElement;
    const button = document.getElementById("themeToggle");
    root.setAttribute("data-theme", theme);
    if (button) {
      button.textContent = theme === "dark" ? "라이트 모드" : "다크 모드";
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);

    const button = document.getElementById("themeToggle");
    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }

  document.addEventListener("DOMContentLoaded", initTheme);
})();
