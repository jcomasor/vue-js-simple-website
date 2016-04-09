//
// JS MODULE: routes.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016 at VASAVA 
// https://github.com/cmacmillanmarin
// christian@vasava.es
//

//
//  REQUIRES
//

//
//  Libraries
global.$ = require('jquery')
var TweenMax = require('gsap')
//
//  Vue js
var Vue = require('vue')
var VueRouter = require('vue-router')

var header = require('./components/header')

//
//  Aux js
var responsive = require('./responsive')
var events = require('./events')

//
// END REQUIRES
//

//
// VARIABLES
//

var router
var section
var animationOutDuration

//
//  END VARIABLES
//

//
// JS
//

Vue.use(VueRouter)
router = new VueRouter({
    hashbang: false,
    history: true,
    transitionOnLoad: true
})

Vue.transition('transition', {
  
    enter: function (el,done) {
              
        setTimeout( function () {
            
            events.emit(events.events.animationIn)

        }, animationOutDuration)    
      
  
    },
  
    leave: function (el,done) {
                
        events.emit(events.events.animationOut)
        
        setTimeout( function () { done() }, animationOutDuration)
        
  
    }

})

//
//  END JS
//

//
//  EXPORTS
//
module.exports = {

    getRouter : function () { return router; },
    setAnimationOutDuration : function (time) { animationOutDuration = time }

}
