import { caseSections } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function CaseOverview() {
  return (
    <section id="case-details" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Портфолио"
          title="Как устроен кейс"
          text="Эта страница честно описывает концепцию, структуру и роль в проекте. Сам лендинг при этом работает как самостоятельный брендовый сайт."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {caseSections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-line bg-white p-6"
            >
              <h2 className="text-xl font-semibold text-ink">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
