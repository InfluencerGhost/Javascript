
const textBox = document.getElementById("textBox")

function acceptInput() {
    console.log("I was called")
    const newListItems = document.createElement("li");
    newListItems.textContent = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1);
    document.querySelector("#fruits").append(newListItems)
}