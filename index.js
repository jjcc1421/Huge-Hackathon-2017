const PORT = process.env.PORT || 8080;
const CLARIFAI = {
    id: process.env.CLARIFAI_ID || '',
    secret: process.env.CLARIFAI_SECRET || ''
};

var express = require('express');

var app = express();
var bodyParser = require('body-parser');

var clarifai = require('./src/clarifai')(CLARIFAI.id, CLARIFAI.secret);
var app = express();
var image = require('./src/image')();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/image', function (req, res) {
    var base64 = req.body.base64;
    var imageId = req.body.id;
    image.decode(base64, 'image.png',
        function () {
            res.send(200, "OK");
        }
    );
    //res.send();
})

app.post('/api/v1/mail', function (req, res) {
    // Sent email

    res.send('Email Sent');

});

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
});