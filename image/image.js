var data = image.replace(/^data:image\/\w+;base64,/, '');
var n = Date.now();
var filename = n + '.png';

fs.writeFile(__dirname + '/public/images/' + filename, data, { encoding: 'base64' }, function (err) {
    //Finished
    skyBiometry.request(basePath + '/public/images/' + filename, res);
    //res.send(err);
});

module.exports = function () {
    var module = {};
    module.decode = function (base64Data, filename) {
        fs.writeFile(__dirname + '/public/images/' + filename, base64Data, { encoding: 'base64' }, function (err) {
            //Do something      
        });
    }
    return module;

}