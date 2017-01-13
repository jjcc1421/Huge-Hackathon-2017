var Clarifai = require('clarifai');

module.exports = function (clientId, clientSecret) {
    var module = {};
    var clarifaiApp = new Clarifai.App(
        clientId,
        clientSecret
    );

    module.predict = function (imageUrl, callBack) {
        app.models.predict(Clarifai.GENERAL_MODEL, imageUrl).then(
            function (response) {
                callBack(response);
            },
            function (err) {
                // there was an error
            }
        );
    };

    return module;
}