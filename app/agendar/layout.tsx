import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Agendar Tranças no Rio de Janeiro",
  description:
    "Agende seu atendimento com Fernanda Talavera, trancista profissional no Rio de Janeiro especializada em box braids, knotless braids, nagô e tranças afro.",
  path: "/agendar",
  keywords: [
    "agendar trancista rio de janeiro",
    "agendar box braids RJ",
    "whatsapp trancista RJ",
    "Fernanda Talavera agendamento",
  ],
});

export default function AgendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
