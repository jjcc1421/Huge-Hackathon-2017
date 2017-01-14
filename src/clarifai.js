"use strict";

const Clarifai = require('clarifai');

module.exports = function (clientId, clientSecret, clientModel) {
    let app = new Clarifai.App(clientId, clientSecret);

    return {
        predict: (imageUrl, callBack) => {
            app.models.predict(clientModel, imageUrl).then(
                (response) => { callBack(response) },
                (err) => { console.error('Error: ', err) }
            );
        }
    };
};