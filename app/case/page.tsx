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
              Портфолио-кейс
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Вита-Грин — концепт лендинга для бренда жидких удобрений
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">
              Вита-Грин — вымышленный бренд, созданный как демонстрационный
              проект для портфолио. Задача кейса — показать, как нишевый
              агро-продукт можно упаковать в понятный лендинг: с продуктовой
              линейкой, разными аудиториями, консультационным сценарием и
              формой заявки.
            </p>
          </div>
        </section>

        <CaseOverview />
      </main>
      <Footer />
    </>
  );
}
