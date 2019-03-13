const Person = require('./Person');

class Student extends Person {
    constructor(id, name, yearOfBirth, fieldOfStudy) {
        super(id, name, yearOfBirth);
        console.log('This is Student\'s constructor');
        this.fieldOfStudy = fieldOfStudy;
    }
}

module.exports = Student;