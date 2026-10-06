# Workshop Speaker Notes

**Audience:** design team members with little coding experience, who will build mostly with AI help.
**Length:** about 75–80 minutes.
**Goal:** members leave understanding how a site is put together (components, data, styles, layout) and can make changes with confidence.

**Slides:** the deck follows these same 8 sections. Slide numbers are in brackets, e.g. [4].
**Handout:** `EXERCISES.md`. The answers are at the bottom of this file.

---

## Before the workshop

- [ ] Members have **Node.js 20.9+** and **VS Code** installed
- [ ] Members have the project folder and have run `npm install` *(it can take about 4 minutes, so do it ahead of time if you can)*
- [ ] On your machine: `npm run dev` is running and http://localhost:3000 loads
- [ ] VS Code and the browser are side by side, and the font size is bumped up for the projector (`Ctrl + =`)
- [ ] The repo is clean. Every demo below has an **undo** step.

---

## 1. The big idea (5 min) · slides [1–4]

**Key point:** A website is just components stacked in order, like frames in a Figma file.

**Open:** the site in the browser → [src/app/page.tsx](src/app/page.tsx)

**Talking points**
- Scroll through the site and name each section out loud: navbar, hero, about, experience, projects, footer.
- Slide [3] is the map for the day: Figma component → React component, variants → props, variables → CSS variables, Auto Layout → Flexbox.
- `page.tsx` has no text and no styles. It's just a list.

**Live demo**
1. In `page.tsx`, cut the `<Projects />` line and paste it above `<About />`. Save.
2. The page reorders instantly, with no refresh.
3. **Undo:** move it back.

**Likely questions**
- *"What's `<main>`?"* A regular HTML tag. Capitalized tags (`<Hero />`) are our components. Lowercase ones are built-in HTML.
- *"What are `<>` and `</>`?"* An invisible wrapper. A component has to return one thing.

---

## 2. Folder tour (5 min) · slide [5]

**Key point:** Only three folders matter: `app/`, `components/`, `data/`.

**Open:** the VS Code file explorer, and [README.md](README.md) for the full map

**Talking points**
- `app/`: Next.js reads file names. `page.tsx` is the homepage (`/`). `layout.tsx` wraps every page (font, `<html>`, tab title).
- `components/`: one folder per section, each with a `.tsx` file (what it is) and a `.module.css` file (how it looks).
- `data/content.ts`: every word on the site.
- Everything else (`package.json`, `next.config.ts`, `node_modules/`) is setup. **Never edit `node_modules/`.**

**Likely questions**
- *"How would I add a second page?"* Create `src/app/blog/page.tsx` and it becomes `/blog`. That's file-based routing.

---

## 3. Anatomy of a component (10 min) · slides [6–7]

**Key point:** A component is a function that returns HTML-like markup. The words come from data.

**Open:** [Hero.tsx](src/components/Hero/Hero.tsx) → [content.ts](src/data/content.ts)

**Talking points.** Walk through Hero.tsx top to bottom:
1. **Imports:** bring in the content (`profile`) and the styles (`styles`).
2. **A function:** `export default function Hero()`. The name must start with a capital letter.
3. **It returns JSX:** looks like HTML. `className` is just HTML's `class`, renamed because `class` means something else in JavaScript.
4. **Curly braces:** `{profile.name}` means "insert this value here".
- The slide version is simplified. The real file has an extra wrapper `<div>` and more comments, but it has the same four parts.

**Live demo**
1. In `content.ts`, change `tagline` to something funny. Save, and the Hero updates.
2. Change `name` to your own name. It updates in **four places** at once (navbar, hero, About initials, footer).
3. **Undo** both.

**Likely questions**
- *"Why `&apos;` in `Hi, I&apos;m`?"* React's linter asks for apostrophes in text to be written this way. You can mention it, but it's not important.
- *"Why keep text in a separate file?"* You can change words without touching the layout, and it's much safer for AI edits.

---

## 4. Styling: tokens and CSS Modules (10 min) · slides [8–9]

**Key point:** Design tokens live in one place. Each component's styles are private to it.

**Open:** [globals.css](src/app/globals.css) → [Hero.module.css](src/components/Hero/Hero.module.css) → browser DevTools

**Talking points**
- `:root { --color-accent: … }` are the same as Figma variables. You use them with `var(--color-accent)`.
- `globals.css` holds only site-wide things: tokens, a reset, and base styles. Everything else lives next to its component.
- **CSS Modules:** `.button` in `Hero.module.css` is used as `styles.button` in `Hero.tsx`. Next.js renames it to something unique, so a `.button` in Hero can never clash with a `.button` somewhere else.
- In Hero.module.css, point out `clamp()` on the name: the text resizes with the screen, never smaller or bigger than set limits.

**Live demo**
1. In `globals.css`, change `--color-accent: #2563eb` to `#9333ea`, and `--color-accent-hover: #1d4ed8` to `#7e22ce`. Save.
2. The hero button, nav hover, project tags, About circle and experience stripes all turn purple.
3. Right-click the "View my work" button → **Inspect**. Show the class name: something like `Hero-module__xxxx__button`.
4. **Undo** both colors.

**Likely questions**
- *"What's `rem`?"* A size relative to the base font size. 1rem = 16px by default. It's used so text scales if someone changes their browser font size.
- *"Why not Tailwind?"* Plain CSS teaches the fundamentals, and it's easy to read. Tailwind is a valid choice to look at later.

---

## 5. Layout: Flexbox and Grid (10 min) · slides [10–11]

**Key point:** Flexbox is Auto Layout. Grid with `auto-fit` is responsive with no extra code.

**Open:** [Navbar.module.css](src/components/Navbar/Navbar.module.css) → [Projects.module.css](src/components/Projects/Projects.module.css) → [About.module.css](src/components/About/About.module.css)

**Talking points**
- `.nav` maps onto Figma's Auto Layout panel: `display: flex` turns it on, `justify-content: space-between` sets the distribution, `align-items: center` sets the alignment, and `gap` sets the spacing.
- `.grid` uses `repeat(auto-fit, minmax(260px, 1fr))`: "fit as many columns as you can, each at least 260px wide."
- `position: sticky` on the navbar keeps it pinned to the top while you scroll.
- About uses a **media query** to stack the photo above the text on phones (`flex-direction: column`).

**Live demo**
1. Drag the browser window narrow, then wide. The project cards go 3 → 2 → 1 columns.
2. Open DevTools → device toolbar (`Ctrl + Shift + M`) → pick a phone. The About photo stacks above the text.
3. *(Optional)* In `Navbar.module.css`, change `justify-content: space-between` to `center`. The name and links bunch up in the middle. **Undo.**

---

## 6. Props and lists (10 min) · slides [12–13]

**Key point:** One card design, filled with different content each time (props), repeated for every item in a list (`.map()`).

**Open:** [ExperienceCard.tsx](src/components/Experiences/ExperienceCard.tsx) → [Experiences.tsx](src/components/Experiences/Experiences.tsx) → [Projects.tsx](src/components/Projects/Projects.tsx)

**Talking points**
- Props are like the properties panel of a Figma component instance.
- `type Props = Experience` tells TypeScript exactly which props the card needs.
- `experiences.map(...)` turns each item in the list into an `<ExperienceCard />`. Three items give you three cards.
- `key` helps React tell the cards apart. Every list item needs a unique one.
- `Projects.tsx` does the same thing with the `{...project}` shortcut, which passes every field as a prop. Compare it with Experiences, which passes each prop the long way.

**Live demo**
1. In `Experiences.tsx`, delete the line `role={exp.role}`. Save.
2. VS Code underlines `ExperienceCard` in red. Hover over it: *"Property 'role' is missing…"*. **This is TypeScript catching a mistake, including the AI's mistakes.**
3. **Undo.**
4. In `content.ts`, copy a whole experience block, paste it, change the role, save. A 4th card appears.
5. **Undo** (or leave it in, since exercise 4 asks for the same thing).

---

## 7. Hands-on (15–20 min) · slide [14]

Everyone opens **`EXERCISES.md`**. Walk around and help.

- Most people should finish **Easy** and most of **Medium**.
- Point fast finishers at **Stretch** (Contact section) and the **Bonus** (dark theme).
- When someone has a red underline, read the error with them. It usually names the problem exactly.
- Common mistakes: deleting a quote or a comma in `content.ts`, editing the wrong file, or forgetting to save.

---

## 8. Working with AI (5 min) · slides [15–16]

**Key point:** This codebase becomes the org's real site, and these habits keep it clean.

1. **Name the file** in your prompt.
2. **Keep the pattern:** words go in `content.ts`, styles go in `.module.css` files, and colors and sizes come from the tokens.
3. **Red means read:** paste the error to the AI.
4. **Build before you share:** `npm run build`.

The prompting cheat sheet at the bottom of `EXERCISES.md` has good and bad prompt examples. End with Q&A.

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `Port 3000 is in use` | Another dev server is already running. Close the other terminal, or use the URL it prints (e.g. `localhost:3001`). |
| Page doesn't update | Did you save? Check the terminal for an error. If it's still stuck, refresh the browser. |
| Red error screen in the browser | Read the first line, since it names the file and line. Usually it's a missing quote, comma, or closing tag. Undo with `Ctrl + Z`. |
| Red underline in VS Code | Hover over it to read the message. Often it's a typo in a prop name or a missing field in `content.ts`. |
| `npm install` fails | Check `node -v`: it needs **20.9 or newer**. Delete `node_modules` and try again. |
| `'next' is not recognized` | `npm install` hasn't been run in this folder yet. |
| Styles not applying | Check that the class in the `.tsx` (`styles.foo`) matches the name in the `.module.css` (`.foo`) exactly. |

---

## Answer key

### 1. Make it yours
Edit `profile` in `src/data/content.ts`:
```ts
export const profile = {
  name: "Jordan Lee",
  tagline: "Visual designer who loves bold type.",
  bio: "I'm a second-year design student…",
  email: "jordan@example.com",
};
```

### 2. Change the brand color
In `src/app/globals.css`:
```css
--color-accent: #9333ea;
--color-accent-hover: #7e22ce;
```

### 3. Add a project
Add to the `projects` array in `content.ts`:
```ts
  {
    title: "Club Merch Redesign",
    description: "New t-shirt and sticker designs for the ACM chapter.",
    tags: ["Illustration", "Print"],
    link: "#",
  },
```

### 4. Add an experience
Add to the `experiences` array (put it first to make it show first):
```ts
  {
    role: "Graphic Designer",
    org: "Student Newspaper",
    dates: "2023 – 2024",
    description: "Designed weekly page layouts and infographics.",
  },
```
The "try this" part: removing `dates:` shows *"Property 'dates' is missing in type…"*.

### 5. Reorder sections
In `page.tsx`, move `<Projects />` above `<About />`. The nav links still work because they point at each section's `id`, not at its position on the page.

### 6. Contact section

**`src/components/Contact/Contact.tsx`**
```tsx
import { profile } from "@/data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.text}>Want to work together? Send me an email.</p>
        <a href={`mailto:${profile.email}`} className={styles.button}>
          Say hello
        </a>
      </div>
    </section>
  );
}
```

**`src/components/Contact/Contact.module.css`**
```css
.contact {
  padding: var(--space-xl) var(--space-md);
  text-align: center;
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.heading {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}

.text {
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-accent);
  color: #ffffff;
  font-weight: 600;
  border-radius: var(--radius);
  transition: background 0.2s;
}

.button:hover {
  background: var(--color-accent-hover);
}
```

**`src/app/page.tsx`**: add the import and the component:
```tsx
import Contact from "@/components/Contact/Contact";
// …
        <Projects />
        <Contact />
      </main>
```

**`src/data/content.ts`**: add to `navLinks`:
```ts
  { label: "Contact", href: "#contact" },
```

### ⭐ Bonus: Dark theme
In `globals.css`:
```css
--color-bg: #0f172a;
--color-bg-alt: #1e293b;
--color-text: #f1f5f9;
--color-text-muted: #94a3b8;
--color-border: #334155;
```
**The catch:** the navbar stays white, because `Navbar.module.css` hard-codes its background as `rgba(255, 255, 255, 0.85)`. Change it to `rgba(15, 23, 42, 0.85)`, the dark background at 85% opacity.

**Teaching moment:** this is exactly why tokens matter. Any value typed directly into a file, instead of coming from a variable, gets left behind when the theme changes.
