const Person = require('./Person');
const Student = require('./Student');

let person = new Person(1, 'pnlinh', 1995);
console.log(JSON.stringify(person));
person.speak('How are you ?');

let student = new Student(2, 'pnlinh', 1995, 'Information Technology');
console.log(JSON.stringify(student));