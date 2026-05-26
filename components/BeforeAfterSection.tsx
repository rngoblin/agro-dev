import { cultureCards } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function BeforeAfterSection() {
  return (
    <section id="cultures" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Культуры"
          title="Для разных культур и форматов выращивания"
          text="Одна и та же линейка может работать по-разному: для поля, теплицы, сада, розницы или декоративных растений важны разные сценарии консультации."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {cultureCards.map((culture) => (
            <article
              key={culture.title}
              className="min-h-64 rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft"
            >
              <h3 className="text-xl font-semibold leading-snug text-ink">
                {culture.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                {culture.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
