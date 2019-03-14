const myEmitter = require('./MyEmitter');
const {EVENT_GO_CAMPING} = require('./eventNames');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        // Listen event
        myEmitter.on(EVENT_GO_CAMPING, (params) => {
            console.log(`${this.name} has received event ${EVENT_GO_CAMPING}`);
            console.log(`Content: ${JSON.stringify(params)}\n`)
        });
    }
}

module.exports = Person;