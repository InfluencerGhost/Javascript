const clock = document.getElementById('clock');


function updateClock () {
    console.log("i was called")
    const now = new Date();
    let hours = now.getHours()
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    clock.textContent = timeString;     
}

updateClock();
setInterval(updateClock, 1000)