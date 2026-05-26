import { beforeAfter } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="section-y bg-white">
      <div className="section-shell">
        <SectionHeader
          kicker="До / после"
          title="Логика до и после редизайна"
          text="Это не сравнение с реальным сайтом, а безопасная демонстрация типовой трансформации B2B-лендинга."
        />

        <div className="mt-12 overflow-hidden rounded-lg border border-line">
          <div className="grid bg-ink text-sm font-semibold uppercase text-white md:grid-cols-2">
            <div className="border-b border-white/12 p-5 md:border-b-0 md:border-r">
              Типичный старый лендинг
            </div>
            <div className="p-5">Новая структура концепта</div>
          </div>
          {beforeAfter.map((item) => (
            <div
              key={item.before}
              className="grid border-t border-line bg-paper md:grid-cols-2"
            >
              <p className="border-b border-line p-5 text-sm leading-6 text-graphite/72 md:border-b-0 md:border-r">
                {item.before}
              </p>
              <p className="p-5 text-sm font-semibold leading-6 text-ink">
                {item.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
