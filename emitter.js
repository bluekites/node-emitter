function Emitter() {
  this.events = {};
}

// 'on' sets up the event and the listeners
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || []; // if the property exists then great, otherwise make it a new array
  this.events[type].push(listener); // on a specific event, the listener will be pushed into the event type
};

// emit acts upon the event
Emitter.prototype.emit = function(type) { // when something happens, you can emit that event. we check for the type of event being emitted, if the event exists, we will loop through all the functions(listeners) of the event and execute them.
  if(this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
};

module.exports = Emitter; 