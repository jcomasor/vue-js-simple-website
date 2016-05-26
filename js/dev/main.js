//
// main.js

//
// AUTHOR
//
// Developed by VASAVA in 2016
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
var header = require('./components/header')
var home = require('./components/home')
var about = require('./components/about')
var contact = require('./components/contact')

//
//  Aux js 
var scroll = require('./scroll')

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
