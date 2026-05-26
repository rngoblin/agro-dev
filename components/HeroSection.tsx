import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { trustMarkers } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <Image
        src="/assets/demo-production-hero.png"
        alt="Abstract production context placeholder"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 grayscale"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,19,20,0.96)_0%,rgba(18,19,20,0.82)_48%,rgba(18,19,20,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(247,247,243,0)_0%,rgba(247,247,243,0.98)_100%)]" />

      <div className="section-shell relative flex min-h-[78svh] flex-col justify-end pb-14 pt-24">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase text-white/72">
            Demo case · not an official company website
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl xl:text-7xl">
            Концепт лендинга для B2B-направления жидких микроудобрений
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/84 md:text-xl md:leading-9">
            Жидкие микроудобрения для B2B-поставок и агропроизводителей:
            понятная продуктовая линейка, ясная структура и быстрый путь к
            заявке.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-accent hover:text-white"
            >
              Открыть demo form
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/28 px-6 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Смотреть структуру решения
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-9 grid max-w-4xl gap-3 sm:grid-cols-3">
          {trustMarkers.map((marker) => (
            <p
              key={marker}
              className="border-l border-white/28 pl-4 text-sm leading-6 text-white/72"
            >
              {marker}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
