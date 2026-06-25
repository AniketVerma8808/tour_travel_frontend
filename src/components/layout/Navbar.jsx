import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/logo.png";
import BookingPopup from "../common/BookingPopup";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Premium Services", path: "/services" },
  { label: "Vehicle", path: "/vehicle" },
  { label: "Packages", path: "/packages" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
  { label: "Gallery", path: "/gallery" },
];

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 navbar-white"

      >
        <div className="container-custom">
          <div className="h-20 md:h-22 lg:h-24 flex items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Saroj Kashi Travels"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(201,162,39,0.35)]"
              />
            </Link>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-10">
               <nav className="flex items-center gap-6">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link text-sm uppercase tracking-[2px] ${
                        isActive ? "gold-text active" : "text-[#111111]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

               <button
                onClick={() => setBookingOpen(true)}
                className="btn-primary"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#111111]"

            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= BOOKING POPUP ================= */}
    <BookingPopup
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white border-l border-[#C9A227]/20 z-[60]"
            >
              <div className="h-full flex flex-col p-6">
                {/* Mobile Header */}

                <div className="flex items-center justify-between">
                  <img
                    src={logo}
                    alt="Saroj Kashi Travels"
                    className="h-14 object-contain"
                  />

                  <button onClick={() => setIsOpen(false)}>
                    <X size={28} className="text-[#111111]" />
                  </button>
                </div>

                {/* Mobile Links */}

                <div className="flex flex-col gap-6 mt-12">
                  {navLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-lg transition-all duration-300 ${isActive
                          ? "gold-text"
                          : "text-[#111111] hover:text-[#C9A227]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile CTA */}

                <div className="mt-auto">
                    <button
                    onClick={() => {
                      setIsOpen(false);
                      setBookingOpen(true);
                    }}
                    className="btn-primary w-full justify-center"
                  >
                    Book Now
                  </button>
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