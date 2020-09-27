//import models
const models = require("../models");
//api routes==============================================================
//The /api/workouts route is defined
//app here is just a parameter
module.exports = (app) => {
  app.get("/api/workouts", function (req, res) {
    models.Workout.find()
      .select("-__v")
      .then((workouts) => res.json(workouts))
      .catch((err) => res.status(400).json(err));
    // res.send("Inside the /api/workouts get route!!!!!!!!!!!!");
  });
  // allows you to create a page using post
  app.post("/api/workouts", function (req, res) {
    // res.send("Inside the /api/workouts post route!!!!!!!!!!!!")
    models.Workout.create(req.body)
      .then((workouts) => res.json(workouts))
      .catch((err) => res.status(400).json(err));
    // console.log("Inside the /api/workouts POST route!!!!!!!!!!!!");
  });
//get a range of workouts and display in graphic form
    app.get("/api/workouts/range", async function (req, res) {
        models.Workout.find().limit(7)
        .then((workouts) => res.json(workouts))
    })
  // update (addExercise) dealing with information that we are passing along route. :id is called a route parameter. I am making a key of id and the value will be assigned.
  app.put("/api/workouts/:id", function (req, res) {
    // console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!");
    models.Workout.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((workouts) => res.json(workouts))
      .catch((err) => res.status(400).json(err));
  });
};
