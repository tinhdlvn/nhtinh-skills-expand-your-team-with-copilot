// Dark mode toggle: remembers the choice in the browser
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    const isDark = theme === "dark";
    if (isDark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    toggle.textContent = isDark ? "☀️" : "🌙";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  }

  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {}
  applyTheme(saved === "dark" ? "dark" : "light");

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
