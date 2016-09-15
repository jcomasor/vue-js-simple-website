//
// main.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

//  Libraries
//
import { TweenMax } from 'gsap'

// Vue
//
import Vue from 'vue'
import VueRouter from 'vue-router'
import transitions from './config/transitions'
import routes from './config/routes'

Vue.use(VueRouter)

let router = new VueRouter({
    hashbang: false,
    history: false,
    transitionOnLoad: true
})

// Run Vue App
//
const App = Vue.extend()
router.map(routes)
router.start(App, '#app') 
