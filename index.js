"use strict";

require('dotenv').load();
const bodyParser = require('body-parser');
const Express = require('express');
const Clarifai = require('./src/clarifai');
const Image = require('./src/image');
const Mail = require('./src/mail');
const UnviersalAnalytics = require('./src/analitycs');

const CLARIFAI = {
    id: process.env.CLARIFAI_ID || '',
    secret: process.env.CLARIFAI_SECRET || ''
};

const GOOGLE_ANALYTICS = {
    trakingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || ''
};

let app = Express();
let clarifai = Clarifai(CLARIFAI.id, CLARIFAI.secret);
let analytics = UnviersalAnalytics(GOOGLE_ANALYTICS.trakingId);
let image = Image();
let mail = new Mail({
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || ''
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/public', Express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/api/v1/image', function (req, res) {
    let image = Image();
    let base64 = req.body.base64;
    let imageId = req.body.id;
    image.decode(base64, 'image.png',
        () => { res.send(200, "OK") }
    );
});

app.post('/api/v1/analitycs', function (req, res) {
    analytics.event();
    res.send(200, "OK");
});

app.post('/api/v1/mail', (req, res) => {
    mail.send(function (error, body) {
      console.log(body);
      res.send('Email Sent');
    });
});

app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
    console.log("listening");
});
