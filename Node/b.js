/**
 * Created by aayusharora on 1/22/18.
 */

// const values = require('./a');
const fs = require('fs');

function useData(callback, arg){
    fs.readFile('test.txt', function(err, data){
        if(err) throw err;

        callback(data + "" + arg);

    })

}

function sendMessage(data) {
    fs.writeFile('testing.txt', data, function(err){
        if (err) throw err;
        console.log("Successfully Written")
    })
}

console.log(useData);
module.exports = {
    u: useData,
    s: sendMessage
}