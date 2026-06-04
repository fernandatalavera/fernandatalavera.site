"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Award, Users } from "lucide-react";

const stats = [
  { icon: Heart, value: "500+", label: "Clientes Felizes" },
  { icon: Award, value: "4", label: "Anos de Experiência" },
  { icon: Users, value: "50+", label: "Estilos Únicos" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-cream relative overflow-hidden">
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gold/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full bg-terracotta/20 rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/braider-portrait.jpg"
                  alt="Fernanda Talavera - Trancista Profissional"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-4 md:right-8 bg-deep-brown text-cream p-6 rounded-2xl shadow-xl"
              >
                <p className="text-3xl font-bold text-gold">4+</p>
                <p className="text-sm font-mono text-cream/80">
                  Anos de experiência
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.span
                className="inline-block text-terracotta font-mono text-sm tracking-wider mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                SOBRE MIM
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold text-deep-brown tracking-tight leading-tight">
                Quem faz a <span className="text-terracotta">mágica</span>
              </h2>
            </div>

            <div className="space-y-4 text-deep-brown/70 font-mono leading-relaxed">
              <p>
                Olá, eu sou Fernanda Talavera. Minha relação com as tranças
                começou muito antes de se tornar minha profissão. Cresci
                admirando a forma como os cabelos carregam histórias, identidade
                e cultura, e foi dessa admiração que nasceu a vontade de
                transformar esse cuidado em algo que pudesse compartilhar com
                outras mulheres. Ao longo dos últimos 4 anos, venho
                aperfeiçoando minha técnica e construindo um espaço onde cada
                cliente possa se sentir à vontade, acolhida e confiante. Para
                mim, o momento da trança vai além do resultado final. É uma
                pausa na rotina, uma oportunidade de cuidar de si e de se
                reconectar com a própria beleza. Gosto de acreditar que cada
                atendimento tem seu próprio ritmo. Algumas clientes chegam em
                busca de uma mudança, outras de praticidade, outras apenas de um
                momento para si. E é justamente essa troca que torna meu
                trabalho tão especial. Hoje, meu maior privilégio é acompanhar
                histórias, celebrar fases e ajudar mulheres a se sentirem ainda
                mais bonitas, sem abrir mão da sua essência.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 mx-auto bg-terracotta/10 rounded-full flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <p className="text-2xl font-bold text-deep-brown">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono text-deep-brown/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
