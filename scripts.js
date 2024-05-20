// scripts.js
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const prevButton = document.getElementById("prev-project");
const nextButton = document.getElementById("next-project");
const projectContainer = document.querySelector(".project-container");
const projects = document.querySelectorAll(".project-card");
let currentIndex = 0;

function updateProjectSlider() {
  projectContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateProjectSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < projects.length - 1) {
    currentIndex++;
    updateProjectSlider();
  }
});
