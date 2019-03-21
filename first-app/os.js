const os = require('os');

let totalMemory = os.totalmem();
let freeMemmory = os.freemem();

// Template string ``
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemmory}`);