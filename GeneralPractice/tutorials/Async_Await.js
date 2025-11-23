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

            const cleanedRoom = true;

            if (cleanedRoom) {
                resolve("You have cleaned the Room");
            } else
                reject("You didnt clean the room")

        }, 1500);
    })
}

async function doChores() {
    const walkedDog = await walkdog();
    console.log(walkedDog)

    const cleanedKitchen = await cleanKitchen();
    console.log(cleanedKitchen)

    const cleanedRoom = await cleanRoom();
    console.log(cleanedRoom)

    console.log("im done with all chores")
}

doChores();