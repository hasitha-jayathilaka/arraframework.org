// src/app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for arraframework.org — how information is collected, used, and protected.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#121212]">
      <header className="border-b border-[#121212]/10">
        <div className="mx-auto w-full max-w-5xl px-6 py-6">
          <Link href="/" className="text-sm text-[#121212]/75 hover:text-[#121212]">
            ← Back to Home
          </Link>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-[#121212]/70">arraframework.org</p>
          <p className="mt-1 text-sm text-[#121212]/70">Last updated: February 10, 2026</p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
          <p className="text-sm leading-relaxed text-[#121212]/85">
            This Privacy Policy explains how W.A. Hasitha Supun Jayathilaka ("we",
            "us", "our") collects, uses, protects, and shares information when you
            use arraframework.org (the "Site"). We are committed to protecting
            your privacy and being transparent about our data practices.
          </p>
        </div>

        <DocSection title="1. Information We Collect">
          <SubTitle>1.1 Information You Provide Directly</SubTitle>
          <p className="body">
            When you use the contact form or subscribe to updates, we collect:
          </p>
          <ul className="list">
            <li>Name</li>
            <li>Email address</li>
            <li>Message content (if submitted via contact form)</li>
            <li>
              Organization, country, or other optional information you choose to
              provide
            </li>
          </ul>

          <SubTitle>1.2 Information Collected Automatically</SubTitle>
          <p className="body">
            When you visit the Site, we automatically collect certain technical
            information through analytics services (Google Analytics):
          </p>
          <ul className="list">
            <li>IP address (anonymized for analytics)</li>
            <li>Browser type and version</li>
            <li>Device type (desktop, mobile, tablet)</li>
            <li>Pages visited on the Site</li>
            <li>Time spent on pages</li>
            <li>Approximate geographic location (country/region level)</li>
            <li>Referring website (how you arrived at our Site)</li>
            <li>Date and time of access</li>
          </ul>

          <SubTitle>1.3 Cookies and Tracking Technologies</SubTitle>
          <p className="body">
            We use cookies and similar technologies for analytics and to improve
            Site functionality. Cookies are small text files stored on your
            device. You can control or disable cookies through your browser
            settings, though some Site features may be affected.
          </p>
          <p className="body">Types of cookies we use:</p>
          <ul className="list">
            <li>
              Essential cookies: Required for basic Site functionality (e.g.,
              form submission, session management)
            </li>
            <li>
              Analytics cookies: Help us understand how visitors use the Site
              (via Google Analytics)
            </li>
          </ul>
        </DocSection>

        <DocSection title="2. How We Use Your Information">
          <p className="body">We use the information we collect for the following purposes:</p>
          <ul className="list">
            <li>
              To respond to your inquiries: When you submit a contact form, we
              use your information to respond to your message and provide
              requested information about the framework, collaborations,
              training, or licensing
            </li>
            <li>
              To send updates: If you subscribe, we may send newsletters or
              updates about the A-R-R-A Framework, new resources, publications,
              or events (you can unsubscribe anytime)
            </li>
            <li>
              To improve the Site: Analytics data helps us understand how the
              Site is used, what content is most valuable, and how to improve
              user experience
            </li>
            <li>
              To ensure security: We monitor for abuse, spam, or unauthorized
              access to protect the Site and its users
            </li>
            <li>
              To comply with legal obligations: We may process information as
              required by applicable laws or to protect our rights
            </li>
          </ul>
        </DocSection>

        <DocSection title="3. Sharing and Disclosure">
          <p className="body">We do not sell, rent, or trade your personal information.</p>
          <p className="body">We may share your information in the following limited circumstances:</p>
          <ul className="list">
            <li>
              Service Providers: We use trusted third-party service providers to
              help operate the Site, including:
              <div className="mt-2 rounded-xl border border-[#121212]/10 bg-[#F6F1E7] p-4 text-sm text-[#121212]/82">
                Web hosting services • Email delivery and newsletter management •
                Analytics (Google Analytics)
              </div>
              <p className="mt-2 text-sm text-[#121212]/82">
                These providers only access information needed to perform their
                services and are contractually obligated to protect it.
              </p>
            </li>
            <li>
              Legal Requirements: We may disclose information if required by law,
              court order, or legal process, or to protect our rights, safety,
              or the safety of others
            </li>
            <li>
              Business Transfers: In the unlikely event of a merger, acquisition,
              or sale of assets, your information may be transferred as part of
              that transaction (you would be notified)
            </li>
          </ul>
        </DocSection>

        <DocSection title="4. Third-Party Services">
          <SubTitle>Google Analytics</SubTitle>
          <p className="body">
            We use Google Analytics to understand how visitors interact with the
            Site. Google Analytics collects information anonymously and reports
            website trends without identifying individual visitors. Google&apos;s
            use of this information is governed by their Privacy Policy:
          </p>
          <a
            className="link"
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            https://policies.google.com/privacy
          </a>

          <p className="mt-4 text-sm leading-relaxed text-[#121212]/82">
            You can opt out of Google Analytics by installing the Google Analytics
            Opt-out Browser Add-on:
          </p>
          <a
            className="link"
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </DocSection>

        <DocSection title="5. Data Security">
          <p className="body">
            We take reasonable technical and organizational measures to protect
            your information from unauthorized access, loss, misuse, or
            alteration. These measures include:
          </p>
          <ul className="list">
            <li>Secure hosting infrastructure</li>
            <li>HTTPS encryption for data transmission</li>
            <li>Restricted access to personal information</li>
            <li>Regular security reviews</li>
          </ul>
          <p className="body">
            However, no online system can be guaranteed 100% secure. Please use
            the Site at your own discretion and contact us immediately if you
            suspect any security breach.
          </p>
        </DocSection>

        <DocSection title="6. Data Retention">
          <p className="body">
            We retain your information only as long as necessary for the purposes
            outlined in this Privacy Policy:
          </p>
          <ul className="list">
            <li>
              Contact form submissions: Retained as long as needed to respond to
              your inquiry and maintain communication records (typically 3–5 years)
            </li>
            <li>Newsletter subscriptions: Retained until you unsubscribe or request deletion</li>
            <li>Analytics data: Retained according to Google Analytics settings (typically 26 months, anonymized)</li>
          </ul>
        </DocSection>

        <DocSection title="7. Your Rights and Choices">
          <p className="body">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list">
            <li>Access: Request a copy of the personal information we hold about you</li>
            <li>Correction: Request correction of inaccurate or incomplete information</li>
            <li>Deletion: Request deletion of your personal information (subject to legal retention requirements)</li>
            <li>Withdraw Consent: Unsubscribe from newsletters or withdraw consent for data processing</li>
            <li>Object or Restrict Processing: Object to or request restriction of certain data processing activities</li>
            <li>Data Portability: Request your data in a portable format (where applicable)</li>
          </ul>

          <p className="body">How to exercise your rights:</p>
          <ul className="list">
            <li>Email hasitha@theroifirm.com with your request</li>
            <li>Use the unsubscribe link in any newsletter email</li>
          </ul>

          <p className="body">
            We will respond to your request within 30 days (or as required by applicable law).
          </p>
        </DocSection>

        <DocSection title="8. International Data Transfers">
          <p className="body">
            The Site is operated from Sri Lanka. If you are accessing the Site
            from outside Sri Lanka, please be aware that your information may be
            transferred to, stored, and processed in Sri Lanka or other countries
            where our service providers operate. By using the Site, you consent
            to such transfers. We take steps to ensure your information is protected
            in accordance with this Privacy Policy.
          </p>
        </DocSection>

        <DocSection title="9. Children's Privacy">
          <p className="body">
            The Site is not intended for children under 13 years of age, and we do
            not knowingly collect personal information from children under 13. If
            you believe we have inadvertently collected information from a child
            under 13, please contact us immediately at hasitha@theroifirm.com, and
            we will promptly delete such information.
          </p>
        </DocSection>

        <DocSection title="10. GDPR Compliance (European Users)">
          <p className="body">
            If you are located in the European Economic Area (EEA), the General Data Protection Regulation (GDPR) provides you with additional rights:
          </p>
          <ul className="list">
            <li>
              Legal Basis for Processing: We process your information based on:
              <div className="mt-2 rounded-xl border border-[#121212]/10 bg-[#F6F1E7] p-4 text-sm text-[#121212]/82">
                Your consent (e.g., newsletter subscriptions) • Legitimate interests (e.g., analytics to improve the Site) • Legal obligations (e.g., compliance with applicable laws)
              </div>
            </li>
            <li>
              Right to Lodge a Complaint: You have the right to lodge a complaint
              with a supervisory authority in your country if you believe we have
              violated your data protection rights
            </li>
            <li>Data Protection Officer: For GDPR-related inquiries, contact hasitha@theroifirm.com</li>
          </ul>
        </DocSection>

        <DocSection title="11. Changes to This Privacy Policy">
          <p className="body">
            We may update this Privacy Policy from time to time to reflect changes
            in our practices, Site functionality, or legal requirements. The "Last
            updated" date at the top will indicate the latest revision. Significant
            changes will be clearly noted on the Site or communicated via email if
            you have subscribed. Your continued use of the Site after changes
            constitutes acceptance of the updated Privacy Policy.
          </p>
        </DocSection>

        <DocSection title="12. Contact Us">
          <p className="body">
            If you have questions, concerns, or requests related to this Privacy
            Policy or your personal information:
          </p>
          <div className="mt-4 rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-6 text-sm text-[#121212]/82">
            <p><span className="font-medium text-[#121212]">Email:</span> hasitha@theroifirm.com</p>
            <p className="mt-1"><span className="font-medium text-[#121212]">Website:</span> https://arraframework.org</p>
            <p className="mt-1">
              <span className="font-medium text-[#121212]">Mailing Address:</span>{" "}
              W.A. Hasitha Supun Jayathilaka, Sri Lanka
            </p>
          </div>

          <p className="mt-6 text-xs text-[#121212]/60">
            © W.A. Hasitha Supun Jayathilaka, 2012–2026
          </p>
          <p className="mt-2 text-xs text-[#121212]/60">
            We are committed to protecting your privacy and handling your information responsibly.
          </p>
        </DocSection>
      </section>
    </main>
  );
}

function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 rounded-2xl border border-[#121212]/12 bg-[#FFFFFF]/70 p-7">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-[#121212]">{children}</h3>;
}

const styles = {
  body: "text-sm leading-relaxed text-[#121212]/82",
  list: "ml-5 list-disc space-y-1 text-sm text-[#121212]/82",
  link:
    "mt-2 inline-block break-words text-sm underline underline-offset-4 hover:opacity-80 text-[#121212]",
};

function P({ children }: { children: React.ReactNode }) {
  return <p className={styles.body}>{children}</p>;
}

// little helpers so the JSX above stays readable
const body = styles.body;
const list = styles.list;
const link = styles.link;
