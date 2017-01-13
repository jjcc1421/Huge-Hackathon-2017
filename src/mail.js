"use strict";

const MailGun = require('mailgun-js');

module.exports = (options) => { 
    return MailGun(options); 
};