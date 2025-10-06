export function initCustomSelect() {
    const customSelect = document.querySelector('.custom-select');
    if (!customSelect) return;

    const selected = customSelect.querySelector('.custom-select__selected');
    const options = customSelect.querySelector('.custom-select__options');
    const optionElements = customSelect.querySelectorAll('.custom-select__option');
    const hiddenInput = customSelect.querySelector('input[type="hidden"]');

    // Відкриття/закриття селекта
    selected.addEventListener('click', () => {
        customSelect.classList.toggle('active');
    });

    // Закриття при кліку поза селектом
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('active');
        }
    });

    // Обробка вибору опції
    optionElements.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            const text = option.textContent;

            // Оновлюємо текст і значення
            selected.textContent = text;
            hiddenInput.value = value;

            // Оновлюємо клас selected
            optionElements.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            // Закриваємо селект
            customSelect.classList.remove('active');

            // Створюємо подію change для прихованого input
            const event = new Event('change', { bubbles: true });
            hiddenInput.dispatchEvent(event);
        });
    });

    // Обробка клавіатури
    selected.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            customSelect.classList.toggle('active');
        }
        if (e.key === 'Escape') {
            customSelect.classList.remove('active');
        }
    });

    // Початкове значення
    if (hiddenInput.value) {
        const initialOption = Array.from(optionElements)
            .find(option => option.dataset.value === hiddenInput.value);
        if (initialOption) {
            selected.textContent = initialOption.textContent;
            initialOption.classList.add('selected');
        }
    }
}