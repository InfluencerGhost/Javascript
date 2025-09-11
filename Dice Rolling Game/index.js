const rollDice = document.getElementById("rollDice")

rollDice.onclick = function () {

    const numOfDice = document.getElementById("userInput").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values = []
    const images = []

    console.log("Button has been clicked")

    for (let i = 0; i < numOfDice; i++) {

        let value = Math.floor(Math.random() * 6) + 1
       
        values.push(value)
        images.push(`<img id="diceImage"src= "./img/${value}.png" height="100px" alt = "dice-${value}">`)   

        diceResult.textContent = `Dice Rolled: ${values.join(", ")}.`
        diceImages.innerHTML = images.join("")
    } 
}
