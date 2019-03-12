// Define variable has value
var x = 100;
console.log('Gia tri cua x la: ' + x);

// Define variable
var a;
if (a === undefined) {
    console.log('a is undefined');
} else {
    console.log('value of a = ' + a);
}

// a = null; // If is number then value is 0
console.log('a is value: ' + a * 12);
if (x === 100) {
    console.log('x is 100');
    var c = 222;
    let d = 333;
    console.log('d = ' + d);
}

// Scope of c is here
console.log('c = ' + c);

// Score of d not here
// console.log('d = ' + d);

const PI = 3.14;
console.log(PI);