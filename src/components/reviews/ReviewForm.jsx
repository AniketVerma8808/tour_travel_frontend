import {
  Send,
  Star,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ReviewForm = ({ addReview }) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    review: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  setTimeout(() => {
    addReview({
      ...formData,
      rating,
    });

    setFormData({
      name: "",
      city: "",
      review: "",
    });

    setRating(0);

    setLoading(false);
  }, 1000);
};

  return (
   <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="section-padding"
>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}

    <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">
              Share Your Experience
            </span>

            <h2 className="section-title mt-4">
              Your Feedback
              <span className="gradient-text block">
                Matters To Us
              </span>
            </h2>

            <p className="mt-6 max-w-xl">
              Every review helps us improve our
              services and helps future travelers
              choose Saroj Kashi Travels with
              confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="glass-card p-6">
                <ShieldCheck
                  className="text-[#C9A227]"
                  size={28}
                />

                <h3 className="text-2xl mt-4">
                  Verified Reviews
                </h3>

                <p className="mt-2">
                  Reviews appear only after admin
                  approval.
                </p>
              </div>

              <div className="glass-card p-6">
                <BadgeCheck
                  className="text-[#C9A227]"
                  size={28}
                />

                <h3 className="text-2xl mt-4">
                  Trusted Service
                </h3>

                <p className="mt-2">
                  Real experiences from genuine
                  travelers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
  <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10"
          >
            <h3 className="text-3xl text-center">
              Leave A Review
            </h3>

            <p className="text-center mt-3">
              Tell us about your journey experience.
            </p>

            {/* Rating */}

            <div className="flex justify-center gap-3 mt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                    ${
                      rating >= star
                        ? "border-[#C9A227] bg-[#C9A227]/10 scale-110"
                        : "border-white/10"
                    }`}
                >
                  <Star
                    size={20}
                    fill={
                      rating >= star
                        ? "#C9A227"
                        : "none"
                    }
                    className="text-[#C9A227]"
                  />
                </button>
              ))}
            </div>

            <p className="text-center mt-3 text-[#C9A227] font-medium">
              {rating > 0
                ? `${rating} Star Rating Selected`
                : "Select Rating"}
            </p>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-[#C9A227]/40 transition-all"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-[#C9A227]/40 transition-all"
              />

              <textarea
                rows="5"
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Share your experience..."
                className="w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 outline-none resize-none focus:border-[#C9A227]/40 transition-all"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Review
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-sm mt-4">
              Reviews become visible after admin
              approval.
            </p>
          </motion.div>
        </div>
        </div>
    </motion.section>
  );
};

export default ReviewForm;