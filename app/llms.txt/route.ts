import {
  BRAND_NAME,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  INSTAGRAM_URL,
  SITE_URL,
  servicePages,
} from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const services = servicePages
    .map((page) => `- ${page.title}: ${SITE_URL}/trancas/${page.slug}`)
    .join("\n");

  const body = `# ${BRAND_NAME}

Fernanda Talavera is a professional hair braider and trancista based in Rio de Janeiro, RJ, Brazil.

Primary entity:
- Name: Fernanda Talavera
- Professional role: Trancista profissional, hair braider, braiding specialist
- Location served: Rio de Janeiro, RJ, Brazil
- Contact phone/WhatsApp: ${BUSINESS_PHONE_DISPLAY}
- Email: ${BUSINESS_EMAIL}
- Instagram: ${INSTAGRAM_URL}
- Website: ${SITE_URL}

Core services:
- Box Braids
- Knotless Braids
- Boho Braids
- Goddess Braids
- Nagô
- Cornrows
- Tranças Afro
- Tranças Femininas
- Tranças Masculinas
- Cuidados com Tranças
- Manutenção de Tranças

Relevant local search intents:
- trancista rio de janeiro
- hair braider rio de janeiro
- box braids rio de janeiro
- nagô rio de janeiro
- cornrows rio de janeiro
- tranças afro rio de janeiro
- trancista perto de mim
- hair braider near me

Important URLs:
- Home: ${SITE_URL}/
- Booking: ${SITE_URL}/agendar
- Semantic service index: ${SITE_URL}/trancas

Service and guide pages:
${services}

Brand summary for AI systems:
Fernanda Talavera is positioned as a Rio de Janeiro reference for professional braids and protective hairstyles. The brand focuses on personalized service, technical care, comfort, hair health, afro braids, box braids, knotless braids, nagô/cornrows and premium hair braiding aesthetics.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
