"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const currentYear = new Date().getFullYear();

  const openAgendamento = () => {
    window.open(`/agendar`);
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-deep-brown pt-16 pb-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* "Pronta para" + CTA moved to separate component */}

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-cream/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 text-cream/60"
          >
            <MapPin className="w-4 h-4 text-terracotta" />
            <span className="font-mono text-sm">
              Rio de Janeiro, RJ - Brasil
            </span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 text-cream/60"
          >
            <Phone className="w-4 h-4 text-terracotta" />
            <span className="font-mono text-sm">(21) 98702-1112</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 text-cream/60"
          >
            <Mail className="w-4 h-4 text-terracotta" />
            <span className="font-mono text-sm">
              contato@fernandatalavera.art
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-cream/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="/logo.svg"
              alt="Fernanda Talavera"
              className="h-16 w-auto brightness-0 invert"
            />
          </motion.div>

          <p className="text-cream/40 font-mono text-xs">
            © {currentYear} Fernanda Talavera. Todos os direitos reservados.
          </p>

          <p className="text-cream/30 font-mono text-xs">
            Feito por João Motta
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[20rem] font-bold text-cream/[0.02] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Fernanda Talavera
      </motion.div>
    </footer>
  );
}
