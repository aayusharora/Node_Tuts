/**
 * Created by aayusharora on 1/22/18.
 */

const xyz = require('fs');
const abc = require('./b')
//
// this.a = 5;
// this.b = 7;
// global.x = 3;
let x = 3;
//
// module.exports = {x};// Preference
// exports.hello = function() {
//     console.log("Apple");
// }

let arg = process.argv.slice(2)[0];
abc.u(function(a){
    abc.s(a.toString().toLowerCase());
    console.log("File is not written yet .....")
}, arg);


// var x = 1 PIXEL, Async
// 2 x++
//....15 PIXEL, callback


// COMPOSITION

// console.log(exports);
// console.log(module.exports)

