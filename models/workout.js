let mongoose = require('mongoose');
// create a workout model
let workoutModel = mongoose.Schema({
    name: String,
    sets: String,
    reps: String,
    description: String,
    rest: String,
},
{
    collection: "exercises"
}



);
module.exports = mongoose.model('Workout', workoutModel)