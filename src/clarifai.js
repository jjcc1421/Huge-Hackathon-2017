"use strict";

const Clarifai = require('clarifai');

module.exports = function (clientId, clientSecret, clientModelId) {
    let app = new Clarifai.App(clientId, clientSecret);

    return {
        predict: (imageUrl, callBack) => {
            app.models.predict(imageUrl).then(
                (response) => { callBack(response) },
                (err) => { console.error('Error: ', err) }
            );
        }
    };
};