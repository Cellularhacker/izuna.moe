var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(20204, function() {
    console.log('Example app listening on port 20204!');
});