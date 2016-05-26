//
// JS MODULE : header.js

//
// AUTHOR
//
// Developed by VASAVA in 2016
//

//
//  REQUIRES
//

//
//  Vue js

var Vue = require('vue')

//
//  Aux js

var events = require("../events");

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
var template = require("../../../header.html")

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
