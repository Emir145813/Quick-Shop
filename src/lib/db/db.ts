import mongoose from "mongoose";


const MongoDB = process.env.MongoDB as string

async function connectDB(){

  try{
    await mongoose.connect(MongoDB);
    console.log("Connection Was Successful");
  }catch{
    console.log("Connection Faild");
  }
}

export default connectDB