class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    set firstName(newFirstName) {

        if (typeof newFirstName === "string" && newFirstName.length > 1) {
            this._firstName = newFirstName
        } else {
            console.error("First name nmust be a non empty string")
        }
    }

        set lastName(newLastName) {

        if (typeof newLastName === "string" && newLastName.length > 1) {
            this._lastName = newLastName
        } else {
            console.error("Last name nmust be a non empty string")
        }
    }

        set age(newAge) {

        if (newAge > 1) {
            this._age = newAge
        } else {
            console.error("age must be a number greater than 0")
        }
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get age() {
        return this._age
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }
}

const person = new Person ("mary", "jane", 23)

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.fullName)