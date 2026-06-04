"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MessageCircle, Instagram, Music2 } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/mf_talavera",
    label: "Instagram",
  },
  { icon: Music2, href: "https://tiktok.com", label: "TikTok" },
  {
    icon: MessageCircle,
    href: "/agendar",
    label: "WhatsApp",
  },
];

export function ProntaSection() {
  const router = useRouter();

  const openAgendamento = () => {
    router.push("/agendar");
  };

  return (
    <section id="pronta" className="bg-deep-brown py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cream tracking-tight leading-[0.9]">
            <motion.span className="block">PRONTA PARA</motion.span>
            <motion.span className="block text-terracotta">
              TRANSFORMAR?
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-8"
        >
          <motion.button
            onClick={openAgendamento}
            className="w-full bg-terracotta text-cream px-8 py-4 rounded-full font-mono font-semibold tracking-wide flex items-center justify-center gap-3 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Agendar pelo WhatsApp</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-terracotta hover:text-cream transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
