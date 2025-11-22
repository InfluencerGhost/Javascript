function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed.");
        callback();
    }, 3000);

}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed.");
        callback();
    }, 1500);

}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed.");
        callback();
    }, 1000);

}

function task4() {
    setTimeout(() => {
        console.log("Task 4 completed.");
    }, 2000);

}


task1(()=> {
    task2(()=> {
        task3(()=> {
            task4(()=> {
                console.log("All task completed")
            })
        });
    });
});

