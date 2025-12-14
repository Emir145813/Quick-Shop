import mongoose, { Schema } from "mongoose";

export const productSpecsSchema = new Schema({
  key : {type : String},
  value : {type : String},
})

export const productsSchema = new Schema ({
  id: {type : Number},
  title: {type : String},
  price: {type : Number} ,
  description : {type : String},
  image_src: {type : String},
  pclass : {type : String},
  category : {type : String} 
})



export const productModel = mongoose.models.products || mongoose.model("products" ,productsSchema);
