"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginUser } from '@/lib/actions/signinUser'
import { ActionData } from '@/lib/typeActionData'
import { signinSchema } from '@/lib/validation/schemas/signinSchema'
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link'
import { startTransition, useActionState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

function Signin() {

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver : zodResolver(signinSchema),
    defaultValues:{
      username : "",
      password: ""
    }
  })

  const handleSubmit = (data: z.infer<typeof signinSchema>)=>{
    startTransition(()=>{
      const formData = new FormData();
      Object.entries(data).forEach(([key , value])=>{
        formData.append(key , value.toString());
      });
      formAction(formData)
    })
  }

  const [status , formAction , pending] = useActionState<ActionData , FormData>(
    loginUser,
    {
      status : "",
      errors : [""]
    }
  )



  return (
    <div className='h-screen flex justify-center items-center font-sahel-semiBold text-[16px] '>
      <div className='w-1/5  bg-[#FAFAFA] rounded-3xl px-6 py-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 flex flex-col">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[16px]'>نام کاربری</FormLabel>
                  <FormControl>
                    <Input placeholder="نام کاربری خود را وارد کنید" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[16px]'>رمز عبور</FormLabel>
                  <FormControl>
                    <Input placeholder="رمز غبور خود را وارد کنید" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=' flex gap-2'>
              <p>
                حساب کاربری ندارید؟
              </p>
              <Link className='text-orange-500' href="/signup">
                ثبت نام کنید!
              </Link>
            </div>
            <span className='text-red-500'>
              {
                status.errors
              }
            </span>
            <Button className='text-[16px] bg-orange-500 text-white hover:bg-white py-5 hover:text-orange-500 hover:shadow-2xl hover:shadow-orange-500/30' type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Signin