import z, { endsWith } from "zod";


export const signupSchema =z.object({
  email : z
    .string({message : "ایمیل معتبر نیست"}),
  username : z
      .string({error: "نام کاربری اجباری است",})
      .min(5,{message : "نام کاربری حداقل 5 حرف باشد"})
      .max(10,{message : "نام کاربری حد اکثر 10 حرف باشد"}),
    phoneNumber : z
      .string({error : "فیلد اجباری"})
      .min(11,{message : "شماره تلفن همراه باید 11 رقم باشد"})
      .max(11,{message : "شماره تلفن همراه باید 11 رقم باشد"}),
    password : z
      .string()
      .min(8,{message : "رمز عبور حداقل 8 حرف باشد"})
      .max(16,{message : "رمز عبور حداکثر 16 حرف باشد"}),
    confirmPassword : z
      .string()
      .min(8,{message : "رمز عبور حداقل 8 حرف باشد"})
      .max(16,{message : "رمز عبور حداکثر 16 حرف باشد"})
})