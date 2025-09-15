import React from 'react'
import Container from './Container'
import FooterClassesTitle from './FooterClassesTitle'
import Image from 'next/image'

function Footer() {

  const class_1 =[
    {
      id : 1,
      link : "انواع کیف"
    },
    {
      id : 2,
      link : "انواع کفش"
    },
    {
      id : 3,
      link : "پیگیری سفارش"
    },
    {
      id : 4,
      link : "خواندنی ها"
    }
  ]
  const class_2 =[
    {
      id : 1,
      link : "درباره ما"
    },
    {
      id : 2,
      link : "تماس با ما"
    },
    {
      id : 3,
      link : "سوالات متداول"
    },
  ]
  const class_3 =[
    {
      id : 1,
      link : "02143564 - 02142142"
    },
    {
      id : 2,
      link : "Quickshop@gmail.com"
    },
    {
      id : 3,
      link : "مشهد، خیابان امام رضا (ع)، بین امام رضا 24 و 26"
    }
  ]
  return (
    <div className='h-[429px] bg-amber-400'>
      <Container>
        <div className='bg-[#404040] rounded-3xl h-[314px] justify-between flex px-[28px]'>
          <div className='w-[231px] h-full flex justify-center items-center'>
            <div className='w-[179.1962890625px] h-[128.9998779296875px]'>
              <Image
                src="/img/Footer/ShopLogo.png"
                alt='Logo Image'
                width={179.1962890625}
                height={128.9998779296875}

              />
            </div>
          </div>
          <div className='w-[930px] flex justify-start gap-[62px]'>
            <div className='w-[223px] h-full'>
              <div className='my-[40px]'>
                <FooterClassesTitle title={"صفحه اصلی"}/>
                <ul className='text-[21px] font-sahel-regular text-white leading-[47.16px]'>
                  {
                    class_1.map((item)=>(
                      <li key={item.id}>
                        {item.link}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='w-[221px] h-full'>
              <div className='my-[40px]'>
                <FooterClassesTitle title={"لینک های مفید"}/>
                <ul className='text-[21px] font-sahel-regular text-white leading-[47.16px]'>
                  {
                    class_2.map((item)=>(
                      <li key={item.id}>
                        {item.link}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='w-[335px]'>
              <div className='my-[40px]'>
                <FooterClassesTitle title={"راه های ارتباطی"}/>
                <ul className='text-[21px] font-sahel-regular text-white leading-[47.16px]'>
                  {
                    class_3.map((item)=>(
                      <li className='w-[251px]' key={item.id}>
                        {item.link}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className='w-[444px] h-full pt-[28px]'>
            <Image
              src="/img/Footer/image.jpg"
              width={444}
              height={246}
              alt='map'
              className='rounded-3xl'
            />
          </div>  
        </div>
      </Container>
    </div>
  )
}

export default Footer