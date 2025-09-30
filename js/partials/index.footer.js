const socialLinks = document.querySelectorAll(".footer__social-link");

socialLinks.forEach(link => {
  const icon = link.querySelector(".footer__social-icon");

  link.addEventListener("mousemove", e => {
    window.requestAnimationFrame(() => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const moveX = (x - rect.width / 2) / 5;
      const moveY = (y - rect.height / 2) / 5;

      icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });
  });

  link.addEventListener("mouseleave", () => {
    icon.style.transform = "translate(0,0) scale(1)";
  });
});
