import type { Metadata } from "next";
import "./globals.css";

const title = "Вита-Грин — жидкие удобрения для питания растений";
const description =
  "Концепт коммерческого лендинга бренда Вита-Грин: жидкие удобрения, микроэлементные комплексы, подбор решения под культуру и задачу.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rngoblin.github.io/agro-dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Вита-Грин",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/assets/demo-production-hero.png",
        width: 1200,
        height: 630,
        alt: "Вита-Грин — жидкие удобрения и микроэлементные комплексы"
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
