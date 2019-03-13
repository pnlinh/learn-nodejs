const Calculation = require('./Calculation');
const Database = require('./Database');

console.log(Calculation.sum2Numbers(1, 2));

let db1 = Database.getInstance();
let db2 = Database.getInstance();

console.log(db1 === db2);