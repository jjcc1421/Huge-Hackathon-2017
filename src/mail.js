"use strict";

const MailGun = require('mailgun-js');
const proto = Mail.prototype;

function Mail (options) { 
    this.mail = MailGun(options); 
};

// Example json:
//
// {
//     user: {
//         name: 'Anony'
//         lastName: 'Mo'
//     },
//     position: 'position of the user',
//     recipientEmail: 'email@email.com'
// }

proto.send = function send(data, cb) {
    let emailData = {
      from: 'New Hope <help-request@samples.mailgun.org>',
      to: data.recipientEmail,
      subject: '${data.user.name} ${data.user.lastName} Needs Your Help',
      text: 
        `Hello,</br>` +
        `This is an automated message.</br>` +
        `${data.user.name} ${data.user.lastName} needs your help,` + 
        `and their current position is <b>${data.position}</b>.</br>` +
        `Thank You!`
    };

    this.mail.messages().send(emailData, cb);
};

module.exports = Mail;