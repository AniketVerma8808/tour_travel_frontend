const ContactMap = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-subtitle">
            Our Location
          </span>

          <h2 className="section-title mt-4">
            Find Us On
            <span className="gradient-text block">
              Google Maps
            </span>
          </h2>

          <p className="mt-5">
            Visit us in Varanasi and begin your
            comfortable journey with Saroj Kashi
            Travels.
          </p>
        </div>

        <div className="glass-card overflow-hidden p-2">
          <iframe
            title="Saroj Kashi Travels Location"
            src="https://maps.google.com/maps?q=Varanasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;