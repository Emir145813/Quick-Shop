import { IProduct } from "@/app/components/Interfaces";
import connectDB from "@/lib/db/db";
import { productModel } from "@/lib/modals/produtsModel";


export async function GET() {
  await connectDB();
  const products : IProduct = JSON.parse(
    JSON.stringify(await productModel.find())
  );
  return Response.json(products);
}
