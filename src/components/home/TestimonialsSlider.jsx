import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Star,
  Quote,
  MapPin,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useReview } from "../../context/ReviewContext";


const TestimonialsSlider = () => {
  const { reviews, loading } = useReview();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  if (loading) {
    return (
      <section className="testimonial-section section-padding bg-[#080808]">
        <div className="container-custom py-20 text-center text-white">
          Loading reviews...
        </div>
      </section>
    );
  }

  return (
    <section className="testimonial-section section-padding relative overflow-hidden bg-[#080808]">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#C9A227]/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C9A227]/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-[200px]" />

      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="max-w-3xl"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10 px-5 py-2">

              <BadgeCheck
                size={18}
                className="text-[#E8C766]"
              />

              <span className="text-sm font-semibold text-[#E8C766]">

                Trusted by 10,000+ Happy Travelers

              </span>

            </div>

            <h2 className="mt-7 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">

              What Our{" "}

              <span className="gradient-text">

                Travelers Say

              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">

              We believe every journey should be comfortable,
              luxurious and memorable. Here's what our valued
              customers say about traveling with Saraoj Kashi Travels.

            </p>

          </motion.div>

          {/* Navigation */}

          <div className="flex items-center gap-4">

            <button
              ref={prevRef}
              aria-label="Previous Review"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/30 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#C9A227] hover:text-black"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              ref={nextRef}
              aria-label="Next Review"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/30 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#C9A227] hover:text-black"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* Slider */}

        <div
          className="mt-16"
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
            ]}
            loop
            speed={700}
            spaceBetween={24}
            watchOverflow
            autoHeight={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                prevRef.current;

              swiper.params.navigation.nextEl =
                nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >


            {reviews.map((review) => (

              <SwiperSlide
                key={review.id}
                className="!h-auto flex"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="glass-card relative flex h-full w-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 group hover:border-[#C9A227]/30 hover:shadow-[0_20px_50px_rgba(201,162,39,.12)]"
                >
                  {/* Quote */}

                  <Quote
                    size={42}
                    strokeWidth={1.5}
                    className="absolute right-5 top-5 text-[#C9A227]/10 transition-all duration-500 group-hover:rotate-12"
                  />

                  {/* Rating */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex">

                        {Array.from({
                          length: Math.min(review.rating, 5),
                        }).map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            fill="#E8C766"
                            className="text-[#E8C766]"
                          />
                        ))}

                      </div>

                      <span className="text-sm font-semibold text-white">
                        {review.rating}.0
                      </span>

                    </div>

                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      ✓ Verified Traveler
                    </span>

                  </div>

                  {/* Review */}

                  <blockquote className="mt-6 min-h-[120px] flex-1 text-[15px] leading-7 text-zinc-300">

                    “{review.review}”

                  </blockquote>

                  {/* User */}

                  <div className="mt-auto border-t border-white/10 pt-6">

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-[#9F7D16]
                          via-[#E8C766]
                          to-[#FFF2B3]
                          text-xl
                          font-bold
                          text-black
                        "
                      >
                        {review.name
                          ?.trim()
                          .split(" ")
                          .filter(Boolean)
                          .map((word) => word.charAt(0))
                          .join("")
                          .toUpperCase()}
                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-white">

                          {review.name}

                        </h3>

                        <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">

                          <MapPin
                            size={14}
                            className="text-[#C9A227]"
                          />

                          <span>{review.city}</span>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Hover Line */}

                  <div className="absolute bottom-0 left-6 right-6 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#9F7D16] via-[#E8C766] to-[#FFF2B3] transition-transform duration-500 group-hover:scale-x-100" />

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
            delay: 0.25,
          }}
          className="mt-16 text-center"
        >

          <Link
            to="/reviews"
            className="btn-primary inline-flex items-center gap-3"
          >
            View All Reviews
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default TestimonialsSlider;