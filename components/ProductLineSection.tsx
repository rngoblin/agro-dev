import { ArrowRight, Beaker, Droplets } from "lucide-react";
import { productLine } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function ProductLineSection() {
  return (
    <section id="products" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Линейка"
          title="Продуктовая линейка"
          text="В линейке собраны комплексные и моноэлементные решения. Каждая карточка объясняет назначение продукта простым языком и ведет к консультации."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productLine.map((product, index) => (
            <article
              key={product.title}
              className="group flex min-h-[320px] flex-col rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-wash px-3 py-1 text-xs font-semibold text-accent">
                  {product.group}
                </span>
                {index % 2 === 0 ? (
                  <Beaker className="h-5 w-5 text-accent" aria-hidden="true" />
                ) : (
                  <Droplets className="h-5 w-5 text-accent" aria-hidden="true" />
                )}
              </div>

              <h3 className="text-xl font-semibold leading-snug text-ink">
                {product.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                {product.text}
              </p>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-accent transition hover:text-ink"
              >
                Уточнить применение
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
