const PORT = process.env.PORT || 8080;
const CLARIFAI = {
    id: process.env.CLARIFAI_ID,
    secret: process.env.CLARIFAI_SECRET
}

var express = require('express');
var clarifai = require('/clarifai/clarifai')(CLARIFAI.id,CLARIFAI.secret); 
var app = express();


app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})