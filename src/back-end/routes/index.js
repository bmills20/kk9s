var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const app = require('../app');
const dotenv = require('dotenv');
dotenv.config()

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.WORKER_EMAIL, 
    pass: process.env.WORKER_PASS
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
  var phone = req.body.phone
  var location = req.body.location
  var referral = req.body.referral
  var petBreed = req.body.petBreed
  var petAge = req.body.petAge
  var petName = req.body.petName
  var content = `\nTimeline: ${formSubj} Name: ${name} \nEmail: ${email} \nLocation: ${location} \nReferral: ${referral} \nPhone: ${phone} \nPet Name: ${petName} \nPet Age: ${petAge} \nPet Breed: ${petBreed} \n\nMessage:\n\n${message} `

  var mail = {
    from: name,
    to: 'braxton25@gmail.com',
    subject: `New Contact Form Inquiry From: ${name} - Timeline: ${formSubj}`,
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
