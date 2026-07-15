// ===== Mobile menu toggle =====


window.onload = function () {

    if (!sessionStorage.getItem("welcome")) {

        alert("👋 Welcome to Tinku Prasad Choudhary Portfolio");

        sessionStorage.setItem("welcome","true");

    }

}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Hero terminal typing effect =====
function typeText(el, text, speed = 45) {
  return new Promise((resolve) => {
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function runIntroSequence() {
  const line1 = document.getElementById("typeLine1");
  const line2 = document.getElementById("typeLine2");
  const hiddenLines = document.querySelectorAll(".hidden-line");

  await typeText(line1, "Tinku Prasad Choudhary");
  hiddenLines[0].style.opacity = 1;
  await typeText(line2, "Web Developer Engineer");
  hiddenLines[1].style.opacity = 1;
}

// Respect users who prefer reduced motion — skip the animation, show text instantly
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  document.getElementById("typeLine1").textContent = "Tinku Prasad Choudhary";
  document.getElementById("typeLine2").textContent = "Web Developer Engineer";
  document.querySelectorAll(".hidden-line").forEach((el) => (el.style.opacity = 1));
} else {
  runIntroSequence();
}

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
