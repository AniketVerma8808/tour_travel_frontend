const JourneyTimeline = () => {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-custom text-center">
        <span className="section-subtitle">
          Our Journey
        </span>

        <h2 className="section-title mt-4">
          Building Trust
          <span className="gradient-text block">
            One Ride At A Time
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="glass-card p-8">
            <h3 className="gold-text text-4xl">
              2020
            </h3>
            <p className="mt-3">
              Started local travel services.
            </p>
          </div>

          <div className="glass-card p-8">
            <h3 className="gold-text text-4xl">
              2023
            </h3>
            <p className="mt-3">
              Expanded outstation services.
            </p>
          </div>

          <div className="glass-card p-8">
            <h3 className="gold-text text-4xl">
              Today
            </h3>
            <p className="mt-3">
              Trusted by hundreds of travelers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;