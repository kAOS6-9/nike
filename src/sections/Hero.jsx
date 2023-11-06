import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
import { motion } from "framer-motion"

//border-2 border-red-600 p-2

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className="text-xl font-montserrat font-medium text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrivals:</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> kAOS
        </h1>
        <p className="font-medium font-montserrat text-slate-gray text-lg leading-7 mt-5 mb-8 sm:max-w-md">
          Discover stylish nike arrivals, quality comfort and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-montserrat font-semibold">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <img src={bigShoeImg} alt="Big Shoe" width={610} height={500} className="object-contain relative z-10"/>
        </motion.div>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                shoe={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe)
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero