import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Product from './Product'
import { IProduct } from './Interfaces'
import Link from 'next/link'
import { productModel } from '@/lib/modals/produtsModel'
import connectDB from '@/lib/db/db'


async function TopCellsCarousel() {

  await connectDB();
  const PInfo : IProduct[] = JSON.parse(
    JSON.stringify(await productModel.find({discount: { $exists: true, $ne: null }}))
  ) 
  
  return (
    <div>
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
            <div key={product.id} className="px-[5px] md:basis-1/2 lg:basis-1/3">
              <Link href={`shop/${product.id}`}>
                <Product title={product.title} image_src={product.image_src} pclass={product.pclass} price={product.price} discount={product.discount}/>
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