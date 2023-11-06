import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Best Sellers</span></h2>
        <p className="min-w-full lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg font-medium">
          Indulge in our sought-after selections to enjoy top-notch quality and style, offering a world of comfort, exceptional design, and great value.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts