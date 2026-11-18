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

const form = document.querySelector(".contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();               // stop the page from reloading
  statusEl.textContent = "Sending...";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),     // collects every field with a name
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      statusEl.textContent = "Thanks! Your message was sent.";
      form.reset();
    } else {
      statusEl.textContent = "Something went wrong. Please email me directly.";
    }
  } catch {
    statusEl.textContent = "Network error. Please try again.";
  }
});