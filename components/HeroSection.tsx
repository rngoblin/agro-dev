import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <Image
        src={`${basePath}/assets/demo-production-hero.png`}
        alt="Условный визуальный пример производственного B2B-направления"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 grayscale"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,19,20,0.96)_0%,rgba(18,19,20,0.82)_48%,rgba(18,19,20,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(247,247,243,0)_0%,rgba(247,247,243,0.98)_100%)]" />

      <div className="section-shell relative flex min-h-[74svh] flex-col justify-end pb-12 pt-20">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase text-white/72">
            Коммерческий B2B-лендинг
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl xl:text-6xl">
            Лендинг для B2B-продукта: от сложной линейки к понятной заявке
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/84 md:text-xl md:leading-9">
            Обезличенный демо-кейс редизайна сайта для направления жидких
            микроудобрений. Страница собирает продуктовую линейку, аудитории,
            сценарий консультации и путь к заявке в ясную коммерческую
            структуру.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-accent hover:text-white"
            >
              Смотреть структуру
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/28 px-6 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Перейти к форме
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-5 text-sm leading-6 text-white/68">
            Демо-кейс для портфолио · без реальных цен, клиентов и
            производственных данных
          </p>
        </div>
      </div>
    </section>
  );
}
