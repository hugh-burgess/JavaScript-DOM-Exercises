let input = document.querySelector(".controls__input");
let h1 = document.querySelector(".header__text");

input.addEventListener("input", () => {
  h1.textContent = `Hello World ${input.value}`;
});
