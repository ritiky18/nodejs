var express = require("express");
var app = express();
var nodemailer = require("nodemailer");
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

let products = [{ name: "allu", price: "500", desc: "international" },
{name: "ritik", price: "50", desc: "desi"},
{name: "russian", price: "5000", desc: "hot"}];

app.get("/product", function (req, res) {
  
  res.send(products);
});


app.get("/", function (req, res) {
  res.send("Welcome to JavaTpoint!");
});

app.get("/home", function (req, res) {
  let a = req.query.data;
  let b = req.query.data1;
  res.send("Welcome to JavaTpoint! ", parseInt(a) + parseInt(b));
});

app.post("/pm", function (req, res) {
  let a = req.body.data;
  console.log(a);
  res.send("Welcome to JavaTpoint! " + a);
});

app.post("/contactus", function (req, res) {
  let a = req.body;
  console.log(a);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "asheeshyadav321@gmail.com",
      pass: "9987504135",
    },
  });

  var mailOptions = {
    from: "asheeshyadav321@gmail.com",
    to: "ritiky181@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Welcome to JavaTpoint! " + a.name);
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
