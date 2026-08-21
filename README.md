# ЭСТ — сайт (Next.js + React + TypeScript)

Лендинг с hero-секцией и контактной формой, сверстанный по мотивам присланного
макета, на белом фоне.

## Стек

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules (без Tailwind/сторонних UI-китов)

## Запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

## Структура

```
app/
  layout.tsx        — шрифты (Fraunces / Inter / IBM Plex Mono), метаданные
  page.tsx           — сборка страницы: Hero + ContactSection + Footer
  globals.css        — цветовые и типографические токены (:root)
  api/contact/route.ts — заглушка API для формы (см. ниже)
components/
  Header.tsx          — навигация + мобильное меню-бургер
  Hero.tsx             — hero-секция
  HouseIllustration.tsx— фирменная SVG-иллюстрация дома (анимация «прорисовки»)
  ContactForm.tsx      — форма с валидацией на клиенте
  ContactSection.tsx   — секция «Контакты» (инфо + форма)
  Footer.tsx
```

## Контактная форма

Форма отправляет POST на `/api/contact`. Сейчас этот route просто логирует
данные на сервере (`console.log`) и возвращает `{ ok: true }` — это заглушка,
чтобы форма была рабочей «из коробки» без сторонних сервисов.

Чтобы реально получать заявки, замените TODO в `app/api/contact/route.ts` на:

- отправку письма (Resend, Nodemailer + SMTP);
- запись в Telegram-бота (учитывая ваш стек — это, вероятно, самый быстрый
  вариант: `fetch` на `https://api.telegram.org/bot<token>/sendMessage`);
- запись в CRM / Google Sheets.

## Изображение в hero

В оригинальном макете фон hero — растровое фото (`Gemini_Generated_Image...jpeg`),
которого не было в переданных файлах. Чтобы не блокировать вёрстку и не
использовать чужой сток-контент, фон сделан собственной лёгкой SVG-иллюстрацией
дома с анимацией прорисовки при загрузке (`components/HouseIllustration.tsx`).

Если у вас есть реальное фото объекта, его легко подставить: добавьте файл в
`public/`, замените `<HouseIllustration />` в `components/Hero.tsx` на
`<Image src="/your-photo.jpg" alt="…" fill style={{ objectFit: "cover" }} />`
(компонент `next/image`) и уберите/оставьте SVG как декоративный слой поверх.

## Адаптивность

- Навигация схлопывается в бургер-меню на ширинах ≤ 900px.
- Кнопки и форма переходят в одну колонку на ≤ 640px.
- Заголовки и отступы используют `clamp()` для плавного масштабирования.
