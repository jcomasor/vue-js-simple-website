//
// JS MODULE: contact.js

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
//  Vue js
var Vue = require("vue")
var VueRouter = require("vue-router")
var r = require("../routes")

var events = require('../events')

//
// END REQUIRES
//

//
// VARIABLES
//

var router

//
//  END VARIABLES
//

//
// JS
//

// Component Template
//
var template = require("../../../contact.php");

// Component Object
//
var contact = Vue.extend({
    
    template: template,
    
    ready: function () {
        
        events.on(events.events.animationIn, this.animationIn)
        events.on(events.events.animationOut, this.animationOut)
        
    },
    
    methods : {
        
        animationIn : function (e) {
            
            r.setAnimationInDuration(500)
                        
            TweenMax.to('#contact', 0.5, { opacity : 1 })
            TweenMax.from('#contact', 0.5, { y : 100 })
                        
            events.removeListener(events.events.animationIn, this.animationIn)
            
        },
        
        animationOut : function (e) {
            
            r.setAnimationOutDuration(5000)
            
            TweenMax.to('#contact', 5, { y : 100, left : 500, opacity: 0, scale: 0.4 })
            TweenMax.to('#contact p', 0.5, { rotation : 360, repeat : 10, ease: Power0.easeNone })
            
            events.removeListener(events.events.animationOut, this.animationOut)
            
        }
        
    }

})

//  Component Route
//
router = r.getRouter()

router.map({
    
    '/contact/': {
        component : contact,
        name : 'contact'
    }

})

//
//  END JS
//

//
//  EXPORTS
//
