import React from "react";

const TermsConditions = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 py-16">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

            <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> July 7, 2026
            </p>

            <p className="mb-6 text-gray-700 leading-8">
                By using the Saroj Kashi Travels website or booking our services, you
                agree to the following Terms & Conditions.
            </p>

            <Section title="1. Booking Confirmation">
                <p>
                    Bookings are confirmed only after receipt of the required payment and
                    confirmation from our team.
                </p>
            </Section>

            <Section title="2. Pricing ">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Prices are subject to availability.</li>
                    <li>Prices may change without prior notice.</li>
                    <li>The confirmed booking price will remain applicable.</li>
                </ul>
            </Section>

            <Section title="3. Payments">
                <p>
                    Customers must complete payments according to the agreed payment
                    schedule.
                </p>
            </Section>

            <Section title="4. Cancellation & Refund">
                <p>
                    Cancellation requests must be made through our official contact
                    channels. Refunds are subject to supplier policies and may take 7–15
                    business days where applicable.
                </p>
            </Section>

            <Section title="5. Itinerary Changes">
                <p>
                    We reserve the right to modify itineraries due to weather, government
                    regulations, operational reasons, or circumstances beyond our control.
                </p>
            </Section>

            <Section title="6. Customer Responsibilities">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Provide accurate booking details.</li>
                    <li>Carry valid identity documents.</li>
                    <li>Arrive on time for departures.</li>
                    <li>Follow local laws during travel.</li>
                </ul>
            </Section>

            <Section title="7. Travel Documents">
                <p>
                    Customers are responsible for obtaining valid identification,
                    passports, visas, or permits required for travel.
                </p>
            </Section>

            <Section title="8. Limitation of Liability">
                <p>
                    Saroj Kashi Travels shall not be liable for delays, cancellations,
                    accidents, weather conditions, strikes, natural disasters, or events
                    beyond our reasonable control.
                </p>
            </Section>

            <Section title="9. Website Usage">
                <p>
                    Users must not misuse the website or attempt unauthorized access to
                    our systems.
                </p>
            </Section>

            <Section title="10. Intellectual Property">
                <p>
                    All website content including logos, text, graphics, and images is
                    the property of Saroj Kashi Travels and may not be copied without
                    permission.
                </p>
            </Section>

            <Section title="11. Governing Law">
                <p>
                    These Terms & Conditions are governed by the laws of India.
                </p>
            </Section>

            <Section title="12. Contact Us">
                <p>
                    For any questions regarding these Terms & Conditions, please contact
                    us using the information available on our website.
                </p>
            </Section>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <div className="text-gray-700 leading-8">{children}</div>
    </div>
);

export default TermsConditions;