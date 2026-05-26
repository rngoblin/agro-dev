import { ArrowDown } from "lucide-react";
import { selectionSteps } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function ProcessSection() {
  return (
    <section id="selection" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Подбор"
          title="Как подобрать продукт"
          text="Подбор начинается не с названия удобрения, а с задачи: культура, состояние растения, этап развития и желаемый результат."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {selectionSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative min-h-72 rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft"
            >
              <span className="text-xs font-semibold uppercase text-graphite/48">
                шаг {index + 1}
              </span>
              <h3 className="mt-8 text-lg font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                {step.text}
              </p>
              {index < selectionSteps.length - 1 ? (
                <ArrowDown
                  className="mt-8 h-5 w-5 text-accent lg:absolute lg:-right-3 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:-rotate-90"
                  aria-hidden="true"
                />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
