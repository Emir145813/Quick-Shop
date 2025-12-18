"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

import { useState } from 'react'


function SearchBar() {

  const router = useRouter();
  const [search , useSearch] = useState(``);
  const submitHandle =()=>{
    router.push(`/shop?title=${search}`)
  }

  return (
    <div className='h-[47.7px] flex flex-row-reverse gap-2.5'>
      <Input onChange={(e)=>{useSearch(e.target.value)}} className='h-full rounded-[15.91px] border-[1.33px] border-[#737373] text-lg text-white hover:border-[#F97316] active:border-[#F97316]' placeholder='جست و جو' type='text'/>
      <Button onClick={submitHandle} className='h-full rounded-[15.91px] text-[16px] border-[1.33px] border-[#737373] bg-transparent hover:bg-transparent hover:border-orange-500'>
        جست جو
      </Button>
    </div>
  )
}

export default SearchBar