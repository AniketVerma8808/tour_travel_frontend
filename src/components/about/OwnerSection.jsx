import { motion } from "framer-motion";

const OwnerSection = () => {
    return (
        <section className="section-padding bg-[#0f0f0f]">
            <div className="container-custom">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">
                        Meet Our <span className="gradient-text">Founder</span>
                    </h2>

                    <p className="text-[#c3c3c3] mt-3 max-w-2xl mx-auto">
                        The vision behind our premium travel service and trusted rides across India.
                    </p>
                </motion.div>

                {/* Images Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Image 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-3 rounded-2xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                            alt="Founder 1"
                            className="w-full h-[540px] object-cover object-top rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="glass-card p-3 rounded-2xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                            alt="Founder 2"
                            className="w-full h-[540px] object-cover object-top rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default OwnerSection;