import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/logo.png";
import BookingPopup from "../common/BookingPopup";
import InquiryPopup from "../common/InquiryPopup";

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
    transition: {
      duration: 0.35,
      ease: [0.25, 0.8, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.8, 0.25, 1],
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    // Inquiry submit ho chuki hai to auto popup mat dikhao
    if (localStorage.getItem("inquirySubmitted")) return;

    // Agar popup already open hai to dobara timer mat chalao
    if (inquiryOpen) return;

    let timer;

    if (location.pathname === "/") {
      timer = setTimeout(() => {
        setInquiryOpen(true);
      }, 5000);
    } else if (location.pathname.startsWith("/packages")) {
      timer = setTimeout(() => {
        setInquiryOpen(true);
      }, 10000);
    } else if (location.pathname.startsWith("/vehicle")) {
      timer = setTimeout(() => {
        setInquiryOpen(true);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-5 left-0 w-full z-50 navbar-white"

      >
        <div className="container-custom">
          <div className="h-20 md:h-22 lg:h-24 flex items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="Saroj Kashi Travels"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
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
                      `nav-link text-sm uppercase tracking-[2px] ${isActive ? "gold-text active" : "text-[#111111]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setBookingOpen(true)}
                className="btn-primary"
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              aria-label="Open Menu"
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#111111]"
            >
              <Menu size={30} />
            </motion.button>

          </div>
        </div>
      </motion.header>

      {/* ================= BOOKING POPUP ================= */}
      <BookingPopup
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
      {/* ================= INQUIRY POPUP ================= */}
      <InquiryPopup
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            />

            <motion.aside
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 text-black right-0 h-screen w-[85%] max-w-[360px] bg-white z-[70] border-l border-[#C9A227]/20 shadow-2xl"
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
                <motion.nav className="flex flex-col gap-6 mt-12">

                  {navLinks.map((item) => (
                    <motion.div
                      variants={itemVariants}
                      key={item.path}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block w-full py-2 text-xl font-medium transition-all duration-300 ${isActive
                            ? "text-[#C9A227]"
                            : "text-[#111]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}

                </motion.nav>

                {/* Mobile CTA */}

                <motion.div
                  variants={itemVariants}
                  className="mt-auto"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setBookingOpen(true);
                    }}
                    className="btn-primary w-full justify-center"
                  >
                    Book Now
                  </button>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;