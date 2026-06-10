import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Vehicle", path: "/vehicle" },
  { label: "Packages", path: "/packages" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const mobileMenuVariants = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },

  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "nav-glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Saroj Kashi Travels"
                className="h-12 md:h-14 w-auto"
              />

              <div className="hidden sm:block">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Saroj Kashi
                </h2>

                <p className="text-[11px] tracking-[4px] uppercase gold-text">
                  Travels
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-all duration-300 ${
                      isActive ? "gold-text" : "text-white hover:text-[#C9A227]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}

            <div className="hidden lg:flex items-center gap-4">
              <Link to="/booking" className="btn-primary">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#C9A227]"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Drawer */}

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-[#080808] border-l border-white/10 z-[60]"
            >
              <div className="h-full flex flex-col p-6">
                {/* Header */}

                <div className="flex items-center justify-between">
                  <img src={logo} alt="logo" className="h-12" />

                  <button onClick={() => setIsOpen(false)}>
                    <X size={28} className="text-white" />
                  </button>
                </div>

                {/* Links */}

                <div className="flex flex-col gap-6 mt-12">
                  {navLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-all ${
                          isActive
                            ? "gold-text"
                            : "text-white hover:text-[#C9A227]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                {/* CTA */}

                <div className="mt-auto">
                  <Link
                    to="/booking"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
