/*
 * ============================================================================
 * Experiences.tsx — THE "EXPERIENCE" SECTION
 * ============================================================================
 *
 * This section shows a list of jobs/roles. Notice that it doesn't write out
 * each job by hand. Instead it:
 *   1. Imports the list of experiences from content.ts
 *   2. Loops over the list with .map()
 *   3. Creates one <ExperienceCard /> for each item
 *
 * So to add a new job to the site, you DON'T touch this file. You just add an
 * item to the `experiences` list in src/data/content.ts.
 *
 * Where it appears: below the About section
 * Data it uses:     `experiences` from src/data/content.ts
 * Styles:           Experiences.module.css (same folder)
 * Uses component:   ExperienceCard.tsx (same folder)
 * Used in:          src/app/page.tsx
 */

import { experiences } from "@/data/content";
// "./" means "in the same folder as this file".
import ExperienceCard from "./ExperienceCard";
import styles from "./Experiences.module.css";

export default function Experiences() {
  return (
    // id="experience" is what the navbar's "Experience" link scrolls to.
    <section id="experience" className={styles.experiences}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Experience</h2>

        <div className={styles.list}>
          {/*
            For each `exp` in the experiences list, create an ExperienceCard
            and pass its details in as props (role=..., org=..., etc.).

            The `key` gives React a unique ID for each card. We combine role
            and org, since that pair should be unique.
          */}
          {experiences.map((exp) => (
            <ExperienceCard
              key={`${exp.role}-${exp.org}`}
              role={exp.role}
              org={exp.org}
              dates={exp.dates}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
