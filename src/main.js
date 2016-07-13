//
// main.js

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
//  Global Libraries

global.$ = require('jquery')
var TweenMax = require('gsap')

//
//  Vue js

var Vue = require('vue')
var r= require('./routes')

//
//  Vue js components

var header = require('./global/header/component')
var home = require('./home/component')
var about = require('./about/component')
var contact = require('./contact/component')

//
//  Aux js 

var responsive = require('./global/utilities/responsive')
var events = require('./global/utilities/events')

//
// END REQUIRES
//

//
// VARIABLES
//

var App = Vue.extend({
    
    components : {
        
        'header-component' : header
        
    }
    
})

var router = r.getRouter()

//
//  END VARIABLES
//

//
// JS
//

router.start(App, '#app')

//
//  END JS
//

//
//  EXPORTS
//
