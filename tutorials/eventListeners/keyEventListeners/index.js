const myBox = document.getElementById("myBox");
const moveDistance = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  myBox.style.backgroundColor = "red";
  myBox.textContent = "😎";

    event.preventDefault(); // Prevent default scrolling behavior
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveDistance;
        break;
      case "ArrowDown":
        y += moveDistance;
        break;
      case "ArrowLeft":
        x -= moveDistance;
        break;
      case "ArrowRight":
        x += moveDistance;
        break;
    }
     myBox.style.top = `${y}px`;
  myBox.style.left = `${x}px`;
  }
 
});

document.addEventListener("keyup", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "🤭";
});
