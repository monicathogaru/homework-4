const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Welcome to my first Node.js web site. <br><a href='/contact'>Contact</a> <br><a href='/bio'>Bio</a>");
});

app.get("/contact", function (req, res) {
    res.send("My name is monica.");
});

app.get("/bio", function (req, res) {
    res.send("my name is monica.");
});

//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

//If it runs locally assign 8002 static port
if (port == null || port == "") {
  port = 8002;
}
app.listen(port);
