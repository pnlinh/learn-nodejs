// Basic Object
var resolution = {
    width: 1920,
    height: 1080,
    name: 'Full HD'
};

let width = 1920;
let height = 1080;
// If variable has defined, use sort syntax
let resolution2 = {
    width,
    height,
    name: 'Full HD'
};

console.log(`Resolution: ${JSON.stringify(resolution)}`);
console.log(`Resolution 2: ${JSON.stringify(resolution2)}`);

let person = {
    name: 'pnlinh',
    age: 24,
    email: 'pnlinh1207@gmail.com',
    // Basic syntax
    registerACourse: (courseName) => {
        console.log(`I has registered a course ${courseName}`);
    },
    // Quick syntax
    buySmartPhone(phoneName) {
        console.log(`I has buy a smartphone ${phoneName}`);
    },
    // Old syntax
    getGirlFriend: function (name) {
        console.log(`I has a girl friend ${name}`);
    }
};

person.registerACourse('NodeJS');
person.buySmartPhone('Iphone X');
person.getGirlFriend('No Name');