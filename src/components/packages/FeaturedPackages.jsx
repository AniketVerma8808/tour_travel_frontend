import { useEffect } from "react";
import { motion } from "framer-motion";
import PackageGrid from "./PackageGrid";
import { usePackage } from "../../context/PackageContext";
import { useNavigate } from "react-router-dom";

const FeaturedPackages = ({ filters }) => {
  const navigate = useNavigate();

  const {
    packages,
    loading,
    getPackages,
  } = usePackage();


  useEffect(() => {
    getPackages(filters);
  }, [filters, getPackages]);

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
              {packages.length}
            </span>

            <span className="ml-2 text-sm text-[#c3c3c3]">
              Packages Found
            </span>
          </div>
        </motion.div>
        <PackageGrid
          packages={packages}
          loading={loading}
          emptyMessage="We couldn't find any package matching your filters."
          onBookNow={(pkg) => console.log(pkg)}
          onViewDetails={(pkg) => navigate(`/packages/${pkg.slug}`)}
        />
      </div>
    </section>
  );
};

export default FeaturedPackages;