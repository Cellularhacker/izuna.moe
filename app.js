var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

// Listening on 20204
app.listen(20204, function() {
    console.log('Example app listening on port 20204!');
});

// Using Static Public Libraries.
app.use(express.static('public'));