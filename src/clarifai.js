"use strict";

const Clarifai = require('clarifai');

module.exports = function (clientId, clientSecret) {
    let app = new Clarifai.App(clientId, clientSecret);

    return {
        predict: (imageUrl, callBack) => {
            app.models.predict(Clarifai.GENERAL_MODEL, imageUrl).then(
                (response) => { callBack(response) },
                (err) => { console.error('Error: ', err) }
            );
        }
    };
};