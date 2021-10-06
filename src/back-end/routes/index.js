var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('../config/config');
const app = require('../app');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var phone = req.body.phone
  var formSubj = req.body.subject
  var content = `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nSubject: ${formSubj} \nMessage:\n\n${message} `

  var mail = {
    from: name,
    to: 'braxton25@gmail.com',
    subject: `Contact Form: ${formSubj}`,
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
