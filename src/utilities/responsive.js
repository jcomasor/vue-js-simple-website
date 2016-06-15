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
//  REQUIRES
//

//
// VARIABLES
//
var responsiveWidth = 768;
var tabletWidth = 1024;
var mobile;
var tablet;
var portrait;
var displayWidth;
var displayHeight;
var so = Boolean( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent ) );
//
// JS
//

// Checks if the viewport is a mobile or not
function isMobile(windowWidth) {
    
    if (windowWidth < responsiveWidth) {
        return true;
    } else {
        return false;
    }
    
}

// Checks if the viewport is a Tablet or not
function isTablet(windowWidth) {
    
    if ( windowWidth >= responsiveWidth && windowWidth <= tabletWidth) {
        return true;
    } else {
        return false;
    }
    
}

// Checks if is portrait
function isPortrait(windowWidth, windowHeight) {
    
    if ( windowWidth < windowHeight ) {
        return true;
    } else {
        return false;
    }
    
}

// Sets the initial state
$(document).ready(function () { 
    
    mobile = isMobile(window.innerWidth);
    tablet = isTablet(window.innerWidth);
    portrait = isPortrait(window.innerWidth, window.innerHeight);
    
    displayHeight = window.innerHeight;
    displayWidth = window.innerWidth;

});

// Every time the window is resized sets the new state
$(window).resize(function() {

    mobile = isMobile(window.innerWidth);
    tablet = isTablet(window.innerWidth);
    portrait = isPortrait(window.innerWidth, window.innerHeight);
    
    displayHeight = window.innerHeight;
    displayWidth = window.innerWidth;

});

//
// END JS
//

//
// EXPORTS
//
module.exports = {
    
    mobile : function () { return mobile; },
    tablet : function () { return tablet; },
    portrait : function () { return portrait; },
    width: function () { return displayWidth; },
    height: function () { return displayHeight; }
    
}
