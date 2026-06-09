import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Vehicle", path: "/vehicle" },
  { label: "Packages", path: "/packages" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-xl">
                SK
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Saroj Kashi</h2>

                <p className="text-xs tracking-[3px] uppercase text-[#D4AF37]">
                  Tour & Travel
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
                    `transition-all duration-300 text-sm font-medium ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white hover:text-[#D4AF37]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}

            <div className="hidden lg:block">
              <Link to="/booking" className="btn-primary">
                Book Now
              </Link>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-[#0B0B0B] z-[60] transition-all duration-300 border-l border-white/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={30} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition-all ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-5 justify-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-50"
        />
      )}
    </>
  );
};

export default Navbar;
