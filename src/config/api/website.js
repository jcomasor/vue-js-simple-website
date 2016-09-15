//
// website.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

//
// Mocking client-server processing
//

import homeData from './home-data'
import aboutData from './about-data'
import contactData from './contact-data'

export default { 

    getHome() {
        // Ajax simulation
        return new Promise(
            function (resolve, reject) {
                setTimeout(()=>resolve(homeData), 100)
            })
    },
    getAbout() {
        // Ajax simulation
        return new Promise(
            function (resolve, reject) {
                setTimeout(()=>resolve(aboutData), 100)
            })
    },
    getContact() {
        // Ajax simulation
        return new Promise(
            function (resolve, reject) {
                setTimeout(()=>resolve(contactData), 100)
            })
    }

}
