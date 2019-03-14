const myEmitter = require('./MyEmitter');
const Person = require('./Person');
const Student = require('./Student');
const {EVENT_GO_CAMPING, EVENT_NEW_COURSE} = require('./eventNames');

let person1 = new Person('pnlinh', 24);
let person2 = new Person('pnlinh2', 25);

// Push event go camping to person1, person2
myEmitter.emit(EVENT_GO_CAMPING, {
    place: 'Da Lat',
    date: '19-10-2019'
});

// myEmitter.error('error', new Error(`Cancel event ${EVENT_GO_CAMPING} and another events`));

// Push event new course to person1, person2
let std1 = new Student('pnlinh');
let std2 = new Student('pnlinh2');
myEmitter.emit(EVENT_NEW_COURSE, {
    name: 'Nodejs',
    date: '30-10-2019'
});


console.log(`Count listeners of envent ${EVENT_GO_CAMPING} is: ${myEmitter.listenerCount(EVENT_GO_CAMPING)}`);
console.log(`Count listeners of envent ${EVENT_NEW_COURSE} is: ${myEmitter.listenerCount(EVENT_NEW_COURSE)}`);
