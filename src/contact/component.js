//
// component.js

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

//
// Aux js

var r = require('../routes')
var events = require('../global/utilities/events')

//
// END REQUIRES
//

//
// VARIABLES
//

var router
var data = {}

//
//  END VARIABLES
//

//
// JS
//

// 
// Component Template

var template = require('./template.html') 

// 
// Vue Component

var component = Vue.extend({
    
    template : template,
    
    props : {
        
        el : {}
        
    },
    
    data : function () { return data },
    
    compiled : function () { this.el = $(this.$el) },
    
    ready: function () {
        
        events.on(events.events.animationIn, this.animationIn)
        events.on(events.events.animationOut, this.animationOut)
        
    },
    
    methods : {
        
        animationIn : function (e) {
            
            r.setAnimationInDuration(500)
            TweenMax.to(this.el, 0.5, { opacity : 1 })
            TweenMax.from(this.el, 0.5, { y : 100 })
            
        },
        
        animationOut : function (e) {
                     
            r.setAnimationOutDuration(5000)
            TweenMax.to(this.el, 5, { y : 100, left : 500, opacity: 0, scale: 0.4 })
            TweenMax.to(this.el.find('p'), 0.5, { rotation : 360, repeat : 10, ease: Power0.easeNone })
            
        }
        
    }, 
    
    destroyed : function () {
        
        events.removeListener(events.events.animationIn, this.animationIn)
        events.removeListener(events.events.animationOut, this.animationOut)
        
    }
    
})

//  Component Route
//
router = r.getRouter()

router.map({
    
    '/contact/': {
        component : component,
        name : 'contact'
    }

})

//
//  END JS
//
