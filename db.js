const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://23645a0517:Rahul@cluster0.knpax.mongodb.net/mernapp'
const mongoDB = async()=>{
    try {
        await mongoose.connect(MONGO_URL,{useNewUrlParser:true});
        console.log("connected")
    } catch (error) {
        console.log("error")
    }
}

 

module.exports=mongoDB;