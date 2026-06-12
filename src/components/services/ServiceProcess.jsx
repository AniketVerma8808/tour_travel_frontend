const process = [
  {
    step: "01",
    title: "Book Your Ride",
  },
  {
    step: "02",
    title: "Confirm Details",
  },
  {
    step: "03",
    title: "Enjoy Journey",
  },
];

const ServiceProcess = () => {
  return (
    <section className="section-padding bg-[#080808]">

      <div className="container-custom">

        <div className="text-center">

          <span className="section-subtitle">
            Simple Process
          </span>

          <h2 className="section-title mt-4">
            Travel In
            <span className="gradient-text block">
              Three Easy Steps
            </span>
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {process.map((item) => (
            <div
              key={item.step}
              className="glass-card p-8 text-center"
            >
              <h3 className="gradient-text text-6xl">
                {item.step}
              </h3>

              <h4 className="text-2xl mt-5">
                {item.title}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServiceProcess;