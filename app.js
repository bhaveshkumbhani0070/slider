var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page 
app.get('/', function(req, res) {
    res.render(__dirname + '/index');
});


app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));

app.listen(8081);
console.log('8081 is the magic port');