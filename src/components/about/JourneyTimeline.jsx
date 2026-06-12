const stats = [
  {
    number: "500+",
    title: "Successful Trips",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "5★",
    title: "Customer Rating",
  },
  {
    number: "100%",
    title: "Customer Satisfaction",
  },
];



const JourneyTimeline = () => {
  return (
     <section className="section-padding bg-[#080808]">

      <div className="container-custom">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center"
            >
              <h3 className="gradient-text text-5xl font-bold">
                {item.number}
              </h3>

              <p className="mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default JourneyTimeline;