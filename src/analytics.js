const ua = require('universal-analytics');

module.exports = function (trackingId) {
    var module = {};
    let trackingId = trackingId;
    module.event = function (eventCategory, eventActions) {
        let visitor = ua(trackingId);
        visitor.event(eventCategory, eventActions).send();
    }

    return module;
};