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

    <header>

        <section class="menu"> 

            <div class="navigation">

                <ul>
                    <li v-for="item in list"><a v-link="{ path: item.path }">{{ item.name }}</a></li>
                </ul>

            </div>

        </section>

    </header>

</template>

<script>

    import Vue from 'vue'

    export default {

        data() {
            return {
                list : [
                    { id: 1, name : 'Home', path : '/'},
                    { id: 2, name : 'About', path : '/about/'},
                    { id: 3, name : 'Contact', path : '/contact/'},
                ]
            }
        }

    }

</script>
