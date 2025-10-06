let thingsToDoItems = [
    {
        id: 1,
        img: "img/index.things-to-do/horse-riding.webp",
        alt: "People enjoying horse riding in nature", 
        name: "Horse Riding", 
        price: 4,
        description: "Take a measured romantic horseback riding tour and enjoy our unforgettable picturesque surroundings."
    },
    {
        id: 2,
        img: "img/index.things-to-do/rock-climbing.webp",
        alt: "Rock climber scaling a cliff", 
        name: "Rock Climbing", 
        price: 2,
        description: "Whether you are a professional mountaineer or it’s your first time, Yosemite is one of the best places for this kind of sport."
    },
    {
        id: 3,
        img: "img/index.things-to-do/biking.webp",
        alt: "Cyclist riding through Yosemite Valley", 
        name: "Biking", 
        price: 1,
        description: "Rent a bike and take a fun and easy two-wheel tour over Yosemite Valley. It usually takes about 2 hours."
    },
    {
        id: 4,
        img: "img/index.things-to-do/rafting.webp",
        alt: "Group rafting on a mountain river", 
        name: "Rafting", 
        price: 3,
        description: "Combine your river rafting adventure with a visit to the park. Test our waters and enjoy the thrill."
    },
    {
        id: 5,
        img: "img/index.things-to-do/fishing.webp",
        alt: "Person fishing in a mountain lake", 
        name: "Fishing", 
        price: 2,
        description: "With a number of permanent streams and mountain lakes, we offer anglers of all levels a diverse variety of fishing opportunities."
    },
    {
        id: 6,
        img: "img/index.things-to-do/spas-and-wellness.webp",
        alt: "Spa and wellness center interior", 
        name: "Spas and Wellness", 
        price: 2,
        description: "After a long, exhausting day, relax and pamper yourself in our unique spa and wellness center."
    }
]

function renderThingsToDoItems(items = thingsToDoItems, rates = 1, currency="USD") {
  const list = document.querySelector(".things-to-do__list");
  if (!list) return;

  list.innerHTML = items
    .map(
      (item) => `
        <li class="things-to-do__item">
          <article class="things-to-do__card">
            <figure class="things-to-do__media">
              <img
                class="things-to-do__image"
                src="${item.img}"
                alt="${item.alt}"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <h3 class="things-to-do__subtitle">${item.name}</h3>
            <p class="things-to-do__price">
              <a
                class="things-to-do__price-link"
                href="https://www.google.com/finance/markets/currencies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>${(item.price * rates).toFixed(2)} ${currency}/hour</strong>
              </a>
            </p>
            <p class="things-to-do__description">${item.description}</p>
          </article>
        </li>`
    )
    .join("");
}


document.querySelector(".things-to-do__currency").addEventListener("change", changeCurrency);

async function changeCurrency() {
  const convertToCurrency = document.querySelector(".things-to-do__currency").value;
  const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const allCurrency = await response.json();
  const rates = allCurrency.rates[convertToCurrency];
  renderThingsToDoItems(thingsToDoItems, rates, convertToCurrency);
}

function initialLoad() {
  renderThingsToDoItems();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialLoad);
} else {
  initialLoad();
}

