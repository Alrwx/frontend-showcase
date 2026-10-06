# Frontend Showcase: One-Page Portfolio

A simple one-page portfolio built with **Next.js**, **React**, **TypeScript**, and **CSS Modules**. It's made for learning how the pieces of a website fit together.

Every file has detailed comments explaining what it does. Open them up and read along!

---

## Running the site

You need [Node.js](https://nodejs.org) installed (version 20.9 or newer).

```bash
npm install      # first time only: downloads the project's dependencies
npm run dev      # starts the site locally
```

Then open **http://localhost:3000** in your browser. Whenever you save a file, the page updates automatically.

To stop the server, press `Ctrl + C` in the terminal.

---

## How the project is organized

```
src/
├── app/
│   ├── layout.tsx      → The frame around every page (font, <html>, tab title)
│   ├── page.tsx        → ⭐ THE HOMEPAGE: lists the components in order
│   └── globals.css     → Site-wide styles + design tokens (colors, spacing)
│
├── components/         → Each section of the page is its own component
│   ├── Navbar/         → Top navigation bar
│   ├── Hero/           → Big intro with name + button
│   ├── About/          → Photo + bio
│   ├── Experiences/    → List of jobs (uses ExperienceCard for each one)
│   ├── Projects/       → Grid of projects (uses ProjectCard for each one)
│   └── Footer/         → Copyright + social links
│
└── data/
    └── content.ts      → ALL the text on the site lives here
```

Each component folder contains:

- **`Name.tsx`**: the structure and content (what it *is*)
- **`Name.module.css`**: the styles (how it *looks*), which only apply to that component

### The big idea

```
page.tsx
 ├── <Navbar />
 ├── <Hero />
 ├── <About />
 ├── <Experiences />  ──loops over──▶  <ExperienceCard /> × 3
 ├── <Projects />     ──loops over──▶  <ProjectCard />   × 3
 └── <Footer />
          ▲
          └── all of them read their text from data/content.ts
```

A website is just **components stacked together**, and each one gets its **content from data**. Same idea as Figma: components, variants, and styles.

---

## How do I...?

| I want to...                         | Edit this file                                                    |
| ------------------------------------ | ----------------------------------------------------------------- |
| Change my name, bio, or tagline      | `src/data/content.ts` → `profile`                                 |
| Add/remove a job or project          | `src/data/content.ts` → copy/paste an entry in the list           |
| Change the brand color or spacing    | `src/app/globals.css` → the variables in `:root`                  |
| Reorder or remove a section          | `src/app/page.tsx` → move/delete the component line               |
| Change how one section looks         | That component's `.module.css` file                               |
| Change the browser tab title         | `src/app/layout.tsx` → `metadata`                                 |
| Use a real photo                     | See the comment in `src/components/About/About.tsx`               |

### Adding a brand-new section

1. Create a folder, e.g. `src/components/Contact/`
2. Add `Contact.tsx` and `Contact.module.css` (copy an existing component like `About` as a starting point)
3. In `src/app/page.tsx`, import it and add `<Contact />` where you want it to appear
4. Optional: give its `<section>` an `id="contact"` and add `{ label: "Contact", href: "#contact" }` to `navLinks` in `content.ts`

---

## Tips for building with AI

- Point the AI at the specific file you want changed (e.g. "In `Hero.module.css`, make the button bigger").
- Keep text in `content.ts` and styles in `.module.css` files. Ask the AI to follow the same pattern.
- If your editor underlines something in **red**, TypeScript caught a mistake. Paste the error to the AI.
- Run `npm run build` before sharing to make sure everything still works.

---

## Learn more

- [Next.js docs](https://nextjs.org/docs)
- [React: Your First Component](https://react.dev/learn/your-first-component)
- [CSS Tricks: A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks: A Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
