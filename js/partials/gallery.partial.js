document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".gallery__filter-item");
  const categories = document.querySelectorAll(".gallery__category");

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");

      filterItems.forEach((el) =>
        el.classList.remove("gallery__filter-item--active")
      );
      item.classList.add("gallery__filter-item--active");

      categories.forEach((cat) => {
        if (cat.getAttribute("data-category") === category) {
          cat.style.display = "block";
        } else {
          cat.style.display = "none";
        }
      });
    });
  });

  if (categories.length > 0) {
    categories.forEach((cat, index) => {
      cat.style.display = index === 0 ? "block" : "none";
    });
    filterItems[0].classList.add("gallery__filter-item--active");
  }
});
