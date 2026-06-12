import { ArrowRight, PhoneCall } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="section-padding bg-[#111111]">

      <div className="container-custom">

        <div className="glass-card p-10 lg:p-16 text-center">

          <h2 className="section-title">
            Ready To Travel
            <span className="gradient-text block">
              In Comfort & Luxury?
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto">
            Book your Innova Crysta today for
            airport transfers, local sightseeing
            and outstation tours.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">

            <button className="btn-primary">
              Book Now
              <ArrowRight size={18} />
            </button>

            <button className="btn-outline flex items-center gap-2">
              <PhoneCall size={18} />
              Call Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;