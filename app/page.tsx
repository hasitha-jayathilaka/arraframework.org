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
  archivist: "https://www.thearchivistgame.art/",
  instagram: "https://www.instagram.com/hsjayathilaka",
  linkedin: "https://www.linkedin.com/in/hsjayathilaka",
  facebook: "https://www.facebook.com/hsjayathilaka",
  email: "hasitha@theroifirm.com",
};

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
          <a
            href="#framework"
            className="rounded-xl border border-[#121212]/15 px-5 py-3 text-sm font-medium hover:bg-[#121212]/5 transition"
          >
            Framework
          </a>

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

      {/* PAPER SECTION (READ + DOWNLOAD) */}
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

      {/* SYMBOL & SEMIOTICS SECTION (LOGO + READ/DOWNLOAD) */}
      <section id="symbol" className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Logo mark */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#121212]/15 bg-[#FFFFFF]/60">
              <span className="h-3 w-3 rounded-full bg-[#6B1F2B]" />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.28em] text-[#121212]/70">
              SYMBOL &amp; SEMIOTICS
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              On origin, recognition, and lineage
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-[#121212]/85 max-w-xl">
              The A-R-R-A mark is intentionally reduced: a bounded field with a
              central point. It anchors the framework’s logic-expression is
              acknowledged, dignity is preserved, roots are understood, and ethical
              alignment is chosen.
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

              <div className="mt-6 flex flex-wrap gap-3">
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
            href="#framework"
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            Framework
          </a>
          <a
            href="#author"
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            Author
          </a>
          <a
            href="#contact"
            className="text-sm text-[#121212]/75 hover:text-[#121212] transition"
          >
            Contact
          </a>
        </nav>
      </div>
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
              © {new Date().getFullYear()} arraframework.org • © Hasitha Jayathilaka,
              2012–2026 • CC BY-NC-ND 4.0
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
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#121212]/60">
            <Link className="hover:text-[#121212]" href={LINKS.paperRead}>
              Paper
            </Link>
            <Link className="hover:text-[#121212]" href={LINKS.semioticsRead}>
              Symbol &amp; Semiotics
            </Link>
            <a className="hover:text-[#121212]" href="#framework">
              Framework
            </a>
            <a className="hover:text-[#121212]" href="#author">
              Author
            </a>
            <a className="hover:text-[#121212]" href="#contact">
              Contact
            </a>
          </div>
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

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    return (
      name.trim().length >= 2 &&
      email.trim().includes("@") &&
      message.trim().length >= 10
    );
  }, [name, email, message]);

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
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
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
        If you’re referencing the framework for research, policy, education, or
        implementation, you can contact me here-or email{" "}
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

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={!canSubmit || status === "sending"}
            className="rounded-xl bg-[#6B1F2B] px-5 py-3 text-sm font-medium text-[#F6F1E7] disabled:opacity-50"
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

        <p className="text-xs text-[#121212]/55">
                  </p>
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
