import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = ({
  phone = "+919695957772",
}) => {
  const cleanNumber = phone.replace("+", "");

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999]">

      {/* Call Button */}
      <motion.a
        href={`tel:${cleanNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="group relative w-14 h-14 rounded-full 
        bg-gradient-to-br from-[#c9a227] to-[#e8c766]
        flex items-center justify-center shadow-[0_0_25px_rgba(201,162,39,0.35)]
        border border-[#c9a227]/30 backdrop-blur-xl"
      >
        <Phone size={20} className="text-[#080808]" />

        {/* glow ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#c9a227]/20"></span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${cleanNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="group relative w-14 h-14 rounded-full 
        bg-gradient-to-br from-[#25D366] to-[#1ebe5d]
        flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.35)]
        border border-white/10 backdrop-blur-xl"
      >
        <MessageCircle size={20} className="text-white" />

        {/* glow ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/20"></span>
      </motion.a>

    </div>
  );
};

export default FloatingContact;