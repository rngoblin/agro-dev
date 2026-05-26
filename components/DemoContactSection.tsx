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
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            kicker="Заявка"
            title="Подобрать решение"
            text="Оставьте задачу, культуру и контакт — специалист поможет определить, какие продукты линейки могут подойти."
            tone="dark"
          />

          <div className="rounded-lg bg-white p-5 text-graphite shadow-soft md:p-7">
            {submitted ? (
              <div
                className="mb-6 rounded-lg border border-accent/30 bg-wash p-4 text-sm leading-6 text-ink"
                role="status"
              >
                Заявка сформирована в демо-режиме. В реальном проекте форма
                может быть подключена к почте, CRM или Telegram.
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
                  Компания / хозяйство
                  <input className="field" name="company" type="text" />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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
                  Культура
                  <input
                    className="field"
                    name="culture"
                    type="text"
                    placeholder="Например: томаты, зерновые, яблоня"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Задача
                <input
                  className="field"
                  name="task"
                  type="text"
                  placeholder="Дефицит, рост, стресс, цветение, завязь"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Комментарий
                <textarea
                  className="field min-h-28 resize-y"
                  name="comment"
                  placeholder="Опишите формат хозяйства, этап развития растения или вопрос по линейке"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent focus:outline-none focus-visible:shadow-focus"
              >
                Отправить заявку
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
