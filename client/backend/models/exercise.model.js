const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username:{type:String},
    email:{type:String},
    contact:{type:String}
    
})

const Exercise = mongoose.model('Exercise',exerciseSchema )
module.exports = Exercise
////////////////////////////


