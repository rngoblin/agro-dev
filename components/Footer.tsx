import Link from "next/link";

const footerNav = [
  { label: "Линейка", href: "/#products" },
  { label: "Задачи", href: "/#tasks" },
  { label: "Культуры", href: "/#cultures" },
  { label: "Партнерам", href: "/#partners" },
  { label: "Заявка", href: "/#contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-semibold text-white">
              ВГ
            </span>
            <span className="grid leading-none">
              <span className="text-base font-semibold">Вита-Грин</span>
              <span className="mt-1 text-xs uppercase text-graphite/60">
                питание растений
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-6 text-graphite/70">
            Жидкие удобрения и микроэлементные комплексы для питания растений.
          </p>
          <p className="mt-5 text-xs leading-5 text-graphite/52">
            Концептуальный проект для портфолио. Бренд вымышлен.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Навигация</h3>
          <ul className="mt-4 grid gap-2 text-sm text-graphite/70">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-accent" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Автор</h3>
          <p className="mt-4 text-sm leading-6 text-graphite/70">
            Дизайн и фронтенд: Никита Мичурин
          </p>
          <Link
            href="/case"
            className="mt-4 inline-flex text-sm font-semibold text-accent transition hover:text-ink"
          >
            Смотреть описание кейса
          </Link>
        </div>
      </div>
    </footer>
  );
}
