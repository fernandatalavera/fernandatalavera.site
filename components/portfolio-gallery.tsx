"use client";

import { motion } from "framer-motion";
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

const rowOne = portfolioImages.slice(0, 6);
const rowTwo = [...rowOne.slice(3), ...rowOne.slice(0, 3)];
const marqueeCopies = 4;

type PortfolioItem = (typeof portfolioImages)[number];

function PortfolioCard({ post }: { post: PortfolioItem }) {
  return (
    <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 border border-[#C4A77D]/10 bg-[#100c08] transition-transform duration-500 ease-out hover:scale-[1.04]">
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.style}
        fill
        sizes="224px"
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-[#C4A77D]/0 group-hover:bg-[#C4A77D]/20 flex flex-col items-center justify-center transition-colors duration-300">
        <div className="flex flex-col items-center gap-1 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-serif text-sm font-semibold">
            {post.style}
          </span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="font-mono text-xs">{post.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "ltr",
}: {
  items: PortfolioItem[];
  direction?: "ltr" | "rtl";
}) {
  return (
    <div className="marquee-row relative overflow-hidden">
      <div
        className={`marquee-track gap-6 sm:gap-8 pr-6 sm:pr-8 ${
          direction === "rtl" ? "marquee-track--rtl" : "marquee-track--ltr"
        }`}
        style={{
          animationName: direction === "rtl" ? "marquee-reverse" : "marquee",
          animationDuration: "60s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {Array.from({ length: marqueeCopies }).flatMap((_, copy) =>
          items.map((post, index) => (
            <PortfolioCard key={`${copy}-${post.style}-${index}`} post={post} />
          )),
        )}
      </div>
    </div>
  );
}

export function PortfolioGallery() {
  return (
    <section
      id="galeria"
      className="relative py-16 bg-[#1a1510] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center"
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
      </div>

      <div className="relative">
        <div className="flex flex-col gap-6 sm:gap-8">
          <MarqueeRow items={rowOne} direction="ltr" />
          <MarqueeRow items={rowTwo} direction="rtl" />
        </div>

        {/* Fades laterais para o loop sem cortes percept\u00edveis */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#1a1510] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#1a1510] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex justify-center mt-10"
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
