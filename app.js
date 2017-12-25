var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public' + '/index.html'))

// Listening on 20204
app.listen(20204, function() {
    console.log('Example app listening on port 20204!');
});

// Using Static Public Libraries.
app.use(express.static('public'));