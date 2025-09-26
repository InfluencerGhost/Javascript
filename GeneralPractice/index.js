class Person {
    constructor(name, age, ...address)  {
        this.name = name
        this.age = age
        this.address = new Address(...address)
    }
}

class Address {
    constructor(street, city, country) {
        this.steeet = street
        this.city = city
        this.country = country
    }  
}

const person1 = new Person("spongebob", 30, "124 cont street", "bikin bottom", "int. waters" )


console.log(person1.address)