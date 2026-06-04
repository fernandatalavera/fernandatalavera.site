"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const portfolioImages = [
  { image: "/images/gallery/work-1.jpg", likes: "2.4k", style: "Box Braids" },
  { image: "/images/gallery/work-2.jpg", likes: "1.8k", style: "Nagô" },
  { image: "/images/gallery/work-3.jpg", likes: "3.2k", style: "Goddess Locs" },
  { image: "/images/gallery/work-4.jpg", likes: "956", style: "Knotless" },
  {
    image: "/images/gallery/work-5.jpg",
    likes: "1.5k",
    style: "Passion Twists",
  },
  {
    image: "/images/gallery/work-6.jpg",
    likes: "2.1k",
    style: "Fulani Braids",
  },
  { image: "/images/gallery/work-1.jpg", likes: "2.4k", style: "Box Braids" },
  { image: "/images/gallery/work-2.jpg", likes: "1.8k", style: "Nagô" },
  { image: "/images/gallery/work-3.jpg", likes: "3.2k", style: "Goddess Locs" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function PortfolioGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="galeria"
      className="relative py-16 bg-[#1a1510] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#C4A77D] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            PORTFÓLIO
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F5F0E8] tracking-tighter mt-2 overflow-hidden font-serif">
            <span className="inline-block">
              FERNANDA{" "}
              <span className="text-[#C4A77D] inline-block">TALAVERA</span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {portfolioImages.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer w-full"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.style}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-[#C4A77D]/0 group-hover:bg-[#C4A77D]/20 flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="font-serif text-sm font-semibold">
                    {post.style}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-mono text-xs">{post.likes}</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://instagram.com/mf_talavera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C4A77D] text-[#1a1510] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <Instagram className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Siga @mf_talavera</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
