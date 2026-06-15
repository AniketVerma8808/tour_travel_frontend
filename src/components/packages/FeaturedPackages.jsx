import { motion } from "framer-motion";
import { packagesData } from "./packagesData";
import PackageCard from "./PackageCard";

const FeaturedPackages = ({ filters }) => {
  const filteredPackages = packagesData.filter((pkg) => {
    const searchMatch =
      !filters.search ||
      pkg.title
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      pkg.location
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      pkg.from
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    const durationMatch =
      !filters.duration ||
      pkg.duration === filters.duration;

    const categoryMatch =
      !filters.category ||
      pkg.category === filters.category;

    const vehicleMatch =
      !filters.vehicle ||
      pkg.vehicle === filters.vehicle;

    return (
      searchMatch &&
      durationMatch &&
      categoryMatch &&
      vehicleMatch
    );
  });

  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="section-subtitle">
            Premium Tour Packages
          </span>

          <h2 className="section-title mt-3">
            Available
            <span className="gradient-text">
              {" "}Packages
            </span>
          </h2>

          <p className="mt-5">
            Explore carefully curated spiritual,
            heritage, family and luxury travel
            experiences with premium vehicles
            and exceptional comfort.
          </p>

          <div className="mt-6 inline-flex items-center px-5 py-2 rounded-full gold-border">
            <span className="gold-text font-medium">
              {filteredPackages.length}
            </span>

            <span className="ml-2 text-sm text-[#c3c3c3]">
              Packages Found
            </span>
          </div>
        </motion.div>

        {/* No Results */}

        {filteredPackages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-10 md:p-14 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading">
              No Packages Found
            </h3>

            <p className="mt-4 max-w-xl mx-auto">
              We couldn't find any package
              matching your filters.
              Try changing destination,
              category, duration or vehicle.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPackages;