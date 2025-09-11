function getAverage(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    } return result/numbers.length
}



console.log(getAverage(2,2,2))