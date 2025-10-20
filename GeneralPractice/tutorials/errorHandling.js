
try {
const dividend = Number(window.prompt("what is the dividend: "));
const divisor = Number(window.prompt("what is the divisor: "));
const result = dividend/divisor;

if (divisor == 0) {
    throw new Error("Division by zero is impossible");
}
} catch(error) {
console.error(error);
} finally {
    console.log("The program has ended!");
}