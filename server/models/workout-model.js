const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: number,
    exercises: [
      {
        type: String,
        name: String,
        duration: number,
        weight: number,
        reps: number,
        sets: number
        
      }
    ]

  
});

const User = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
