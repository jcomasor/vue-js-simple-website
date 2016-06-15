//
// JS MODULE : header.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

//
//  REQUIRES
//

//
//  Vue js

var Vue = require('vue')

//
//  Aux js

var events = require('../utilities/events')

//
//  END REQUIRES
//

//
// VARIABLES
//

//
//  END VARIABLES
//

//
// JS
//

// Component Template
//
var template = require("./template.html") 

// Component Object
//
var header = Vue.extend({
    
    template : template,
    
})

//
// END JS
//

//
// EXPORTS
//
module.exports = header
