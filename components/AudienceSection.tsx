import { Building2, Factory, Handshake, Store, Warehouse } from "lucide-react";
import { audiences } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const icons = [Factory, Store, Warehouse, Building2, Handshake];

export function AudienceSection() {
  return (
    <section id="audience" className="section-y bg-white">
      <div className="section-shell">
        <SectionHeader
          kicker="Audience"
          title="Для кого рассчитан такой лендинг"
          text="Вместо одного общего сообщения страница показывает несколько B2B-сценариев входа: покупка, дилерство, консультация, партнёрство."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience, index) => {
            const Icon = icons[index];

            return (
              <article
                key={audience}
                className="rounded-lg border border-line bg-paper p-5"
              >
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-8 text-lg font-semibold leading-snug text-ink">
                  {audience}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
