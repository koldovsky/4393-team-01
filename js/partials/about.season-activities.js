// Maria Batoorina
const slides = document.querySelectorAll(".carousel__slide");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const indicators = document.querySelectorAll(".carousel__indicator");

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  indicators[index].classList.add("active");

  currentIndex = index;
}

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

indicators.forEach((indicator, index) => {
  // Обновляем aria-label для доступности
  indicator.setAttribute("aria-label", `Go to slide ${index + 1}`);
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
});

let autoPlay = true;
let intervalTime = 4000;
let slideInterval;

function startAutoPlay() {
  if (autoPlay) {
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, intervalTime);
  }
}

function stopAutoPlay() {
  clearInterval(slideInterval);
}

document
  .querySelector(".carousel")
  .addEventListener("mouseenter", stopAutoPlay);
document
  .querySelector(".carousel")
  .addEventListener("mouseleave", startAutoPlay);

showSlide(currentIndex);
startAutoPlay();
