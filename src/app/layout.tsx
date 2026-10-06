/*
 * ============================================================================
 * layout.tsx — THE "FRAME" AROUND EVERY PAGE
 * ============================================================================
 *
 * In Next.js (using the "App Router"), files inside src/app/ have special
 * meanings based on their NAME:
 *
 *   layout.tsx -> wraps around pages. Things here appear on every page.
 *   page.tsx   -> the actual content of a page. src/app/page.tsx is the
 *                 homepage ("/"). A file at src/app/blog/page.tsx would
 *                 become the "/blog" page.
 *
 * This root layout sets up the outer <html> and <body> tags, loads the font,
 * loads the global CSS, and sets the browser tab title.
 *
 * You'll rarely need to edit this file. Most changes happen in components.
 */

// `import` pulls in code from other files or packages.
// `import type` means we only need the TypeScript type, not actual code.
import type { Metadata } from "next";

// next/font downloads a Google Font at build time and serves it from our
// own site, which is faster and more private than linking to Google directly.
import { Inter } from "next/font/google";

// Importing a CSS file here applies it to the whole site.
import "./globals.css";

// Set up the Inter font. `variable` creates a CSS variable (--font-sans)
// that we use in globals.css: font-family: var(--font-sans), ...
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"], // only download the characters we need (smaller file)
});

// `metadata` controls what shows in the browser tab and in search results /
// link previews. Next.js turns this into <title> and <meta> tags for us.
export const metadata: Metadata = {
  title: "Alex Rivera — Portfolio",
  description: "Portfolio of Alex Rivera, product designer and frontend developer.",
};

// This is the layout component itself.
// `children` is whatever page is being shown. For our homepage, `children`
// is everything returned from src/app/page.tsx.
// `export default` marks this as the main thing this file provides.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `className` is how you write the HTML "class" attribute in React.
    // inter.variable is a class name that defines the --font-sans variable.
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
