import connectDB from "@/lib/db/db";
import { IProduct } from "./Interfaces";
import { productModel } from "@/lib/modals/produtsModel";

async function getData(page : number , perPage : number , productTitle : string){

  await connectDB();
  const PInfo : IProduct[] = JSON.parse(
    JSON.stringify(((await productModel.find({$or: [{title : {$regex : productTitle}}]}).skip(perPage * (page-1)).limit(perPage))))
  )
  const productCount = JSON.parse(
    JSON.stringify(await productModel.countDocuments())
  )
  return {PInfo, productCount}
}



export default getData