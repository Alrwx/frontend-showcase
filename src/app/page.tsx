/*
 * ============================================================================
 * page.tsx — THE HOMEPAGE ("/")
 * ============================================================================
 *
 * ⭐ START HERE! This is the most important file to understand.
 *
 * Notice how short it is. The page doesn't contain any real content itself.
 * It just lists COMPONENTS, in the order they appear from top to bottom.
 *
 * A component is a reusable, self-contained piece of UI (like a component in
 * Figma). Each one lives in its own folder in src/components/ with:
 *   - a .tsx file  -> the structure and content (what it IS)
 *   - a .module.css file -> the styles (how it LOOKS)
 *
 * Want to reorder the sections? Just move the lines below around.
 * Want to remove a section? Delete its line (and its import).
 * Want to add a new section? Create a new component folder, import it, and
 * add it to the list.
 */

// Import each component from its file.
// "@/" is a shortcut that means "the src/ folder", so
// "@/components/Navbar/Navbar" = "src/components/Navbar/Navbar.tsx"
// (you can leave off the .tsx at the end).
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experiences from "@/components/Experiences/Experiences";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    // `<>` and `</>` are a "Fragment": an invisible wrapper.
    // A component must return ONE thing, so we wrap our list in a Fragment
    // without adding an extra <div> to the page.
    <>
      <Navbar />
      {/* <main> is the HTML tag for a page's main content. It helps screen
          readers and search engines understand the page. */}
      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
