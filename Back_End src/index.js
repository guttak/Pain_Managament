const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 4000;
var fs = require('fs');
var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
  service: 'gmail',
  port:587,
  secure: false,
  auth: {
    user: 'satishgutta09@gmail.com',
    pass: 'Himasri@10'
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        var mailOptions = {

          from: 'satishgutta09@gmail.com',
          to: 'info@deeandleeltd.co.uk ,scsatish13@gmail.com',
          subject: 'Chronic Pain Clinic Survey',
          text: 'That was easy!',
          body: 'mail content...',
        //  attachments: [{'filename': 'result.pdf','content':'hello world'}]
        attachments: [{
        filename: 'result.pdf',
        path: 'C:/Users/admin/nodeex/result.pdf',
          contentType: 'application/pdf'
 }],
        }
        mail.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.send(Promise.resolve());
    });
});




app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
