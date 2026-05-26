import { Building2, Factory, Handshake, Store, Warehouse } from "lucide-react";
import { audiences } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const icons = [Factory, Store, Warehouse, Building2, Handshake];

export function AudienceSection() {
  return (
    <section id="audience" className="section-y bg-white">
      <div className="section-shell">
        <SectionHeader
          kicker="Клиентские сценарии"
          title="Кому это полезно"
          text="У B2B-лендинга есть несколько разных аудиторий: агропроизводитель, дилер, тепличное хозяйство, фермер или партнёр. Им нужны разные аргументы, но один понятный путь к обращению."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {audiences.map((audience, index) => {
            const Icon = icons[index];

            return (
              <article
                key={audience.title}
                className="min-h-72 rounded-lg border border-line bg-paper p-5"
              >
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
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
