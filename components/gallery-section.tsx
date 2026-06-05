"use client";

import type React from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  type Variants,
} from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  MessageCircle,
} from "lucide-react";

const braidsData = [
  {
    id: 1,
    slug: "box-braids",
    name: "Box Braids",
    tagline: "Clássico Atemporal",
    description:
      "Tranças soltas com extensão sintética. Versáteis, protegem o cabelo natural e permitem diversos penteados. Ideais para quem busca praticidade e estilo.",
    duration: "5 a 7 horas",
    image: "/images/box-braids.jpg",
    bgColor: "from-terracotta/20 via-terracotta/10 to-transparent",
    accentColor: "#C4A484",
  },
  {
    id: 2,
    slug: "nago",
    name: "Nagô (Cornrows)",
    tagline: "Arte Geométrica",
    description:
      "Tranças rasteiras rentes ao couro cabeludo. Designs geométricos e artísticos com alta durabilidade. Perfeitas para um visual marcante.",
    duration: "2 a 4 horas",
    image: "/images/cornrows.jpg",
    bgColor: "from-deep-brown/20 via-deep-brown/10 to-transparent",
    accentColor: "#8B7355",
  },
  {
    id: 3,
    slug: "goddess",
    name: "Goddess Braids",
    tagline: "Elegância Boêmia",
    description:
      "Estilo boêmio que mistura tranças com fios cacheados soltos para um visual volumoso e natural. Romântico e sofisticado.",
    duration: "6 horas",
    image: "/images/goddess-braids.jpg",
    bgColor: "from-gold/20 via-gold/10 to-transparent",
    accentColor: "#D4AF37",
  },
  {
    id: 4,
    slug: "knotless",
    name: "Knotless Braids",
    tagline: "Conforto Natural",
    description:
      "Tranças sem nó na raiz, proporcionando um visual mais natural e menos tensão no couro cabeludo. Conforto e elegância.",
    duration: "6 a 8 horas",
    image: "/images/knotless-braids.jpg",
    bgColor: "from-terracotta/20 via-terracotta/10 to-transparent",
    accentColor: "#C4A484",
  },
  {
    id: 5,
    slug: "fulani",
    name: "Fulani Braids",
    tagline: "Tradição Africana",
    description:
      "Estilo tradicional africano com tranças puxadas para trás e padrões laterais. Decoradas com miçangas e acessórios.",
    duration: "4 a 6 horas",
    image: "/images/fulani-braids.jpg",
    bgColor: "from-deep-brown/20 via-deep-brown/10 to-transparent",
    accentColor: "#8B7355",
  },
  {
    id: 6,
    slug: "twist",
    name: "Twist Braids",
    tagline: "Versatilidade",
    description:
      "Tranças de duas mechas torcidas que criam um visual elegante e definido. Versáteis e fáceis de manter.",
    duration: "3 a 5 horas",
    image: "/images/twist-braids.jpg",
    bgColor: "from-gold/20 via-gold/10 to-transparent",
    accentColor: "#D4AF37",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
};

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const currentBraid = braidsData[currentIndex];

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    rotateY.set(x * 5);
    rotateX.set(-y * 5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + braidsData.length) % braidsData.length;
    setCurrentIndex(newIndex);
    setPage([page + newDirection, newDirection]);
  };

  const nextBraid = () => paginate(1);
  const prevBraid = () => paginate(-1);

  const openAgendamento = (braidName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar ${braidName}. Poderia me informar os horários disponíveis?`,
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="catalogo" className="relative py-16 bg-beige overflow-hidden">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${currentBraid.bgColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        key={currentBraid.id}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-deep-brown/60 text-xs tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            NOSSO CATÁLOGO
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-deep-brown tracking-tight mt-2 overflow-hidden">
            <span className="inline-block">ESCOLHA SUA </span>
            <span className="inline-block text-terracotta">TRANÇA</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={prevBraid}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-deep-brown items-center justify-center hover:bg-deep-brown hover:text-cream transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentBraid.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-3xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="bg-cream rounded-3xl p-6 md:p-8 border-2 border-deep-brown/10 shadow-xl"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <motion.div
                      className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Image
                        src={currentBraid.image || "/placeholder.svg"}
                        alt={currentBraid.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 to-transparent" />
                    </motion.div>

                    <div className="space-y-4">
                      <div>
                        <motion.span
                          className="font-mono text-xs tracking-widest"
                          style={{ color: currentBraid.accentColor }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {currentBraid.tagline}
                        </motion.span>
                        <motion.h3
                          className="text-4xl md:text-5xl font-bold text-deep-brown tracking-tight mt-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 100,
                          }}
                        >
                          {currentBraid.name}
                        </motion.h3>
                      </div>

                      <motion.p
                        className="text-sm text-deep-brown/60 font-mono leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentBraid.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center gap-2 text-deep-brown/60 font-mono text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Clock className="w-4 h-4" />
                        <span>Duração: {currentBraid.duration}</span>
                      </motion.div>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {["Proteção", "Durabilidade", "Estilo", "Conforto"].map(
                          (badge) => (
                            <span
                              key={badge}
                              className="px-2 py-1 bg-deep-brown/5 rounded-full text-xs font-mono text-deep-brown/60"
                            >
                              {badge}
                            </span>
                          ),
                        )}
                      </motion.div>

                      <Link href={`/agendar?tipo=${currentBraid.slug}`}>
                        <motion.button
                          className="px-6 py-3 rounded-full font-mono font-semibold text-sm tracking-wide w-full md:w-auto relative overflow-hidden bg-terracotta text-cream flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <motion.span
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                          <Calendar className="w-4 h-4 relative z-10" />
                          <span className="relative z-10">Agendar Horário</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={nextBraid}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-deep-brown items-center justify-center hover:bg-deep-brown hover:text-cream transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              onClick={prevBraid}
              className="w-10 h-10 rounded-full border-2 border-deep-brown flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={nextBraid}
              className="w-10 h-10 rounded-full border-2 border-deep-brown flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {braidsData.map((braid, index) => (
              <motion.button
                key={braid.id}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setCurrentIndex(index);
                  setPage([index, newDirection]);
                }}
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor:
                    index === currentIndex
                      ? braid.accentColor
                      : "rgba(59, 42, 30, 0.2)",
                }}
                animate={{
                  width: index === currentIndex ? 28 : 10,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
