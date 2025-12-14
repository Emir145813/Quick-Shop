import Product from '../components/Product'
import Container from '../components/Container'
import Link from 'next/link'
import { IProduct, Iprops, ISearchParams } from '../components/Interfaces'
import { productModel } from '@/lib/modals/produtsModel'
import connectDB from '@/lib/db/db'




async function Shop() {

  await connectDB();
  const PInfo : IProduct[] = JSON.parse(
    JSON.stringify((await productModel.find()))
  )

  return (
    <Container>
      <div className='grid grid-cols-4 bg-[#FAFAFA] p-[20px] my-[54px] gap-[24px] rounded-[24px]' >
        {PInfo && PInfo.map((product : IProduct) => (
          <Link key={product.pid} href={`/shop/${product.pid}`} >
            <Product title={product.title} image_src={product.image_src} pclass={product.pclass} price={product.price} discount={product.discount}/>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Shop