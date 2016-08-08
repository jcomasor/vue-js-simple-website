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

export default Vue.extend({

    template : require("./template.html"),

    data() {
        return {
            list : [
                { id: 1, name : 'Home', path : '/'},
                { id: 2, name : 'About', path : '/about/'},
                { id: 3, name : 'Contact', path : '/contact/'},
            ]
        }
    }

})
