import { Flower2, Leaf, Sprout, Sun, ThermometerSun, Warehouse } from "lucide-react";
import { taskCards } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const icons = [Leaf, Sprout, Flower2, ThermometerSun, Warehouse, Sun];

export function ProblemSection() {
  return (
    <section id="tasks" className="section-y bg-white">
      <div className="section-shell">
        <SectionHeader
          kicker="Задачи"
          title="Для каких задач"
          text="Линейка Вита-Грин помогает выстроить питание растений под конкретную ситуацию: дефицит микроэлементов, стресс, активный рост, цветение, плодоношение или восстановление после неблагоприятных условий."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {taskCards.map((task, index) => {
            const Icon = icons[index];

            return (
              <article
                key={task.title}
                className="group min-h-64 rounded-lg border border-line bg-paper p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:bg-white hover:shadow-soft"
              >
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-lg border border-accent/20 bg-white text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold leading-snug text-ink">
                  {task.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-graphite/72">
                  {task.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
