//
// JS MODULE : responsive.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

//
// VARIABLES
//

var responsiveWidth = 768
var tabletWidth = 1024
var mobile
var tablet
var portrait
var displayWidth
var displayHeight
var so = Boolean(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent ))

//
// END VARIABLES
//

//
// JS
//

// Sets the initial state

mobile = isMobile(window.innerWidth)
tablet = isTablet(window.innerWidth)
portrait = isPortrait(window.innerWidth, window.innerHeight)
    
displayHeight = window.innerHeight
displayWidth = window.innerWidth

//
// Methods

// Checks if the viewport is a mobile or not
function isMobile(windowWidth) {
    
    if (windowWidth < responsiveWidth) {
        return true
    } else {
        return false
    }
    
}

// Checks if the viewport is a Tablet or not
function isTablet(windowWidth) {
    
    if ( windowWidth >= responsiveWidth && windowWidth <= tabletWidth) {
        return true
    } else {
        return false
    }
    
}

// Checks if is portrait
function isPortrait(windowWidth, windowHeight) {
    
    if ( windowWidth < windowHeight ) {
        return true
    } else {
        return false
    }
    
}

// Every time the window is resized sets the new state
$(window).resize(function() {

    mobile = isMobile(window.innerWidth)
    tablet = isTablet(window.innerWidth)
    portrait = isPortrait(window.innerWidth, window.innerHeight)
    
    displayHeight = window.innerHeight
    displayWidth = window.innerWidth

})

//
// END JS
//

//
// EXPORTS
//
module.exports = {
    
    isMobile : function () { return mobile },
    isTablet : function () { return tablet },
    isPortrait : function () { return portrait },
    width: function () { return displayWidth },
    height: function () { return displayHeight }
    
}
