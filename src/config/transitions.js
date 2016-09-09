//
// transitions.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import Vue from 'vue'
import emitter from '../../local_modules/events'

let transitionInDuration
let transitionOutDuration
let body = document.getElementsByTagName("body")[0]

Vue.transition('transition', {

    enter(el,done) {

        setTimeout(()=>{

            emitter.emit(emitter.events.transitionIn)

            setTimeout(()=>{ TweenMax.set(body, { pointerEvents : 'auto' }) }, transitionInDuration)

        }, transitionOutDuration)

    },

    leave(el,done) {

        TweenMax.set(body, { pointerEvents : 'none' })

        emitter.emit(emitter.events.transitionOut)

        setTimeout(()=>{ done() }, transitionOutDuration)

    }

})

export default {

    setTransitionOutDuration(time) { transitionOutDuration = time },
    setTransitionInDuration(time) { transitionInDuration = time }

}
