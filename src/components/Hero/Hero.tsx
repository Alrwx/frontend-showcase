/*
 * ============================================================================
 * Hero.tsx — THE BIG INTRO SECTION AT THE TOP
 * ============================================================================
 *
 * "Hero" is the common name for the large first section a visitor sees.
 * It usually has a headline, a short line of text, and a call-to-action (CTA)
 * button that tells the visitor what to do next.
 *
 * Where it appears: right below the navbar
 * Data it uses:     `profile` from src/data/content.ts
 * Styles:           Hero.module.css (same folder)
 * Used in:          src/app/page.tsx
 */

import { profile } from "@/data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    // id="top" lets the navbar's name link (href="#top") scroll back here.
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        {/* <p> = paragraph. A small "eyebrow" line above the headline. */}
        <p className={styles.greeting}>Hi, I&apos;m</p>
        {/* ^ &apos; is the HTML code for an apostrophe ('). React asks us to
              write it this way inside text to avoid confusing the code. */}

        {/* <h1> is the main heading. There should only be ONE <h1> per page. */}
        <h1 className={styles.name}>{profile.name}</h1>

        <p className={styles.tagline}>{profile.tagline}</p>

        {/* A link styled to look like a button. It scrolls to the Projects
            section, which has id="projects". */}
        <a href="#projects" className={styles.button}>
          View my work
        </a>
      </div>
    </section>
  );
}
