const button = document.getElementById('aButton')
const errorText = document.getElementById('errorText')
button.onclick = function start() {

try {
const dividend = Number(window.prompt("what is the dividend: "));
const divisor = Number(window.prompt("what is the divisor: "));

const result = dividend/divisor;
console.log(result)

if (divisor == 0) {
    throw new Error("Division by zero is impossible");
}

if(isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Please input a number")
}
} catch(error) {
    errorText.textContent = error;
} finally {
    console.log("The program has ended!");
}
}