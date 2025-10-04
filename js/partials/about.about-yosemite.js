const images = [
    'img/about.about-yosemite/yosemite-lake.jpg',
    'img/about.about-yosemite/point-view.webp',
    'img/about.about-yosemite/tunnel-view.jpg'
];

const altTexts = [
    'Yosemite lake',
    'Point view',
    'Tunnel view'
];

let currentIndex = 0;
const img = document.querySelector('#about-yosemite img');
const leftBtn = document.querySelector('.carousel-btn-left');
const rightBtn = document.querySelector('.carousel-btn-right');

function changeImage(newIndex) {
    img.style.opacity = '0';

    setTimeout(() => {
        currentIndex = newIndex;
        img.src = images[currentIndex];
        img.alt = altTexts[currentIndex];
        img.style.opacity = '1';
    }, 200);
}

leftBtn.addEventListener('click', () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
});

rightBtn.addEventListener('click', () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
});

const aboutSection = document.querySelector('#about-yosemite');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});
observer.observe(aboutSection);