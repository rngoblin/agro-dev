import { ArrowRight, CheckCircle2 } from "lucide-react";
import { solutionPoints } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function SolutionSection() {
  return (
    <section id="solution" className="section-y bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            kicker="Solution"
            title="Как новая структура делает продукт понятнее"
            text="Лендинг не притворяется техническим каталогом. Он собирает коммерческую логику: кто продукт покупает, какие группы есть в линейке и куда нажать дальше."
          />

          <div className="grid gap-4">
            {solutionPoints.map((point) => (
              <article
                key={point.title}
                className="grid gap-4 rounded-lg border border-line bg-paper p-5 sm:grid-cols-[auto_1fr]"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-graphite/72">
                    {point.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <a
          href="#products"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent"
        >
          Перейти к demo-линейке
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
