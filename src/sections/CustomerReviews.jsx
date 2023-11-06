import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-montserrat text-center text-4xl font-semibold">What Our<span className="text-coral-red"> Customers</span> Say?</h3>
      <p className="info-text text-center mt-4 max-w-lg m-auto">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews