"use strict";

const ua = require('universal-analytics');

module.exports = function (trackingId) {
    return {
        event: (eventCategory, eventActions) => {
            let visitor = ua(trackingId);
            visitor.event(eventCategory, eventActions).send();
        }
    };
};