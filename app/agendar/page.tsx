"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Phone, User, Sparkles, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const braidTypes = [
  { id: "box-braids", name: "Box Braids", duration: "5 a 7 horas" },
  { id: "nago", name: "Nagô (Cornrows)", duration: "2 a 4 horas" },
  { id: "goddess", name: "Goddess Braids", duration: "6 horas" },
  { id: "knotless", name: "Knotless Braids", duration: "6 a 8 horas" },
  { id: "fulani", name: "Fulani Braids", duration: "4 a 6 horas" },
  { id: "twist", name: "Twist Braids", duration: "3 a 5 horas" },
];

function AgendarPageContent() {
  const searchParams = useSearchParams();
  const tipoParam = searchParams.get("tipo");
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tipoTranca: "",
    data: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!tipoParam) return;
    const isValid = braidTypes.some((braid) => braid.id === tipoParam);
    if (!isValid) return;
    setFormData((prev) =>
      prev.tipoTranca === tipoParam ? prev : { ...prev, tipoTranca: tipoParam },
    );
  }, [tipoParam]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, telefone: formatted }));
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatDateForMessage = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString + "T00:00:00");
    const weekday = date.toLocaleDateString("pt-BR", { weekday: "long" });
    const numericDate = date.toLocaleDateString("pt-BR");
    return `${weekday}, ${numericDate}`;
  };

  const isFormValid =
    formData.nome && formData.telefone && formData.tipoTranca && formData.data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    const selectedBraid = braidTypes.find((b) => b.id === formData.tipoTranca);
    const formattedDate = formatDateForMessage(formData.data);
    const braidName = selectedBraid?.name ?? formData.tipoTranca;

    const message = [
      "Oi, Fernanda! Tudo bem?",
      `Queria agendar um horário para fazer uma ${braidName}.`,
      `Meu nome é ${formData.nome} e meu telefone é ${formData.telefone}.`,
      `Você tem disponibilidade para ${formattedDate}?`,
      "Aguardo seu retorno.",
    ].join(" ");

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5521987021112"; // Substitua pelo número real
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Form Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-deep-brown tracking-tight mb-4">
              AGENDE SEU <span className="text-terracotta">HORÁRIO</span>
            </h1>
            <p className="text-deep-brown/60 font-mono text-sm max-w-md mx-auto">
              Preencha os dados abaixo e você será redirecionada para o WhatsApp
              para confirmar seu agendamento.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-transparent rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <div className="space-y-4">
              {/* Nome */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="nome"
                  className="block text-sm font-mono text-deep-brown/80 mb-2"
                >
                  Seu Nome
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-brown/40" />
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Qual seu nome?"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-deep-brown/10 bg-transparent text-deep-brown placeholder:text-deep-brown/40 font-mono text-sm focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Telefone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="telefone"
                  className="block text-sm font-mono text-deep-brown/80 mb-2"
                >
                  WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-brown/40" />
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    placeholder="(00) 00000-0000"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-deep-brown/10 bg-transparent text-deep-brown placeholder:text-deep-brown/40 font-mono text-sm focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Tipo de Trança */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="tipoTranca"
                  className="block text-sm font-mono text-deep-brown/80 mb-2"
                >
                  Tipo de Trança
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-brown/40" />
                  <select
                    id="tipoTranca"
                    name="tipoTranca"
                    value={formData.tipoTranca}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-deep-brown/10 bg-transparent text-deep-brown font-mono text-sm focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Selecione o tipo de trança
                    </option>
                    {braidTypes.map((braid) => (
                      <option key={braid.id} value={braid.id}>
                        {braid.name} ({braid.duration})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-deep-brown/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Data */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="data"
                  className="block text-sm font-mono text-deep-brown/80 mb-2"
                >
                  Data Desejada
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-brown/40" />
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-deep-brown/10 bg-transparent text-deep-brown font-mono text-sm focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all cursor-pointer"
                    required
                  />
                </div>
                {formData.data && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs font-mono text-terracotta"
                  >
                    {formatDate(formData.data)}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-xl font-mono font-semibold text-sm tracking-wide flex items-center justify-center gap-3 transition-all ${
                    isFormValid
                      ? "bg-terracotta text-cream hover:bg-terracotta/90"
                      : "bg-deep-brown/20 text-deep-brown/40 cursor-not-allowed"
                  }`}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Continuar para WhatsApp
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.form>

          {/* Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-xs font-mono text-deep-brown/50 mt-6"
          >
            Ao continuar, você será redirecionada para o WhatsApp com todas as
            informações preenchidas.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function AgendarPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-deep-brown/70 font-mono text-sm">Carregando...</p>
        </main>
      }
    >
      <AgendarPageContent />
    </Suspense>
  );
}
