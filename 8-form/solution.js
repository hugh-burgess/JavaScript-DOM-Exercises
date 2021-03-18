const data = [];

let form = document.querySelector(".super-form");

form.addEventListener("submit", (event) => {
  if (document.getElementById("married") === "on") {
    document.getElementById("married").value = "checked";
  }
  event.preventDefault();

  const inputForName = form["name"];
  const inputForAge = form["age"];
  const inputForMarried = form["married"];
  const inputForHobbies = form["hobbies"];

  // object
  const object = {
    name: inputForName.value,
    age: inputForAge.value,
    married: inputForMarried.value,
    hobbies: inputForHobbies.value,
  };

  // push object into array called Data
  data.push(object);
  console.log(data);

  form.reset();
});
