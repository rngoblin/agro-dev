import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function SolutionSection() {
  return (
    <section id="benefits" className="section-y bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            kicker="Преимущества"
            title="Почему это удобно"
            text="Вита-Грин делает подбор удобрения понятным: от задачи и культуры к продукту, консультации и дальнейшему формату работы."
          />

          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="grid gap-4 rounded-lg border border-line bg-paper p-5 transition hover:border-accent/35 hover:bg-white hover:shadow-soft sm:grid-cols-[auto_1fr]"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-graphite/72">
                    {benefit.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
