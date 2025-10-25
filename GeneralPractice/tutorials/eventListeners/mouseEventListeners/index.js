// mouseover mouseout click
const pElement = document.getElementById("box");

pElement.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch that hurt! 🤕";
});

pElement.addEventListener("mouseover", () => {
  event.target.style.backgroundColor = "blue";
  event.target.textContent = "Please don't click me! 😅";
});

pElement.addEventListener("mouseout", () => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Don't click me! 😅";

});
