const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;



function start() {
    console.log("Started");
if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10)
    isRunning = true;
}
}

function stop() {
    
}

function reset() {
    
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    hours = Math.floor(elapsedTime / (1000 * 60 * 60)).padStart(2, 0);
    minutes = Math.floor(elapsedTime / (1000 * 60) % 60).padStart(2, 0);
    seconds = Math.floor(elapsedTime / (1000) % 60).padStart(2, 0);
    milliseconds = Math.floor(elapsedTime % 1000 / 10).padStart(2, 0);
    display.textcontent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}