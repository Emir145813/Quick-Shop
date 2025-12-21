import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
  email :{type : String},
  username : {type : String},
  phoneNumber : {type : String},
  password : {type : String},
});


const userModel = mongoose.models.users || mongoose.model("users", userSchema);


export default userModel