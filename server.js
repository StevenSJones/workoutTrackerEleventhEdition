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

// connection string using mongoose:
var uri =
  "mongodb://localhost/workout";
  // var uri =
  // "mongodb+srv://Steven:Password1@cluster0.s4hbt.mongodb.net/workout?retryWrites=true&w=majority";
//   'MY_SERVER-shard-00-00-clv3h.mongodb.net:27017,' +
//   'MY_SERVER-shard-00-01-clv3h.mongodb.net:27017,' +
//   'MY_SERVER-shard-00-02-clv3h.mongodb.net:27017/MY_DATABASE' +
//   'ssl=true&replicaSet=MY_REPLICASET_NAME-shard-0&authSource=MY_ADMIN_DATABASE';

// mongoose.connect(uri);
// var db = mongoose.connection;

// mongodb://localhost/workout
//====================
//mongoose
mongoose
  .connect(uri, {
    dbName: "workout",
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //message came up in terminal to add this
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

require("./routes/api-routes")(app); //I am passing app (the app function)
require("./routes/html-routes")(app); //I am passing app (the app function)
//set out port to listen
app.listen(PORT, function () {
  console.log("server is listening on PORT: " + PORT);
});
