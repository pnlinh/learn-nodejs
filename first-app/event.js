const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', args => console.log('Listener called', args));

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise: logging (data: message)