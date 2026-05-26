import type { Metadata } from "next";
import "./globals.css";

const title =
  "B2B landing concept for liquid micronutrient fertilizers | Portfolio demo";
const description =
  "Обезличенный demo landing page для портфолио: структура, UX-логика, веб-дизайн и фронтенд-сборка B2B-направления жидких микроудобрений.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Liquid Concept Demo",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/assets/demo-production-hero.png",
        width: 1200,
        height: 630,
        alt: "Demo B2B landing concept placeholder"
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
