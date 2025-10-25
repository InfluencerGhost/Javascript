
const textBox = document.getElementById("textBox");
let newListItems = document.createElement("li");

function acceptInput() {
    if (textBox.value === "") { 
    alert("Please enter an item");
    } else {
    console.log("I was called");
    newListItems = document.createElement("li");
    newListItems.textContent = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1);
    document.querySelector("#fruits").append(newListItems); 
    textBox.value = "";
    }
}

function removeInput() {
    const parent = document.querySelector("#fruits");
    const child = document.querySelector("#fruits").lastElementChild;
    console.log("I was called");
    parent.removeChild(child);
}