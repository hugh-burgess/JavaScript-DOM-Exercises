let button = document.querySelector("button");
let box = document.querySelector(".box");

button.addEventListener("click", () => {
  box.classList.toggle("hidden");
});
