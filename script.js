document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});

document.addEventListener("DOMContentLoaded", () => {
  const DARK_LABEL = "[ Theme: Dark  ]";
  const LIGHT_LABEL = "[ Theme: Light ]";

  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  if (initialTheme === "light") {
    root.classList.add("light");
    themeToggle.textContent = LIGHT_LABEL;
  } else {
    themeToggle.textContent = DARK_LABEL;
  }

  themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");
    const isLight = root.classList.contains("light");
    themeToggle.textContent = isLight ? LIGHT_LABEL : DARK_LABEL;
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          root.classList.remove("light");
          themeToggle.textContent = DARK_LABEL;
        } else {
          root.classList.add("light");
          themeToggle.textContent = LIGHT_LABEL;
        }
      }
    });
});
