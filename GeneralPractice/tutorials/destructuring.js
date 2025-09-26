let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a);
console.log(b);

const colours = ["red", "green", "blue", "white", "orange"];

[colours[0], colours[4]] = [colours[4], colours[0]];

console.log(colours);

const [firstColour, secondColour, thirdColour, ...extraColours] = colours;

console.log(extraColours);