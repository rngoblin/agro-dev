import { ArrowDown } from "lucide-react";
import { processSteps } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function ProcessSection() {
  return (
    <section id="process" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Process"
          title="Сценарий работы в B2B-логике"
          text="Схема показывает коммерческий путь, но не раскрывает реальные условия, документы или операционные детали."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <article
              key={step}
              className="relative rounded-lg border border-line bg-white p-5"
            >
              <span className="text-xs font-semibold uppercase text-graphite/48">
                step {index + 1}
              </span>
              <h3 className="mt-8 text-lg font-semibold leading-snug text-ink">
                {step}
              </h3>
              {index < processSteps.length - 1 ? (
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
