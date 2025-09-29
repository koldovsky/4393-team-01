(() => {
  const header = document.querySelector(".header__nav, nav.header__nav");
  if (!header) return;

  const btn = header.querySelector(".header__burger");
  const overlay = header.querySelector("#primary-overlay");
  if (!btn || !overlay) return;

  const isMobile = () => window.matchMedia("(max-width: 899.98px)").matches;
  const html = document.documentElement;
  const mql = window.matchMedia("(min-width: 900px)");

  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    overlay.setAttribute("data-open", "false");
    html.classList.remove("is-menu-open");
    if (document.activeElement && document.activeElement !== btn && isMobile())
      btn.focus();
  };

  const openMenu = () => {
    btn.setAttribute("aria-expanded", "true");
    overlay.setAttribute("data-open", "true");
    html.classList.add("is-menu-open");
    if (isMobile()) {
      const first = overlay.querySelector(
        "a, button, [tabindex]:not([tabindex='-1'])"
      );
      if (first) first.focus();
    }
  };

  const toggleMenu = () =>
    btn.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();

  btn.addEventListener("click", toggleMenu);

  header.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      e.stopPropagation();
      closeMenu();
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.closest("a, button") && isMobile()) closeMenu();
  });

  // Узгоджуємо стани при переході на десктоп і назад
  function sync() {
    if (mql.matches) {
      html.classList.remove("is-menu-open");
      btn.setAttribute("aria-expanded", "false");
      overlay.setAttribute("data-open", "false");
    }
  }

  // При зміні брейкпоінта прибираємо анімації, щоб не мигтіло overlay
  const onChange = () => {
    overlay.classList.add("is-resizing");
    // форсуємо reflow, щоб застосувався клас і transition: none
    void overlay.offsetHeight;
    sync();
    setTimeout(() => overlay.classList.remove("is-resizing"), 120);
  };

  mql.addEventListener("change", onChange);
  sync();
})();
