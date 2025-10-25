// mouseover mouseout click

const pElement = document.getElementById("box");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
  pElement.style.backgroundColor = "tomato";
  pElement.textContent = "Ouch that hurt! 🤕";
});

myBtn.addEventListener("mouseover", () => {
  pElement.style.backgroundColor = "blue";
  pElement.textContent = "Please don't click me! 😅";
});

myBtn.addEventListener("mouseout", () => {
  pElement.style.backgroundColor = "lightgreen";
  pElement.textContent = "Don't click me! 😅";

});
