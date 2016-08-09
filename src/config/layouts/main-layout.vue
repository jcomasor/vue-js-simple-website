//
// main-layout.vue

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

<template>

    <div class="main-layout">
        <header-component></header-component>
        <router-view transition="transition"></router-view>
    </div>

</template>

<script>

import Vue from 'vue'
import header from '../../common/header/component.vue'

export default Vue.extend({

    components: {
        'header-component': header
    }

})

</script>
