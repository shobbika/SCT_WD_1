// Explore button scroll
const exploreBtn = document.getElementById("exploreBtn");
exploreBtn.addEventListener("click", () => {
  document.getElementById("galaxies").scrollIntoView({ behavior: 'smooth' });
});

// Navbar scroll background
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "black";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Navbar link smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navMenu.classList.remove("active");
  });
});
