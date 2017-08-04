// @flow

import nodemailer from 'nodemailer'

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
})

export default (app: Object) => {
  // api endpoint to fetch brand names
  app.post('/api/mail', (req, res) => {
    // setup email data with unicode symbols
    const mailOptions = {
      from: '"CodeLancer" <syed@codelancer.com>', // sender address
      to: process.env.MAILER_EMAIL, // list of receivers
      subject: 'Codelancer: New Signup', // Subject line
      text: `Email: ${req.body.email}, Name: ${req.body.name}`, // plain text body
      html: `<b>Email: ${req.body.email}, Name: ${req.body.name}</b>`, // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(404).json(err)
      } else {
        res.json(info)
      }
    })
  })
}
