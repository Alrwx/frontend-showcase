/*
 * ============================================================================
 * content.ts — ALL THE TEXT ON THE SITE LIVES HERE
 * ============================================================================
 *
 * Instead of typing words directly inside each component, we keep all of the
 * site's content (name, bio, jobs, projects, links) in this one file.
 *
 * Why?
 *   - To change what the site SAYS, you only edit this file.
 *   - The components (in src/components/) only decide how things LOOK.
 *   - This split between "content" and "presentation" is a very common pattern.
 *
 * Who uses this file?
 *   - Hero.tsx        -> uses `profile`
 *   - About.tsx       -> uses `profile`
 *   - Experiences.tsx -> uses `experiences`
 *   - Projects.tsx    -> uses `projects`
 *   - Navbar.tsx      -> uses `profile` and `navLinks`
 *   - Footer.tsx      -> uses `profile` and `socials`
 *
 * The word `export` in front of each value means "other files are allowed to
 * import (use) this". Without `export`, the value would be private to this file.
 */

/* ----------------------------------------------------------------------------
 * TYPES
 * ----------------------------------------------------------------------------
 * A "type" is a TypeScript description of what shape some data should have.
 * It's like a template or a form: "every Experience MUST have a role, an org,
 * dates, and a description, and they must all be text (string)".
 *
 * If you (or an AI) forget a field or misspell one, your editor will underline
 * it in red BEFORE you even run the site. That's the main benefit of TypeScript.
 *
 * Types don't show up on the website at all — they only exist to help us.
 */

export type Experience = {
  role: string; // job title, e.g. "Design Lead"
  org: string; // company / club name
  dates: string; // free text, e.g. "2024 – Present"
  description: string; // one or two sentences about what you did
};

export type Project = {
  title: string;
  description: string;
  tags: string[]; // `string[]` means "a list of strings", e.g. ["Figma", "React"]
  link: string; // URL the card links to
};

export type LinkItem = {
  label: string; // the text the visitor sees
  href: string; // where the link goes
};

/* ----------------------------------------------------------------------------
 * PROFILE — basic info about the person (or organization)
 * ----------------------------------------------------------------------------
 * This is an "object": a group of named values inside curly braces { }.
 * Each line is `name: value,`. Text values go inside quotes.
 */
export const profile = {
  name: "Alex Rivera",
  tagline: "Product designer & frontend developer who loves clean, simple interfaces.",
  bio: "I'm a student designer who enjoys turning messy ideas into clear, usable products. I spend most of my time in Figma and VS Code, and I'm especially interested in design systems, accessibility, and the space where design meets code.",
  email: "alex@example.com",
};

/* ----------------------------------------------------------------------------
 * NAV LINKS — the links in the top navigation bar
 * ----------------------------------------------------------------------------
 * This is an "array": a list of items inside square brackets [ ].
 *
 * `LinkItem[]` after the colon means "this is a list of LinkItem objects",
 * so TypeScript checks every item has a `label` and an `href`.
 *
 * The href values start with "#". "#about" means "scroll to the element on
 * this page that has id="about"". Each section component sets its own id.
 */
export const navLinks: LinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

/* ----------------------------------------------------------------------------
 * EXPERIENCES — shown in the Experiences section
 * ----------------------------------------------------------------------------
 * HOW TO ADD A NEW EXPERIENCE:
 *   1. Copy one whole block, from its opening `{` to its closing `},`
 *   2. Paste it where you want it in the list (order here = order on the page)
 *   3. Change the text inside the quotes
 * That's it! The Experiences component automatically makes a card for
 * every item in this list.
 */
export const experiences: Experience[] = [
  {
    role: "Design Lead",
    org: "ACM Design Team",
    dates: "2025 – Present",
    description:
      "Lead a team of designers creating branding, event graphics, and web experiences for the chapter.",
  },
  {
    role: "UX Design Intern",
    org: "Example Company",
    dates: "Summer 2025",
    description:
      "Redesigned the onboarding flow for a mobile app and ran usability tests with real users.",
  },
  {
    role: "Frontend Developer",
    org: "Campus Hackathon",
    dates: "2024",
    description:
      "Built the event website with React and worked with designers to turn mockups into code.",
  },
];

/* ----------------------------------------------------------------------------
 * PROJECTS — shown in the Projects section
 * ----------------------------------------------------------------------------
 * Same idea as experiences: copy a block, paste it, edit the text.
 * `tags` is a list, so it uses square brackets: ["One", "Two", "Three"]
 */
export const projects: Project[] = [
  {
    title: "Event Poster System",
    description: "A reusable set of poster templates so every ACM event looks consistent.",
    tags: ["Figma", "Branding"],
    link: "#",
  },
  {
    title: "Study Buddy App",
    description: "A mobile app concept that matches students into study groups by class.",
    tags: ["UX Research", "Prototyping"],
    link: "#",
  },
  {
    title: "Personal Portfolio",
    description: "This very website! Built with Next.js, React, and CSS Modules.",
    tags: ["Next.js", "React", "CSS"],
    link: "#",
  },
];

/* ----------------------------------------------------------------------------
 * SOCIALS — links shown in the footer
 * ----------------------------------------------------------------------------
 * "mailto:" links open the visitor's email app instead of a web page.
 * The `${ ... }` inside backticks ` ` is a "template string": it inserts the
 * value of profile.email into the text.
 */
export const socials: LinkItem[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: `mailto:${profile.email}` },
];
