let adventureHeroItems = [
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
  },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function renderAdventureHeroItems(items = adventureHeroItems) {
  const container = document.querySelector(".adventure-hero__list");
  if (!container) return;
  container.innerHTML = items
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

let isSortAZ = true;
let currentItems = shuffleArray(adventureHeroItems);

function updateSortButton() {
  if (isSortAZ) {
    sortBtn.textContent = "Sort A–Z";
    sortBtn.setAttribute("aria-label", "Sort A–Z");
  } else {
    sortBtn.textContent = "Sort Z–A";
    sortBtn.setAttribute("aria-label", "Sort Z–A");
  }
}

if (shuffleBtn && sortBtn) {
  shuffleBtn.addEventListener("click", () => {
    currentItems = shuffleArray(adventureHeroItems);
    isSortAZ = true;
    updateSortButton();
    renderAdventureHeroItems(currentItems);
  });

  sortBtn.addEventListener("click", () => {
    if (isSortAZ) {
      currentItems = [...adventureHeroItems].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      isSortAZ = false;
    } else {
      currentItems = [...adventureHeroItems].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      isSortAZ = true;
    }
    updateSortButton();
    renderAdventureHeroItems(currentItems);
  });
}
function enableImagePopup() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".adventure-modal__close");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("adventure-hero__image")) {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      modalImg.alt = e.target.alt;
      captionText.textContent = e.target.alt;
    }
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Закриття по кліку поза зображенням
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}

function initialLoad() {
  updateSortButton();
  renderAdventureHeroItems(currentItems);
  enableImagePopup();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialLoad);
} else {
  initialLoad();
}
