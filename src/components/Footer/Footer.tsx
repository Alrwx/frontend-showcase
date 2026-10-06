/*
 * ============================================================================
 * Footer.tsx — THE BAR AT THE VERY BOTTOM OF THE PAGE
 * ============================================================================
 *
 * Where it appears: the bottom of the page, after everything else
 * Data it uses:     `profile` and `socials` from src/data/content.ts
 * Styles:           Footer.module.css (same folder)
 * Used in:          src/app/page.tsx
 */

import { profile, socials } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  // Get the current year automatically (e.g. 2026), so the copyright
  // line never goes out of date.
  const year = new Date().getFullYear();

  return (
    // <footer> is the semantic HTML tag for the bottom of a page.
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* &copy; is the HTML code for the © symbol. */}
        <p className={styles.copyright}>
          &copy; {year} {profile.name}
        </p>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.label}>
              {/*
                target="_blank" opens the link in a NEW browser tab.
                rel="noopener noreferrer" is a security best practice that
                should always go with target="_blank".
              */}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
