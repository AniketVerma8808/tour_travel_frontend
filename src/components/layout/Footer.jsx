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
    <footer className="relative bg-[#080808] border-t border-[#C9A227]/10">
      <div className="container-custom">
        {/* Top Footer */}

        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Company */}

          <div>
            <img
              src={logo}
              alt="Saroj Kashi Travels"
              className="w-28 h-auto object-contain"
            />

            <p className="mt-5">
              Premium travel service for Airport
              Transfers, Kashi Darshan, Outstation
              Tours and Family Trips with comfort,
              safety and reliability.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-xl mb-5">
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
                    className="flex items-center gap-2 text-zinc-300 hover:text-[#C9A227] transition-colors duration-300"
                  >
                    <ChevronRight size={16} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h4 className="text-xl mb-5">
              Our Services
            </h4>

            <ul className="space-y-3 text-zinc-300">
              <li className="hover:text-[#C9A227] transition-colors duration-300">
                Airport Transfer
              </li>

              <li className="hover:text-[#C9A227] transition-colors duration-300">
                Kashi Darshan
              </li>

              <li className="hover:text-[#C9A227] transition-colors duration-300">
                Outstation Tours
              </li>

              <li className="hover:text-[#C9A227] transition-colors duration-300">
                Wedding Travel
              </li>

              <li className="hover:text-[#C9A227] transition-colors duration-300">
                Railway Pickup
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-xl mb-5">
              Contact Info
            </h4>

            <div className="space-y-4">
              <a
                href="tel:+919695957772"
                className="flex gap-3 hover:text-[#C9A227] transition-colors duration-300"
              >
                <Phone
                  size={18}
                  className="gold-text mt-1"
                />
                <span>+91 9695957772</span>
              </a>


              {/* Email */}
              <a
                href="mailto:info@sarojkashitravels.com"
                className="flex gap-3 hover:text-[#C9A227] transition-colors duration-300"
              >
                <Mail
                  size={18}
                  className="gold-text mt-1"
                />
                <span>info@sarojkashitravels.com</span>
              </a>


              <a
                href="https://maps.app.goo.gl/B1JiZpaqcqubYGW77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-[#C9A227] transition-colors duration-300"
              >
                <MapPin size={18} className="gold-text mt-1" />

                <span>
                  Varanasi, Uttar Pradesh, India
                </span>
              </a>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/sarojkashitravels?igsh=MXBtZXRxOHh2cmFqbA%3D%3D&utm_source=qr"
                target="_blank"
                className="w-11 h-11 rounded-full border border-[#C9A227]/20 flex items-center justify-center hover:bg-[#C9A227] hover:text-black transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/sarojkashitravels?igsh=MXBtZXRxOHh2cmFqbA%3D%3D&utm_source=qr"
                target="_blank"
                className="w-11 h-11 rounded-full border border-[#C9A227]/20 flex items-center justify-center hover:bg-[#C9A227] hover:text-black transition-all duration-300"
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
              className="hover:text-[#C9A227] transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#C9A227] transition-colors duration-300"
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