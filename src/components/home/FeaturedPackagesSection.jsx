import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PackageGrid from "../packages/PackageGrid";
import { usePackage } from "../../context/PackageContext";
import { useEffect } from "react";

const FeaturedPackagesSection = () => {
  const navigate = useNavigate();

  const { featuredPackages, loading, getFeaturedPackages, } = usePackage();



  useEffect(() => {
    getFeaturedPackages();
  }, [getFeaturedPackages]);

  const handleBookNow = (pkg) => {
    console.log(pkg);
  };

  const handleViewDetails = (pkg) => {
    navigate(`/packages/${pkg.slug}`);
  };

  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C9A227]/10 blur-[180px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-subtitle">
            Featured Packages
          </span>

          <h2 className="section-title mt-4">
            Luxury Tours Crafted
            <span className="gradient-text block">
              For Every Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto">
            Explore our hand-picked premium travel packages
            designed for families, tourists, pilgrims and
            corporate travellers with luxury comfort and
            unforgettable experiences.
          </p>
        </motion.div>

        {/* Package Grid */}

        <div className="mt-16">

          {loading ? (
            <div className="text-center py-20">
              Loading...
            </div>
          ) : (
            <PackageGrid
              packages={featuredPackages}
              onBookNow={handleBookNow}
              onViewDetails={handleViewDetails}
            />
          )}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-center mt-20"
        >
          <button
            onClick={() => navigate("/packages")}
            className="btn-primary"
          >
            View All Packages

            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackagesSection;