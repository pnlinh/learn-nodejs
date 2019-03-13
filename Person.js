class Person {
    constructor(id, name, yearOfBirth) {
        console.log('This is Person\'s constructor');
        this.id = id;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    speak(message) {
        console.log(`I say message \"${message}\"`);
    }
}

module.exports = Person;