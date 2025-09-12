import Container from '@/app/components/Container'
import React from 'react'

type Tprops={
  params:Promise<{id : number}>
  searchparams:Promise<{}>
}


async function ProductPage(props :Tprops) {

  const {id} = await props.params;
  const infoPResult = await fetch(`http://localhost:4000/produts/${id}`);
  const infoP = await infoPResult.json();
  return (
    <Container>
      <div className='bg-amber-300 h-[50vh] mt-20 rounded-3xl grid grid-cols-12' >
        <div className='col-span-3 bg-amber-600/30' >

        </div>
        <div className='col-span-6 bg-amber-950/30' >

        </div>
        <div className='col-span-3 bg-amber-600/30' >

        </div>
      </div>
    </Container>
  )
}

export default ProductPage