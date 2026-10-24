# Portfolio explorations

Three independent, disposable prototypes for choosing a portfolio redesign. The current Next.js homepage is unchanged.

- `index.html`: comparison hub.
- `signal.html`: live parametric signal, project selector, amplitude slider, pause/resume.
- `index-fold.html`: editorial project index with native keyboard-accessible disclosure rows and folding transitions.
- `atlas.html`: project relationship field, project detail panel, and alternate list navigation.

All use approved project content and contact links, local fonts, CSS responsive layouts, native links/buttons, visible focus, and reduced-motion support. The signal is explicitly synthetic; atlas connections are illustrative, not business dependencies. No external services, tracking, new packages, or image downloads are required at runtime.

Preview from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:4173/prototypes/`. These files can also be served by the existing Next.js app under `/prototypes/`.

Fonts come from Google Fonts (Familjen Grotesk, Syne, DM Sans); their OFL licenses are included in `assets/`.

No final direction has been selected. Durable product truth remains in root `PRODUCT.md`; the exploration brief is `.impeccable/prototypes/BRIEF.md`. Do not promote these alternatives to the global design system until a direction is chosen.
