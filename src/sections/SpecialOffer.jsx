import Button from "../components/Button"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-6 info-text lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with un beatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text lg:max-w-lg'>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex mt-10 flex-wrap gap-4">
          <div>
            <Button label="Shop Now" iconURL={arrowRight}/>
          </div>
          <div>
            <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer