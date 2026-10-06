# Workshop Exercises 🎨

Work through these in order. Each one builds on the last.

**Before you start:** make sure the site is running. In the VS Code terminal, run `npm run dev`, then open **http://localhost:3000**. Keep the browser and VS Code side by side. Every time you **save** a file (`Ctrl + S`), the browser updates by itself.

**Stuck?** Read the comments at the top of the file you're editing. They explain what everything does. You can also ask a neighbor, the presenter, or an AI (see the tips at the bottom).

---

## 🟢 Easy

### 1. Make it yours

Put your own info on the site.

- [ ] Open `src/data/content.ts`
- [ ] Find `profile` near the top
- [ ] Change `name`, `tagline` and `bio` to your own. Only change the text **inside the quotes**.
- [ ] Save

> 💡 **Hint:** Keep the quotes and the comma at the end of each line: `name: "Your Name",`

✅ **You'll know it worked when** your name shows up in the navbar, the hero, the footer, and as initials in the About circle. You only changed it in one place!

---

### 2. Change the brand color

- [ ] Open `src/app/globals.css`
- [ ] Find `:root` at the top. These are the site's **design tokens**, like Figma variables.
- [ ] Change `--color-accent` to a new hex color, for example `#9333ea` (purple) or `#059669` (green)
- [ ] Change `--color-accent-hover` to a slightly darker version of the same color
- [ ] Save

> 💡 **Hint:** Not sure what darker shade to use? Try a color picker like https://htmlcolorcodes.com, or ask an AI: "give me a darker hover shade of #9333ea".

✅ **You'll know it worked when** the hero button, nav link hover, project tags, About circle and experience stripes all change color at once.

---

## 🟡 Medium

### 3. Add a project

- [ ] Open `src/data/content.ts` and scroll down to `projects`
- [ ] Copy one whole project, from its opening `{` to its closing `},`
- [ ] Paste it right after the last project, before the `];`
- [ ] Change the `title`, `description` and `tags`
- [ ] Save

> 💡 **Hint:** `tags` is a list, so each tag goes in its own quotes, separated by commas: `tags: ["Figma", "Motion", "UI"],`

✅ **You'll know it worked when** a 4th project card appears in the grid. Notice you didn't touch any component. The `.map()` in `Projects.tsx` made the card for you.

---

### 4. Add an experience

- [ ] Same idea: in `content.ts`, find `experiences`
- [ ] Copy a whole block, paste it, and edit the `role`, `org`, `dates` and `description`
- [ ] Try putting it **first** in the list instead of last

✅ **You'll know it worked when** your new card shows up in the Experience section, in the position you put it in the list.

🔍 **Try this:** delete the `dates:` line from your new experience and save. What does VS Code do? Hover over the red underline and read the message. That's TypeScript telling you a card needs dates. Put the line back.

---

### 5. Reorder the sections

- [ ] Open `src/app/page.tsx`
- [ ] Move `<Projects />` so it comes **before** `<About />`
- [ ] Save, look at the site, then put it back

✅ **You'll know it worked when** the Projects section moves up the page.

> 🤔 **Think about it:** the navbar links still work after reordering. Why? *(Hint: look at what `href="#projects"` points to.)*

---

## 🔴 Stretch

### 6. Build a Contact section

This time you'll build a whole new component from scratch, the same way the others were made.

- [ ] Create a new folder: `src/components/Contact/`
- [ ] Inside it, create two files: `Contact.tsx` and `Contact.module.css`
- [ ] In `Contact.tsx`, build a `<section>` with:
  - `id="contact"` on the section
  - an `<h2>` that says "Contact"
  - a short sentence
  - a button-style link that opens an email: `href={`mailto:${profile.email}`}`
- [ ] Style it in `Contact.module.css`
- [ ] In `src/app/page.tsx`, **import** it and add `<Contact />` after `<Projects />`
- [ ] In `content.ts`, add `{ label: "Contact", href: "#contact" }` to `navLinks`

> 💡 **Hints:**
> - `About.tsx` is the closest example. Copy it into your new file and change it, instead of starting from a blank file.
> - Need a button? `Hero.module.css` already has a `.button` style you can copy.
> - Use the CSS variables (`var(--space-xl)`, `var(--color-accent)` …) so your section matches the rest of the site.

✅ **You'll know it worked when** "Contact" shows up in the navbar, and clicking it scrolls down to your new section.

---

### ⭐ Bonus: Dark theme

- [ ] In `globals.css`, change the color tokens so the background is dark and the text is light
- [ ] Look carefully at the whole page. One part didn't change with the tokens. Find it and fix it.

> 💡 **Hint:** Something has a color written directly in it instead of using a `var(--…)`. Try scrolling. Which part sits **on top of** everything?

✅ **You'll know it worked when** the entire page is dark, including the bar at the top.

---

## 🤖 Prompting AI: Cheat Sheet

Good prompts are **specific** and **name the file**.

| ❌ Vague                   | ✅ Specific                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| "Make the button bigger"   | "In `Hero.module.css`, make `.button` bigger: more padding and a larger font size"          |
| "Add a contact section"    | "Create a Contact component in `src/components/Contact/` following the same pattern as About, with a `.module.css` file. Add it to `page.tsx` after Projects and add a nav link." |
| "Change the text"          | "In `src/data/content.ts`, change the tagline in `profile` to …"                              |
| "Fix this"                 | "VS Code shows this error in `Experiences.tsx`: *(paste the error)*. What's wrong?"          |
| "Make it look better"      | "In `ProjectCard.module.css`, give cards a subtle colored border on hover using `var(--color-accent)`" |

**Ground rules for our site:**

1. Text goes in `content.ts`. Styles go in the component's `.module.css`.
2. Use the CSS variables from `globals.css` instead of making up new colors or sizes.
3. Read what the AI changed, and ask it to explain anything you don't understand.
4. Run `npm run build` before sharing. If it says ✓, you're good.
