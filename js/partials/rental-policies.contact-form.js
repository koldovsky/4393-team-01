import { initCustomSelect } from './custom-select.js';

export default function initContactForm() {
    initCustomSelect();
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Отримуємо дані форми
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            // Показуємо користувачу, що відправляємо
            const submitButton = form.querySelector('.contact-form__submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Відкриваємо поштовий клієнт з заповненими даними
            const mailtoLink = `mailto:mountain.time.cabin@example.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
            )}`;

            window.location.href = mailtoLink;

            // Очищаємо форму
            form.reset();

            // Показуємо повідомлення про успіх
            const successMessage = document.createElement('div');
            successMessage.className = 'contact-form__success';
            successMessage.textContent = 'Your email client has been opened with the message. Thank you for contacting us!';
            form.appendChild(successMessage);

            // Видаляємо повідомлення через 5 секунд
            setTimeout(() => {
                successMessage.remove();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 5000);

        } catch (error) {
            // Показуємо повідомлення про помилку
            const errorMessage = document.createElement('div');
            errorMessage.className = 'contact-form__error';
            errorMessage.textContent = 'Something went wrong. Please try again later.';
            form.appendChild(errorMessage);

            // Видаляємо повідомлення про помилку через 5 секунд
            setTimeout(() => {
                errorMessage.remove();
            }, 5000);
        }
    });
}