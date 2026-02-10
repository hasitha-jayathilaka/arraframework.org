// src/app/page.tsx
"use client";


import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

const LINKS = {
  paperRead: "/paper",
  paperPdf: "/papers/arra-framework.pdf",
  semioticsRead: "/symbol-semiotics",
  semioticsPdf: "/papers/arra-symbol-semiotics.pdf",
  faq: "#faq",
  privacy: "/privacy",
  terms: "/terms",
  archivist: "https://www.thearchivistgame.art/",
  instagram: "https://www.instagram.com/hsjayathilaka",
  linkedin: "https://www.linkedin.com/in/hsjayathilaka",
  facebook: "https://www.facebook.com/hsjayathilaka",
  portfolio: "https://hasithajayathilaka.com/",
  email: "hasitha@theroifirm.com",
};

type FAQItem = {
  q: string;
  a: string;
};

const FAQ: FAQItem[] = [
  {
    q: "What is the A-R-R-A Framework?",
    a: "A-R-R-A is a human-centric ethical framework that sequences four stages—Art, Right, Respect, and Alignment—to interpret expression, preserve dignity, and guide ethical response under conditions of disagreement or conflict. It prevents premature judgment by requiring that understanding precede action.",
  },
  {
    q: "Is this a philosophy, religion, or ideology?",
    a: "None of the above. A-R-R-A is a secular ethical framework—a decision-making protocol. It doesn't prescribe what to believe, worship, or which political outcomes to pursue. It provides a structured method for processing expression and choosing ethical responses without requiring metaphysical commitments.",
  },
  {
    q: "When was A-R-R-A developed?",
    a: 'The framework was first articulated in 2012 during an inquiry into the root causes of conflict and miscommunication in knowledge-rich societies. It was refined over fifteen years (2012-2026) through applied exposure across industries, cultures, and institutional contexts. The 2026 refinement formalized the final stage as "Alignment," transforming the framework from an aspirational model into a practical decision-making tool.',
  },
  {
    q: "Why was it created?",
    a: "To address a persistent problem: intelligent, creative societies continue to fracture not due to resource scarcity or ideological difference, but due to systematic failures in recognizing expression, dignity, and context. A-R-R-A emerged from studying why conflicts escalate and how understanding roots can reduce dehumanization.",
  },
  {
    q: 'What does "Art" mean in this context?',
    a: "Art refers to any conscious human expression or practice—not just aesthetic work. This includes science, mathematics, governance, caregiving, athletics, emotional expression, and even harmful acts. The term draws from South Asian concepts of kala, where art denotes cultivated skill and embodied knowledge. By treating all human activity as “art,” the framework avoids premature moral categorization.",
  },
  {
    q: "How is this different from other conflict resolution frameworks?",
    a: "Most frameworks jump directly from identifying a problem to proposing solutions or judgments. A-R-R-A inserts a mandatory “Respect” stage—disciplined inquiry into roots and causes—before any alignment decision is made. This buffer prevents reactive escalation and addresses one of the primary drivers of radicalization: the collapse of understanding into immediate judgment.\n\nA-R-R-A also explicitly resolves the “tolerance paradox” by separating dignity (Right) from alignment (ethical response). You can recognize someone's humanity while refusing association with harmful expression.",
  },
  {
    q: 'What problem does the "Alignment" stage solve?',
    a: 'The 2026 refinement transformed "Appreciation" (an outcome) into "Alignment" (a choice mechanism). This allows the framework to handle harmful expression, incompatible values, and boundary-setting without collapsing into relativism or authoritarian exclusion. Alignment operates on a spectrum from full collaboration to active resistance—all while preserving human dignity.',
  },
  {
    q: "Who can use A-R-R-A?",
    a: "Anyone. The framework is designed for individuals, organizations, institutions, policymakers, educators, platform moderators, and communities. It's applicable wherever expression, dignity, and ethical boundaries must coexist under conditions of disagreement.",
  },
  {
    q: "What are some practical applications?",
    a: "- Platform governance: Content moderation policies that preserve dignity while setting boundaries\n- Organizational conflict resolution: Workplace disputes, team disagreements, leadership decisions\n- Educational settings: Teaching critical thinking, empathy, and ethical reasoning\n- Policy development: Frameworks for pluralistic societies, human rights contexts\n- Community guidelines: Online communities, cooperative housing, civic organizations\n- Personal relationships: Navigating disagreements with family, friends, colleagues",
  },
  {
    q: "How do I apply the Alignment spectrum?",
    a: "The spectrum provides five modes of ethical response:\n\n1. Full Alignment - When expression aligns with your values: appreciate, collaborate, amplify\n2. Conditional Alignment - Engage with clear boundaries or constraints\n3. Limited Alignment - Observe without reinforcement or active participation\n4. Non-Alignment - Maintain respectful distance, refuse association\n5. Counter-Alignment - Actively resist harmful expression while preserving human dignity\n\nOrganizations can define different thresholds for each mode based on their context and risk tolerance.",
  },
  {
    q: "Can A-R-R-A handle harmful or dangerous expression?",
    a: "Yes. The framework explicitly acknowledges harmful, destructive, or inhuman expressions exist. Such expressions can be critiqued, abandoned, opposed, or defended against—without erasing the humanity of those who produce them. Harm is addressed at the level of expression and impact, not identity or existence. Counter-Alignment allows active resistance while maintaining the Right stage's baseline dignity.",
  },
  {
    q: 'Does "Respect" mean I have to agree with or accept everything?',
    a: "No. Respect in A-R-R-A is defined precisely as root recognition—disciplined inquiry into causes, conditions, histories, and formative contexts. It's not empathy as sentiment or acceptance as agreement. It's a methodological pause that prevents reactive judgment. Understanding roots does not mean endorsing outcomes.",
  },
  {
    q: "What if two people apply A-R-R-A and still disagree?",
    a: "That's expected and acceptable. A-R-R-A does not dissolve fundamental incompatibilities—it civilizes them. Two people may understand each other's roots (Respect) and still choose different alignments (one person: non-alignment; another: counter-alignment). The framework prevents dehumanization during disagreement; it doesn't eliminate disagreement itself.",
  },
  {
    q: "Can I use A-R-R-A in my organization or project?",
    a: "Yes, under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) license. This means:\n\n- Attribution (BY): You must credit the framework and author\n- NonCommercial (NC): You cannot use it for commercial purposes without permission\n- NoDerivatives (ND): You cannot modify or create derivative versions",
  },
  {
    q: 'What counts as "non-commercial" use?',
    a: "Non-commercial use includes:\n- Academic research and teaching\n- Educational curricula and workshops\n- Internal organizational implementation (non-profits, government, public sector)\n- Policy development and civic initiatives\n- Personal or community application",
  },
  {
    q: "What if I want to use A-R-R-A commercially?",
    a: "For commercial use—such as consulting services, training programs, proprietary implementations, or for-profit products—please contact hasitha@theroifirm.com to discuss licensing arrangements.",
  },
  {
    q: "Can I create training materials based on A-R-R-A?",
    a: "Yes, for non-commercial educational purposes, with proper attribution. If you plan to sell training materials or offer paid workshops, please contact for commercial licensing.",
  },
  {
    q: "How should I cite the framework?",
    a: "For general reference:\nJayathilaka, W.A.H.S. (2012–2026). A-R-R-A Framework:\nArt → Right → Respect → Alignment.\nhttps://arraframework.org\n\nFor the full paper:\nJayathilaka, W.A.H.S. (2026). A-R-R-A Framework (2012-2026).\nRetrieved from https://arraframework.org/papers/arra-framework.pdf",
  },
  {
    q: "Can I translate A-R-R-A into other languages?",
    a: "Translations for non-commercial educational purposes are welcomed with proper attribution. Please contact hasitha@theroifirm.com to coordinate translation efforts and ensure conceptual accuracy.",
  },
  {
    q: "What does the A-R-R-A symbol represent?",
    a: "The symbol is a bounded field (circle) with a central point—a widely-used structure across civilizational contexts. In A-R-R-A, it represents that human expression originates from presence prior to evaluation. The circle represents a complete system without hierarchy; the central point represents origin and presence. This reflects the framework's radial logic: dignity and understanding precede judgment.",
  },
  {
    q: "Why is red used in the symbol?",
    a: "Red marks lineage and continuity, not urgency or provocation. It references inherited and embodied knowledge, ancestral continuity across generations, and practice-based transmission that survives beyond formal documentation. In South Asian knowledge traditions, learning is carried through disciplined practice and lived craft. Red signifies inheritance, not authority.",
  },
  {
    q: "Can I use the symbol?",
    a: "The geometric form (circle with central point) is an ancient, widely-used structure and is not owned by anyone. However, the specific visual design, color treatment, contextual association with the A-R-R-A Framework are protected under the CC BY-NC-ND 4.0 license. Use with proper attribution for non-commercial purposes is permitted.",
  },
  {
    q: "What traditions influenced A-R-R-A?",
    a: "The framework resonates with patterns found in recognition theory (Hegel, Honneth), restorative justice, and Eastern notions of causality and dependent origination—but it does not adopt their metaphysical commitments. A-R-R-A emerged primarily from lived practice and was later recognized to align with these traditions without being derived from them.",
  },
  {
    q: "Is this connected to Buddhist or Hindu philosophy?",
    a: "There are parallels—particularly in the emphasis on understanding causes and conditions (Respect stage) and skillful response (Alignment stage)—but A-R-R-A is secular and does not require any religious belief or practice. The framework is designed to be usable by people of any faith tradition or none.",
  },
  {
    q: 'What is the relationship to South Asian concepts of "kala"?',
    a: "The definition of “Art” in A-R-R-A draws inspiration from South Asian epistemologies where kala denotes cultivated skill, disciplined practice, and embodied knowledge—not just aesthetic ornamentation. Historically, practitioners (including rulers) were expected to master multiple kalas (the 64 arts tradition). This broader conception of art as practice informs the framework's universal starting point.",
  },
  {
    q: "Do you offer training or workshops on A-R-R-A?",
    a: "Yes. For organizational training, policy workshops, or institutional implementation support, please contact hasitha@theroifirm.com.",
  },
  {
    q: "Can you help adapt A-R-R-A for our specific context?",
    a: "Consultation for organizational adaptation, policy integration, and context-specific implementation is available. Contact hasitha@theroifirm.com to discuss your needs.",
  },
  {
    q: "Is there a certification program?",
    a: "Not currently, though this may be developed based on demand and to ensure quality implementation. If you're interested in becoming a certified A-R-R-A practitioner or trainer, please express your interest via the contact form.",
  },
  {
    q: "Where can I discuss A-R-R-A with others?",
    a: "Currently, discussions happen through direct contact and in contexts where the framework is being applied. A community platform or discussion forum may be established in the future. For now, reach out via hasitha@theroifirm.com if you're using A-R-R-A and want to connect with others.",
  },
  {
    q: "Will the framework continue to evolve?",
    a: "A-R-R-A's core insight (expression → dignity → root understanding → ethical response) is stable. However, linguistic precision, operational guidance, and applied examples may continue to develop based on real-world use. Any significant updates will be documented with clear version dating.",
  },
  {
    q: "How do I stay informed about updates?",
    a: "Currently, the canonical source is arraframework.org. Subscribe to updates by contacting hasitha@theroifirm.com and requesting to be added to the notification list for significant changes or new resources.",
  },
  {
    q: "Can I contribute case studies or examples?",
    a: "Yes. If you've applied A-R-R-A in a real-world context and want to share your experience (for educational purposes), please reach out. Documented case studies help others understand practical implementation.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#121212]">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-12 md:pt-16">
        <p className="text-xs tracking-[0.28em] text-[#121212]/70">
          A-R-R-A FRAMEWORK (2012–2026)
        </p>

        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">
          Art → Right → Respect → Alignment
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#121212]/82 md:text-lg">
          A human-centric framework for interpreting expression under disagreement.
          It preserves dignity, formalizes root recognition, and guides ethical
          response through alignment-operationalized via{" "}
          <span className="font-medium text-[#121212]">
            appreciation or association
          </span>
          .
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={LINKS.paperRead}
            className="rounded-xl bg-[#6B1F2B] px-5 py-3 text-sm font-medium text-[#F6F1E7] hover:opacity-90 transition"
          >
            Read the paper
          </Link>

          <a
            href={LINKS.paperPdf}
            className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
          >
            Download PDF
          </a>

          <Link
            href={LINKS.semioticsRead}
            className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
          >
            Symbol &amp; Semiotics
          </Link>

          <a
            href="#faq"
            className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
          >
            FAQ
          </a>
        </div>

        <Rule className="mt-12" />
      </section>

      {/* FRAMEWORK */}
      <section id="framework" className="mx-auto w-full max-w-5xl px-6 py-12">
        <SectionTitle
          kicker="FRAMEWORK"
          title="A sequence that prevents premature judgment"
          desc="A-R-R-A requires that dignity and root recognition precede alignment decisions. The goal is not forced harmony, but ethical response without dehumanization."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Note
            title="1) Art"
            body="Any conscious human expression or practice-creative, scientific, athletic, civic, relational, and even harmful. Expression is the starting datum, not a verdict."
          />
          <Note
            title="2) Right"
            body="A baseline of dignity: the right to exist, learn, and practice without erasure or dehumanization. Right does not imply endorsement."
          />
          <Note
            title="3) Respect"
            body="Respect is root recognition: disciplined inquiry into causes, conditions, histories, and formative contexts. Understanding precedes response."
          />
          <Note
            title="4) Alignment"
            body="Ethical response and boundary-setting. Alignment is operationalized through appreciation or association-support, conditional engagement, distance, or resistance."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-[#121212]/10 bg-[#FFFFFF]/55 p-6">
          <p className="text-xs tracking-[0.22em] text-[#121212]/70">
            ALIGNMENT AS A SPECTRUM
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#121212]/85">
            <li>• Full Alignment - appreciation, collaboration, amplification</li>
            <li>• Conditional Alignment - engagement with boundaries</li>
            <li>• Limited Alignment - observation without reinforcement</li>
            <li>• Non-Alignment - respectful distance</li>
            <li>
              • Counter-Alignment - resistance to harmful expression (without
              erasure)
            </li>
          </ul>
        </div>

        <Rule className="mt-12" />
      </section>

      {/* PAPER SECTION */}
      <section id="paper" className="mx-auto w-full max-w-5xl px-6 py-12">
        <SectionTitle
          kicker="PAPER"
          title="Canonical text and stable citation"
          desc="Read the full paper on this site or download the canonical PDF."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
              <p className="text-lg font-semibold leading-tight">
                A-R-R-A Framework (2012–2026)
              </p>
              <p className="mt-2 text-sm text-[#121212]/75">
                Art → Right → Respect → Alignment (via Appreciation or Association)
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={LINKS.paperRead}
                  className="rounded-xl bg-[#6B1F2B] px-5 py-3 text-sm font-medium text-[#F6F1E7] hover:opacity-90 transition"
                >
                  Read here
                </Link>
                <a
                  href={LINKS.paperPdf}
                  className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
                >
                  Download PDF
                </a>
              </div>

              <p className="mt-6 text-xs text-[#121212]/60">
                © Hasitha Jayathilaka, 2012–2026 • CC BY-NC-ND 4.0
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/55 p-7">
              <p className="text-xs tracking-[0.22em] text-[#121212]/70">
                WHAT THIS PAPER DOES
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#121212]/82">
                <li>• Defines each stage precisely</li>
                <li>• Formalizes Respect as root recognition</li>
                <li>• Introduces Alignment as governance/response</li>
                <li>• Provides the alignment spectrum</li>
              </ul>
            </div>
          </div>
        </div>

        <Rule className="mt-12" />
      </section>

      {/* SYMBOL & SEMIOTICS */}
      <section id="symbol" className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#121212]/15 bg-[#FFFFFF]/60">
              <span className="h-3 w-3 rounded-full bg-[#6B1F2B]" />
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.28em] text-[#121212]/70">
              SYMBOL &amp; SEMIOTICS
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              On origin, recognition, and lineage
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-[#121212]/85 max-w-xl">
              The A-R-R-A mark is intentionally reduced: a bounded field with a
              central point - a widely-used symbolic structure adopted to express
              the framework&apos;s logic. Expression is acknowledged, dignity is
              preserved, roots are understood, and ethical alignment is chosen.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#121212]/80 max-w-xl">
              Red is used sparingly as a marker of lineage: embodied knowledge,
              ancestral continuity, and practice-based transmission across
              generations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={LINKS.semioticsRead}
                className="inline-flex items-center rounded-xl bg-[#6B1F2B] px-5 py-3 text-sm font-medium text-[#F6F1E7] hover:opacity-90 transition"
              >
                Read here
              </Link>
              <a
                href={LINKS.semioticsPdf}
                className="inline-flex items-center rounded-xl border border-[#121212]/20 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <Rule className="mt-12" />
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="mx-auto w-full max-w-5xl px-6 py-12">
        <SectionTitle
          kicker="USE CASES"
          title="Where A-R-R-A is applied"
          desc="Practical contexts where sequencing expression, dignity, root recognition, and alignment prevents escalation and improves governance."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Note
            title="Platform governance policies"
            body="Content moderation and enforcement logic that preserves dignity while setting boundaries."
          />
          <Note
            title="Organizational conflict resolution"
            body="Workplace disputes, team disagreements, leadership decisions, and mediation protocols."
          />
          <Note
            title="Educational curriculum design"
            body="Teaching ethical reasoning, critical thinking, and disciplined inquiry into roots and causes."
          />
          <Note
            title="Community guidelines development"
            body="Norms and decision rules for online/offline communities under disagreement."
          />
          <Note
            title="Policy frameworks for pluralistic societies"
            body="Public frameworks that handle value conflicts without dehumanization or forced unanimity."
          />
        </div>

        <Rule className="mt-12" />
      </section>

      {/* HOW TO CITE */}
      <section id="cite" className="mx-auto w-full max-w-5xl px-6 py-12">
        <SectionTitle
          kicker="HOW TO CITE"
          title="Stable reference format"
          desc="Use the following citation formats for general reference and for the full paper."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
              <p className="text-sm font-semibold">General reference</p>
              <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-[#121212]/10 bg-[#F6F1E7] p-4 text-xs leading-relaxed text-[#121212]/85">
{`Jayathilaka, W.A.H.S. (2012–2026). A-R-R-A Framework:
Art → Right → Respect → Alignment.
https://arraframework.org`}
              </pre>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
              <p className="text-sm font-semibold">For the full paper</p>
              <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-[#121212]/10 bg-[#F6F1E7] p-4 text-xs leading-relaxed text-[#121212]/85">
{`Jayathilaka, W.A.H.S. (2026). A-R-R-A Framework (2012-2026).
Retrieved from https://arraframework.org/papers/arra-framework.pdf`}
              </pre>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={LINKS.paperPdf}
                  className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
                >
                  Download the canonical PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <Rule className="mt-12" />
      </section>

      {/* FAQ */}
<section id="faq" className="mx-auto w-full max-w-5xl px-6 py-12">
  <SectionTitle
    kicker="FAQ"
    title="Common questions"
    desc="Click a question to expand the answer."
  />

  <FAQAccordion initialVisibleCount={5} />
  <Rule className="mt-12" />
</section>

      {/* AUTHOR + CONTACT */}
      <section id="author" className="mx-auto w-full max-w-5xl px-6 py-12">
        <SectionTitle
          kicker="AUTHOR"
          title="About Hasitha Jayathilaka"
          desc="Work at the intersection of cultural memory, trust infrastructure, and applied ethics."
        />

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-start">
          {/* Author card */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/65 p-7">
              <div className="mb-6 flex items-center gap-5">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#121212]/20">
                  <Image
                    src="/author.jpg"
                    alt="Hasitha Jayathilaka"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div>
                  <p className="text-lg font-semibold">Hasitha Jayathilaka</p>
                  <p className="text-sm text-[#121212]/70">
                    Founder · Researcher · Systems Thinker
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#121212]/85">
                I build systems and narratives that help institutions preserve
                cultural memory, reduce distortion, and make ethical decisions
                under complexity.
              </p>

              <div className="mt-5 space-y-3 text-sm text-[#121212]/82">
                <p>
                  <span className="font-medium text-[#121212]">The Archivist</span>{" "}
                  is an immersive cultural-tech project exploring historically
                  grounded education through world-building and experience design.{" "}
                  <a
                    className="underline underline-offset-4 hover:opacity-80"
                    href={LINKS.archivist}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit thearchivistgame.art
                  </a>
                  .
                </p>

                <p>
                  <span className="font-medium text-[#121212]">Linseed</span> is an
                  infrastructure initiative focused on attribution, provenance,
                  and verification-designed to support high-trust collaboration
                  and knowledge integrity.
                </p>
              </div>

              {/* Portfolio + socials */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={LINKS.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#121212]/15 px-4 py-2 text-sm hover:bg-[#121212]/5 transition"
                >
                  Portfolio ↗
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#121212]/15 px-4 py-2 text-sm hover:bg-[#121212]/5 transition"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#121212]/15 px-4 py-2 text-sm hover:bg-[#121212]/5 transition"
                >
                  Instagram ↗
                </a>
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#121212]/15 px-4 py-2 text-sm hover:bg-[#121212]/5 transition"
                >
                  Facebook ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  const navItems = [
    { label: "Paper", href: LINKS.paperRead, type: "link" as const },
    { label: "Symbol & Semiotics", href: LINKS.semioticsRead, type: "link" as const },
    { label: "FAQ", href: "#faq", type: "anchor" as const },
    { label: "Contact", href: "#contact", type: "anchor" as const },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[#121212]/10 bg-[#F6F1E7]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#121212]/15">
            <span className="h-2 w-2 rounded-full bg-[#6B1F2B]" />
          </span>
          <div className="leading-tight">
            <div className="text-xs tracking-[0.18em] text-[#121212]/70">
              ARRAFRAMEWORK.ORG
            </div>
            <div className="text-sm font-medium text-[#121212]">
              A-R-R-A Framework (2012–2026)
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          <Link
            href={LINKS.paperRead}
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            Paper
          </Link>
          <Link
            href={LINKS.semioticsRead}
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            Symbol &amp; Semiotics
          </Link>
          <a
            href="#faq"
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile dropdown */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-[#121212]/15 bg-[#FFFFFF]/50 px-4 py-2 text-sm font-medium hover:bg-[#121212]/5 transition"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
            <span className="ml-2 text-[#121212]/70">{open ? "▲" : "▼"}</span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-[#121212]/10">
          <div className="mx-auto w-full max-w-5xl px-6 py-3">
            <div className="grid gap-2">
              {navItems.map((it) =>
                it.type === "link" ? (
                  <Link
                    key={it.label}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[#121212]/10 bg-[#FFFFFF]/55 px-4 py-3 text-sm text-[#121212]/80 hover:bg-[#121212]/5 transition"
                  >
                    {it.label}
                  </Link>
                ) : (
                  <a
                    key={it.label}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[#121212]/10 bg-[#FFFFFF]/55 px-4 py-3 text-sm text-[#121212]/80 hover:bg-[#121212]/5 transition"
                  >
                    {it.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[#121212]/10">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs text-[#121212]/65">
              © 2012–2026 Hasitha Jayathilaka • arraframework.org • CC BY-NC-ND 4.0
            </p>
            <p className="mt-2 text-xs text-[#121212]/65">
              Contact:{" "}
              <a
                className="underline underline-offset-4 hover:opacity-80"
                href={`mailto:${LINKS.email}`}
              >
                {LINKS.email}
              </a>
            </p>

            <p className="mt-3 text-xs text-[#121212]/60">
              <Link className="underline underline-offset-4 hover:opacity-80" href={LINKS.privacy}>
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link className="underline underline-offset-4 hover:opacity-80" href={LINKS.terms}>
                Terms of Use
              </Link>{" "}
              •{" "}
              <a className="underline underline-offset-4 hover:opacity-80" href="#faq">
                FAQ
              </a>
            </p>
          </div>

          {/* Removed the large footer nav list as requested */}
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <p className="text-xs tracking-[0.28em] text-[#121212]/70">{kicker}</p>
      <h2 className="mt-3 text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#121212]/80">
        {desc}
      </p>
    </div>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/65 p-7">
      <p className="text-base font-semibold">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#121212]/82">{body}</p>
    </div>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-[#121212]/10 ${className}`} />;
}

function FAQAccordion({ initialVisibleCount = 5 }: { initialVisibleCount?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? FAQ : FAQ.slice(0, initialVisibleCount);

  // If user collapses back to 5, and currently-open item isn't in the first 5, close it.
  function toggleShowAll() {
    setShowAll((prev) => {
      const next = !prev;
      if (!next && openIndex !== null && openIndex >= initialVisibleCount) {
        setOpenIndex(null);
      }
      return next;
    });
  }

  return (
    <div className="mt-8">
      <div className="space-y-3">
        {visibleItems.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border bg-[#FFFFFF]/70 transition ${
                open ? "border-[#6B1F2B]/45" : "border-[#121212]/12"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-[#121212]">{item.q}</span>
                <span
                  className={`mt-[2px] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm transition ${
                    open
                      ? "border-[#6B1F2B]/50 text-[#6B1F2B]"
                      : "border-[#121212]/15 text-[#121212]/70"
                  }`}
                  aria-hidden="true"
                >
                  {open ? "–" : "+"}
                </span>
              </button>

              {open && (
                <div className="px-6 pb-6">
                  <div className="h-px w-full bg-[#121212]/10" />
                  <div className="mt-4 rounded-xl border border-[#6B1F2B]/20 bg-[#F6F1E7] p-4">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#121212]/82">
                      {item.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {FAQ.length > initialVisibleCount && (
        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={toggleShowAll}
            className="rounded-xl border border-[#121212]/15 bg-[#FFFFFF]/55 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
          >
            {showAll ? "Show fewer" : `View all FAQ (${FAQ.length})`}
          </button>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    return (
      agree &&
      name.trim().length >= 2 &&
      email.trim().includes("@") &&
      message.trim().length >= 10
    );
  }, [agree, name, email, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        let data: any = null;
        let text = "";

        try {
          data = await res.json();
        } catch {
          text = await res.text().catch(() => "");
        }

        throw new Error(data?.error || text || "Failed to send.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setAgree(false);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7"
    >
      <p className="text-xs tracking-[0.28em] text-[#121212]/70">CONTACT</p>
      <h3 className="mt-3 text-2xl font-semibold">Send a message</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
        If you&apos;re referencing the framework for research, policy, education,
        or implementation-or if you&apos;re interested in organizational adoption,
        training, or collaboration -contact me here or email directly.{" "}
        <a
          className="underline underline-offset-4 hover:opacity-80"
          href={`mailto:${LINKS.email}`}
        >
          {LINKS.email}
        </a>
        .
      </p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#121212]/15 bg-[#F6F1E7] px-4 py-3 text-sm outline-none focus:border-[#6B1F2B]"
              placeholder="Your name"
              autoComplete="name"
            />
          </Field>

          <Field label="Email">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#121212]/15 bg-[#F6F1E7] px-4 py-3 text-sm outline-none focus:border-[#6B1F2B]"
              placeholder="you@domain.com"
              autoComplete="email"
            />
          </Field>
        </div>

        <Field label="Message">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[140px] w-full rounded-xl border border-[#121212]/15 bg-[#F6F1E7] px-4 py-3 text-sm outline-none focus:border-[#6B1F2B]"
            placeholder="What would you like to discuss?"
          />
        </Field>

        {/* Agreement */}
        <div className="flex items-start gap-3 rounded-xl border border-[#121212]/10 bg-[#F6F1E7] px-4 py-3">
          <input
            id="agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 h-4 w-4 accent-[#6B1F2B]"
          />
          <label htmlFor="agree" className="text-sm text-[#121212]/80">
            I agree to the{" "}
            <Link className="underline underline-offset-4 hover:opacity-80" href={LINKS.privacy}>
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="underline underline-offset-4 hover:opacity-80" href={LINKS.terms}>
              Terms of Use
            </Link>
            .
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={!canSubmit || status === "sending"}
            className="inline-flex rounded-xl bg-[#6B1F2B] px-5 py-3 text-sm font-medium text-[#F6F1E7] disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <a
            href={`mailto:${LINKS.email}`}
            className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
          >
            Email instead
          </a>

          {status === "sent" && (
            <span className="text-sm text-[#121212]/80">Sent. Thank you.</span>
          )}
          {status === "error" && (
            <span className="text-sm text-[#6B1F2B]">
              {errorMsg || "Failed to send."}
            </span>
          )}
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs tracking-[0.18em] text-[#121212]/70">
        {label}
      </span>
      {children}
    </label>
  );
}
