import { motion } from "framer-motion";

const vehicles = [
  {
    name: "Innova Crysta",
    seats: "7 Seats",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
  },
  {
    name: "Toyota Etios",
    seats: "4 Seats",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200",
  },
  {
    name: "Swift Dzire",
    seats: "4 Seats",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200",
  },
];

const FeaturedFleet = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-subtitle">
            Our Fleet
          </p>

          <h2 className="section-title">
            Featured Vehicles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {vehicles.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl mb-2">
                  {car.name}
                </h3>

                <p>{car.seats}</p>

                <button className="btn-primary mt-6 w-full">
                  Book Now 
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFleet;