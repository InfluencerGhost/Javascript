//  Dom Navigation
// .firstElementChild
// .lastElementChild
// .nextElementSiblling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("fruits");
const children = Array.from(element.children);
console.log(children)

children.forEach(child => {
    child.style.backgroundColor = "yellow"
});
