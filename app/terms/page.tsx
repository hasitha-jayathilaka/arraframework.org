// src/app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for arraframework.org.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#121212]">
      <header className="border-b border-[#121212]/10">
        <div className="mx-auto w-full max-w-5xl px-6 py-6">
          <Link href="/" className="text-sm text-[#121212]/75 hover:text-[#121212]">
            ← Back to Home
          </Link>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Terms of Use</h1>
          <p className="mt-2 text-sm text-[#121212]/70">arraframework.org</p>
          <p className="mt-1 text-sm text-[#121212]/70">Last updated: February 10, 2026</p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
          <p className="text-sm leading-relaxed text-[#121212]/85">
            These Terms of Use ("Terms") govern your use of the website
            arraframework.org (the "Site"), operated by W.A. Hasitha Supun
            Jayathilaka ("we", "us", "our"). By accessing or using the Site, you
            agree to these Terms.
          </p>
        </div>

        <Section title="1. Use of the Site">
          <p className="body">
            You may use the Site for lawful purposes only. You agree not to misuse
            the Site, attempt unauthorized access, interfere with normal operation,
            or use the Site in a way that violates applicable laws or third-party rights.
          </p>
        </Section>

        <Section title="2. Intellectual Property and Licensing">
          <p className="body">
            The A-R-R-A Framework, including all written content, the Symbol &amp;
            Semiotics documentation, and related materials published on this Site,
            are © W.A. Hasitha Supun Jayathilaka, 2012–2026.
          </p>
          <p className="body">
            All framework materials are licensed under Creative Commons
            Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0).
          </p>

          <p className="body font-medium text-[#121212]">Under this license, you may:</p>
          <ul className="list">
            <li>Share and cite the framework with proper attribution</li>
            <li>Use it for non-commercial purposes (research, education, policy development, institutional implementation)</li>
            <li>Download and distribute the published PDFs with attribution</li>
          </ul>

          <p className="body font-medium text-[#121212]">You may NOT:</p>
          <ul className="list">
            <li>
              Use the framework commercially without written permission (including consulting services, paid training, proprietary implementations, or for-profit products)
            </li>
            <li>Create derivative works, modified versions, or adaptations without permission</li>
            <li>Remove attribution, copyright notices, or licensing information</li>
            <li>Misrepresent the framework or claim authorship</li>
          </ul>

          <div className="mt-4 rounded-xl border border-[#121212]/10 bg-[#F6F1E7] p-4 text-sm text-[#121212]/82">
            <span className="font-medium text-[#121212]">Commercial licensing:</span>{" "}
            For commercial use, organizational training programs, consulting services, or paid implementations,
            please contact hasitha@theroifirm.com to discuss licensing arrangements.
          </div>
        </Section>

        <Section title="3. The A-R-R-A Symbol">
          <p className="body">
            The A-R-R-A symbol (circle with central point) uses a widely-attested
            geometric structure that appears across civilizational contexts and is
            not owned exclusively. However, the specific visual design, color
            treatment, contextual explanation, and association with the A-R-R-A
            Framework as documented in the Symbol &amp; Semiotics paper are protected
            under the CC BY-NC-ND 4.0 license.
          </p>
          <p className="body">
            Use of the symbol with proper attribution for non-commercial purposes
            consistent with the framework is permitted. Commercial or modified use
            requires permission.
          </p>
        </Section>

        <Section title="4. Academic and Institutional Use">
          <p className="body">
            The framework is designed for use in academic research, educational
            curricula, policy development, conflict resolution programs,
            organizational ethics training, and similar contexts. Such use is
            welcomed and encouraged under the CC BY-NC-ND 4.0 license with proper attribution.
          </p>
          <p className="body">Proper attribution includes:</p>
          <div className="mt-3 rounded-xl border border-[#121212]/10 bg-[#F6F1E7] p-4 text-sm text-[#121212]/82">
            Jayathilaka, W.A.H.S. (2012–2026). A-R-R-A Framework: Art → Right → Respect → Alignment. https://arraframework.org
          </div>
        </Section>

        <Section title="5. Contact Form and Data Submissions">
          <p className="body">
            If you submit a message through the contact form or subscribe to updates,
            you represent that the information provided is accurate and that you
            have the right to submit it. You grant us permission to use your
            submission to respond to your request and to operate our communications
            (e.g., follow-ups, framework updates).
          </p>
          <p className="body">
            You may unsubscribe from communications at any time. See our Privacy Policy
            for details on data handling.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p className="body">
            The Site may use third-party services including analytics (Google Analytics),
            email delivery, or embedded media. Those services have their own terms and
            privacy practices. We are not responsible for third-party services beyond
            what is required by law.
          </p>
        </Section>

        <Section title="7. Disclaimer">
          <p className="body">The A-R-R-A Framework is provided for educational, research, and informational purposes. It is not:</p>
          <ul className="list">
            <li>Professional advice (legal, medical, psychological, or otherwise)</li>
            <li>A substitute for professional consultation in conflict resolution, ethics, or organizational management</li>
            <li>A guarantee of specific outcomes when applied</li>
          </ul>
          <p className="body">
            The Site is provided "as is" and "as available." We do not guarantee uninterrupted access,
            error-free operation, or that information on the Site is complete or current at all times.
            Any reliance on the framework or Site content is at your own risk and discretion.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p className="body">
            To the maximum extent permitted by law, W.A. Hasitha Supun Jayathilaka will not be liable for any indirect,
            incidental, consequential, or special damages arising out of or related to your use of the Site,
            the framework, or any materials provided, including but not limited to: outcomes from applying the framework,
            misinterpretation or misuse, organizational or interpersonal conflicts, or any other damages.
          </p>
        </Section>

        <Section title="9. User Conduct">
          <p className="body">You agree not to:</p>
          <ul className="list">
            <li>Violate intellectual property rights outlined in these Terms</li>
            <li>Use the Site for unlawful purposes</li>
            <li>Attempt to harm, disrupt, or interfere with the Site&apos;s operation</li>
            <li>Misrepresent your affiliation with the A-R-R-A Framework</li>
            <li>Use the framework commercially without proper licensing</li>
          </ul>
        </Section>

        <Section title="10. Changes to These Terms">
          <p className="body">
            We may update these Terms from time to time to reflect changes in the framework, Site functionality, or legal requirements.
            The "Last updated" date will reflect the latest version. Continued use of the Site after changes constitutes acceptance
            of the updated Terms. Significant changes will be clearly noted on the Site.
          </p>
        </Section>

        <Section title="11. Governing Law and Jurisdiction">
          <p className="body">
            These Terms are governed by the laws of Sri Lanka. Any disputes arising from these Terms or your use of the Site shall be
            subject to the exclusive jurisdiction of the competent courts of Sri Lanka.
          </p>
        </Section>

        <Section title="12. Severability">
          <p className="body">
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the
            minimum extent necessary, and the remaining provisions will remain in full force and effect.
          </p>
        </Section>

        <Section title="13. Contact">
          <p className="body">Questions about these Terms or licensing inquiries:</p>
          <div className="mt-4 rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-6 text-sm text-[#121212]/82">
            <p><span className="font-medium text-[#121212]">Email:</span> hasitha@theroifirm.com</p>
            <p className="mt-1"><span className="font-medium text-[#121212]">Website:</span> https://arraframework.org</p>
          </div>

          <p className="mt-6 text-xs text-[#121212]/60">
            © W.A. Hasitha Supun Jayathilaka, 2012–2026
          </p>
          <p className="mt-2 text-xs text-[#121212]/60">
            Licensed under CC BY-NC-ND 4.0
          </p>
        </Section>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

const body = "text-sm leading-relaxed text-[#121212]/82";
const list = "ml-5 list-disc space-y-1 text-sm text-[#121212]/82";
