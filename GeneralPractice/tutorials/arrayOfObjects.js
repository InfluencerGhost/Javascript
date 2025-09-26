const food = [
    {
        name: "orange",
        type: "fruit",
        color: ["orange"],
    },
    {
        name: "carrot",
        type: "vegetable",
        color: ["green", "orange"],
    },
]


function displayFood(number) {
    if (number < 0) {
        console.log("enter a valid number >= 0")
    } else if (food[number].color.length === 1) {
    console.log(` The ${food[number].name} is a ${food[number].type} and its color is ${food[number].color}`)
    } else {
         console.log(` THe ${food[number].name} is a ${food[number].type} and it has colors ${food[number].color[0]} and ${food[number].color[1]}`)
    }
}
function addFood(name, type, color) {
    food.push({name: name, type: type, color: [color],})
}

displayFood(1)
displayFood(0)
addFood("pineapple", "fruit", "yellow")
displayFood(2)





