var ua = require('universal-analytics');

module.exports = function (clientId, clientSecret) {
    var module = {};
    var visitor = ua('UA-XXXX-XX');

    module.event = function (action) {
        visitor.event("Event Category", "Event Action").send();
    }

    return module;
};