// Automatically keep the footer year current,
// so you never have to edit it again.
document.getElementById("year").textContent = new Date().getFullYear();

// Fade sections in as they enter the screen
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}