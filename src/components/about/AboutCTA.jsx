import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="section-padding bg-[#111111]">
      <div className="container-custom">
        <div className="glass-card p-10 lg:p-16 text-center">
          <h2 className="section-title">
            Ready For Your Next Journey?
          </h2>

          <p className="mt-5 max-w-2xl mx-auto">
            Book your ride today and enjoy a
            comfortable travel experience.
          </p>

          <button className="btn-primary mt-8">
            Book Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;