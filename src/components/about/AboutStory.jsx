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
              Serving Travelers
              <span className="gradient-text block">
                With Excellence
              </span>
            </h2>
          </div>

          <div>
            <p>
              Our mission is simple — provide safe,
              comfortable and dependable travel
              experiences for families, tourists and
              business travelers.
            </p>

            <p className="mt-5">
              Through professional service,
              transparent pricing and customer-first
              approach, we have built trust among
              travelers across Varanasi and nearby
              destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;