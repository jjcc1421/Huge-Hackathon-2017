"use strict";

var fs = require('fs');
module.exports = function () {
    var module = {};
    module.decode = function (base64Data, filename, callback) {
        base64Data = base64Data.replace(/^data:image\/\w+;base64,/, '');
        fs.writeFile(
            __dirname + '/../public/images/' + filename,
            base64Data,
            { encoding: 'base64' },
            function (err) {
                if (err) console.error(err)
                else callback();
            }
        );
    }
    return module;

}