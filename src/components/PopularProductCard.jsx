
import { star } from "../assets/icons"
import { motion } from "framer-motion"

const PopularProductCard = ({ imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full"> 
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      </motion.div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-medium font-montserrat leading-normal text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="font-montserrat mt-2 font-semibold text-2xl leading-normal">NIKE {name}</h3>
      <p className="font-montserrat text-xl mt-1 font-semibold text-coral-red leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard