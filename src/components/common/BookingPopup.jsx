import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, CalendarDays, Car } from "lucide-react";
import { createBookingService } from "../../services/booking.service";
import toast from "react-hot-toast";

const BookingPopup = ({ isOpen, onClose, selectedPackage = null, }) => {

  const initialForm = {
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    pickup: "",
    drop: "",
    vehicle: "",
    packageId: "",
    packageName: "",
    numberOfPassengers: 1,
    customerMessage: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (selectedPackage) {
      setForm((prev) => ({
        ...prev,
        packageId: selectedPackage._id,
        packageName: selectedPackage.title,
        vehicle: selectedPackage.vehicle || "",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        packageId: "",
        packageName: "",
        vehicle: "",
      }));
    }
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { packageName, ...payload } = form;

      const res = await createBookingService(payload);

      toast.success(
        res?.data?.message || "Booking created successfully."
      );

      setForm({
        ...initialForm,
        packageId: selectedPackage?._id || "",
        packageName: selectedPackage?.title || "",
        vehicle: selectedPackage?.vehicle || "",
      });

      onClose();
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to create booking."
      );
    }
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
            className="fixed z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[90vh]"
          >
            <div className="glass-card p-6 lg:p-8 relative overflow-y-auto max-h-[90vh]">

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

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
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

                {/* Email */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (Optional)"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                </div>

                {/* Travel Date */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <CalendarDays size={18} className="text-[#C9A227]" />
                  <input
                    type="date"
                    name="travelDate"
                    value={form.travelDate}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none text-white [color-scheme:dark]"
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

                {/* Number of Passengers */}
                <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <input
                    type="number"
                    min="1"
                    name="numberOfPassengers"
                    placeholder="Number of Passengers"
                    value={form.numberOfPassengers}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                </div>

                {/* Selected Package */}
                {selectedPackage && (
                  <div className="md:col-span-2 flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                    <Car size={18} className="text-[#C9A227]" />
                    <input
                      type="text"
                      value={form.packageName}
                      readOnly
                      className="bg-transparent w-full outline-none"
                    />
                  </div>
                )}

                {/* Special Request */}
                <div className="md:col-span-2 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                  <textarea
                    rows={4}
                    name="customerMessage"
                    placeholder="Any special request (Optional)"
                    value={form.customerMessage}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <button className="md:col-span-2 btn-primary w-full mt-2">
                  Confirm Booking
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