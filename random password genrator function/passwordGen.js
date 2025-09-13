// Random Password Generator

function generatePassword (length, lowercase, uppercase, symbols, numbers) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbolsChars = "!@#$%^&*()_+-="
    const numbersChars = "1234567890"

    let allowedChars = ""
    let password = ""

    allowedChars += lowercase ? lowercaseChars : ""
    allowedChars += uppercase ? uppercaseChars : ""
    allowedChars += symbols ? symbolsChars : ""
    allowedChars += numbers ? numbersChars : "" 
    
    if (length < 8) {
        return "password must be at least 8 characters"
    } 
    if (allowedChars.length === 0) {
        return "At lease pick a single option"
    }

    for (let i = 0; i <= length; i++) {

        const randomIndex = Math.floor(Math.random() * allowedChars.length) + 1

        password += allowedChars[randomIndex]
    }
    return password
}

const passwordLength = 8
const includeLowercase = true 
const includeUppercase = true
const includeSymbols = true
const includeNumbers = true


const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeSymbols, includeNumbers)


console.log(`Generated password: ${password}`)
