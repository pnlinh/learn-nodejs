const myEmitter = require('./MyEmitter');
const {EVENT_NEW_COURSE} = require('./eventNames');

class Student {
    constructor(name) {
        this.name = name;

        // Listen event
        myEmitter.on(EVENT_NEW_COURSE, (params) => {
            console.log(`${this.name} has received event ${EVENT_NEW_COURSE}`);
            console.log(`Content: ${JSON.stringify(params)}\n`)
        });
    }
}

module.exports = Student;