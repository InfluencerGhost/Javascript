// Step 1 create the element

const newLi = document.createElement("li")

// Step 2 add attributes/properties

newLi.style.backgroundColor = "blue";

// Step 3 add content

newLi.textContent = "This is a new list item added with JavaScript";

// Step 4 add the element to the DOM

document.getElementById("fruits").appendChild(newLi);

// delete the element after 5 seconds
