import type { Metadata } from "next";
import "./globals.css";

const title =
  "Лендинг для B2B-продукта: от сложной линейки к понятной заявке";
const description =
  "Обезличенный демо-кейс B2B-лендинга: структура, UX-логика, веб-дизайн и фронтенд-сборка для направления жидких микроудобрений.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rngoblin.github.io/agro-dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Демо-кейс B2B-лендинга",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/assets/demo-production-hero.png",
        width: 1200,
        height: 630,
        alt: "Демо-кейс B2B-лендинга для производственного направления"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
