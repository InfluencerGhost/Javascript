// Date (year, month, day, hour, minute, second, ms)
const date = new Date(2008, 0, 4, 12, 0, 1)
console.log(date)
// Date (String)
const datee = new Date("2008-01-04T12:00:00Z")
console.log(datee)
// Date (number)
const dateee = new Date(-100000000000000)
console.log(dateee)

const dateeee = new Date()

console.log(dateeee.getFullYear())