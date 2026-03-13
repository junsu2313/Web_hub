(function () {
  const storageKey = "web-hub-theme";
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (button) {
      button.textContent = theme === "dark" ? "라이트 모드" : "다크 모드";
    }
  }

  const savedTheme = localStorage.getItem(storageKey);
  const preferredDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (preferredDark ? "dark" : "light");

  applyTheme(initialTheme);

  if (button) {
    button.addEventListener("click", function () {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }
})();
