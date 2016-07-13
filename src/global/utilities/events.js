//
// JS MODULE : searchEvents.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

//
//  REQUIRES
//

//
//  Aux js

var Emitter = require('events').EventEmitter;

//
// VARIABLES
//

var emitter = new Emitter();

//
// JS
//

emitter.events = {
    
    "transitionIn" : "transitionIn",
    "transitionOut" : "transitionOut",
    
}

//
// DEPENDENCES
//

// # transitionIn, transitionOut:
//      - Emit : 
//          · src/global/utilities/events.js
//      - Listeners:
//          · src/home/component.js
//          · src/about/component.js
//          · src/contact/component.js
//

//
//  EXPORTS
//

module.exports = emitter;
