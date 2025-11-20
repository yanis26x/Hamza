// Year in footer
document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Reveal-on-scroll animation using IntersectionObserver
const animatedEls = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  animatedEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all
  animatedEls.forEach((el) => el.classList.add("is-visible"));
}

// Simple fake form handlers (no backend yet)
function handleFormSubmit(formId, messageId, successText) {
  const form = document.getElementById(formId);
  if (!form) return;

  const messageEl = document.getElementById(messageId);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    messageEl.textContent = "Sending...";
    messageEl.style.color = "#6b7280";

    setTimeout(() => {
      messageEl.textContent = successText;
      messageEl.style.color = "#16a34a";
      form.reset();
    }, 700);
  });
}

handleFormSubmit(
  "booking-form",
  "booking-message",
  "Thank you! We’ll review your info and email you a booking link shortly."
);

handleFormSubmit(
  "contact-form",
  "contact-message",
  "Message sent. We’ll get back to you at the email address you provided within 24 hours."
);
