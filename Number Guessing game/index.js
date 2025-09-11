const inputedNumber = document.getElementById("myRandomNumber")
const sendBtn = document.getElementById("theSendBtn")
const randNum = document.getElementById("theRandomNumber")
const minNum = 0
const maxNum = 100


sendBtn.onclick = function () {
let number = inputedNumber.value
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum) 

console.log(`The number you picked: ${number}`)
console.log(`The answer: ${answer}`)

if (isNaN(number) || number < 0 || number > 100) {
    randNum.textContent = `Input a valid Number`
} else {
     if  (number > answer) {
    randNum.textContent = `Too High Try Again PLease!`
}   else if (number < answer)  {
  randNum.textContent = `Too Low Try Again PLease!`
} else {
randNum.textContent = `Youre right you guessed the right answer`
} 
} 
}