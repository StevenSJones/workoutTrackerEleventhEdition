//import the npm packages needed
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
//create express server
const app = express();
//set the port of the server allowing heroku
const PORT = process.env.PORT || 8080;
//Express middleware
// Static directory - telling express where my statis files are
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev")); //logs out what we are going through
//mongoose
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true, //message came up in terminal to add this
});

require("./routes/api-routes")(app); //I am passing app (the app function)
require("./routes/html-routes")(app); //I am passing app (the app function)
//set out port to listen
app.listen(PORT, function () {
  console.log("server is listening on PORT: " + PORT);
});
