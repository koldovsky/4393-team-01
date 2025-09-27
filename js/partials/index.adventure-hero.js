
// Масив даних для елементів adventure-hero__item
const adventureHeroItems = [
	{
		src: "img/index.adventure-hero/yosemite_gateway_horse_ranch.webp",
		alt: "Yosemite Gateway Horse Ranch Getaway Cottage",
		name: 'Yosemite Gateway Horse Ranch "Getaway" Cottage',
	},
	{
		src: "img/index.adventure-hero/tulomne_meadows_lodge.webp",
		alt: "Tuolumne Meadows Lodge",
		name: "Tuolumne Meadows Lodge",
	},
	{
		src: "img/index.adventure-hero/sierra_sunrise_vac_rental.webp",
		alt: "Sierra Sunrise Vacation Rental",
		name: "Sierra Sunrise Vacation Rental",
	},
	{
		src: "img/index.adventure-hero/donya_cottage.webp",
		alt: "Donya Marie's Cottage on Evergreen",
		name: "Donya Marie's Cottage on Evergreen",
	},
	{
		src: "img/index.adventure-hero/sierra_meadow_cottage.webp",
		alt: "Sierra Meadow Cottage",
		name: "Sierra Meadow Cottage",
	},
	{
		src: "img/index.adventure-hero/yosemite_river_house.webp",
		alt: "Yosemite's River House",
		name: "Yosemite's River House",
	}
];
// Функція перемішування масиву (Fisher–Yates)
function shuffleArray(array) {
  const shuffled = [...array]; // копія, щоб не псувати оригінал
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Функція для рендеру елементів у контейнер
function renderAdventureHeroItems() {
  const container = document.querySelector(".adventure-hero__list");
  if (!container) return;

  const shuffledItems = shuffleArray(adventureHeroItems);

  container.innerHTML = shuffledItems
    .map(
      (item) => `
        <li class="adventure-hero__item">
          <img
            class="adventure-hero__image"
            src="${item.src}"
            alt="${item.alt}"
          />
          <p class="adventure-hero__name">${item.name}</p>
        </li>
      `
    )
    .join("");
}
const shuffleBtn = document.getElementById("shuffleBtn");
const sortBtn = document.getElementById("sortBtn");

if (shuffleBtn && sortBtn) {
	shuffleBtn.addEventListener("click", () => {
		shuffleArray(adventureHeroItems);
		renderAdventureHeroItems();
	});

	sortBtn.addEventListener("click", () => {
		adventureHeroItems.sort((a, b) => a.name.localeCompare(b.name));
		renderAdventureHeroItems();
	});
}
// Викликати рендер після завантаження DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAdventureHeroItems);
} else {
  renderAdventureHeroItems();
}
