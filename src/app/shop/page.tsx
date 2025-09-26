import React from 'react'
import Product from '../components/Product'
import Container from '../components/Container'
import Link from 'next/link'
import { IProduct } from '../components/Interfaces'


async function Shop() {

  const result = await fetch('http://localhost:4000/produts')
  const PInfo = await result.json()

  return (
    <Container>
      <div className='grid grid-cols-4 bg-[#FAFAFA] shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.1)] p-[20px] my-[54px] gap-[24px] rounded-[24px]' >
        {PInfo.map((product : IProduct) => (
          <Link key={product.id} href={`/shop/${product.id}`} >
            <Product title={product.title} image_src={product.image_src} pclass={product.pclass} price={product.price}/>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Shop