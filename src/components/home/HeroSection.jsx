import { ArrowRight, PhoneCall, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { getAllBannersService } from "../../services/banner.service";

const HeroSection = ({ onBookNow }) => {
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await getAllBannersService();
        // console.log("first", res.data.data)
        const banners = res.data?.data || [];
        setHeroImages(banners);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.length > 0 && (
          <Swiper
            key={heroImages.length}
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            loop
            navigation={{
              prevEl: ".hero-prev",
              nextEl: ".hero-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={1200}
            className="h-full w-full"
          >
            {heroImages.map((banner) => (
              <SwiperSlide key={banner._id}>
                <div
                  className="w-full h-screen bg-cover bg-center hero-image"
                  style={{
                    backgroundImage: `url(${banner.image})`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Gold Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[220px]" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Left Arrow */}
      <button
        className="hidden md:flex hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
  w-12 h-12 md:w-14 md:h-14 rounded-full
  bg-black/40 backdrop-blur-md
  border border-white/20
  text-white
  hover:bg-[#C9A227]
  hover:text-black
  hover:border-[#C9A227]
  transition-all duration-300
  flex items-center justify-center"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        className="hidden md:flex  hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
  w-12 h-12 md:w-14 md:h-14 rounded-full
  bg-black/40 backdrop-blur-md
  border border-white/20
  text-white
  hover:bg-[#C9A227]
  hover:text-black
  hover:border-[#C9A227]
  transition-all duration-300
  flex items-center justify-center"
      >
        <ChevronRight size={28} />
      </button>

      <div className="container-custom relative z-20">

        <div className="max-w-3xl text-center md:text-left">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-full border border-[#C9A227]/20 bg-black/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(201,162,39,0.12)]">
            <Star
              size={14}
              className="text-[#C9A227] fill-[#C9A227]"
            />

            <span className="text-sm tracking-wider text-zinc-200">
              Trusted Luxury Travel Partner
            </span>
          </div>

          {/* Heading */}

          <h1 className="section-title">
            Premium Taxi Service
            <span className="gradient-text block ">
              In Varanasi
            </span>
          </h1>

          {/* Description */}

          <p className="py-6 max-w-xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            Airport Transfers, Kashi Darshan, Outstation Tours,
            Wedding Cars and Luxury Travel Experience with
            Professional Drivers.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <button
              onClick={onBookNow}
              className="btn-primary px-8 py-4"
            >
              Book Now
              <ArrowRight size={18} />
            </button>

            <a
              href="tel:+919695957772"
              className="btn-outline flex items-center gap-2 px-8 py-4 backdrop-blur-xl"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="glass-card p-5 md:p-6 text-center border border-[#C9A227]/10">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                1000+
              </h3>

              <p className="text-zinc-300 text-sm mt-2 tracking-wide">
                Successful Trips
              </p>
            </div>

            <div className="glass-card p-5 md:p-6 text-center border border-[#C9A227]/10">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                50+
              </h3>

              <p className="text-zinc-300 text-sm mt-2 tracking-wide">
                Premium Vehicles
              </p>
            </div>

            <div className="glass-card p-5 md:p-6 text-center border border-[#C9A227]/10">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                24/7
              </h3>

              <p className="text-zinc-300 text-sm mt-2 tracking-wide">
                Customer Support
              </p>
            </div>

            <div className="glass-card p-5 md:p-6 text-center border border-[#C9A227]/10">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                5★
              </h3>

              <p className="text-zinc-300 text-sm mt-2 tracking-wide">
                Top Rated Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;