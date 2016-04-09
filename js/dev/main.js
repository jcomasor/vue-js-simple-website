//
// main.js

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
//  Libraries
global.$ = require("jquery")
var TweenMax = require("gsap")
var _ = require("underscore")

//
//  Vue js
var Vue = require('vue')
var VueRouter = require('vue-router')
//
//  Vue js components
var header = require('./components/header')
var home = require('./components/home')
var about = require('./components/about')
var contact = require('./components/contact')

var routes = require('./routes')

//
//  Aux js 
var scroll = require('./scroll')

//
// END REQUIRES
//

//
// VARIABLES
//

var App = Vue.extend({})
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
