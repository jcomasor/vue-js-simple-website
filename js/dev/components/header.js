//
// JS MODULE : header.js

//
// AUTHOR
//
// Developed by Christian MacMillan for VASAVA in 2016
// https://github.com/cmacmillanmarin
// christian@vasava.es
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
// VARIABLES
//

var barIn = false

//
// JS
//

var header = new Vue({
    
    el: 'header',

    methods: {
        
        showSearchBar: function () {
            
            if (!barIn) {
                
                $('header .navigation .line, .global, footer')
                    .css('display','none')
            
                $('.search .bar, .searchContainer')
                    .css('display','block')
                
                barIn = true
                
            } else {
                
                $('header .navigation .line, .global, footer')
                    .css('display','block')
                
                $('.search .bar, .searchContainer')
                    .css('display','none')
                
                barIn = false
                
            }            
            
        },
        
        search: function () {
            
            var val = $('.search .bar input').val()
            events.emit(events.events.inputSearchHeader,{ val: val })
            
        }
        
    },
    
})

//
// END JS
//

//
// EXPORTS
//
module.exports = header