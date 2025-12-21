"use server"
import connectDB from "../db/db"
import userModel from "../modals/usersModel";
import { ActionData } from "../typeActionData";
import { signupSchema } from "../validation/schemas/signupSchema";


export async function createUser(state : ActionData , formData : FormData): Promise<ActionData>{
  await connectDB();
  const data = Object.fromEntries(formData.entries());
  const result = signupSchema.safeParse(data);
  const userExist = await userModel.findOne({"email" : result.data?.email});
  const usernameExist = await userModel.findOne({"username" : result.data?.username});
  const passwordMatch = result.data?.password === result.data?.confirmPassword;


  if(!result.success){
    return {
      status : "Error",
      errors : ["پر کردن تمام فیلد ها اجباری است"]
    }
  }

  if(userExist){
    return{
      status : "Error",
      errors : ["شما در حال حاضر حساب کاربری فعال دارید"]
    }
  }

  if(usernameExist){
    return{
      status : "Error",
      errors : ["این نام کاربری دردسترس نیست"]
    }
  }

  if(!passwordMatch){
    return {
      status : "Error",
      errors : ["رمز عبور همخوانی ندارد"]
    }
  }

  userModel.create({
    email : result.data.email,
    username : result.data.username,
    phoneNumber : result.data.phoneNumber,
    password : result.data.password
  })

  return {
    status : "Success",
    errors : ["به کویک شاپ خوش آمدید"]
  }
}
