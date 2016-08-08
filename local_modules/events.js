//
// JS MODULE : searchEvents.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import { EventEmitter } from 'events'

const emitter = new EventEmitter()

emitter.events = {

    "transitionIn" : "transitionIn",
    "transitionOut" : "transitionOut",

}

export default emitter

//
// Relationships 
//

//
// # transitionIn, transitionOut:
//      - Emit :
//          · ./src/routes.js
//      - Listeners:
//          · ./src/home/component.js
//          · ./src/about/component.js
//          · ./src/contact/component.js
//
