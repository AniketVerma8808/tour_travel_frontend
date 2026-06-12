import {
  Star,
  Quote,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";


const ReviewsGrid = ({ reviews }) => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-subtitle">
            Trusted By Travelers
          </span>

          <h2 className="section-title mt-4">
            Luxury Travel
            <span className="gradient-text block">
              Experiences
            </span>
          </h2>

          <p className="mt-6">
            Hundreds of travelers trust Saroj
            Kashi Travels for comfortable and
            premium journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className={`
                glass-card
                review-card
                p-8
                ${
                  review.rating === 5
                    ? "review-card-5"
                    : ""
                }
              `}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={55} />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#C9A227"
                        className="text-[#C9A227]"
                      />
                    )
                  )}
                </div>

                {review.rating === 5 && (
                  <div className="review-badge px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <BadgeCheck size={14} />
                    Premium
                  </div>
                )}
              </div>

              <p className="mt-6 leading-relaxed text-[15px]">
                "{review.review}"
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xl">
                  {review.name}
                </h4>

                <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
                  <MapPin
                    size={14}
                    className="text-[#C9A227]"
                  />
                  {review.city}
                </div>
              </div>

              <div
                className="review-bottom-line absolute bottom-0 left-0"
                style={{
                  width: `${review.rating * 20}%`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsGrid;