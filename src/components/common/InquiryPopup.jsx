import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Phone, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { createInquiriesService } from "../../services/inquiries.service";

const InquiryPopup = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ESC Key Close
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phone = value.replace(/\D/g, "");

      setFormData((prev) => ({
        ...prev,
        phone,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await createInquiriesService(formData);

      toast.success(
        res?.data?.message || "Inquiry submitted successfully."
      );

      // Disable future auto popup
      localStorage.setItem("inquirySubmitted", "true");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      handleClose();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0f0f0f] border border-yellow-600/20 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white hover:text-yellow-500 transition"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">

              <span className="text-yellow-500 uppercase tracking-[3px] text-sm">
                Book Your Journey
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Get Best Travel Quote
              </h2>

              <p className="text-gray-400 mt-3 leading-7">
                Planning an airport transfer, Kashi Darshan,
                outstation trip, corporate travel or holiday
                package? Fill out the form below and our travel
                expert will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-8"
              >
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-yellow-500 transition"
                />

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-yellow-500 transition"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-yellow-500 transition"
                  />
                </div>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel requirements..."
                  className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 outline-none resize-none focus:border-yellow-500 transition"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                >
                  <Send size={18} />

                  {loading
                    ? "Submitting..."
                    : "Send Inquiry"}
                </button>

              </form>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryPopup;