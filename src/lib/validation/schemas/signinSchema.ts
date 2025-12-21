
import { z } from "zod"

export const signinSchema = z.object({
  username : z
    .string()
    .min(5,{message : "نام کاربری حداقل 5 حرف باشد"})
    .max(10,{message : "نام کاربری حد اکثر 10 حرف باشد"}),
  password : z
    .string()
    .min(8,{message : "رمز عبور حداقل 8 حرف باشد"})
    .max(10,{message : "رمز عبور حداقل 10 حرف باشد"})
})