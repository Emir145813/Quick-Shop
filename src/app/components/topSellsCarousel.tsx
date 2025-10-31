import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Product from './Product'
import { ICarousel, IProduct, Iprops } from './Interfaces'
import Link from 'next/link'


async function TopCellsCarousel() {

  const result = await fetch('http://localhost:4000/produts')
  const PInfo = await result.json()

  return (
    <div className='relative'>
      <Carousel 
      opts={{
        align: "start",
        loop : false
      }}
      orientation="horizontal"
      className="w-full"
      style={{direction: "ltr"}}
      >
        <CarouselContent className="-ml-1">
          {PInfo.map((product : IProduct) => (
            <div key={product.id} className="px-[5px] md:basis-1/2 lg:basis-1/3 flex justify-end">
              <Link href={`shop/${product.id}`}>
                <Product title={product.title} image_src={product.image_src} pclass={product.pclass} price={product.price}/>
              </Link>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious className='w-[33px] h-[33px] rounded-[8px] bg-orange-500 flex justify-center items-center border-2 border-orange-500 hover:bg-orange-600'/>
        <CarouselNext className='w-[33px] h-[33px] rounded-[8px] bg-orange-500 flex justify-center items-center border-2 border-orange-500 hover:bg-orange-600'/>
      </Carousel>
    </div>
  )
}

export default TopCellsCarousel