// Basic function
function square(x ) {
    return x * x;
}

console.log(`Square of 10 is: ${square(10)}`);

// Default param
function area(width, height = width) {
    return width * height;
}

console.log(`Area is: ${area(5)}`);

// Rest param
function printParams(...ints) {
    console.log(ints.join(' -> '));
}

printParams(1, 2, 3, 4);
printParams(1, 2, 3, 4, 5, 6);

// Function not return
function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello('pnlinh');

const sayHi = function (name) {
    console.log(`Hello ${name}`);
};

sayHi('Ngoc Linh Pham');