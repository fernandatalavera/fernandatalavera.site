import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import {
  WHATSAPP_URL,
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  getServicePage,
  imageObjectSchema,
  servicePages,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return createMetadata({
      title: "Tranças no Rio de Janeiro",
      description:
        "Serviços de tranças, hair braiding e penteados protetores por Fernanda Talavera no Rio de Janeiro.",
      path: "/trancas",
      noIndex: true,
    });
  }

  return createMetadata({
    title: page.seoTitle,
    description: page.metaDescription,
    path: `/trancas/${page.slug}`,
    keywords: page.keywords,
    image: page.image,
    type: page.kind === "guide" ? "article" : "website",
  });
}

export default async function TrancaSemanticPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) notFound();

  const relatedPages = page.related
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter(Boolean);

  const path = `/trancas/${page.slug}`;
  const bookingHref = page.bookingType
    ? `/agendar?tipo=${page.bookingType}`
    : "/agendar";

  return (
    <main className="min-h-screen bg-cream">
      <JsonLd
        id={`${page.slug}-webpage-jsonld`}
        data={webPageSchema({
          title: page.seoTitle,
          description: page.metaDescription,
          path,
          image: page.image,
        })}
      />
      <JsonLd
        id={`${page.slug}-breadcrumb-jsonld`}
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Tranças", path: "/trancas" },
          { name: page.title, path },
        ])}
      />
      <JsonLd id={`${page.slug}-main-jsonld`} data={serviceSchema(page)} />
      <JsonLd id={`${page.slug}-faq-jsonld`} data={faqSchema(page.faqs, path)} />
      <JsonLd
        id={`${page.slug}-image-jsonld`}
        data={imageObjectSchema(page)}
      />

      <Navigation />

      <article>
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
              <Link
                href="/trancas"
                className="hover:text-terracotta transition-colors"
              >
                Tranças
              </Link>
              <span className="mx-2">/</span>
              <span>{page.title}</span>
            </nav>

            <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
              <div>
                <p className="inline-flex items-center gap-2 bg-deep-brown text-cream px-4 py-2 rounded-full text-xs font-mono tracking-wider mb-6">
                  {page.eyebrow}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-deep-brown leading-[0.95]">
                  {page.h1}
                </h1>
                <p className="text-lg md:text-xl font-mono text-deep-brown/60 tracking-tight pt-6 max-w-2xl leading-relaxed">
                  {page.lead}
                </p>
                <div className="flex flex-wrap gap-3 pt-8">
                  <Link
                    href={bookingHref}
                    className="bg-terracotta text-cream px-8 py-4 rounded-full font-mono font-semibold text-sm tracking-wide"
                  >
                    Agendar Horário
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    className="border-2 border-deep-brown text-deep-brown px-8 py-4 rounded-full font-mono font-semibold text-sm tracking-wide"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/25 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[320px_1fr] gap-10">
              <aside className="space-y-4">
                <div className="bg-cream rounded-3xl p-6 border-2 border-deep-brown/10">
                  <p className="font-mono text-xs tracking-widest text-terracotta mb-4">
                    DESTAQUES
                  </p>
                  <ul className="space-y-3">
                    {page.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm font-mono text-deep-brown/70"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-none" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-deep-brown text-cream rounded-3xl p-6">
                  <p className="font-mono text-xs tracking-widest text-gold mb-3">
                    LOCAL
                  </p>
                  <p className="text-sm font-mono text-cream/75 leading-relaxed">
                    Atendimento profissional no Rio de Janeiro, RJ, para buscas
                    como trancista perto de mim, hair braider Rio de Janeiro e
                    tranças afro RJ.
                  </p>
                </div>
              </aside>

              <div className="space-y-10">
                {page.sections.map((section) => (
                  <section
                    key={section.heading}
                    className="bg-cream rounded-3xl p-6 md:p-8 border-2 border-deep-brown/10"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-brown tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-sm md:text-base text-deep-brown/65 font-mono leading-relaxed mt-4">
                      {section.body}
                    </p>
                  </section>
                ))}

                <section className="bg-deep-brown rounded-3xl p-6 md:p-8">
                  <p className="font-mono text-xs tracking-widest text-gold mb-4">
                    PERGUNTAS FREQUENTES
                  </p>
                  <div className="space-y-4">
                    {page.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group border-b border-cream/10 pb-4"
                      >
                        <summary className="cursor-pointer list-none text-lg font-bold text-cream tracking-tight">
                          {faq.question}
                        </summary>
                        <p className="text-sm font-mono text-cream/65 leading-relaxed mt-3">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

                {relatedPages.length > 0 && (
                  <section>
                    <p className="font-mono text-xs tracking-widest text-terracotta mb-4">
                      LEIA TAMBÉM
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {relatedPages.map((related) => {
                        if (!related) return null;

                        return (
                          <Link
                            key={related.slug}
                            href={`/trancas/${related.slug}`}
                            className="bg-cream rounded-2xl p-5 border-2 border-deep-brown/10 hover:border-terracotta/40 transition-colors"
                          >
                            <h3 className="text-xl font-bold text-deep-brown tracking-tight">
                              {related.title}
                            </h3>
                            <p className="text-xs font-mono text-deep-brown/55 leading-relaxed mt-2">
                              {related.metaDescription}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
