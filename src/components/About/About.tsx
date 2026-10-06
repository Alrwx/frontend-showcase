/*
 * ============================================================================
 * About.tsx — THE "ABOUT ME" SECTION
 * ============================================================================
 *
 * Where it appears: below the Hero
 * Data it uses:     `profile` from src/data/content.ts
 * Styles:           About.module.css (same folder)
 * Used in:          src/app/page.tsx
 */

import { profile } from "@/data/content";
import styles from "./About.module.css";

export default function About() {
  // Normal JavaScript can run here, BEFORE the `return`.
  // This takes the first letter of each word in the name: "Alex Rivera" -> "AR".
  //   .split(" ")  -> ["Alex", "Rivera"]
  //   .map(...)    -> ["A", "R"]
  //   .join("")    -> "AR"
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    // id="about" is what the navbar's "About" link (href="#about") scrolls to.
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        {/* <h2> = a section heading (one level below the page's <h1>). */}
        <h2 className={styles.heading}>About</h2>

        {/* A two-column layout: photo on the left, text on the right. */}
        <div className={styles.content}>
          {/*
            PLACEHOLDER PHOTO: a colored circle with initials.
            To use a real photo:
              1. Put the image in the /public folder, e.g. public/me.jpg
              2. Add at the top of this file:  import Image from "next/image";
              3. Replace this <div> with:
                 <Image src="/me.jpg" alt="Photo of me" width={200} height={200} className={styles.photo} />
            Next.js's <Image> automatically resizes and optimizes your photo.
          */}
          <div className={styles.photo} aria-hidden="true">
            {initials}
          </div>
          {/* aria-hidden="true" tells screen readers to skip this, since
              it's just decoration and the name is already on the page. */}

          <p className={styles.bio}>{profile.bio}</p>
        </div>
      </div>
    </section>
  );
}
