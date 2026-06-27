import {
  Star,
  Quote,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import { useReview } from "../../context/ReviewContext";

const ReviewsGrid = () => {
    const { reviews, loading } = useReview();

  return (
    <section className="section-padding relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-subtitle">
            Trusted By Travelers
          </span>

          <h2 className="section-title mt-4">
            Luxury Travel
            <span className="gradient-text block">
              Experiences
            </span>
          </h2>

          <p className="mt-6 text-[#c3c3c3]">
            Hundreds of travelers trust Saroj Kashi Travels for comfortable and premium journeys.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -14,
                scale: 1.02,
                boxShadow: "0 0 30px rgba(201,162,39,0.12)",
              }}
              className={`
                glass-card
                review-card
                p-8
                cursor-pointer
                relative
                overflow-hidden
                ${
                  review.rating === 5
                    ? "review-card-5"
                    : ""
                }
              `}
            >

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={55} />
              </div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center"
              >
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#C9A227"
                      className="text-[#C9A227]"
                    />
                  ))}
                </div>

                {review.rating === 5 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="review-badge px-3 py-1 rounded-full text-xs flex items-center gap-1"
                  >
                    <BadgeCheck size={14} />
                    Premium
                  </motion.div>
                )}
              </motion.div>

              {/* Review text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 leading-relaxed text-[15px] text-[#c3c3c3]"
              >
                "{review.review}"
              </motion.p>

              {/* User info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
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
              </motion.div>

              {/* Bottom rating bar animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${review.rating * 20}%` }}
                transition={{ duration: 0.8 }}
                className="review-bottom-line absolute bottom-0 left-0"
              />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ReviewsGrid;