class Animal {
constructor (name, age) {
    this.name = name
    this.age = age
}

move(speed) {
    console.log(`${this.name} moves at ${speed}kmh`)
}
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super (name, age)
        this.runSpeed = runSpeed
    }
    run () {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}

const rabbit = new Rabbit("rabbit", 1, 13)

rabbit.run ()
