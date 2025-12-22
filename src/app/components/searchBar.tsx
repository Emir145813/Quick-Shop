"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useState } from 'react'


function SearchBar() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const [search , useSearch] = useState(``);

  
  const submitHandle =()=>{

    const currentParam = new URLSearchParams(searchParams.toString());
    currentParam.set("title", search);
    router.push(`/shop?${currentParam.toString()}`)
  }

  return (
    <div className='h-[47.7px] flex flex-row-reverse gap-2.5'>
      <Input onChange={(e)=>{useSearch(e.target.value)}} className='h-full rounded-[15.91px] border-[1.33px] border-[#737373] text-lg text-white hover:border-[#F97316] active:border-[#F97316] placeholder:text-white' placeholder='جستجو محصول' type='text'/>
      <Button onClick={submitHandle} className=' rounded-[15.91px] bg-transparent border-[1.33px] border-[#737373] h-[47.7px] w-[47.7px] flex justify-center items-center hover:bg-transparent hover:border-orange-500'>
        <Icon style={{ fontSize: '47.7px' , height : "30.7px", width: "30.7" }} icon="solar:card-search-line-duotone"/>
      </Button>
      
    </div>
  )
}

export default SearchBar