import React from 'react'
import Container from './Container'
import Image from 'next/image'
import BannerSample from './BannerSample'

function Banners() {
  return (
    <div>
      <Container>
        <div className='flex justify-between my-20'>
          <BannerSample title='کیف و کفش مردانه' image='/img/Men-logo.png'/>
          <BannerSample title='کیف و کفش زنانه' image='/img/Women-logo.png'/>
        </div>
      </Container>
    </div>
  )
}

export default Banners