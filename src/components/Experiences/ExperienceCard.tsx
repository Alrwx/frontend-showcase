/*
 * ============================================================================
 * ExperienceCard.tsx — ONE SINGLE EXPERIENCE (A REUSABLE CARD)
 * ============================================================================
 *
 * This is a small, reusable component. It doesn't know about ANY specific job.
 * Instead, it receives the details as PROPS and simply displays them.
 *
 * WHAT ARE PROPS?
 * Props ("properties") are inputs you pass into a component, just like
 * attributes on an HTML tag. Compare:
 *
 *   HTML:  <a href="/home">                    -> href is an attribute
 *   React: <ExperienceCard role="Designer" />  -> role is a prop
 *
 * Because the content comes in through props, we can use this ONE card
 * component for EVERY experience. It's like a component with variants in Figma:
 * same design, different content.
 *
 * Where it appears: inside the Experiences section (once per experience)
 * Styles:           ExperienceCard.module.css (same folder)
 * Used in:          Experiences.tsx
 */

// Import the Experience TYPE from our data file, so the card expects exactly
// the same fields that each experience in content.ts has.
import type { Experience } from "@/data/content";
import styles from "./ExperienceCard.module.css";

// `Props` describes what inputs this component accepts.
// Here we say: "the props are exactly an Experience" = role, org, dates, description.
// If someone uses <ExperienceCard /> and forgets `role`, TypeScript shows an error.
type Props = Experience;

// The { role, org, dates, description } part "unpacks" the props so we can
// use each one by name below, instead of writing props.role, props.org, etc.
export default function ExperienceCard({ role, org, dates, description }: Props) {
  return (
    // <article> = a self-contained piece of content (like a card or a post).
    <article className={styles.card}>
      {/* The top row: role + org on the left, dates on the right. */}
      <div className={styles.header}>
        <div>
          {/* <h3> = a heading one level below the section's <h2>. */}
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.org}>{org}</p>
        </div>
        <p className={styles.dates}>{dates}</p>
      </div>

      <p className={styles.description}>{description}</p>
    </article>
  );
}
