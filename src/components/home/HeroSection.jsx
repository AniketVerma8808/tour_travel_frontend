import { ArrowRight, PhoneCall, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 border border-white/10 glass-card px-4 py-2 rounded-full mb-8">
            <Star size={16} className="text-[#D4AF37]" />
            <span className="text-sm text-white">Trusted Travel Partner</span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Travel
            <span className="gradient-text"> Beyond </span>
            Boundaries
          </h1>

          {/* Sub Heading */}

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            Experience comfortable, safe and premium journeys with Saroj Kashi
            Travels. From airport transfers to spiritual tours and family trips,
            every ride is designed with luxury and reliability in mind.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Book Your Journey
              <ArrowRight size={18} />
            </button>

            <button className="btn-outline flex items-center justify-center gap-2">
              <PhoneCall size={18} />
              Call Now
            </button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold gold-text">500+</h3>
              <p>Successful Trips</p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold gold-text">98%</h3>
              <p>Happy Travelers</p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold gold-text">24/7</h3>
              <p>Customer Support</p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold gold-text">5★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center">
        <span className="text-xs tracking-[4px] uppercase text-zinc-400">
          Scroll
        </span>

        <div className="w-[1px] h-14 bg-[#D4AF37] mt-3 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
