//
// JS MODULE: routes.js

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
//  Vue js

var Vue = require('vue')
var VueRouter = require('vue-router')

//
//  Aux js

var events = require('./global/utilities/events')

//
// END REQUIRES
//

//
// VARIABLES
//

var router
var animationOutDuration
var animationInDuration

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
            
            setTimeout( function () { $('body').css({ 'pointer-events' : 'auto' }) }, animationInDuration)
            
        }, animationOutDuration)    
  
    },
  
    leave: function (el,done) {
        
        $('body').css({ 'pointer-events' : 'none' })

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

    getRouter : function () { return router },
    setAnimationOutDuration : function (time) { animationOutDuration = time },
    setAnimationInDuration : function (time) { animationInDuration = time }

}
