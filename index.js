"use strict";

require('dotenv').load();

// Requires
const bodyParser = require('body-parser');
const Express = require('express');
const Clarifai = require('./src/clarifai');
const Image = require('./src/image');
const Mail = require('./src/mail');
const UnviersalAnalytics = require('./src/analytics');


// Constants
const CLARIFAI_ID = process.env.CLARIFAI_ID || '';
const CLARIFAI_SECRET = process.env.CLARIFAI_SECRET || '';
const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS_TRACKING_ID || '';
const PORT = process.env.PORT || 8080;
const IP = process.env.IP || "0.0.0.0";

// Declarations
let app = Express();
let clarifai = Clarifai(CLARIFAI_ID, CLARIFAI_SECRET);
let analytics = UnviersalAnalytics(GOOGLE_ANALYTICS);
let image = Image();
let mail = new Mail({
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || ''
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/public', Express.static(__dirname + '/public/'));

app.post('/api/v1/image', (req, res) => {
    let image = Image();
    let base64 = req.body.base64;
    let imageId = req.body.id;
    image.decode(
        base64, 
        'image.png',
        () => { res.send(200, "OK") }
    );
});

app.post('/api/v1/analitycs', (req, res) => {
    analytics.event();
    res.send(200, "OK");
});

app.post('/api/v1/mail', (req, res) => {
    mail.send(function (error, body) {
      console.log(body);
      res.send(200, 'Email Sent');
    });
});

app.listen(PORT, IP, () => { console.log("listening") });
