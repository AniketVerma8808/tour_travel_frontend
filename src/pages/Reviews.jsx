import { useState } from "react";
import ReviewsHero from "../components/reviews/ReviewsHero";
import ReviewForm from "../components/reviews/ReviewForm";
import ReviewsGrid from "../components/reviews/ReviewsGrid";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      city: "Lucknow",
      rating: 5,
      review:
        "Excellent service. The Innova Crysta was spotless and the driver was highly professional. Our Varanasi trip was very comfortable.",
    },
    {
      id: 2,
      name: "Amit Verma",
      city: "Delhi",
      rating: 5,
      review:
        "Best travel service in Varanasi. Airport pickup was on time and the entire Kashi Darshan experience was smooth.",
    },
    {
      id: 3,
      name: "Priya Singh",
      city: "Prayagraj",
      rating: 4,
      review:
        "Clean vehicle, polite driver and reasonable pricing. Will definitely book again.",
    },
  ]);

  const addReview = (reviewData) => {
    setReviews((prev) => [
      {
        id: Date.now(),
        ...reviewData,
      },
      ...prev,
    ]);
  };

  return (
    <>
      <ReviewsHero />

      <ReviewForm addReview={addReview} />

      <ReviewsGrid reviews={reviews} />
    </>
  );
};

export default Reviews;