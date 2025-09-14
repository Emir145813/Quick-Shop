import React from 'react'
import Product from '../components/Product'
import Container from '../components/Container'
import Link from 'next/link'

export interface IProduct {
  id ?: number ,
  title ?: string ,
  price ?: number ,
  description ?: string ,
  category ?: string ,
  image_src ?: string ,
  pclass ?: string ,
  rating ?: {
    rate ?: number ,
    count ?: number
  }
}

async function Shop() {

  const result = await fetch('http://localhost:4000/produts')
  const PInfo = await result.json()

  return (
    <Container>
      <div className='grid grid-cols-4 bg-[#FAFAFA] p-[20px] gap-[24px] rounded-[24px]' >
        {PInfo.map((product : IProduct) => (
          <Link key={product.id} href={`/shop/${product.id}`} >
            <Product title={product.title} image_src={product.image_src} pclass={product.pclass} />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Shop