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
      <Button onClick={submitHandle} className=' rounded-[15.91px] bg-orange-500'>
        <Icon style={{ fontSize: '28px' }} className='bg-amber-100' icon="oui:ws-search" height="47.7" width="8.7"/>
      </Button>
    </div>
  )
}

export default SearchBar