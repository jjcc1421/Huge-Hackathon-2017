"use strict";

const Clarifai = require('clarifai');

module.exports = function (clientId, clientSecret, clientModelId) {
    let app = new Clarifai.App(clientId, clientSecret);

    return {
        predict: (imageUrl, callBack) => {
            app.models.initModel('{id}')

            app.models.get({ clientModelId }).then(
                function (model) {
                    model.predict(imageUrl).then(
                        (response) => { callBack(response) },
                        (err) => { console.error('Error: ', err) }
                    );
                },
                function (err) {
                    // there was an error
                }
            );


            /*app.models.predict(clientModelId, imageUrl).then(
                (response) => { callBack(response) },
                (err) => { console.error('Error: ', err) }
            );*/
        }
    };
};