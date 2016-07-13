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
        
        events.on(events.events.transitionIn, this.transitionIn)
        events.on(events.events.transitionOut, this.transitionOut)
        
    },
    
    methods : {
        
        transitionIn : function (e) {
            
            r.setTransitionInDuration(500)
            TweenMax.to(this.el, 0.5, { opacity : 1 })
            TweenMax.from(this.el, 0.5, { y : 100 })
            
        },
        
        transitionOut : function (e) {
                     
            r.setTransitionOutDuration(500)
            TweenMax.to(this.el, 0.5, { y : 100, opacity: 0 })
            
        }
        
    }, 
    
    destroyed : function () {
        
        events.removeListener(events.events.transitionIn, this.transitionIn)
        events.removeListener(events.events.transitionOut, this.transitionOut)
        
    }
    
})

//  
// Component Route

router = r.getRouter()

router.map({
    
    '/about/': {
        component: component,
        name: 'about'
    }

})

//
//  END JS
//
