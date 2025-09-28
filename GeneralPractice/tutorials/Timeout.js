let timeoutId;

function startTimer() {
timeoutId = setTimeout(() => {window.prompt("Hello")}, 3000);
console.log("started");
window.alert(timeoutId)
}

function clearTimer() {
   clearTimeout(timeoutId); 
   console.log("cleared");
}
