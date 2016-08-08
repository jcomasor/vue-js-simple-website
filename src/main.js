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
import routes from './routes'

// Vue components
//
import header from './global/header/component'
import home from './home/component'
import about from './about/component'
import contact from './contact/component'

// Run Vue App
//
const App = Vue.extend({

    components : {

        'header-component' : header

    }

})

const router = routes.getRouter()

router.start(App, '#app')
