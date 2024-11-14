const Workout = require('../models/workoutModel')
const mongoose=require('mongoose')

//get all workouts 
const getAllWorkouts = async(req,res)=>{
    try {
        const workouts = await Workout.find({}).sort({createdAt:-1});
        if(!workouts){
            res.status(400).json({error:"Collection is empty!!!"});
            console.log("Collection is empty!!!");
           }
        // console.log(workouts);
        res.status(200).json(workouts);
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
    }
}

//get a Workout
const getSingleWorkout = async(req,res)=>{
    try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(400).json({error:"No Such Workout on this API"});
    }

    const workout =await Workout.findById(id);
    if(!workout){
        console.log(error);
        res.status(400).json({error:"No Such Workout"});
    }
    // console.log(workout);
    res.status(200).json(workout)
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
    }
}

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
  
    let emptyFields = []
  
    if (!title) {
      emptyFields.push('title')
    }
    if (!load) {
      emptyFields.push('load')
    }
    if (!reps) {
      emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const workout =await Workout.create({
            title:req.body.title,
            load:req.body.load,
            reps:req.body.reps
        })
        res.status(200).json(workout);
        // console.log(workout)
    } catch (error) {
     console.log(error);
     res.status(400).json({error:error.message});
    }
}

//delete Workout
const deleteWorkout =async(req,res)=>{
   try {
    const { id } = req.params;
    const workout = await Workout.findOneAndDelete(id);
    if(!workout){
        res.status(400).json({error:"No Such Workout"});
        console.log(error);
    }
    res.status(200).json(workout);
    // console.log(workout)
   } catch (error) {
    console.log(error);
    res.status(400).json({error:error.message});
   }
}

//update a Workout
const updateWorkout = async(req,res)=>{
    try {
        const {id} = req.params
        const workout = await Workout.findByIdAndUpdate({_id:id},{...req.body});
    if(!workout){
        res.status(400).json({error:"No Such Workout"});
        console.log(error);
    }
    res.status(200).json(workout);
    // console.log(workout)
    } catch (error) {
        console.log(error);
    res.status(400).json({error:error.message});
    }

}


module.exports={
    getAllWorkouts,
    createWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}