(function () {
  // делегирование клика на body
  document.body.addEventListener("click", function (e) {
    const link = e.target.closest(".shopcafe__lightbox-link");
    if (!link) return; // если не lightbox-ссылка, выходим
    e.preventDefault();

    const src = link.href;

    // создаём overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";
    overlay.style.cursor = "zoom-out";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";

    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 25px rgba(0,0,0,0.5)";
    img.style.transform = "scale(0.9)";
    img.style.transition = "transform 0.3s ease";

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = "1";
      img.style.transform = "scale(1)";
    });

    // клик по overlay закрывает lightbox
    overlay.addEventListener("click", () => {
      overlay.style.opacity = "0";
      img.style.transform = "scale(0.9)";
      setTimeout(() => overlay.remove(), 300);
    });

    // клик по картинке не закрывает overlay
    img.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
})();
