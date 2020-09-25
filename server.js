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
// Static directory - telling express where my statis files are
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// Mongodb error handling
// db.on("error", error => {
//   console.log("Database Error:", error);
// });

//api routes tells server to send index.html to browser
app.get("/", function (req, res) {
  res.send(path.resolve(__dirname, "public/index.html"));
});

// app.get("/api/workouts/", function (req, res) {
//   console.log("Inside the /api/workouts route!!!!!!!!!!!!");
// });
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/exercise", function (req, res) {
  console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!")
  res.send(path.resolve(__dirname, "public/exercise.html"));
});

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
