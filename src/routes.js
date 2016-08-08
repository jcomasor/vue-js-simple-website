//
// routes.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import Vue from 'vue'
import VueRouter from 'vue-router'

import emitter from '../local_modules/events'

let transitionInDuration
let transitionOutDuration
let router
let body = document.getElementsByTagName("body")[0]

Vue.use(VueRouter)

router = new VueRouter({
    hashbang: false,
    history: false,
    transitionOnLoad: true
})

Vue.transition('transition', {

    enter: function (el,done) {

        setTimeout( function () {

            emitter.emit(emitter.events.transitionIn)

            setTimeout( function () { TweenMax.set(body, { pointerEvents : 'auto' }) }, transitionInDuration)

        }, transitionOutDuration)

    },

    leave: function (el,done) {

        TweenMax.set(body, { pointerEvents : 'none' })

        emitter.emit(emitter.events.transitionOut)

        setTimeout( function () { done() }, transitionOutDuration)

    }

})

module.exports = {

    getRouter : function () { return router },
    setTransitionOutDuration : function (time) { transitionOutDuration = time },
    setTransitionInDuration : function (time) { transitionInDuration = time }

}
