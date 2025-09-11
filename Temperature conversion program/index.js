const userInputSite = document.getElementById("userInput")
const fahrenheit = document.getElementById("toFahrenheit")
const celcius = document.getElementById("toCelcius")
const convertBtn = document.getElementById("convertBtn")
const theAnswer = document.getElementById("theAnswer")

convertBtn.onclick = function() {

    let userInput = userInputSite.value
    console.log("Convert Button has been clicked")

    if (isNaN(userInput)) {
        theAnswer.textContent = `${userInput} is not a valid number`

    } else if (userInput && fahrenheit.checked) {
       userInput = Number(userInput)
        let fahrenheit = (userInput * 9/5) + 32  
        theAnswer.textContent = `You have Succcesfully Converted ${userInput}°C to ${fahrenheit}°F `

    } else if (userInput && celcius.checked) {
       userInput = Number(userInput)
        let celcius =(userInput - 32) * 5/9
        theAnswer.textContent = `You have Succcesfully Converted ${userInput}°F to ${celcius}°C `
    } else {
        theAnswer.textContent = "Select a Unit Please!!"
    }
}