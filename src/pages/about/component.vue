//
// component.vue

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

<template>

    <div class="page about">

        <p> {{ data.title }} </p>

    </div>

</template>

<script>

import Vue from 'vue'
import api from '../../config/api/website'
import transition from '../../config/transitions'
import emitter from '../../../local_modules/events'

export default {

    data() {
        return {
            data : Object
        }
    },

    route:{
        data(transition){
            return Promise.all([
                    api.getAbout()
                ]).then(([data]) => {
                    return {
                        data : data
                    }
                })
        },
        waitForData:true
    },

    ready() {

        emitter.on(emitter.events.transitionIn, this.transitionIn)
        emitter.on(emitter.events.transitionOut, this.transitionOut)

    },

    methods : {

        transitionIn() {

            transition.setTransitionInDuration(500)
            TweenMax.to(this.$el, 0.5, { opacity : 1 })

        },

        transitionOut() {

            transition.setTransitionOutDuration(500)
            TweenMax.to(this.$el, 0.5, { opacity: 0 })

        }

    },

    destroyed() {

        emitter.removeListener(emitter.events.transitionIn, this.transitionIn)
        emitter.removeListener(emitter.events.transitionOut, this.transitionOut)

    }

}

</script>
