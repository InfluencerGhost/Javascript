class Human {
    static number = 0

    constructor(name, age) {
        this.name = name
        this.age = age
        Human.number++;
    }

    sayHello () {
        console.log(`Hello, my name is ${this.name} i am ${this.age} years old. Its nice to meet you`)
    }

    static getNumber () {
        return this.number
    }
}


const user1 = new Human ("angela", 25)
const user2 = new Human ("kemi", 56)
const user3 = new Human ("esther", 42)
const user4 = new Human ("dami", 24)
const user5 = new Human ("praise", 12)

user1.sayHello()
user2.sayHello()
user3.sayHello()
user4.sayHello()
user5.sayHello()


console.log(Human.getNumber())
// console.log(Human.number)

