// walkdog
// clean kitchen
// clean room

function walkdog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;

            if (dogwalked) {
                resolve("You have walked dog");
            } else {
                reject("You didnt wal the dog")
            }

        }, 2000);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedKitchen = true;
            
            if (cleanedKitchen) {
                resolve("You have Cleaned the Kitchen");
            } else {
                reject("You didnt clean the kitchen")
            }

        }, 1000);
    })
}

function cleanRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedRoom = false;

            if (cleanedRoom) {
                resolve("You have cleaned the Room");
            } else
                reject("You didnt clean the room")

        }, 1500);
    })
}

walkdog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return cleanRoom() })
    .then(value => { console.log(value); console.log("All task have been completed") })
    .catch(error => console.error(error))