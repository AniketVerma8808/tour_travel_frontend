import heroInnova from "../../assets/hero-innova.webp";

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroInnova})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 hero-overlay" />

      <div className="container-custom relative z-10 text-center">
        <span className="section-subtitle">
          About Saroj Kashi Travels
        </span>

        <h1 className="section-title mt-5">
          Premium Travel Experience
          <span className="gradient-text block">
            Across Varanasi
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg">
          We provide reliable Innova Crysta travel
          services for airport transfers, local
          sightseeing, family trips and outstation
          journeys with comfort, safety and
          professionalism.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;