//
// component.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import Vue from 'vue'

import routes from '../routes'
import emitter from '../../local_modules/events'

const component = Vue.extend({

    template : require('./template.html'),

    props : {},

    data() { return {} },

    ready() {

        emitter.on(emitter.events.transitionIn, this.transitionIn)
        emitter.on(emitter.events.transitionOut, this.transitionOut)

    },

    methods : {

        transitionIn() {

            routes.setTransitionInDuration(500)
            TweenMax.to(this.$el, 0.5, { opacity : 1 })
            TweenMax.from(this.$el, 0.5, { y : 100 })
            TweenMax.from(this.$els.txt, 0.5, { scale : 0.25, rotation: 360 })

        },

        transitionOut() {

            routes.setTransitionOutDuration(500)
            TweenMax.to(this.$el, 0.5, { y : 100, opacity: 0 })

        }

    },

    destroyed() {

        emitter.removeListener(emitter.events.transitionIn, this.transitionIn)
        emitter.removeListener(emitter.events.transitionOut, this.transitionOut)

    }

})

routes.getRouter().map({

    '/contact/': {
        component : component,
        name : 'contact'
    }

})
