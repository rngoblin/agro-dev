import { ArrowRight, Handshake } from "lucide-react";

export function PartnersSection() {
  return (
    <section id="partners" className="section-y bg-paper">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-line bg-white p-6 shadow-soft md:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-[#e5efe4] text-accent">
            <Handshake className="h-11 w-11" aria-hidden="true" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-accent">
              Партнерам
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink md:text-5xl">
              Для дилеров и партнеров
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-graphite/75 md:text-lg">
              Вита-Грин может быть представлена как понятная линейка жидких
              удобрений для агронаправления, садовых центров и розничных точек.
              Для партнеров важны не только продукты, но и ясная структура:
              карточки, назначение, сценарии применения и материалы для
              консультации покупателей.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent focus:outline-none focus-visible:shadow-focus"
            >
              Обсудить сотрудничество
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
