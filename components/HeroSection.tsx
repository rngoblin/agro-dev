import { ArrowDownRight, ArrowRight, Droplets, Leaf, Sparkles } from "lucide-react";
import { heroMarkers } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7f7f3_0%,#eef3ec_52%,#dfe8db_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-line" />
      <HeroVisual />

      <div className="section-shell relative flex min-h-[68svh] flex-col justify-center pb-6 pt-16">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-accent/24 bg-white/70 px-4 py-2 text-xs font-semibold uppercase text-accent">
            Вита-Грин · жидкое питание растений
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl md:text-6xl xl:text-6xl">
            Жидкие удобрения для понятного питания растений
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/76 md:text-xl md:leading-9">
            Вита-Грин помогает подобрать жидкие удобрения и микроэлементные
            комплексы под культуру, задачу и этап развития растения — от
            фермерского хозяйства до теплицы и садового центра.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent focus:outline-none focus-visible:shadow-focus"
            >
              Подобрать решение
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white/72 px-6 py-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus:outline-none focus-visible:shadow-focus"
            >
              Смотреть линейку
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {heroMarkers.map((marker) => (
              <p
                key={marker}
                className="border-l border-accent/35 pl-4 text-sm leading-6 text-graphite/72"
              >
                {marker}
              </p>
            ))}
          </div>

          <MobileHeroVisual />
        </div>
      </div>
    </section>
  );
}

function MobileHeroVisual() {
  return (
    <div
      className="mt-10 grid grid-cols-[1fr_0.85fr] gap-4 lg:hidden"
      aria-hidden="true"
    >
      <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
        <p className="text-xs font-semibold uppercase text-accent">
          Вита-Грин
        </p>
        <p className="mt-3 text-2xl font-semibold text-ink">Комплекс</p>
        <div className="mt-6 h-2 rounded-full bg-accent/40" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-wash" />
      </div>
      <div className="grid place-items-center rounded-2xl border border-accent/20 bg-[#e5efe4] text-accent shadow-soft">
        <Droplets className="h-12 w-12" />
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48vw] max-w-[720px] lg:block"
      aria-hidden="true"
    >
      <div className="absolute left-[8%] top-[18%] h-[58%] w-[72%] rounded-full border border-accent/10 bg-white/28 blur-0" />
      <div className="absolute right-[9%] top-[16%] h-56 w-56 rounded-full border border-accent/20" />
      <div className="absolute right-[26%] top-[25%] h-72 w-px rotate-12 bg-accent/18" />
      <div className="absolute right-[18%] top-[31%] h-56 w-px -rotate-[28deg] bg-accent/18" />

      <div className="absolute right-[27%] top-[26%] h-[330px] w-[154px] rounded-[28px] border border-ink/10 bg-[#eef5e8] shadow-soft">
        <div className="mx-auto h-10 w-16 rounded-b-2xl bg-ink" />
        <div className="mx-5 mt-8 rounded-2xl border border-accent/20 bg-white p-4">
          <p className="text-xs font-semibold uppercase text-accent">
            Вита-Грин
          </p>
          <p className="mt-2 text-2xl font-semibold leading-none text-ink">
            Бор
          </p>
          <div className="mt-5 h-1.5 w-full rounded-full bg-wash" />
          <div className="mt-2 h-1.5 w-2/3 rounded-full bg-accent/45" />
        </div>
        <div className="absolute bottom-8 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border border-accent/20 bg-white">
          <Droplets className="h-7 w-7 text-accent" />
        </div>
      </div>

      <div className="absolute right-[8%] top-[38%] h-[280px] w-[132px] rounded-[24px] border border-ink/10 bg-white shadow-soft">
        <div className="mx-auto h-8 w-14 rounded-b-xl bg-accent" />
        <div className="mx-4 mt-8 rounded-2xl bg-[#f3f7ef] p-4">
          <p className="text-xs font-semibold uppercase text-accent">
            Комплекс
          </p>
          <p className="mt-2 text-[15px] font-semibold leading-tight text-ink">
            микро-
            <span className="block">элементы</span>
          </p>
        </div>
        <div className="absolute bottom-7 left-5 right-5 h-2 rounded-full bg-accent/20" />
      </div>

      <div className="absolute right-[49%] top-[47%] w-56 rounded-2xl border border-line bg-white/88 p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e5efe4] text-accent">
            <Leaf className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Схема питания</p>
            <p className="mt-1 text-xs text-graphite/62">
              культура · задача · этап
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          <span className="h-2 rounded-full bg-accent/45" />
          <span className="h-2 w-4/5 rounded-full bg-[#c9d8c5]" />
          <span className="h-2 w-2/3 rounded-full bg-wash" />
        </div>
      </div>

      <div className="absolute right-[42%] top-[18%] grid h-16 w-16 place-items-center rounded-full border border-accent/20 bg-white/86 shadow-soft">
        <Sparkles className="h-6 w-6 text-accent" />
      </div>
      <div className="absolute bottom-[18%] right-[18%] grid h-12 w-12 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
        Zn
      </div>
      <div className="absolute bottom-[31%] right-[3%] grid h-12 w-12 place-items-center rounded-full border border-accent/20 bg-white text-sm font-semibold text-accent">
        Mo
      </div>
    </div>
  );
}
