/*
 * ============================================================================
 * ProjectCard.tsx — ONE SINGLE PROJECT (A REUSABLE CARD)
 * ============================================================================
 *
 * Just like ExperienceCard, this component receives its content as PROPS
 * and displays it. The same component is reused for every project.
 *
 * Where it appears: inside the Projects section grid (once per project)
 * Styles:           ProjectCard.module.css (same folder)
 * Used in:          Projects.tsx
 */

import styles from "./ProjectCard.module.css";

// Here we write out the Props type by hand (instead of reusing the Project
// type like ExperienceCard does) so you can see what a Props type looks like.
// Each line is: propName: type;
type Props = {
  title: string;
  description: string;
  tags: string[]; // a list of strings
  link: string;
};

export default function ProjectCard({ title, description, tags, link }: Props) {
  return (
    // The WHOLE card is a link, so clicking anywhere on it opens the project.
    <a href={link} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* A row of small "pill" labels, one for each tag.
          Same .map() idea as before, but on a simple list of strings.
          Each tag text is unique, so we can use it as the key. */}
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
