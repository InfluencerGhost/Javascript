// fetch("people.json")
//     .then(response => response.json())
//     .then(values => console.log(values[0].name))
//     .catch(error => console.error(error))

function punchMan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i punched man")
        }, 5000)

    })
}

function punchWoman() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i punched woman")
        }, 500)

    })
}

async function fight () {
    punchedMan = await punchMan();
    console.log(punchedMan)
    punchedWoman = await punchWoman();
    console.log(punchedWoman)
}

fight();