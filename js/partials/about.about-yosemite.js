const img = document.querySelector('#about-yosemite img');

img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.4s ease';
});

img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
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