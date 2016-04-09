//
// JS MODULE: home.js

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
var template = require("../../../home.php")

// Component Object
//
var home = Vue.extend({
    
    template: template,
    
    ready: function () {
        
        events.on(events.events.animationIn, this.animationIn)
        events.on(events.events.animationOut, this.animationOut)
        
    },
    
    methods : {
        
        animationIn : function (e) {
                        
            TweenMax.to('#home', 0.5, { opacity : 1 })
            TweenMax.from('#home', 0.5, { y : 100 })
            
            events.removeListener(events.events.animationIn, this.animationIn)
            
        },
        
        animationOut : function (e) {
                     
            r.setAnimationOutDuration(500)
            
            TweenMax.to('#home', 0.5, { y : 100, opacity: 0 })
            
            events.removeListener(events.events.animationOut, this.animationOut)
            
        }
        
    }

    
})

//  Component Route
//
router = r.getRouter()

router.map({
    
    '/': {
        component: home,
        name: 'home'
    }

})

//
//  END JS
//

//
//  EXPORTS
//
