//
// JS MODULE : responsive.js

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
// VARIABLES
//
var scroll = { position: 0, direction: null }
var lastScroll

//
// JS
//

$(window).scroll(function (event) {
    
    scroll['position'] = $(window).scrollTop()
    
    if ( scroll['position'] > lastScroll) {
        
        scroll['direction'] = 'down';
        
    } else {
        
        scroll['direction'] = 'up';
        
    }
    
    lastScroll = scroll['position']
    
})

//
// END JS
//

//
// EXPORTS
//
module.exports = {
    
    data : function () { return scroll },
    pos : function () { return scroll['position'] },
    dir : function () { return scroll['direction'] }

}
