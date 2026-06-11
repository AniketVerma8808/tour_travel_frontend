import { ArrowRight, PhoneCall, Star } from "lucide-react";
import heroInnova from "../../assets/hero-innova.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background Image */}
     <div
  className="absolute inset-0"
  style={{
    backgroundImage: `url(${heroInnova})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
  }}
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="container-custom relative z-20">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Star size={14} className="gold-text" />
            <span className="text-sm">
              Trusted Luxury Travel Partner
            </span>
          </div>

          <h1 className="section-title">
            Premium Taxi Service
            <span className="gradient-text block">
              In Varanasi
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg">
            Airport Transfers, Kashi Darshan,
            Outstation Tours, Wedding Cars and
            Luxury Travel Experience with
            Professional Drivers.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="btn-primary">
              Book Now
              <ArrowRight size={18} />
            </button>

            <button className="btn-outline flex items-center gap-2">
              <PhoneCall size={18} />
              Call Now
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            <div>
              <h3 className="gold-text text-3xl font-bold">500+</h3>
              <p>Trips</p>
            </div>

            <div>
              <h3 className="gold-text text-3xl font-bold">50+</h3>
              <p>Vehicles</p>
            </div>

            <div>
              <h3 className="gold-text text-3xl font-bold">24/7</h3>
              <p>Support</p>
            </div>

            <div>
              <h3 className="gold-text text-3xl font-bold">5★</h3>
              <p>Rating</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;