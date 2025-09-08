const generate = document.getElementById('generate');
const number = document.getElementById('number');

generate.onclick = function() {
    let randomNumber = Math.floor(Math.random() * 10) + 1
    number.textContent = randomNumber;
}