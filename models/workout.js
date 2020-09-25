const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  type: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  weight: {
    type: Number,
    unique: true,
    required: true
  },
  sets: {
    type: Number,
    unique: true,
    required: true
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },
  duration: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
});

const Example = mongoose.model("Workout", WorkoutSchema);

module.exports = Example;