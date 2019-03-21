const EventEmitter = require('events');
const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP Request
        console.log(message);

        this.emit('messageLogged', {id: 1, url});
    }
}

module.exports = Logger;