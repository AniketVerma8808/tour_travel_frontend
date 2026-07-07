import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 py-16">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> July 7, 2026
            </p>

            <p className="mb-6 text-gray-700 leading-8">
                At <strong>Saroj Kashi Travels</strong>, we value your privacy and are
                committed to protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard the information you provide
                while using our website or booking our travel services.
            </p>

            <Section title="1. Information We Collect">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Full Name</li>
                    <li>Phone Number</li>
                    <li>Email Address</li>
                    <li>Travel Details</li>
                    <li>Pickup & Drop Information</li>
                    <li>Payment Information (processed securely by payment gateways)</li>
                    <li>Information submitted through enquiry or booking forms</li>
                </ul>
            </Section>

            <Section title="2. How We Use Your Information">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Process bookings.</li>
                    <li>Contact you regarding your enquiry.</li>
                    <li>Send booking confirmations.</li>
                    <li>Provide customer support.</li>
                    <li>Improve our services.</li>
                    <li>Comply with legal obligations.</li>
                </ul>
            </Section>

            <Section title="3. Payment Security">
                <p>
                    We do not store your debit or credit card information. Payments are
                    processed securely through trusted third-party payment gateways.
                </p>
            </Section>

            <Section title="4. Information Sharing">
                <p>
                    We never sell your personal information. Information is shared only
                    when necessary with hotels, transport providers, guides, or legal
                    authorities for completing your travel arrangements.
                </p>
            </Section>

            <Section title="5. Cookies">
                <p>
                    Our website may use cookies to improve your browsing experience and
                    analyze website traffic.
                </p>
            </Section>

            <Section title="6. Data Security">
                <p>
                    We implement appropriate security measures to protect your personal
                    information from unauthorized access or disclosure.
                </p>
            </Section>

            <Section title="7. Third-Party Links">
                <p>
                    Our website may contain links to third-party websites. We are not
                    responsible for their privacy practices.
                </p>
            </Section>

            <Section title="8. Your Rights">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Request access to your personal information.</li>
                    <li>Request correction of inaccurate data.</li>
                    <li>Request deletion of your information where applicable.</li>
                    <li>Opt out of promotional communications.</li>
                </ul>
            </Section>

            <Section title="9. Changes to This Policy">
                <p>
                    We may update this Privacy Policy from time to time. Updated versions
                    will be published on this page.
                </p>
            </Section>

            <Section title="10. Contact Us">
                <p>
                    If you have any questions regarding this Privacy Policy, please
                    contact us through the contact details available on our website.
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

export default PrivacyPolicy;