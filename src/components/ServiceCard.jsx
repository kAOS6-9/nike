import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-bold font-montserrat text-3xl">
        {label}
      </h3>
      <p className="mt-2 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  )
}

export default ServiceCard