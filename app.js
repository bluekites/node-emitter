var Emitter = require('./emitter');

var emtr = new Emitter();

// set up the functions that I want to run when my message is emitted
emtr.on('message', function(){
  console.log('Hey I got your message');
});

emtr.on('message', function(){
  console.log('I am the second listener!');
});

// emitting the message now
emtr.emit('message');
