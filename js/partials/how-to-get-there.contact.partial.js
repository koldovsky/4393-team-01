let __contactOriginalHTML = null;

document.addEventListener("submit", (e) => {
  const form = e.target.closest(".contact__form-inner");
  e.preventDefault();

  const name = form.querySelector('input[name="name"]')?.value.trim() || "";
  const phonel = form.querySelector('input[name="phone-number"]');
  const phone = phonel?.value.trim() || "";
  const validPhone =
    /^\+?[1-9]\d{7,14}$/.test(phone) ||
    (phone.replace(/\D/g, "").length >= 7 &&
      phone.replace(/\D/g, "").length <= 15);

  if (name && validPhone) {
    const panel = form.closest(".contact__panel");
    __contactOriginalHTML ||= panel.innerHTML;
    panel.innerHTML = `
      <div class="contact__thanks" role="status" aria-live="polite">
        <h3 class="contact__thanks-title">Thank you!</h3>
        <p class="contact__thanks-text">We have received your request and will get back to you shortly.</p>
        <div class="contact__thanks-actions">
          <button type="button" class="contact__thanks-back">
            <span class="contact__button-text">Go back</span>
          </button>
        </div>
      </div>`;
  } else {
    const target = !name ? form.querySelector('input[name="name"]') : phonel;
    target?.classList.add("contact__input--error");
    target?.focus();
  }
});

document.addEventListener("input", (e) => {
  if (e.target.classList?.contains("contact__input--error"))
    e.target.classList.remove("contact__input--error");
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".contact__thanks-back");
  if (!btn) return;
  const panel = btn.closest(".contact__panel");
  if (panel && __contactOriginalHTML) panel.innerHTML = __contactOriginalHTML;
});
