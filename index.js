const PORT = process.env.PORT || 8080;
const CLARIFAI = {
    id: process.env.CLARIFAI_ID || '',
    secret: process.env.CLARIFAI_SECRET || ''
};

var express = require('express');
var clarifai = require('./clarifai/clarifai')(CLARIFAI.id, CLARIFAI.secret);
var app = express();
var image = require('./image/image')();


app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('Hello World!');
});
app.post('/image', function (req, res) {
    var base64 = req.body.base64;
    image.decode(base64);
    res.send('Hello World!');
})
=======
    res.send('Hello World!')
});

app.post('/api/v1/mail', function (req, res) {
    // Sent email

    res.send('Email Sent');

});
>>>>>>> 7b664ad718efb424c566fc62c2016d83255b388f

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
});