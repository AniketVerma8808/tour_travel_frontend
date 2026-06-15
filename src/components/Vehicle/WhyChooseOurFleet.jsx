import { CheckCircle2 } from "lucide-react";

const points = [
  "Professional Drivers",
  "Clean & Sanitized Vehicles",
  "24x7 Customer Support",
  "Affordable Pricing",
  "Luxury Travel Experience",
  "On Time Pickup & Drop",
];

const WhyChooseOurFleet = () => {
  return (
    <section className="section-padding bg-[#0D0D0D]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
              alt=""
              className="rounded-[24px]"
            />
          </div>

          <div>
            <p className="section-subtitle">
              Why Choose Us
            </p>

            <h2 className="section-title mb-8">
              Premium Fleet For Every Journey
            </h2>

            <div className="space-y-5">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#C9A227]"
                    size={20}
                  />

                  <span className="text-[#D6D6D6]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurFleet;