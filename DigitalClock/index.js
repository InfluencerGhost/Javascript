const hour = document.getElementById("hour")
const minute =  document.getElementById("minute")
const second =  document.getElementById("seconds")

function updateClock () {
const now = new Date()
const hours = now.getHours() 
const minutes = now.getMinutes()
const seconds = now.getSeconds()
hour.textContent = hours
minute.textContent = minutes
second.textContent = seconds

}

updateClock()