import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import {
  BRAND_NAME,
  breadcrumbSchema,
  createMetadata,
  servicePages,
  webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tranças no Rio de Janeiro | Serviços e Cuidados",
  description:
    "Conheça os serviços de tranças de Fernanda Talavera no Rio de Janeiro: box braids, knotless, boho, goddess, nagô, cornrows, tranças afro e cuidados.",
  path: "/trancas",
  keywords: [
    "tranças rio de janeiro",
    "serviços de tranças RJ",
    "trancista rio de janeiro",
    "hair braider RJ",
  ],
});

export default function TrancasPage() {
  return (
    <main className="min-h-screen bg-cream">
      <JsonLd
        id="trancas-webpage-jsonld"
        data={webPageSchema({
          title: "Tranças no Rio de Janeiro",
          description:
            "Serviços e guias de tranças de Fernanda Talavera no Rio de Janeiro.",
          path: "/trancas",
          image: "/images/box-braids.jpg",
        })}
      />
      <JsonLd
        id="trancas-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Tranças", path: "/trancas" },
        ])}
      />
      <JsonLd
        id="trancas-itemlist-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Serviços de tranças Fernanda Talavera",
          itemListElement: servicePages.map((page, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: page.title,
            url: `https://www.fernandatalavera.art/trancas/${page.slug}`,
          })),
        }}
      />

      <Navigation />

      <section className="relative pt-32 pb-16 overflow-hidden bg-cream noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-beige/30 to-cream" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-mono text-xs text-deep-brown/50"
          >
            <Link href="/" className="hover:text-terracotta transition-colors">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span>Tranças</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 bg-deep-brown text-cream px-4 py-2 rounded-full text-xs font-mono tracking-wider mb-6">
                SERVIÇOS E GUIAS
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-deep-brown leading-[0.95]">
                Tranças no <span className="text-terracotta">Rio de Janeiro</span>
              </h1>
              <p className="text-lg md:text-xl font-mono text-deep-brown/60 tracking-tight pt-6 max-w-2xl leading-relaxed">
                {BRAND_NAME} reúne serviços de hair braiding, tranças afro e
                penteados protetores com foco em técnica, conforto e acabamento
                premium.
              </p>
            </div>

            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-braids.jpg"
                alt="Tranças afro e hair braiding por Fernanda Talavera no Rio de Janeiro"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                href={`/trancas/${page.slug}`}
                className="group bg-cream rounded-3xl overflow-hidden border-2 border-deep-brown/10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={page.image}
                    alt={page.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/35 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs tracking-widest text-terracotta mb-2">
                    {page.eyebrow}
                  </p>
                  <h2 className="text-3xl font-bold text-deep-brown tracking-tight">
                    {page.title}
                  </h2>
                  <p className="text-sm text-deep-brown/60 font-mono leading-relaxed mt-3">
                    {page.metaDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
