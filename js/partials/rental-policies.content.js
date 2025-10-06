function initMarquee() {
    const container = document.querySelector('.policies__contacts');
    const contacts = container.querySelectorAll('.policies__contact');
    
    // Створюємо два контейнери для плавної анімації
    const wrapper = document.createElement('div');
    wrapper.className = 'policies__marquee-wrapper';
    
    const marqueeContent1 = document.createElement('div');
    marqueeContent1.className = 'policies__marquee-content';
    
    const marqueeContent2 = document.createElement('div');
    marqueeContent2.className = 'policies__marquee-content';
    
    // Наповнюємо обидва контейнери контактами
    contacts.forEach(contact => {
        marqueeContent1.appendChild(contact.cloneNode(true));
        marqueeContent2.appendChild(contact.cloneNode(true));
    });

    // Збираємо структуру
    wrapper.appendChild(marqueeContent1);
    wrapper.appendChild(marqueeContent2);
    container.innerHTML = '';
    container.appendChild(wrapper);

    // Розраховуємо оптимальну швидкість на основі ширини контенту
    const speed = 0.05;
    let isPaused = false;
    let animationFrame;
    let startTime = performance.now();
    let currentPosition = 0;

    function animate(currentTime) {
        if (!isPaused) {
            const elapsed = currentTime - startTime;
            currentPosition = -((elapsed * speed) % (marqueeContent1.offsetWidth));
            
            wrapper.style.transform = `translateX(${currentPosition}px)`;
        }
        animationFrame = requestAnimationFrame(animate);
    }

    // Пауза при наведенні
    container.addEventListener('mouseenter', () => {
        isPaused = true;
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    });
    
    container.addEventListener('mouseleave', () => {
        isPaused = false;
        startTime = performance.now() - (Math.abs(currentPosition) / speed);
        animate(performance.now());
    });

    // Запускаємо анімацію
    animate(performance.now());
    
    // Оновлюємо позицію при зміні розміру вікна
    window.addEventListener('resize', () => {
        startTime = performance.now() - (Math.abs(currentPosition) / speed);
    });
}

import initContactForm from './rental-policies.contact-form.js';

export default function initRentalPolicies() {
    // Ініціалізація бігучої стрічки
    initMarquee();
    
    // Ініціалізація акордеону
    const policyButtons = document.querySelectorAll('.policy__button');
    
    policyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            
            const textWrapper = button.nextElementSibling;
            if (textWrapper) {
                if (!isExpanded) {
                    const height = textWrapper.scrollHeight;
                    textWrapper.style.maxHeight = height + 'px';
                } else {
                    textWrapper.style.maxHeight = '0';
                }
            }
        });
    });

    // Ініціалізація контактної форми
    initContactForm();
}

// Викликаємо функцію одразу після експорту
initRentalPolicies();