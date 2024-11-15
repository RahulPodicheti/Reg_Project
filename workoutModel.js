const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }    
},{timeseries:true})

module.exports = mongoose.model('workout',workoutSchema)