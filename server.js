//import the npm packages needed
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

//create express server
const app = express();
//set the port of the server allowing heroku
const PORT = process.env.PORT || 8080;
// Static directory - telling express where my statis files are
app.use(express.static("public"));
//api routes tells server to send index.html to browser
app.get("/", function (req, res) {
  res.send(path.resolve(__dirname, "public/index.html"));
});
//set out port to listen
app.listen(PORT, function () {
  console.log("server is listening on PORT: " + PORT);
});
