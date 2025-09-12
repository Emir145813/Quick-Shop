import React from 'react'

type TItems ={
  marginTop ?: number,
  title : string,
  desc : string
}

function ServiceItem({marginTop,title,desc} : TItems) {
  return (
    <div className={`bg-amber-950` }>
      <div className={`w-[235px] h-[219.11px] bg-amber-500 mt-[${marginTop}px]`}>
        <div className='h-full w-full'>
          <div className='h-[50%] bg-amber-400 flex justify-center'>
            <div className='h-[94.14299774169922px] w-[88.60377502441406px] bg-amber-500'>
              {/* Add Image */}
            </div>
          </div>
          <div className='flex flex-col justify-between h-[50%] bg-amber-700'>
            <div className='bg-amber-300 w-full h-[34px] text-[22px] text-[#404040] font-sahel-semiBold text-center'>
              <p>
                {title}
              </p>
            </div>
            <div className='bg-amber-200 w-full h-[63px] text-[20px] font-sahel-regular text-center text-[#737373]'>
              <p>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem