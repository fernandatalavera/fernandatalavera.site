"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  },
};

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y = useSpring(rawY, springConfig);

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textX1 = useSpring(rawTextX1, springConfig);

  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textX2 = useSpring(rawTextX2, springConfig);

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const scale = useSpring(rawScale, springConfig);

  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacity = useSpring(rawOpacity, springConfig);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream noise-overlay"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-beige/30 to-cream" />

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-terracotta/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div style={{ opacity }} className="space-y-6">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-deep-brown text-cream px-4 py-2 rounded-full text-xs font-mono tracking-wider"
            >
              <motion.span
                className="w-2 h-2 bg-gold rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              ESPECIALISTA EM TRANÇAS
            </motion.div>

            <div className="space-y-2 overflow-hidden">
              <motion.h1
                style={{ x: textX1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-deep-brown leading-[0.95]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-block"
                >
                  SUA BELEZA,
                </motion.span>
              </motion.h1>
              <motion.h1
                style={{ x: textX2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-deep-brown leading-[0.95]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block text-terracotta"
                >
                  NOSSA ARTE
                </motion.span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-lg md:text-xl font-mono text-deep-brown/60 tracking-tight pt-4 max-w-md leading-relaxed"
              >
                Especialista em tranças, Box Braids, Nagô e saúde capilar.
                Transforme seu visual com proteção e estilo.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={() => scrollToSection("#catalogo")}
                className="bg-terracotta text-cream px-8 py-4 rounded-full font-mono font-semibold text-sm tracking-wide flex items-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Ver Catálogo</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("#sobre")}
                className="border-2 border-deep-brown text-deep-brown px-8 py-4 rounded-full font-mono font-semibold text-sm tracking-wide relative overflow-hidden bg-transparent"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "var(--deep-brown)",
                  color: "var(--cream)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Conhecer Mais
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                "Proteção Capilar",
                "Design Exclusivo",
                "Atendimento Personalizado",
              ].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-mono text-deep-brown/60"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  {benefit}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y, scale }}
            className="relative flex justify-center"
          >
            <motion.div
              variants={scaleInVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-terracotta/20 blur-[80px] rounded-full scale-75"
                animate={{
                  scale: [0.75, 0.85, 0.75],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-braids.jpg"
                    alt="Mulher com tranças elegantes"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />

                  {/* Efeitos circulares ao longo da diagonal (superior direita → inferior esquerda) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                      className="absolute rounded-full bg-gold/40 mix-blend-screen blur-sm"
                      style={{ top: "6%", right: "6%", width: 28, height: 28 }}
                      animate={{
                        y: [0, -6, 0],
                        opacity: [0.9, 0.6, 0.9],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute rounded-full bg-terracotta/30 mix-blend-overlay blur-md"
                      style={{
                        top: "30%",
                        right: "30%",
                        width: 48,
                        height: 48,
                      }}
                      animate={{
                        y: [0, 8, 0],
                        opacity: [0.85, 0.5, 0.85],
                        scale: [1, 1.06, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute rounded-full bg-beige/30 mix-blend-multiply blur-sm"
                      style={{ top: "54%", left: "22%", width: 36, height: 36 }}
                      animate={{
                        y: [0, -4, 0],
                        opacity: [0.9, 0.6, 0.9],
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute rounded-full bg-cream/50 mix-blend-screen blur-lg"
                      style={{
                        bottom: "6%",
                        left: "6%",
                        width: 56,
                        height: 56,
                      }}
                      animate={{
                        y: [0, 10, 0],
                        opacity: [0.8, 0.4, 0.8],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-5 h-8 border-2 border-deep-brown/30 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 bg-deep-brown/30 rounded-full"
                animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
