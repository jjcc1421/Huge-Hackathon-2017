"use strict";

const Clarifai = require('clarifai');

module.exports = function (clientId, clientSecret) {
    let app = new Clarifai.App(clientId, clientSecret);

    return {
        predict: (imageUrl, callBack) => {
            app.models.predict("{bcc31fde55ff4ebfa96c2a19b5c95982}", imageUrl).then(
                (response) => { callBack(response) },
                (err) => { console.error('Error: ', err) }
            );
        }
    };
};