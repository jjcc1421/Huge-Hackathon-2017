"use strict";

const CLARIFAI = {
    id: process.env.CLARIFAI_ID || '',
    secret: process.env.CLARIFAI_SECRET || ''
};
const MAIL_DATA = { 
    apiKey: process.env.MAILGUN_API_KEY, 
    domain: process.env.MAILGUN_DOMAIN 
};
const Express = require('express');
// const Mail = require('./src/mail');

let clarifai = require('./src/clarifai/clarifai')(CLARIFAI.id, CLARIFAI.secret);
let app = Express();
let image = require('./src/image/image')();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/image', function (req, res) {
    var base64 = req.body.base64;
    image.decode(base64);
    res.send('Hello World!');
})

app.post('/api/v1/mail', function (req, res) {
    // let mail = Mail(MAIL_DATA);
    
    // var data = {
    //   from: 'Excited User <me@samples.mailgun.org>',
    //   to: 'anderson1564@gmail.com',
    //   subject: 'Hello',
    //   text: 'Testing some Mailgun awesomness!'
    // };

    // mail.messages().send(data, function (error, body) {
    //   console.log(body);
    // });

    res.send('Email Sent');

});

app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function (){
  console.log("listening");
});
