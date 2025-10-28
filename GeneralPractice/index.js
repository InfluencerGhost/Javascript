const theButtons = document.querySelectorAll(".theButtons");

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "theButtons";

document.body.appendChild(newButton);

console.log(theButtons);
theButtons.forEach((element) => {
  element.addEventListener(
    "mouseover",
    (event) => (event.target.style.backgroundColor = "green")
  );
});
theButtons.forEach((element) => {
  element.addEventListener(
    "mouseout",
    (event) => (event.target.style.backgroundColor = "hsl(211, 100%, 50%)")
  );
});

