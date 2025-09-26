let persons = [
    {name: "Spongebob", age: 12, gpa: 3.0 },
    {name: "patrick", age: 13, gpa: 1.5 },
    {name: "Sandy", age: 32, gpa: 4.0 },
]

persons.sort((a, b) => - a.gpa + b.gpa)

console.log(persons)
