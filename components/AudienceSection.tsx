import {
  Building2,
  Factory,
  Handshake,
  Home,
  Store,
  Warehouse
} from "lucide-react";
import { audiences } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const icons = [Factory, Warehouse, Building2, Store, Handshake, Home];

export function AudienceSection() {
  return (
    <section id="audience" className="section-y bg-white">
      <div className="section-shell">
        <SectionHeader
          kicker="Аудитории"
          title="Кому подходит Вита-Грин"
          text="Линейка должна быть понятна и хозяйству, и дилеру, и садовому центру: разные задачи ведут к одному простому сценарию подбора решения."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = icons[index];

            return (
              <article
                key={audience.title}
                className="group min-h-60 rounded-lg border border-line bg-paper p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:bg-white hover:shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-accent/20 bg-white text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-snug text-ink">
                  {audience.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-graphite/72">
                  {audience.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
