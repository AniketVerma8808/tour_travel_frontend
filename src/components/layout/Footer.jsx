import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <footer className="relative bg-[#080808] border-t border-[#C9A227]/10 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C9A227]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C9A227]/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* Top Footer */}

        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Company */}
          <div className="hover-lift">
<img
  src={logo}
  alt="Saroj Kashi Travels"
  className="w-28 h-auto object-contain transition-all duration-500 hover:scale-105"
/>
            <p className="mt-5">
              Premium travel service for Airport Transfers,
              Kashi Darshan, Outstation Tours and Family
              Trips with comfort, safety and reliability.
            </p>
          </div>
          {/* Quick Links */}

          <div className="hover-lift">
            <h4 className="text-xl font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                {
                  label: "Home",
                  path: "/",
                },
                {
                  label: "About",
                  path: "/about",
                },
                {
                  label: "Services",
                  path: "/services",
                },
                {
                  label: "Vehicle",
                  path: "/vehicle",
                },
                {
                  label: "Packages",
                  path: "/packages",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-zinc-300
                      hover:text-[#C9A227]
                      transition-all
                      duration-300
                      hover:translate-x-2
                    "
                  >
                    <ChevronRight
                      size={16}
                      className="
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div className="hover-lift">
            <h4 className="text-xl font-semibold mb-5">
              Our Services
            </h4>

            <ul className="space-y-3 text-zinc-300">
              <li className="transition-all duration-300 hover:text-[#C9A227] hover:translate-x-2 cursor-pointer">
                Airport Transfer
              </li>

              <li className="transition-all duration-300 hover:text-[#C9A227] hover:translate-x-2 cursor-pointer">
                Kashi Darshan
              </li>

              <li className="transition-all duration-300 hover:text-[#C9A227] hover:translate-x-2 cursor-pointer">
                Outstation Tours
              </li>

              <li className="transition-all duration-300 hover:text-[#C9A227] hover:translate-x-2 cursor-pointer">
                Wedding Travel
              </li>

              <li className="transition-all duration-300 hover:text-[#C9A227] hover:translate-x-2 cursor-pointer">
                Railway Pickup
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className="hover-lift">
            <h4 className="text-xl font-semibold mb-5">
              Contact Info
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3 transition-all duration-300 hover:translate-x-2">
                <Phone
                  size={18}
                  className="text-[#C9A227] mt-1"
                />

                <span>
                  +91 8808761609
                </span>
              </div>

              <div className="flex gap-3 transition-all duration-300 hover:translate-x-2">
                <Mail
                  size={18}
                  className="text-[#C9A227] mt-1"
                />

                <span>
                  info@sarojkashitravels.com
                </span>
              </div>

              <div className="flex gap-3 transition-all duration-300 hover:translate-x-2">
                <MapPin
                  size={18}
                  className="text-[#C9A227] mt-1"
                />

                <span>
                  Varanasi,
                  Uttar Pradesh,
                  India
                </span>
              </div>
            </div>

            {/* Social */}

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#C9A227]/20
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:bg-[#C9A227]
                  hover:text-black
                  hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(201,162,39,0.45)]
                "
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#C9A227]/20
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:bg-[#C9A227]
                  hover:text-black
                  hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(201,162,39,0.45)]
                "
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10" />

        {/* Bottom Footer */}

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400 text-center md:text-left">
            © {new Date().getFullYear()} Saroj
            Kashi Travels. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link
              to="/privacy-policy"
              className="
                transition-all
                duration-300
                hover:text-[#C9A227]
                hover:-translate-y-1
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
                transition-all
                duration-300
                hover:text-[#C9A227]
                hover:-translate-y-1
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;