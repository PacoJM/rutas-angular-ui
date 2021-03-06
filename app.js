
var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/example', function (req, res) {
    res.render('example.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


