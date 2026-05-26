import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CaseOverview } from "@/components/CaseOverview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function CasePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-24 text-white">
          <div className="section-shell">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Назад к лендингу
            </Link>
            <p className="mt-12 text-xs font-semibold uppercase text-white/56">
              Демо-кейс для портфолио · не является официальным сайтом компании
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Описание кейса: лендинг для B2B-направления жидких микроудобрений
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">
              Обезличенный кейс о структуре, UX-логике, визуальной системе и
              фронтенд-сборке демонстрационного B2B-лендинга.
            </p>
          </div>
        </section>

        <CaseOverview />
      </main>
      <Footer />
    </>
  );
}
