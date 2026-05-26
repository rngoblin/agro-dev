import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  caseHighlights,
  demoDataNotes,
  profiCaseDescription
} from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

type CaseOverviewProps = {
  compact?: boolean;
};

export function CaseOverview({ compact = false }: CaseOverviewProps) {
  if (compact) {
    return (
      <section id="case" className="section-y bg-paper">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              kicker="Роль и результат"
              title="Роль и результат"
              text="Кейс показывает, как сложный B2B-продукт можно превратить в короткий коммерческий лендинг: с ясным первым экраном, понятной линейкой, разными клиентскими сценариями и простым путем к заявке."
            />

            <div className="rounded-lg border border-line bg-white p-6">
              <h3 className="text-xl font-semibold text-ink">
                Никита Мичурин
              </h3>
              <p className="mt-4 text-sm leading-6 text-graphite/72">
                Структура, UX-логика, текстовая подача, веб-дизайн,
                фронтенд-сборка, адаптив.
              </p>
              <Link
                href="/case"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
              >
                Открыть описание кейса
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="case" className="section-y bg-paper">
      <div className="section-shell">
        <SectionHeader
          kicker="Описание кейса"
          title="Описание кейса для портфолио"
          text="Обезличенный редизайн-концепт для производственного направления: от разрозненной информации о продукте к ясной коммерческой странице с понятным путем к заявке."
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

        <div className="mt-12 rounded-lg border border-line bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">
            Описание для Профи.ру
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-6 text-graphite/72">
            {profiCaseDescription}
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-line bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">
            Где используются демонстрационные данные
          </h2>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-graphite/72">
            {demoDataNotes.map((note) => (
              <li key={note} className="border-l border-accent pl-4">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
