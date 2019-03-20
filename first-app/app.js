function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('pnlinh');
// console.log(window); // Error

// console.log(); // global
//
// setTimeout();
// clearTimeout();
//
// setInterval();
// clearInterval();

var message = '';
console.log(global.message);

console.log(module);