"use server"
import connectDB from "../db/db"
import userModel from "../modals/usersModel";
import { ActionData } from "../typeActionData";
import { signinSchema } from "../validation/schemas/signinSchema";


export async function loginUser(state : ActionData , formData : FormData): Promise<ActionData>{
  await connectDB();
  const data = Object.fromEntries(formData.entries());
  const result = signinSchema.safeParse(data);
  console.log(result);
  const userValidation = await userModel.findOne({"username" : result.data?.username , "password" : result.data?.password});

  if(!result.success){
    return {
      status : "Error",
      errors : ["پر کردن تمام فیلد ها اجباری است"]
    }
  }

  if(!userValidation){
    return{
      status : "Error",
      errors : ["نام کاربری یا رمز عبور نامعتبر است"]
    }
  }

  return {
    status : "Success",
    errors : ["به کویک شاپ خوش آمدید"]
  }
}
