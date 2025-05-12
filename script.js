const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
