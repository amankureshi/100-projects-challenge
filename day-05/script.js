// const open = document.getElementById("open");
// const close = document.getElementById("close");
// const container = document.getElementById("container");

// open.addEventListener("click", () => {
//   container.classList.add("active");
// });
// close.addEventListener("click", () => {
//   container.classList.remove("active");
// });
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

// Confetti animation when clicking the image
open.addEventListener("click", () => {
  container.classList.add("active");

  // Confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});
