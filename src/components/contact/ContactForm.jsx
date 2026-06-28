import {
  Send,
  User,
  MapPinned,
  Phone,
  Mail,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";
import { createInquiriesService } from "../../services/inquiries.service";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

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

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
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
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>
            <span className="section-subtitle">
              Send Inquiry
            </span>

            <h2 className="section-title mt-4">
              Tell Us About
              <span className="gradient-text block">
                Your Journey
              </span>
            </h2>

            <p className="mt-6 max-w-xl">
              Planning an airport transfer,
              Kashi Darshan, outstation trip or
              corporate travel? Share your
              requirements and our team will
              contact you shortly.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <User
                    size={22}
                    className="gold-text"
                  />
                </div>

                <div>
                  <h3 className="text-xl">
                    Personalized Assistance
                  </h3>

                  <p className="mt-2">
                    Dedicated support for every
                    booking and travel plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPinned
                    size={22}
                    className="gold-text"
                  />
                </div>

                <div>
                  <h3 className="text-xl">
                    Local & Outstation Trips
                  </h3>

                  <p className="mt-2">
                    Comfortable travel across
                    Varanasi, Ayodhya,
                    Prayagraj and nearby cities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="glass-card p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-yellow-600/40 transition"
              />

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 gold-text"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-yellow-600/40 transition"
                />
              </div>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 gold-text"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-yellow-600/40 transition"
                />
              </div>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel requirements..."
                className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 outline-none resize-none focus:border-yellow-600/40 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                <Send size={18} />

                {loading ? "Submitting..." : "Send Inquiry"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;