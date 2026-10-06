/*
 * ============================================================================
 * Navbar.tsx — THE NAVIGATION BAR AT THE TOP OF THE PAGE
 * ============================================================================
 *
 * Where it appears: the very top of the page, and it stays stuck there while
 *                   you scroll (see `position: sticky` in Navbar.module.css).
 * Data it uses:     `profile` and `navLinks` from src/data/content.ts
 * Styles:           Navbar.module.css (same folder)
 * Used in:          src/app/page.tsx
 */

// Import our content (text + links) from the data file.
import { profile, navLinks } from "@/data/content";

// HOW CSS MODULES WORK:
// `styles` is an object containing every class from Navbar.module.css.
// If the CSS file has `.nav { ... }`, we use it here as `styles.nav`.
//
// Next.js automatically renames the class behind the scenes (to something
// like "Navbar_nav__x7Ks2") so it can NEVER clash with a `.nav` class in
// another component. That's why it's called a "module": its styles are
// scoped (private) to this component.
import styles from "./Navbar.module.css";

// A component is just a function that returns JSX (HTML-like code).
// Component names MUST start with a capital letter: Navbar, not navbar.
export default function Navbar() {
  return (
    // <header> and <nav> are "semantic" HTML tags: they work like <div> but
    // also tell browsers and screen readers what this part of the page is.
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Clicking the name scrolls back to the top of the page.
            Curly braces { } in JSX mean "run this JavaScript and show the
            result". Here it inserts the name from content.ts. */}
        <a href="#top" className={styles.logo}>
          {profile.name}
        </a>

        <ul className={styles.links}>
          {/*
            .map() goes through each item in the navLinks list and turns it
            into an <li> element. 3 links in the data = 3 <li>s on the page.

            `key` is required by React whenever you build a list like this.
            It must be unique for each item, and helps React keep track of
            which item is which when the list changes.
          */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
