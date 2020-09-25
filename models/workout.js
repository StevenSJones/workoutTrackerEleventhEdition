const mongoose = require("mongoose");
//pull off the schema. We could also make a new one ?
const Schema = mongoose.Schema;
//this is the schema constructor
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of exercise is required.",
      },
      name: {
        type: String,
        trim: true,
        required: "Name of exercise is required.",
      },
      duration: {
        type: Number,
        required: "Duration of exercise is required.",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});
//register this model on mongoose passing in title and schema as args
const Workout = mongoose.model("Workout", WorkoutSchema);
// ** export the model for usage elsewhere (in index.js)
module.exports = Workout;
