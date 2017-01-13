"use strict";

require('dotenv').load();
const bodyParser = require('body-parser');
const Express = require('express');
const Clarifai = require('./src/clarifai');
const Image = require('./src/image');
const Mail = require('./src/mail');
const UnviersalAnalitycs = require('./src/analitycs');

const CLARIFAI = {
    id: process.env.CLARIFAI_ID || '',
    secret: process.env.CLARIFAI_SECRET || ''
};
const MAIL_DATA = {
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || ''
};

let app = Express();
let clarifai = Clarifai(CLARIFAI.id, CLARIFAI.secret);
let image = Image();

let analitycs = UnviersalAnalitycs();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/public', Express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/api/v1/image', function (req, res) {
    var base64 = req.body.base64;
    var imageId = req.body.id;
    image.decode(base64, 'image.png',
        () => { res.send(200, "OK") }
    );
});

app.post('/api/v1/analitycs', function (req, res) {

    res.send(200, "OK");
});

app.get('/api/v1/mail', (req, res) => {
    let mail = Mail(MAIL_DATA);
    let data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'anderson1564@gmail.com',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };

    mail.messages().send(data, function (error, body) {
        console.log(body);
    });
});

app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
    console.log("listening");
});
