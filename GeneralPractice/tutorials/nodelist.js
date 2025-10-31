let theButtons = document.querySelectorAll(".theButtons");

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "theButtons";
document.body.appendChild(newButton);

const newButton1 = document.createElement("button");
newButton1.textContent = "Button 6";
newButton1.style.marginLeft = "10px";
newButton1.classList = "theButtons";
document.body.appendChild(newButton1);

theButtons = document.querySelectorAll(".theButtons");
console.log(theButtons);

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

theButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    theButtons = document.querySelectorAll(".theButtons");
    console.log(theButtons);
  });
});
