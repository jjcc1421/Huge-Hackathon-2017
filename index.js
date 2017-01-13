const PORT = process.env.PORT || 8080;
const CLARIFAI = {
    id: process.env.CLARIFAI_ID || '' ,
    secret: process.env.CLARIFAI_SECRET || ''
};

var express = require('express');
var clarifai = require('./clarifai/clarifai')(CLARIFAI.id,CLARIFAI.secret); 
var app = express();


app.get('/', function (req, res) {
    res.send('Hello World!')
});

<<<<<<< HEAD

app.post('/api/v1/mail', function (req, res) {
    // Sent email



    res.send('Email Sent');

});

=======
>>>>>>> d3e57b408ffa294a9b63e272e7e2b69e6ede1da1
app.post
app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
});