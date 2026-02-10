// src/app/symbol-semiotics/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Symbol & Semiotics (2012-2026) | A-R-R-A Framework",
  description:
    "A policy- and academic-appropriate note explaining the A-R-R-A Framework’s symbol: the circle-point structure, the Sun disk lineage, and red as lineage and continuity. Includes a canonical PDF download.",
  alternates: { canonical: "/symbol-semiotics" },
  openGraph: {
    title: "Symbol & Semiotics (2012-2026) | A-R-R-A Framework",
    description:
      "An explanatory note on the circle-point mark, Sun disk continuity, and red as lineage-written for institutional readability. Download the canonical PDF.",
    url: "/symbol-semiotics",
    siteName: "ARRA Framework",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Symbol & Semiotics (2012-2026) | A-R-R-A Framework",
    description:
      "An explanatory note on the A-R-R-A symbol system, written for policy and academic audiences. Canonical PDF available.",
  },
  robots: { index: true, follow: true },
};

const PDF_URL = "/papers/arra-symbol-semiotics.pdf";

export default function SymbolSemioticsPage() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#121212]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-[#121212]/10 bg-[#F6F1E7]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm text-[#121212]/80 hover:text-[#121212] transition"
          >
            ← Home
          </Link>

          <a
            href={PDF_URL}
            className="rounded-xl bg-[#6B1F2B] px-4 py-2 text-sm font-medium text-[#F6F1E7] hover:opacity-90 transition"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        {/* Title */}
        <header className="mb-14">
          <p className="text-xs tracking-[0.28em] text-[#121212]/70">
            SYMBOL &amp; SEMIOTICS
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-serif leading-tight">
            Symbol &amp; Semiotics (2012-2026)
          </h1>

          <p className="mt-3 text-lg text-[#5C5C5C]">
            On origin, recognition, and lineage
          </p>

          <div className="mt-6 h-px w-28 bg-[#6B1F2B]" />

          {/* Quick actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PDF_URL}
              className="rounded-xl bg-[#6B1F2B] px-5 py-3 text-sm font-medium text-[#F6F1E7] hover:opacity-90 transition"
            >
              Download the canonical PDF
            </a>
            <a
              href="#content"
              className="rounded-xl border border-[#121212]/15 bg-transparent px-5 py-3 text-sm font-medium text-[#121212] hover:bg-[#121212]/5 transition"
            >
              Read on this page
            </a>
          </div>
        </header>

        {/* Context */}
        <section className="mb-12 text-sm text-[#5C5C5C]">
          <p>
            <strong className="text-[#121212]">Author:</strong> W.A. Hasitha Supun Jayathilaka
          </p>
          <p className="mt-1">
            Associated work: A-R-R-A Framework (2012-2026) · Canonical host:
            arraframework.org
          </p>
        </section>

        {/* Abstract */}
        <section className="mb-14">
          <h2 className="font-serif text-xl mb-4">Abstract</h2>
          <p className="leading-relaxed text-base text-[#1E1E1E]">
            This note clarifies the semiotic intent behind the A-R-R-A Framework’s
            visual mark and restrained use of red. It provides an institutionally
            legible explanation of how the symbol anchors the framework’s logic:
            expression is acknowledged, dignity is preserved, roots are understood,
            and ethical alignment is chosen. It also documents continuity with an
            earlier sun-disk symbol used to express the distinction between
            presence and recognition, without invoking metaphysical commitments.
          </p>
        </section>

        <div id="content" className="space-y-12">
          <section>
            <h2 className="font-serif text-xl mb-4">1. Purpose of this note</h2>
            <p className="leading-relaxed">
              The A-R-R-A Framework uses a deliberately reduced, non-figurative
              visual mark. The intent is conceptual anchoring rather than
              aesthetic branding. This note exists to prevent misinterpretation,
              support institutional readability, and provide a stable explanation
              suitable for citation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl mb-4">2. The circle-point structure</h2>
            <p className="leading-relaxed mb-4">
              The identity is organized around a widely attested symbolic
              structure: a bounded field with a central point. Across
              civilizational contexts, the circle has commonly represented a
              complete field or system, continuity without hierarchy, and
              inclusion without stratification. The central point has commonly
              represented origin, presence, and the irreducible locus from which
              action or perception arises.
            </p>
            <p className="leading-relaxed">
              In the context of A-R-R-A, the symbol communicates a structural
              claim: <strong>human expression originates from presence prior to evaluation</strong>.
              This corresponds to the framework’s logic-Art (expression), Right
              (dignity), Respect (root recognition), and Alignment (ethical
              response).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl mb-4">
              3. Relation to earlier symbolic articulation (Sun disk)
            </h2>
            <p className="leading-relaxed">
              Prior to the formal refinement of A-R-R-A, a related symbol-the sun
              disk (☉-was used to express a parallel distinction: that presence
              exists independent of recognition. In that earlier formulation, the
              symbol communicated that visibility is contingent on perception, not
              existence, and that absence of recognition does not negate reality or
              presence. The continuity is structural rather than decorative:
              recognition follows existence, not the reverse.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl mb-4">4. Red as lineage and continuity</h2>
            <p className="leading-relaxed">
              Red is used sparingly within the A-R-R-A identity as a marker of
              lineage and continuity, not urgency or provocation. It references
              inherited and embodied knowledge, ancestral continuity across
              generations, and practice-based transmission that survives beyond
              formal documentation. In this sense, red signifies inheritance, not
              authority.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl mb-4">5. Reduction as a design principle</h2>
            <p className="leading-relaxed">
              The symbol intentionally avoids figurative representation, cultural
              specificity, religious iconography, and stylistic complexity. This
              reduction supports the framework’s purpose: A-R-R-A is meant to be
              legible across policy, academic, institutional, and cross-cultural
              contexts. The symbol is functional rather than expressive: it
              stabilizes interpretation without requiring cultural translation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl mb-4">6. Placement and use</h2>
            <p className="leading-relaxed">
              This note is intended to function as an explanatory appendix, a
              stable reference for institutional readers, and a guard against
              misreading symbolic intent. The symbol should be read as an artifact
              of the framework’s internal logic rather than an independent object
              of meaning.
            </p>
          </section>
        </div>

        {/* Footer / License */}
        <footer className="mt-16 border-t border-[#D6CFC2] pt-8 text-xs text-[#5C5C5C]">
          <p>© W.A. Hasitha Supun Jayathilaka, 2012-2026.</p>
          <p className="mt-1">
            Licensed under Creative Commons Attribution-NonCommercial-NoDerivatives
            4.0 International (CC BY-NC-ND 4.0).
          </p>
        </footer>
      </article>
    </main>
  );
}
