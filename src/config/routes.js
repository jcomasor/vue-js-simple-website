//
// routes.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import mainLayout from './layouts/main-layout.vue'
import home from './../pages/home/component.vue'
import about from './../pages/about/component.vue'
import contact from './../pages/contact/component.vue'

export default {
    '/': {
        component: mainLayout,
        localized: true,
        subRoutes: {
            '/': {
                component: home,
                name: 'home',
            },
            '/about': {
                component: about,
                name: 'about',
            },
            '/contact': {
                component: contact,
                name: 'contact',
            }
        }
    }
}
