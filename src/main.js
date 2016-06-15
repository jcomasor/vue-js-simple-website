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
//  Libraries
global.$ = require("jquery")
var TweenMax = require("gsap")
var _ = require("underscore")

//
//  Vue js
var Vue = require('vue')
var VueRouter = require('vue-router')
var routes = require('./routes')

//
//  Vue js components
var header = require('./header/component')
var home = require('./home/component')
var about = require('./about/component')
var contact = require('./contact/component')

//
//  Aux js 
var scroll = require('./utilities/scroll')
var responsive = require('./utilities/responsive')
var scroll = require('./utilities/events')

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

var router = routes.getRouter()

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
