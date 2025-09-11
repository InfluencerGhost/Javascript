let email = "iykeisaman@gmail.com"

let slicedEmail = email.slice(0, email.indexOf("@") )
let extension = email.slice(email.indexOf("@"))

console.log(slicedEmail)
console.log(extension)