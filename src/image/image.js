module.exports = function () {
    var module = {};
    module.decode = function (base64Data, filename) {
        base64Data = base64Data.replace(/^data:image\/\w+;base64,/, '');
        fs.writeFile(__dirname + '/public/images/' + filename, base64Data, { encoding: 'base64' }, function (err) {
            //Do something      
        });
    }
    return module;

}