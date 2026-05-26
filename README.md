# B2B landing concept for liquid micronutrient fertilizers

Обезличенный демонстрационный лендинг-кейс для портфолио веб-дизайнера/фронтенд-разработчика.

Проект показывает, как можно переупаковать сложный производственный B2B-продукт в современный landing page: ясный первый экран, структурированная продуктовая линейка, понятный путь к заявке, адаптивная сетка и спокойная визуальная система.

Важно: это demo portfolio case, а не официальный сайт компании.

## Стек

- Next.js
- React
- Tailwind CSS
- Static generation
- Demo form без серверной отправки

## Запуск локально

```bash
npm install
npm run dev
```

Открыть локально:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
```

## Проверка качества

```bash
npm run lint
```

## Деплой на Vercel

1. Загрузить проект в GitHub/GitLab/Bitbucket.
2. В Vercel выбрать `Add New Project`.
3. Импортировать репозиторий.
4. Framework preset: `Next.js`.
5. Build command: `npm run build`.
6. Install command: `npm install`.
7. Нажать `Deploy`.
8. После деплоя заменить `metadataBase` в `app/layout.tsx` на публичный URL проекта.

## Деплой на Netlify

1. Загрузить проект в GitHub/GitLab/Bitbucket.
2. В Netlify выбрать `Add new site` → `Import an existing project`.
3. Build command: `npm run build`.
4. Publish directory: `.next`.
5. Для полноценной поддержки Next.js использовать стандартную интеграцию Netlify для Next.js.
6. После деплоя заменить `metadataBase` в `app/layout.tsx` на публичный URL проекта.

## Страницы

- `/` — demo landing page.
- `/case` — описание portfolio case: задача, подход, структура, визуальное решение, улучшения, роль исполнителя.

## Public demo URL

```text
Добавить после деплоя на Vercel или Netlify.
```

## Demo / placeholder данные

Проект не использует реальные финансовые показатели, клиентов, договорные условия, прайс-листы, внутренние документы или производственные детали.

Подробный список: [DEMO_DATA.md](./DEMO_DATA.md).

## Короткое описание для портфолио

См. [PORTFOLIO_CASE.md](./PORTFOLIO_CASE.md).
