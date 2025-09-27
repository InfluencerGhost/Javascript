function createCounter() {
    let count = 0

    function increment () {
        count++
        console.log(`The count is now ${count}`)
    }
    function getCount () {
        return count
    }

    return {increment, getCount}
}

const counter1 = new createCounter()

console.log(counter1.increment)