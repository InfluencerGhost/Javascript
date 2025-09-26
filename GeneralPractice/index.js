const food = [
    {
        name: "orange",
        type: "fruit",
        color: "orange",
    },
    {
        name: "carrot",
        type: "vegetable",
        color: ["green", "orange"],
    },
]


function displayFruit(number) {
    if (number < 0) {
        console.log("enter a valid number >= 0")
    } else if (food[number].color.length === 1) {
    console.log(`${food[number].name} is a ${food[number].name} and its color ${food[number].color}`)
    } else {
         console.log(`${food[number].name} is a ${food[number].name} and its color ${food[number].color[1]} and ${food[number].color[1]}`)
    }
}
