/*
 * ============================================================================
 * Projects.tsx — THE "PROJECTS" SECTION
 * ============================================================================
 *
 * Works exactly like Experiences.tsx: it loops over the `projects` list from
 * content.ts and makes one <ProjectCard /> for each one, laid out in a grid.
 *
 * To add a project, edit src/data/content.ts, not this file.
 *
 * Where it appears: below the Experience section
 * Data it uses:     `projects` from src/data/content.ts
 * Styles:           Projects.module.css (same folder)
 * Uses component:   ProjectCard.tsx (same folder)
 * Used in:          src/app/page.tsx
 */

import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    // id="projects" is what the navbar's "Projects" link and the Hero button scroll to.
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.grid}>
          {/*
            SHORTCUT: {...project} is called "spreading". It passes EVERY field
            of the project as a separate prop. It's the same as writing:
              title={project.title} description={project.description}
              tags={project.tags} link={project.link}
            (Experiences.tsx writes them out the long way, for comparison.)
          */}
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
