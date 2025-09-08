const generate = document.getElementById('generate');
const number = document.getElementById('number');

generate.onclick = function() {
    let randomNumber = Math.random()
    number.textContent = randomNumber;
}