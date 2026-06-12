const AboutStory = () => {
  return (
    <section className="section-padding bg-[#0d0d0d]">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="section-subtitle">
              Our Story
            </span>

            <h2 className="section-title mt-4">
              More Than Just
              <span className="gradient-text block">
                A Taxi Service
              </span>
            </h2>
          </div>

          <div>
            <p>
              Saroj Kashi Travels was founded with
              a simple mission — to provide safe,
              comfortable and premium transportation
              services for travelers visiting Varanasi
              and nearby destinations.
            </p>

            <p className="mt-5">
              Whether it's airport pickup, Kashi
              Vishwanath Darshan, family tours or
              outstation travel, we ensure every
              journey is smooth, reliable and
              memorable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;