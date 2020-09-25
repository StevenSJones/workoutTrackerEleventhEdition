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
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan("dev"));//logs out what we are going through
//mongoose
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,//message came up in terminal to add this
});
// Mongodb error handling
// db.on("error", error => {
//   console.log("Database Error:", error);
// });

//content routes tells server to send index.html to browser
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});
//The /api/workouts route is defined
app.get("/exercise", function (req, res) {
  console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!")
  res.sendFile(path.resolve(__dirname, "public/exercise.html"));
});
//The /stats route is defined
app.get("/stats", function (req, res) {
  console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!")
  res.sendFile(path.resolve(__dirname, "public/exercise.html"));
});
//The /api/workouts route is defined
app.get("/api/workouts", function (req, res) {
  res.send("Inside the /api/workouts route!!!!!!!!!!!!");
});
app.use(express.static(path.join(__dirname, 'public')));
//update (addExercise) dealing with information that we are passing along route. :id is called a route parameter. I am making a key of id and the value will be assigned.
// app.put('/api/workouts/:id', function (req, res) {
//   console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!");
//   res.send(req.params)
// });

// app.post('/api/workouts', function (req, res) {
//   console.log("Inside the /api/workouts POST route!!!!!!!!!!!!");
// })

//set out port to listen
app.listen(PORT, function () {
  console.log("server is listening on PORT: " + PORT);
});
