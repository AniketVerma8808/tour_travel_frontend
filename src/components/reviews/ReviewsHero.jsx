import { Star, Quote } from "lucide-react";
import heroInnova from "../../assets/hero-innova.webp";

const ReviewsHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroInnova})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 hero-overlay" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <span className="section-subtitle">
            Customer Experiences
          </span>

          <h1 className="section-title mt-4">
            Trusted By
            <span className="gradient-text block">
              Happy Travelers
            </span>
          </h1>

          <p className="max-w-2xl mt-6 text-lg">
            Discover what our customers say about
            airport transfers, Kashi Darshan tours,
            outstation journeys and premium travel
            experiences.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="glass-card p-5 text-center">
              <h3 className="gradient-text text-3xl">
                4.9★
              </h3>
              <p>Average Rating</p>
            </div>

            <div className="glass-card p-5 text-center">
              <h3 className="gradient-text text-3xl">
                500+
              </h3>
              <p>Trips Completed</p>
            </div>

            <div className="glass-card p-5 text-center">
              <h3 className="gradient-text text-3xl">
                120+
              </h3>
              <p>Reviews</p>
            </div>

            <div className="glass-card p-5 text-center">
              <h3 className="gradient-text text-3xl">
                24/7
              </h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        {/* Floating Review Card */}

        <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 w-80">
          <div className="glass-card p-6">
            <Quote className="text-[#C9A227]" />

            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#C9A227"
                  className="text-[#C9A227]"
                />
              ))}
            </div>

            <p className="mt-4">
              Excellent service. Clean vehicle,
              professional driver and smooth
              experience throughout the trip.
            </p>

            <div className="mt-5 border-t border-white/10 pt-4">
              <h4>Rahul Sharma</h4>
              <p className="text-sm">
                Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsHero;