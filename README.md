# Eugene Chevski — Portfolio

A Next.js portfolio for Eugene's engineering work, built around the selected **Index** design: warm paper, vermilion typography, and an expandable editorial project index.

## Development

Requires Node.js 20 or newer.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

```sh
npm run lint
npm run build
npm start
```

## Content and structure

- `lib/constants.ts`: approved projects, technologies, dates, and skills.
- `components/index/`: homepage header, introduction, project disclosures, biography, and contact section.
- `app/globals.css`: visual tokens, browser surfaces, fold motion, and reduced-motion support.
- `app/layout.tsx`: local font loading, metadata, and analytics.
- `public/fonts/`: locally hosted Syne and DM Sans fonts with OFL licenses.
- `PRODUCT.md`: confirmed product context.
- `DESIGN.md` and `.impeccable/design.json`: implemented visual system.

The project index uses native named HTML disclosures: one project can open at a time, all may close, and content works without client JavaScript. Navigation uses native anchors. Reduced-motion preferences disable the folding animation.

## Design explorations

The three original working prototypes remain at `/prototypes/`: Signal, Index, and Atlas. Index was chosen for the homepage. Prototype previews can run independently using the instructions in `public/prototypes/README.md`.

## Validation

The implementation was compared with the selected Index prototype at desktop and phone widths. See `design-qa.md` for evidence, tested interactions, and limits.
