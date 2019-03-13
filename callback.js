const doTask1 = (name, callback) => {
    setTimeout(() => {
        console.log(`1. Done task name: ${name}`);
        // Callback don't have param
        // callback();
        // Callback have param
        if (name === '') {
            callback('Task name is required\n', null);
        } else {
            callback(null, {a: 1, b: 2});
        }
    }, 1000);
};

const doTask2 = (name, callback) => {
    setTimeout(() => {
        console.log(`2. Done task name: ${name}`);
        callback({a: 11, b: 22});
    }, 2000);
};

/*console.log('Start task 1');
doTask1('Rice cook', (result) => {
    console.log('Rice cook done !');
    console.log(`Result: ${JSON.stringify(result)}\n`);
});

console.log('Start task 2');
doTask2('Make coffee', (result) => {
    console.log('Make coffee done !');
    console.log(`Result: ${JSON.stringify(result)}\n`);
});*/

/*console.log('Boil water');
doTask1('Boil water', (error, result) => {
    console.log('1. Boil water done !');
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(`Result 1: ${JSON.stringify(result)}\n`);

        // After task1 done then doTask2
        doTask2('Boil vegetable', (result2) => {
            console.log('2. Boil vegetable done !');
            console.log(`Result 2: ${JSON.stringify(result2)}\n`);
        });
    }
});*/

// Promise
const doTaskA = (taskName) => {
    return new Promise((resolve, reject) => {
        // Resolve if callback execute success
        // Reject if callback excute fail

        setTimeout(() => {
            if (taskName === '') {
                reject('Task name is required\n');
            } else {
                resolve({a: 1, b: 2});
            }
        }, 1000);
    });
};

doTaskA('Make coffee')
    .then(result => console.log(`Success: ${JSON.stringify(result)}`))
    .catch(error => console.log(`Error: ${error}`));