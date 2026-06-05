"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Isabella Vitorino",
    text: "A Fernanda é simplesmente incrível! Fiz box braids pela primeira vez e o resultado superou todas as minhas expectativas. Atendimento super cuidadoso e o ambiente é muito acolhedor.",
    rating: 5,
    service: "Box Braids",
  },
  {
    id: 2,
    name: "Eduarda",
    text: "Já fiz tranças em vários lugares, mas nenhum se compara ao trabalho da Fernanda. Ela realmente entende de saúde capilar e as tranças duraram muito mais do que eu esperava!",
    rating: 5,
    service: "Nagô",
  },
  {
    id: 3,
    name: "Maria Luiza",
    text: "Amei minhas goddess braids! Recebi tantos elogios. A Fernanda é muito talentosa e atenciosa, explica todo o processo e dá dicas de como cuidar das tranças.",
    rating: 5,
    service: "Goddess Braids",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-deep-brown relative overflow-hidden"
    >
      <motion.div
        className="absolute top-20 left-20 w-48 h-48 rounded-full bg-terracotta/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-gold font-mono text-sm tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            DEPOIMENTOS
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-cream tracking-tight">
            O que dizem as <span className="text-terracotta">clientes</span>
          </h2>
          <p className="mt-4 text-cream/60 font-mono max-w-xl mx-auto leading-relaxed">
            A satisfação das minhas clientes é minha maior recompensa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 relative group"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-terracotta/20 leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              <p className="text-cream/80 font-mono text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cream font-semibold">{testimonial.name}</p>
                  <p className="text-terracotta font-mono text-xs">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background text */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[20rem] font-serif font-bold text-cream/[0.02] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Fernanda
      </motion.div>
    </section>
  );
}
