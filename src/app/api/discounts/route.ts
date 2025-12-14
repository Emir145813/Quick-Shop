import { IDiscount } from "@/app/components/Interfaces";
import connectDB from "@/lib/db/db";
import { discountModel } from "@/lib/modals/discountsModel";


export async function GET(){
  await connectDB();
  const discounts : IDiscount = JSON.parse(
    JSON.stringify(await discountModel.find())
  );
  return Response.json(discounts);
}