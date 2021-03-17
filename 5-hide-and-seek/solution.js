let button = document.querySelector("button");
let box = document.querySelector(".box");

button.addEventListener("click", () => {
  box.classList.toggle("hidden");
  if (button.textContent === "Hide") {
    button.textContent = "Show";
  } else {
    button.textContent = "Hide";
  }
});
