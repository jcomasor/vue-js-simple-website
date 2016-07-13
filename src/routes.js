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
var transitionInDuration
var transitionOutDuration

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
            
            events.emit(events.events.transitionIn)
            
            setTimeout( function () { $('body').css({ 'pointer-events' : 'auto' }) }, transitionInDuration)
            
        }, transitionOutDuration)    
  
    },
  
    leave: function (el,done) {
        
        $('body').css({ 'pointer-events' : 'none' })

        events.emit(events.events.transitionOut)
        
        setTimeout( function () { done() }, transitionOutDuration)
  
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
    setTransitionOutDuration : function (time) { transitionOutDuration = time },
    setTransitionInDuration : function (time) { transitionInDuration = time }

}
