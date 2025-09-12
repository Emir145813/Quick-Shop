import React from 'react'
import Container from './Container'
import ServiceItem from './ServiceItem'

function Services() {
  const servicesItems=[
    {
      id : 1,
      title : "تنوع بالا محصولات",
      desc : "بالاترین تنوع با هرگونه جنس و برند داخلی و خارجی",
      marginTop : 0
    },
    {
      id : 2,
      title : "تضمین قیمت",
      desc : "تضمین قیمت مناسب تمامی  محصولات کیف و کفش",
      marginTop : 50
    },
    {
      id : 3,
      title : "ارسال مستقیم از تولیدی",
      desc : "ارسال مستقیم از تولیدی، وارد کننده مستقیم کیف و کفش",
      marginTop : 100
    },
    {
      id : 4,
      title : "امکان تعویض سایز",
      desc : " تعویض محصول در صورت انتخاب و ارسال اشتباه سایز",
      marginTop : 100
    },
    {
      id : 5,
      title : "ارسال رایگان پستی",
      desc : "ارسال رایگان پستی به سراسر کشور ایران",
      marginTop : 50
    },
    {
      id : 6,
      title : "پشتیبانی قوی",
      desc : "پشتیبانی قوی و پاسخگویی سریع 24 ساعته در 7 روز هفته",
      marginTop : 0
    }
    ]
  return (
    <Container>
      <div className='bg-amber-600 w-full h-[318.14300537109375px] my-[54px] flex gap-[62px] '>
        {
          servicesItems.map((items)=>(
              <ServiceItem key={items.id} marginTop={items.marginTop} title={items.title} desc={items.desc}/>
          ))
        }
      </div>
    </Container>
  )
}

export default Services