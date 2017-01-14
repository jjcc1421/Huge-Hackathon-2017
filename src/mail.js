"use strict";

const MailGun = require('mailgun-js');
const proto = Mail.prototype;

function Mail (options) { 
    this.mail = MailGun(options); 
};

proto.send = function send(data, cb) {
    const name = data.name ? data.name : 'Someone';
    const position = data.geo 
            ? `http://maps.google.com/?q=${data.geo.lat},${data.geo.lon} - ${data.geo.name}`
            : `Someplace`;
    const emailData = {
      from: 'New Hope <help-request@samples.mailgun.org>',
      subject: `${name} Needs Your Help`,
      to: data.email ? data.email : 'help@algo.com',
      html: 
        `Hello, this is an automated message. ${name} needs your help and their current position is ${position}. Thank You!`
    };

    this.mail.messages().send(emailData, cb);
};

module.exports = Mail;