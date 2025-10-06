async function init() {
  await import("../partials/index.header-menu.js");
  await import("../partials/index.footer-social-icons.js");
  await import("../partials/index.footer-copyright-year.js");
  await import("../partials/rental-policies.content.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

