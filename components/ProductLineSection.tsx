import { Beaker, PackageCheck } from "lucide-react";
import { productLine } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function ProductLineSection() {
  return (
    <section id="products" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Product line"
          title="Условная продуктовая линейка"
          text="Карточки показывают интерфейсную логику каталога. Это placeholder-данные без составов, дозировок, прайс-листов и коммерческих обещаний."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productLine.map((product, index) => (
            <article
              key={product.title}
              className="min-h-64 rounded-lg border border-line bg-white p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-graphite/48">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index % 2 === 0 ? (
                  <Beaker className="h-5 w-5 text-accent" aria-hidden="true" />
                ) : (
                  <PackageCheck
                    className="h-5 w-5 text-accent"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-ink">
                {product.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                {product.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
