"use strict";

const ua = require('universal-analytics');

module.exports = function (trackingId) {
    return {
        event: (eventCategory, eventActions,userId) => {
            let visitor = ua(trackingId,userId);
            visitor.event(eventCategory, eventActions).send();
        }
    };
};