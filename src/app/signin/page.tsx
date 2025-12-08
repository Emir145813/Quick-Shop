import React from 'react'
import Container from '../components/Container'
import { CredentialsInput } from '../components/CredentialsInput'


function SignIn() {
  return (
      <Container>
        <div className='flex justify-center items-center font-sahel-regular py-10'>
          <div className=' bg-gray-100 border-[1.33px] border-gray-300 rounded-3xl w-1/3 px-10 py-20'>
            <CredentialsInput/>
            <div className='flex justify-center gap-5'>
            </div>
          </div>
        </div>
      </Container>
  )
}
export default SignIn