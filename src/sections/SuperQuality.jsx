import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
import { motion } from 'framer-motion'

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <br />
          <span className="text-coral-red">Super Charged</span> Shoes
        </h2>
        <p className="mt-6 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 info-text lg:max-w-lg'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label="View More" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain'/>
        </motion.div>
      </div>
    </section>
  )
}

export default SuperQuality