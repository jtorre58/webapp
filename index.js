var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
const util = require('util')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nodejswebapp777@gmail.com',
    pass: 'webapp777'
  }
});

var mailOptions = {
    from: 'nodejswebapp777@gmail.com',
    to: 'alextorres274@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Easy work'
  };

app.get('/sendEmail', function (req, res) {
      mailOptions.text = req.query.text;
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent" + JSON.stringify(mailOptions));
          console.log('Email sent: ' + info.response);
          res.send(JSON.stringify(mailOptions));
        }
      });
 JSON.stringify(mailOptions)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});