import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id='contact-us' className='max-container flex flex-col justify-center items-center max-lg:flex-col gap-10'>
      <h3 className='text-4xl leading-[68px] text-center font-montserrat font-semibold'>Sign Up for <span className='text-coral-red'>Updates</span> & <span className='text-coral-red'>Newsletter</span></h3>
      <div className='lg:max-w-[60%] w-full flex items-center max-sm:flex-col gap-5 max-sm:justify-end max-sm:w-full p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input
          type="text"
          placeholder='subscribe@nike.com'
          className='input'
        />
        <div>
          <Button label="Sign up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe