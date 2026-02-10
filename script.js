// =======================================================
// VARIAVEIS
// =======================================================

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

// =======================================================
// EVENTS
// =======================================================

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("active")
}))