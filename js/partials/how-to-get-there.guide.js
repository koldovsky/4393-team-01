const guideModal = document.querySelector(".guide__modal");
const guideModalImg = guideModal.querySelector(".guide__modal-content");
const guideModalCloseBtn = guideModal.querySelector(".guide__modal-close");
const guideModalPrevBtn = guideModal.querySelector(".guide__modal-prev");
const guideModalNextBtn = guideModal.querySelector(".guide__modal-next");
const guideImages = Array.from(document.querySelectorAll(".guide__modal-trigger"));
let guideCurrentIndex = 0;

const guideIcons = document.querySelectorAll(".guide__icon");
const guideMapScroll = document.querySelector(".map");

guideIcons.forEach(guideIcon => {
  guideIcon.addEventListener('click', () => {
    guideMapScroll.scrollIntoView({ behavior: 'smooth' });
  });
});

guideImages.forEach((img, guideIndex) => {
  img.addEventListener("click", () => {
    guideCurrentIndex = guideIndex;
    guideShowImage(guideCurrentIndex);
    guideModal.style.display = "flex";
  });
});

function guideShowImage(guideIndex) {
  guideModalImg.src = guideImages[guideIndex].src;
}

guideModalPrevBtn.addEventListener("click", () => {
  guideCurrentIndex = (guideCurrentIndex - 1 + guideImages.length) % guideImages.length;
  guideShowImage(guideCurrentIndex);
});

guideModalNextBtn.addEventListener("click", () => {
  guideCurrentIndex = (guideCurrentIndex + 1) % guideImages.length;
  guideShowImage(guideCurrentIndex);
});

guideModalCloseBtn.addEventListener("click", () => {
  guideModal.style.display = "none";
});

guideModal.addEventListener("click", (e) => {
  if (e.target === guideModal) {
    guideModal.style.display = "none";
  }
});


