const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.addEventListener("click", () => {
  nav.classList.toggle("active");
  bar.classList.toggle("active");
});
