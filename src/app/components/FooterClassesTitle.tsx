import React from 'react'

interface IFooterClassTitle{
  title : string
}

function FooterClassesTitle({title} : IFooterClassTitle) {
  return (
    <div className='text-[24px] font-sahel-semiBold text-white'>
      <div className='flex items-center'>
        <div className='h-full ml-[6.93px]'>
          <div className='w-[36.0644416809082px] h-[4.106670379638672px] bg-gradient-to-r from-orange-400 to-orange-500 mt-2'>
          </div>
        </div>
        <div>
          {title}
        </div>
      </div>
    </div>
  )
}

export default FooterClassesTitle