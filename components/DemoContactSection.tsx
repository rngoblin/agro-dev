"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeader } from "./SectionHeader";

export function DemoContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section-y bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Форма заявки"
              title="Запросить консультацию по продуктовой линейке"
              text="Демонстрационный сценарий показывает, как пользователь может оставить контекстную заявку: компания, задача, контакт и комментарий."
              tone="dark"
            />
            <p className="mt-8 rounded-lg border border-white/12 bg-white/[0.06] p-5 text-sm leading-6 text-white/72">
              Демо-форма: данные не отправляются и не сохраняются.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 text-graphite shadow-soft md:p-7">
            {submitted ? (
              <div
                className="mb-6 rounded-lg border border-accent/30 bg-wash p-4 text-ink"
                role="status"
              >
                Данные не отправлены. Это демонстрационный сценарий заявки.
              </div>
            ) : null}

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Имя
                  <input
                    className="field"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Компания
                  <input className="field" name="company" type="text" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Телефон или email
                <input
                  className="field"
                  name="contact"
                  type="text"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Комментарий
                <textarea
                  className="field min-h-28 resize-y"
                  name="comment"
                  placeholder="Например: культура, задача, сезонность или запрос на консультацию"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent focus:outline-none focus-visible:shadow-focus"
              >
                Показать сценарий отправки
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="text-sm leading-6 text-graphite/64">
                Демо-форма: данные не отправляются и не сохраняются.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
