import React from 'react'
import Container from './Container'
import ServiceItem from './ServiceItem'

function Services() {
  const servicesItems=[
    {
      id : 1,
      title : "تنوع بالا محصولات",
      desc : "بالاترین تنوع با هرگونه جنس و برند داخلی و خارجی",
      marginTop : 'mt-[0px]',
      isrc : "Service_6.png"
    },
    {
      id : 2,
      title : "تضمین قیمت",
      desc : "تضمین قیمت مناسب تمامی  محصولات کیف و کفش",
      marginTop : 'mt-[53px]',
      isrc : "Service_5.png"
    },
    {
      id : 3,
      title : "ارسال مستقیم از تولیدی",
      desc : "ارسال مستقیم از تولیدی، وارد کننده مستقیم کیف و کفش",
      marginTop : 'mt-[100px]',
      isrc : "Service_4.png"
    },
    {
      id : 4,
      title : "امکان تعویض سایز",
      desc : " تعویض محصول در صورت انتخاب و ارسال اشتباه سایز",
      marginTop : 'mt-[100px]',
      isrc : "Service_3.png"
    },
    {
      id : 5,
      title : "ارسال رایگان پستی",
      desc : "ارسال رایگان پستی به سراسر کشور ایران",
      marginTop : 'mt-[53px]',
      isrc : "Service_2.png"
    },
    {
      id : 6,
      title : "پشتیبانی قوی",
      desc : "پشتیبانی قوی و پاسخگویی سریع 24 ساعته در 7 روز هفته",
      marginTop : 'mt-[0px]',
      isrc : "Service_1.png"
    }
    ]
  return (
    <Container>
      <div className=' w-full h-[318.14300537109375px] my-[54px] flex justify-between'>
        {
          servicesItems.map((items)=>(
              <ServiceItem key={items.id} marginTop={items.marginTop} title={items.title} desc={items.desc} isrc={items.isrc}/>
          ))
        }
      </div>
    </Container>
  )
}

export default Services