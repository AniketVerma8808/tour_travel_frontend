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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7100042465895!2d82.971734!3d25.280338999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzQ5LjIiTiA4MsKwNTgnMTguMiJF!5e0!3m2!1sen!2sin!4v1782385194353!5m2!1sen!2sin"
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