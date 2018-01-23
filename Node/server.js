/**
 * Created by aayusharora on 1/22/18.
 */

const app = require('express');

const server = app();


server.get('/harshit', function(req,res){
    res.send("Hello ! Harshit ")
});
server.use('/', app.static('public'));

server.listen(5000, function(){
    console.log("Server is listening");
});