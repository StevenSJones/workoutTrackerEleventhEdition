//import the npm packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
//create express server
const app = express();
//set the port of the server allowing heroku to set
const PORT = process.env.PORT || 8080;
// Static directory - telling express where my statis files are
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("server is listening on PORT: " + PORT);
});

