//
// JS MODULE: about.js

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
var template = require("../../../about.php")

// Component Object
//
var about = Vue.extend({
    
    template: template,
    
    ready: function () {
        
        events.on(events.events.animationIn, this.animationIn)
        events.on(events.events.animationOut, this.animationOut)
        
    },
    
    methods : {
        
        animationIn : function (e) {
                        
            TweenMax.to('#about', 0.5, { opacity : 1 })
            TweenMax.from('#about', 0.5, { y : 100 })
            
            events.removeListener(events.events.animationIn, this.animationIn)
            
        },
        
        animationOut : function (e) {
                     
            r.setAnimationOutDuration(500)
            
            TweenMax.to('#about', 0.5, { y : 100, opacity: 0 })
            
            events.removeListener(events.events.animationOut, this.animationOut)
            
        }
        
    }

})

//  Component Route
//
router = r.getRouter()

router.map({
    
    '/about/': {
        
        component: about,
        'name' : 'about'
    
    }

})

//
//  END JS
//

//
//  EXPORTS
//
