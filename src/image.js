"use strict";

const fs = require('fs');

module.exports = () => {
    return {
        decode: (base64Data, filename) => {
            base64Data = base64Data.replace(/^data:image\/\w+;base64,/, '');
            let filePath = __dirname + '/../public/images/' + filename;
            return new Promise((resolve, reject) => {
                fs.writeFile(
                    filePath,
                    base64Data,
                    { encoding: 'base64' },
                    (err) => err ? reject(err) : resolve(filename)
                )
            });
        }
    }
};