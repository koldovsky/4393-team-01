const socialLinks = document.querySelectorAll(".footer__social-link");

socialLinks.forEach((link) => {
  const icon = link.querySelector(".footer__social-icon");

  icon.style.transition = "transform 0.3s ease";

  let animationFrame;

  const updateTransform = (x, y, rect) => {
    const moveX = (x - rect.width / 2) / 5;
    const moveY = (y - rect.height / 2) / 5;
    icon.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1)`;
  };

  link.addEventListener("mousemove", (e) => {
    cancelAnimationFrame(animationFrame);

    animationFrame = requestAnimationFrame(() => {
      const rect = link.getBoundingClientRect();
      updateTransform(e.clientX - rect.left, e.clientY - rect.top, rect);
    });
  });

  link.addEventListener("mouseleave", () => {
    cancelAnimationFrame(animationFrame);
    icon.style.transform = "translate3d(0,0,0) scale(1)";
  });
});
