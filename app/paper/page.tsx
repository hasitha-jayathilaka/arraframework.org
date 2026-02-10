// src/app/paper/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A-R-R-A Framework (2012-2026) | Art → Right → Respect → Alignment",
  description:
    "The A-R-R-A Framework (2012-2026) is a human-centric ethical framework for interpreting expression, preserving dignity, understanding roots, and choosing ethical alignment (appreciation or association) in conflict and pluralism.",
  alternates: {
    canonical: "/paper",
  },
  openGraph: {
    title: "A-R-R-A Framework (2012-2026)",
    description:
      "Art → Right → Respect → Alignment (operationalized through Appreciation or Association). Read the paper and download the canonical PDF.",
    url: "/paper",
    siteName: "ARRA Framework",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "A-R-R-A Framework (2012-2026)",
    description:
      "Art → Right → Respect → Alignment. Read the paper and download the canonical PDF.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PDF_URL = "/papers/arra-framework.pdf";

export default function PaperPage() {
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
          <p className="text-xs tracking-[0.28em] text-[#121212]/70">PAPER</p>

          <h1 className="mt-4 text-3xl md:text-4xl font-serif leading-tight">
            A-R-R-A Framework (2012-2026)
          </h1>

          <p className="mt-3 text-lg text-[#5C5C5C]">
            Art → Right → Respect → Alignment
          </p>

          <p className="mt-2 text-sm text-[#5C5C5C] italic">
            Alignment operationalized through Appreciation or Association
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

        {/* Author */}
        <section className="mb-12 text-sm text-[#5C5C5C]">
          <p>
            <strong className="text-[#121212]">Author:</strong> W.A. Hasitha Supun Jayathilaka
          </p>
          <p className="mt-1">
            Canonical host: arraframework.org · Original formulation: 2012 · Refinement: 2026
          </p>
        </section>

        {/* Abstract (short) */}
        <section className="mb-14">
          <h2 className="font-serif text-xl mb-4">Abstract</h2>
          <p className="leading-relaxed text-base text-[#1E1E1E]">
            The A-R-R-A Framework (2012-2026) is a human-centric ethical framework
            for interpreting expression under disagreement and conflict. It
            sequences <em>Art</em> (expression), <em>Right</em> (dignity),
            <em> Respect</em> (root recognition), and <em>Alignment</em> (ethical
            response) to ensure that understanding precedes judgment. Alignment is
            operationalized through Appreciation or Association, enabling support,
            boundaries, distance, or resistance without dehumanization.
          </p>
        </section>

        <div id="content" className="space-y-12">
          {/* 1 */}
          <section>
            <h2 className="font-serif text-xl mb-4">1. Origin and Evolution</h2>
            <p className="leading-relaxed mb-4">
              The A-R-R-A Framework was first articulated in 2012 during an early
              period of inquiry into the nature of expression, conflict, and
              dignity. While the core sequence emerged intuitively, its articulation
              and application matured over the subsequent decade and a half through
              lived experience.
            </p>
            <p className="leading-relaxed">
              Exposure to diverse industries, cultural contexts, institutional
              systems, and moments of tension strengthened the framework’s
              linguistic precision and operational relevance. The 2026 refinement
              formalizes the final stage as Alignment-enabling practical boundary
              setting and ethical response without compromising the framework’s
              foundation in dignity and root recognition.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-serif text-xl mb-4">2. Art</h2>
            <p className="leading-relaxed">
              In A-R-R-A, Art is not limited to aesthetics. It refers to any
              conscious human expression or practice: science, mathematics,
              craftsmanship, caregiving, governance, sport, emotional expression,
              and-even when uncomfortable-destructive or harmful acts. Expression is
              treated as the starting point of ethical inquiry, not its conclusion.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-serif text-xl mb-4">3. Right</h2>
            <p className="leading-relaxed">
              If expression is fundamental to being human, then the ability to
              practice carries an ethical right: the right to exist, to express, and
              to develop without erasure or dehumanization. This does not imply
              approval or immunity from critique. It establishes a baseline of
              dignity that remains intact regardless of later alignment decisions.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-serif text-xl mb-4">4. Respect</h2>
            <p className="leading-relaxed">
              Respect is defined here as disciplined inquiry into roots. It requires
              understanding the causes, conditions, histories, and formative contexts
              from which expression arises. Respect introduces a deliberate pause
              between expression and judgment, preventing reactive escalation and
              moral erasure.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-serif text-xl mb-4">5. Alignment</h2>
            <p className="leading-relaxed mb-6">
              Alignment governs ethical response. Once expression is acknowledged,
              dignity secured, and roots understood, alignment determines proximity,
              reinforcement, distance, or resistance. Alignment is operationalized
              through Appreciation or Association and functions as a spectrum rather
              than a binary choice.
            </p>

            <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/55 p-6">
              <p className="text-xs tracking-[0.22em] text-[#121212]/70">
                ALIGNMENT SPECTRUM
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#1E1E1E]">
                <li>
                  <span className="font-medium">Full Alignment</span> - appreciation,
                  collaboration, amplification.
                </li>
                <li>
                  <span className="font-medium">Conditional Alignment</span> -
                  engagement with boundaries.
                </li>
                <li>
                  <span className="font-medium">Limited Alignment</span> - observation
                  without reinforcement.
                </li>
                <li>
                  <span className="font-medium">Non-Alignment</span> - respectful
                  distance and refusal of association.
                </li>
                <li>
                  <span className="font-medium">Counter-Alignment</span> - active
                  resistance to harmful expression without erasing dignity.
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-serif text-xl mb-4">
              6. Negative or Harmful Expression
            </h2>
            <p className="leading-relaxed">
              A-R-R-A acknowledges harmful, destructive, or inhuman expressions. The
              framework allows such expressions to be critiqued, opposed, and
              defended against while keeping critique targeted at expression and
              impact rather than identity or existence. Dignity remains intact even
              when association is refused.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="font-serif text-xl mb-4">Conclusion</h2>
            <p className="leading-relaxed">
              The A-R-R-A Framework (2012-2026) offers a structured approach to
              ethical interpretation and response in pluralistic societies. By
              insisting that dignity and root recognition precede alignment, it
              enables disagreement, boundaries, and resistance without
              dehumanization.
            </p>
          </section>
        </div>

        {/* Footer / Copyright */}
        <footer className="mt-16 border-t border-[#D6CFC2] pt-8 text-xs text-[#5C5C5C]">
          <p>
            © W.A. Hasitha Supun Jayathilaka, 2012-2026. A-R-R-A Framework.
          </p>
          <p className="mt-1">
            Licensed under Creative Commons Attribution-NonCommercial-NoDerivatives
            4.0 International (CC BY-NC-ND 4.0).
          </p>
        </footer>
      </article>
    </main>
  );
}
