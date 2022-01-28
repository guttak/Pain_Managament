
const express = require("express");


const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require("cors");
const pdfTemplate = require('./documents');
const app = express();
//const path=require('path');
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post("/post_name", async (req, res) => {
	let data= req.body

	console.log("email",data.email)

});

app.post('/create-pdf', (req, res) => {

    pdf.create(pdfTemplate(req.data), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
});
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
