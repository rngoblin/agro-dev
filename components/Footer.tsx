import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-ink text-xs font-semibold uppercase">
              B2B
            </span>
            <span className="grid leading-none">
              <span className="text-base font-semibold">B2B-лендинг</span>
              <span className="mt-1 text-xs uppercase text-graphite/60">
                демо-кейс
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-6 text-graphite/70">
            Демо-кейс для портфолио Никиты Мичурина. Не является официальным
            сайтом компании. В проекте не используются реальные цены, клиенты,
            производственные данные, договоры или внутренние документы.
          </p>
        </div>

        <FooterColumn
          title="Страницы"
          items={[
            { label: "Лендинг", href: "/" },
            { label: "Описание кейса", href: "/case" }
          ]}
        />
        <FooterColumn
          title="Стек"
          items={[
            { label: "Next.js", href: "https://nextjs.org" },
            { label: "React", href: "https://react.dev" },
            { label: "Tailwind CSS", href: "https://tailwindcss.com" }
          ]}
        />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm text-graphite/70">
        {items.map((item) => (
          <li key={item.href}>
            {item.href.startsWith("/") ? (
              <Link className="transition hover:text-ink" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <a className="transition hover:text-ink" href={item.href}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
