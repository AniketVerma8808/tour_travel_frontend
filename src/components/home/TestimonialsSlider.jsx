import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dummyReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Lucknow",
    rating: 5,
    review:
      "Outstanding service! The Innova Crysta was spotless, driver was extremely polite and our Varanasi trip became memorable. Highly recommended.",
  },
  {
    id: 2,
    name: "Priya Singh",
    city: "Delhi",
    rating: 5,
    review:
      "Very comfortable journey with excellent customer support. Booking process was smooth and vehicle arrived exactly on time.",
  },
  {
    id: 3,
    name: "Amit Verma",
    city: "Prayagraj",
    rating: 5,
    review:
      "Professional driver, clean vehicle and transparent pricing. Definitely booking again for our next family tour.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    city: "Kanpur",
    rating: 5,
    review:
      "Amazing experience. Vehicle condition was excellent and the entire journey felt luxurious.",
  },
  {
    id: 5,
    name: "Rohit Mishra",
    city: "Ayodhya",
    rating: 5,
    review:
      "Best travel company I have used recently. Everything was managed perfectly.",
  },
];

const TestimonialsSlider = ({
  reviews = dummyReviews,
}) => {
  return (
    <section className="section-padding bg-[#080808] relative overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="section-subtitle">

            Testimonials

          </span>

          <h2 className="section-title mt-4">

            What Our

            <span className="gradient-text block">

              Travelers Say

            </span>

          </h2>

          <p className="mt-6 max-w-2xl mx-auto">

            Discover genuine experiences shared by our
            happy travelers. Every review reflects our
            commitment to providing premium, comfortable
            and memorable journeys.

          </p>

        </motion.div>

        {/* Slider */}

        <div className="mt-16">

          <Swiper

            modules={[
              Pagination,
              Navigation,
              Autoplay,
            ]}

            spaceBetween={30}

            loop={true}

            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}

            navigation

            pagination={{
              clickable: true,
            }}

            breakpoints={{

              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },

            }}

          >

            {reviews.map((review) => (

              <SwiperSlide key={review.id}>

                <motion.div

                  whileHover={{
                    y: -10,
                  }}

                  transition={{
                    duration: .35,
                  }}

                  className="glass-card p-8 relative overflow-hidden group h-full flex flex-col"
                >

                  {/* Quote */}

                  <Quote
                    size={60}
                    className="absolute right-6 top-6 text-[#C9A227]/10 group-hover:rotate-12 transition duration-500"
                  />

                  {/* Rating */}

                  <div className="flex items-center justify-between">

                    <div className="flex gap-1">

                      {Array.from({
                        length: review.rating,
                      }).map((_, i) => (

                        <Star
                          key={i}
                          size={18}
                          fill="#E8C766"
                          className="text-[#E8C766]"
                        />

                      ))}

                    </div>

                    <div className="glass-card px-3 py-1 flex items-center gap-2">

                      <BadgeCheck
                        size={15}
                        className="text-[#E8C766]"
                      />

                      <span className="text-xs text-[#E8C766] font-semibold">

                        Verified

                      </span>

                    </div>

                  </div>

                  {/* Review */}

                  <p className="mt-7 leading-8 text-[15px] text-zinc-300 flex-1">

                    "{review.review}"

                  </p>

                  {/* User */}

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div
                        className="
                        w-14
                        h-14
                        rounded-full
                        bg-gradient-to-br
                        from-[#9F7D16]
                        via-[#E8C766]
                        to-[#FFF2B3]
                        flex
                        items-center
                        justify-center
                        text-black
                        text-xl
                        font-bold"
                      >
                        {review.name.charAt(0)}
                      </div>

                      <div>

                        <h3 className="text-lg font-semibold">

                          {review.name}

                        </h3>

                        <div className="flex items-center gap-2 mt-1 text-sm text-zinc-400">

                          <MapPin
                            size={14}
                            className="text-[#C9A227]"
                          />

                          <span>

                            {review.city}

                          </span>

                        </div>

                      </div>

                    </div>

                    <div
                      className="
                      hidden
                      lg:flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-full
                      bg-[#C9A227]/10"
                    >

                      <Quote
                        size={22}
                        className="text-[#E8C766]"
                      />

                    </div>

                  </div>

                  {/* Bottom Hover Line */}

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-gradient-to-r
                    from-[#9F7D16]
                    via-[#E8C766]
                    to-[#FFF2B3]
                    group-hover:w-full
                    transition-all
                    duration-500"
                  />

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

        {/* Bottom Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .25,
          }}
          className="text-center mt-16"
        >

          <a
            href="/reviews"
            className="btn-primary inline-flex items-center gap-3"
          >

            View All Reviews

          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default TestimonialsSlider;