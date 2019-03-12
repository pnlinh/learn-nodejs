// Full syntax
/*const add2Numbers = (a, b) => {
    return a + b;
};*/

// Short syntax
const add2Numbers = (a, b) => a + b;
console.log(add2Numbers(5, 10));

// Arrow function not return
const sayHi = (name) => {
    console.log(`Hello ${name}`)
};

sayHi('pnlinh');

/*
setInterval(() => {
    console.log('Do something');
}, 2000);
*/

let arrayA = [1, 2, 3, 4, 5, 6];
let arrayB = arrayA.map(x => 2 * x);
console.log(`Array A: ${arrayA}`);
console.log(`Array B: ${arrayB}`);