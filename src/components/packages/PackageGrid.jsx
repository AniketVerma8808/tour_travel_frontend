import React from "react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const PackageGrid = ({
  packages = [],
  loading = false,
  emptyMessage = "No Packages Available",
  onBookNow,
  onViewDetails,
}) => {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="glass-card overflow-hidden animate-pulse"
          >
            <div className="h-[270px] bg-white/5" />

            <div className="p-6 space-y-4">
              <div className="h-4 bg-white/10 rounded" />

              <div className="h-8 bg-white/10 rounded w-3/4" />

              <div className="h-4 bg-white/10 rounded" />

              <div className="h-4 bg-white/10 rounded w-5/6" />

              <div className="grid grid-cols-2 gap-3 pt-5">
                <div className="h-10 bg-white/10 rounded" />
                <div className="h-10 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!packages.length) {
    return (
      <div className="glass-card py-20 text-center">
        <h3 className="text-3xl font-bold gradient-text">
          {emptyMessage}
        </h3>

        <p className="mt-4">
          Please check back later.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {packages.map((pkg) => {
        // console.log(pkg);

        return (
          <PackageCard
            key={pkg._id}
            image={pkg.image}
            title={pkg.title}
            startingLocation={pkg.startingLocation}
            duration={pkg.duration}
               vehicle={pkg.vehicle}           // Vehicle show kar do
            rating={5}
            reviews={124}
            price={pkg.price}
            oldPrice={pkg.oldPrice}
            description={pkg.shortDescription || pkg.description}
            featured={pkg.isFeatured}
            discount={
              pkg.oldPrice > pkg.price
                ? Math.round(
                  ((pkg.oldPrice - pkg.price) * 100) /
                  pkg.oldPrice
                )
                : 0
            }
            onBookNow={() => onBookNow?.(pkg)}
            onViewDetails={() => onViewDetails?.(pkg)}
          />
        );
      })}
    </motion.div>
  );
};

export default PackageGrid;