import Container from './Container'
import TopCellsCarousel from './topSellsCarousel'
import Image from 'next/image'
import { Icon } from "@iconify/react";
import Link from 'next/link';

function TopSells() {
  return (
    <div className='py-[28px] my-20'>
      <Container>
        <div className=' flex justify-between items-center mb-6'>
          <div className='flex justify-center items-center'>
            <div className='bg-gradient-to-r from-orange-400 to-orange-500 w-[36px] h-[7px] ml-[20px]'></div>
            <h1 className='font-sahel-semiBold text-[32px] text-[#404040]'>
              تخفیفات ویژه
            </h1>
          </div>
          <div className='flex justify-center items-center'>
            <Link href="/shop"
            className='font-sahel-regular text-[24px] text-[#404040]'>
              مشاهده همه
            </Link>
            <Link href="/shop" className='w-[33px] h-[33px] m-[7px] rounded-[8px] flex justify-center items-center bg-[#F97316]'>
              <Icon className='text-white text-2xl' icon="material-symbols:arrow-back-rounded" />
            </Link>
          </div>
        </div>
        <div className='bg-[#FAFAFA] grid grid-cols-4 rounded-3xl'>
          <div className='flex flex-col justify-start items-center px-15'>
            <div>
              <Image
                src="/img/Off.png"
                alt='Off'
                width={329}
                height={324}
              >
            </Image>
            </div>
            <div>
              <h1 className='font-sahel-semiBold text-[26px] text-center text-[#404040] w-[286.8898620605469]'>
                تخفیف ویژه ایام عید نوروز و ماه مبارک رمضان!!
              </h1>
              <p className='font-sahel-regular text-2xl text-center text-[#737373]'>
                هم عیدی بگیر هم شیک بپوش.
              </p>
            </div>
          </div>
          <div className='col-span-3 p-7'>
            <TopCellsCarousel/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopSells