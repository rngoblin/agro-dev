import { AlertCircle, Layers, Smartphone, Split, Workflow } from "lucide-react";
import { legacyProblems } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const icons = [AlertCircle, Workflow, Smartphone, Layers, Split];

export function ProblemSection() {
  return (
    <section id="problem" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Problem"
          title="Что ломает типичный старый B2B-лендинг"
          text="В демонстрационном кейсе нет реального старого сайта. Блок показывает типовые проблемы, которые часто мешают производственному продукту звучать ясно."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {legacyProblems.map((problem, index) => {
            const Icon = icons[index];

            return (
              <article
                key={problem.title}
                className="min-h-64 rounded-lg border border-line bg-white p-6"
              >
                <div className="mb-7 grid h-11 w-11 place-items-center rounded-lg border border-line text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold leading-snug text-ink">
                  {problem.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-graphite/72">
                  {problem.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
