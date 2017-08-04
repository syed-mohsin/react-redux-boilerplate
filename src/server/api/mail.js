// @flow

import mailgunJS from 'mailgun-js'

const apiKey = process.env.MAILGUN_API_KEY
const domain = 'thecodelancer.com'
const mailgun = mailgunJS({ apiKey, domain })

export default (app: Object) => {
  app.post('/api/mail', (req, res) => {
    const emailData = {
      from: 'CodeLancer <syed@codelancer.com>',
      to: 'syedm.90@gmail.com',
      subject: 'Codelancer: New Signup',
      text: `Email: ${req.body.email}, Name: ${req.body.name}`,
      html: `<b>Email: ${req.body.email}, Name: ${req.body.name}</b>`,
    }

    mailgun.messages().send(emailData, (err, body) => {
      if (err) {
        res.status(404).json(err)
      } else {
        res.json(body)
      }
    })

    const mailingList = mailgun.lists('newsletter@thecodelancer.com')

    const user = {
      subscribed: true,
      address: req.body.email,
      name: req.body.name,
      vars: { userType: req.body.userType },
    }

    mailingList.members().create(user, (err, data) => {
      // `data` is the member details
      // eslint-disable-next-line no-console
      console.log(err, data)
    })
  })
}
