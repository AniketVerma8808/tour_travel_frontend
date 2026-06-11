import { ArrowRight, PhoneCall, Star } from "lucide-react";
import heroInnova from "../../assets/hero-innova.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden  flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroInnova})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />

      {/* Gold Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 blur-[220px]" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          {/* Premium Badge */}

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#C9A227]/20 bg-black/30 backdrop-blur-2xl  shadow-[0_0_30px_rgba(201,162,39,0.12)]">
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

          <div className="flex flex-wrap gap-8">
            <button className="btn-primary px-8 py-4">
              Book Now
              <ArrowRight size={18} />
            </button>

            <button className="btn-outline flex items-center gap-2 px-8 py-4 backdrop-blur-xl">
              <PhoneCall size={18} />
              Call Now
            </button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="glass-card p-5 md:p-6 text-center border border-[#C9A227]/10">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                500+
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