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
    
    "animationIn" : "animationIn",
    "animationOut" : "animationOut",
    
}

//
// DEPENDENCES
//

// # animationIn, animationOut:
//      - Emit : 
//          · js/events.js
//      - Listeners:
//          · js/components/home.js
//          · js/components/about.js
//          · js/components/contact.js
//

//
//  EXPORTS
//

module.exports = emitter;
