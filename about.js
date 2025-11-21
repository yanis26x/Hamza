// ABOUT PAGE SPECIFIC JS

// Reveal on scroll for elements with data-about-animate
const aboutAnimatedEls = document.querySelectorAll("[data-about-animate]");

if ("IntersectionObserver" in window) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  aboutAnimatedEls.forEach((el) => aboutObserver.observe(el));
} else {
  aboutAnimatedEls.forEach((el) => el.classList.add("about-visible"));
}
