import { caseHighlights, demoDataNotes } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

type CaseOverviewProps = {
  compact?: boolean;
};

export function CaseOverview({ compact = false }: CaseOverviewProps) {
  return (
    <section id="case" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Case"
          title="Описание кейса для портфолио"
          text="B2B landing concept for liquid micronutrient fertilizers — обезличенный редизайн-концепт для производственного направления."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {caseHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {!compact ? (
          <div className="mt-12 rounded-lg border border-line bg-white p-6">
            <h2 className="text-2xl font-semibold text-ink">
              Где используются demo / placeholder данные
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-graphite/72">
              {demoDataNotes.map((note) => (
                <li key={note} className="border-l border-accent pl-4">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
