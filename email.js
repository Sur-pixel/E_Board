const nodemailer = require('nodemailer')
function sendMail(req, id){



let transporter = nodemailer.createTransport({


    service: "gmail",
    auth: {
  
  
      user: 'chatationinc@gmail.com',
      pass: 'Idk_12345'
  
    }
  
  })
  
    let mailoptions = {
  
  
      from: 'chatationinc@gmail.com',
      to: req.body.email,
      subject: `Hey ${req.body.email} Here is your verfication Link`,
      text: `verify email adress: http://192.168.2.22:3001/${id}`
  
    }
    transporter.sendMail(mailoptions, (err, data) => {
    console.log("Email Send")
  
    })
}

module.exports = {

    sendMail: sendMail
}