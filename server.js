const express = require("express");
const morgan = require("morgan");

//create express server
const app = express();
//set the port of the server allowing heroku to set
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("server is listening on PORT: " + PORT);
});

