import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, CalendarDays, Car } from "lucide-react";

const BookingPopup = ({ isOpen, onClose, selectedPackage = "" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    pickup: "",
    drop: "",
    package: selectedPackage || "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      package: selectedPackage || "",
    }));
  }, [selectedPackage]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🚖 New Booking Request

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Date: ${form.date}
📍 Pickup: ${form.pickup}
📍 Drop: ${form.drop}
🚗 Package: ${form.package || "N/A"}
    `;

    const whatsappURL = `https://wa.me/918808761609?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-xl"
          >
            <div className="glass-card p-6 lg:p-8 relative">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X size={22} />
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center">
                Book Your Premium Ride
              </h2>
              <p className="text-center text-sm text-[#c3c3c3] mt-2">
                Fill details and get instant WhatsApp confirmation
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                {/* Name */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <Car size={18} className="text-[#C9A227]" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <Phone size={18} className="text-[#C9A227]" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                    required
                  />
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <CalendarDays size={18} className="text-[#C9A227]" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                    required
                  />
                </div>

                {/* Pickup */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <MapPin size={18} className="text-[#C9A227]" />
                  <input
                    type="text"
                    name="pickup"
                    placeholder="Pickup Location"
                    value={form.pickup}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                    required
                  />
                </div>

                {/* Drop */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <MapPin size={18} className="text-[#C9A227]" />
                  <input
                    type="text"
                    name="drop"
                    placeholder="Drop Location"
                    value={form.drop}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                </div>

                {/* Package */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <Car size={18} className="text-[#C9A227]" />
                  <input
                    type="text"
                    name="package"
                    placeholder="Selected Package (optional)"
                    value={form.package}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                </div>

                {/* Submit */}
                <button className="btn-primary w-full mt-2">
                  Confirm Booking on WhatsApp
                </button>
              </form>

              <p className="text-center text-xs text-[#8e8e8e] mt-4">
                24/7 Support • Instant Response • Premium Service
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingPopup;