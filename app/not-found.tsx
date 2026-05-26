import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="section-y bg-ink text-white">
          <div className="section-shell">
            <p className="text-xs font-semibold uppercase text-white/56">
              Страница не найдена
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Такой страницы на сайте Вита-Грин нет
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              Вернитесь к лендингу, чтобы посмотреть линейку, задачи и форму
              подбора решения.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-accent hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                На главную
              </Link>
              <Link
                href="/case"
                className="inline-flex items-center justify-center rounded-full border border-white/28 px-6 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Описание кейса
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
