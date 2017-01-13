"use strict";

const fs = require('fs');

module.exports = function () {
    return {
        decode: (base64Data, filename, callback) => {
            base64Data = base64Data.replace(/^data:image\/\w+;base64,/, '');
            fs.writeFile(
                __dirname + '/../public/images/' + filename,
                base64Data,
                { encoding: 'base64' },
                (err) => { err ? console.error(err) : callback() }
            );
        }
    }
};