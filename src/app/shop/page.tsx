import React from 'react'
import Product from '../components/Product'
import Container from '../components/Container'

function Shop() {
  return (
    <Container>
      <div className='grid grid-cols-4 bg-[#FAFAFA] p-[20px] gap-[24px] rounded-[24px]' >
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </Container>
  )
}

export default Shop