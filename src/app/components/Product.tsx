import Image from 'next/image'
import Classification from '../../../public/svgs/Products/Classification'
import { IProduct } from './Interfaces'



function Product({image_src,title,pclass,price,discount}: IProduct) {

  function discountHandler(totalPrice :number , discount : number){

    let discountPercent = Number(discount) || 0;
    let discountMount = Number(totalPrice) * (discountPercent/100);
    let finalPrice = Number(totalPrice) - discountMount;

    return finalPrice
  }

  return (
    <div className=' bg-white border-[1.33px] border-white rounded-[24px] p-[21px] hover:border-[1.33px] hover:border-orange-500 hover:transition hover:duration-150'>
      <div className='w-[359px] h-[302.86px] rounded-[16.66px] mb-[23.13]'>
        <Image
          src={`/img/products/${image_src}`}
          alt='Product Image'
          width={359}
          height={302.87}
        />
      </div>
      <div>
        <p className='font-sahel-semiBold text-[24px] text-[#404040] mb-[24px]'>
          {title}
        </p>
        <div className='flex mb-[29.5px] flex-row justify-start'>
          <div className='ml-[7.02px] text-[22px] flex items-center justify-center '>
            <Classification/>
          </div>
          <div className='flex justify-start'>
            <p className='font-sahel-regular text-[#737373] text-[22px]'>
              {pclass}
            </p>
          </div>
        </div>
        <div className=' flex justify-start '>
          <div className='text-[24px] font-sahel-regular text-[#404040] flex flex-col-reverse'>
            {
              discount?
              <div className='flex flex-col-reverse'>
                <div className='flex flex-row-reverse gap-2'>
                  <span>
                    تومان
                  </span>
                  <span>
                    {
                      discountHandler(Number(price),Number(discount)).toLocaleString()
                    }
                  </span>
                </div>
                <span className='line-through text-gray-400'>
                  {
                    price?.toLocaleString()
                  }
                </span>
              </div>
              :
              <div className='space-x-2 h-[72px] flex items-end'>
                <span>
                  {
                    price?.toLocaleString()
                  }
                </span>
                <span>
                  تومان
                </span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product