require('dotenv').config()

const express = require('express');
const app =express();

const mongoDB = require('./db');
mongoDB();

app.use(express.json())
app.use('/api/workouts',require('./routes/workouts'))
    
app.use((req,res,next)=>{
    next()
})

app.listen(5000,()=>{
    console.log(`http://localhost:5000`) 
});

// process.env 