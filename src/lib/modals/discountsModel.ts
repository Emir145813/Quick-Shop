import mongoose, { Schema } from "mongoose";


export const discountsSchema = new Schema({
  id: {type : Number},
  code : {type : String},
  perc: {type : Number}
});



export const discountModel = mongoose.models.discounts || mongoose.model("discounts" , discountsSchema);