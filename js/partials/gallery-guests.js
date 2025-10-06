const track = document.querySelector('.guests-carousel__track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.guests-carousel__button--left');
const nextButton = document.querySelector('.guests-carousel__button--right');

let currentIndex = 0;

const getSlideWidth = () => slides[0].getBoundingClientRect().width;

function moveToSlide(index) {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  track.style.transition = 'transform 0.5s ease';
  updateButtons();
}

function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  const numberOfVisibleSlides =
    window.innerWidth <= 1024 ? (window.innerWidth <= 768 ? 1 : 3) : 5;
  nextButton.disabled = currentIndex === slides.length - numberOfVisibleSlides;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    moveToSlide(currentIndex);
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(currentIndex);
  }
});

window.addEventListener('resize', () => {
  const numberOfVisibleSlides =
    window.innerWidth <= 1024 ? (window.innerWidth <= 768 ? 1 : 3) : 5;
  currentIndex =
    currentIndex < slides.length - numberOfVisibleSlides
      ? currentIndex
      : slides.length - numberOfVisibleSlides;
  moveToSlide(currentIndex);
});

moveToSlide(currentIndex);
