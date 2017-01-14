"use strict";

require('dotenv').load();

// Requires
const bodyParser = require('body-parser');
const Express = require('express');
const Clarifai = require('./src/clarifai');
const Image = require('./src/image');
const Mail = require('./src/mail');
const UnviersalAnalytics = require('./src/analytics');
const BillModel = require('./src/billModel');


// Constants
const CLARIFAI_ID = process.env.CLARIFAI_ID || '';
const CLARIFAI_SECRET = process.env.CLARIFAI_SECRET || '';
const CLARIFAI_MODEL_ID = process.env.CLARIFAI_MODEL_ID || '';
const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS_TRACKING_ID || '';
const PORT = process.env.PORT || 8080;
const IP = process.env.IP || '0.0.0.0';
const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) throw Error('Error Url enviroment variable not found');
// Declarations
let app = Express();
let clarifai = Clarifai(CLARIFAI_ID, CLARIFAI_SECRET, CLARIFAI_MODEL_ID);
let analytics = UnviersalAnalytics(GOOGLE_ANALYTICS);
let image = Image();
let mail = new Mail({
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || ''
});
let billModel = BillModel();

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
    image
        .decode(base64, `${imageId}.png`)
        .then((result) => {
            clarifai.predict(
                `${BASE_URL}/public/images/${result}`,
                (response) => {
                    res.send(billModel.parseData(response));
                }
            );
            //res.send(200, `${BASE_URL}/public/images/${result}`);
        })
        .catch((err) => {
            // TODO: Find a better response status
            res.send(400, 'Error saving the image.');
        });
});

app.post('/api/v1/analitycs', (req, res) => {
    analytics.event();
    res.send(200, "OK");
});

app.post('/api/v1/mail', (req, res) => {
    const data = req.param('email');
    mail.send(data, (error, body) => {
        console.log(body);
        res.send(200, body);
    });
});

app.listen(PORT, IP, () => { console.log("listening") });
