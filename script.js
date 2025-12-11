/* --------------------------------------------------------
   AUTO YEAR UPDATE
--------------------------------------------------------- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------
   SCROLL ANIMATION
   Fade-in effect when sections enter viewport
--------------------------------------------------------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .impact-box, .program-card, .sdg-box").forEach((element) => {
  element.classList.add("hidden");
  observer.observe(element);
});

/* --------------------------------------------------------
   MOBILE NAV: CLOSE MENU ON CLICK
--------------------------------------------------------- */
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const toggle = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".navbar-collapse");

    if (collapse.classList.contains("show")) {
      toggle.click();
    }
  });
});

/* --------------------------------------------------------
   DROPDOWN BEHAVIOR ON MOBILE
   Makes dropdown open with tap instead of hover
--------------------------------------------------------- */
const dropdownLinks = document.querySelectorAll(".dropdown-toggle");

dropdownLinks.forEach((toggleLink) => {
  toggleLink.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      // Prevent default navigation for mobile
      e.preventDefault();

      const submenu = this.nextElementSibling;

      if (submenu) {
        submenu.classList.toggle("show");
      }
    }
  });
});

/* --------------------------------------------------------
   OPTIONAL: SMOOTH SCROLL (if needed)
--------------------------------------------------------- */
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });
