function init() {
  import("../partials/index.header-menu.js");
  import("../partials/index.footer-social-icons.js");
  import("../partials/index.footer-copyright-year.js");
  
  document.querySelectorAll('.accommodation-cabin-rentals__btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const target = document.getElementById('choose-the-best');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
