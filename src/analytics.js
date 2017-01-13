"use strict";

const ua = require('universal-analytics');

module.exports = function (trackingId) {
    let module = {};
    module.event = (eventCategory, eventActions) => {
        let visitor = ua(trackingId);
        visitor.event(eventCategory, eventActions).send();
    }

    return module;
};