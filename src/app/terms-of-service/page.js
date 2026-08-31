const sections = [
  {
    id: "s1",
    num: "01",
    title: "Acceptance of Terms",
    body: (
      <p>
        These Terms of Service (&quot;Terms&quot;) are a binding agreement
        between you (and, if you&apos;re using BW Tasks on behalf of a business,
        that business) and BrandingWaale (&quot;BrandingWaale,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your
        access to and use of the BW Tasks application, including its website,
        dashboard, APIs, and connected integrations (collectively, the
        &quot;Service&quot;). By creating an account or otherwise using the
        Service, you agree to these Terms. If you do not agree, do not use the
        Service.
      </p>
    ),
  },
  {
    id: "s2",
    num: "02",
    title: "The Service",
    body: (
      <p>
        BW Tasks is a CRM platform that helps businesses manage leads and
        pipelines, tasks, team performance, WhatsApp conversations (via the
        WhatsApp Business API), email (including template building, campaigns,
        and automation rules), and invoicing/quotations. Features may be added,
        changed, or removed over time, and some features may depend on you
        connecting a third-party account (e.g. Gmail or WhatsApp Business).
      </p>
    ),
  },
  {
    id: "s3",
    num: "03",
    title: "Accounts",
    body: (
      <ClauseList
        items={[
          "You must provide accurate information when creating an account and keep your login credentials confidential",
          "You're responsible for all activity that happens under your account and the accounts of teammates you invite",
          "You must notify us promptly of any unauthorized use of your account",
          "Accounts are intended for use by businesses and their authorized personnel, not for personal/consumer use",
        ]}
      />
    ),
  },
  {
    id: "s4",
    num: "04",
    title: "Acceptable Use",
    body: (
      <>
        <p>You agree not to use the Service to:</p>
        <ClauseList
          items={[
            "Send unsolicited bulk messages, spam, or content that violates WhatsApp's, Google's, or any applicable messaging provider's policies",
            "Upload, store, or transmit unlawful, harassing, defamatory, or fraudulent content",
            "Attempt to gain unauthorized access to the Service, other accounts, or the systems/networks connected to it",
            "Reverse-engineer, decompile, or attempt to extract the source code of the Service, except where permitted by law",
            "Use the Service in violation of any applicable data-protection, anti-spam, or telecommunications law",
          ]}
        />
        <Callout>
          Messages sent through the WhatsApp Business API integration must also
          comply with Meta&apos;s WhatsApp Business Messaging Policy and
          template category rules (e.g. UTILITY templates may not contain
          promotional content). We may suspend messaging features for accounts
          that repeatedly violate these policies, since violations can affect
          the shared WhatsApp/Google infrastructure other customers rely on.
        </Callout>
      </>
    ),
  },
  {
    id: "s5",
    num: "05",
    title: "Third-Party Integrations",
    body: (
      <>
        <p>
          BW Tasks integrates with third-party services, including Google (for
          Gmail sending/syncing) and Meta (for the WhatsApp Business API). Your
          use of those integrations is also subject to the relevant
          provider&apos;s own terms:
        </p>
        <ClauseList
          items={[
            "Google Terms of Service and the Google API Services User Data Policy",
            "WhatsApp Business Terms",
          ]}
        />
        <p>
          We are not responsible for outages, policy changes, or account
          restrictions imposed by these third-party providers, though we&apos;ll
          make reasonable efforts to keep BW Tasks working smoothly with them.
        </p>
      </>
    ),
  },
  {
    id: "s6",
    num: "06",
    title: "Your Data & Content",
    body: (
      <>
        <p>
          You retain ownership of the lead, contact, and business data you or
          your team enter into BW Tasks (&quot;Customer Data&quot;). You grant
          us a limited license to host, process, and transmit Customer Data
          solely to provide the Service to you (e.g. sending the emails/WhatsApp
          messages you configure, displaying your dashboards). See our Privacy
          Policy for details on how we handle this data, including data accessed
          through connected Google accounts.
        </p>
        <p>
          You&apos;re responsible for ensuring you have the necessary rights and
          consents to upload and message the leads/contacts you manage inside BW
          Tasks.
        </p>
      </>
    ),
  },
  {
    id: "s7",
    num: "07",
    title: "Intellectual Property",
    body: (
      <p>
        The Service, including its software, design, branding, and
        documentation, is owned by BrandingWaale and protected by intellectual
        property laws. These Terms don&apos;t grant you any ownership rights in
        the Service — only a limited, non-exclusive, non-transferable right to
        use it in accordance with these Terms.
      </p>
    ),
  },
  {
    id: "s8",
    num: "08",
    title: "Fees & Payment",
    body: (
      <p>
        Where BW Tasks is provided under a paid plan, fees, billing cycle, and
        payment terms are as agreed separately between you and BrandingWaale
        (e.g. in an order form, invoice, or plan selection). Fees are
        non-refundable except where required by law or otherwise agreed in
        writing.
      </p>
    ),
  },
  {
    id: "s9",
    num: "09",
    title: "Termination",
    body: (
      <p>
        You may stop using the Service and request account deletion at any time.
        We may suspend or terminate your access if you materially breach these
        Terms (including the Acceptable Use section), if required by law, or if
        continued provision of the Service to your account would violate a
        third-party provider&apos;s policies (e.g. Google or Meta). On
        termination, we will handle remaining Customer Data as described in our
        Privacy Policy.
      </p>
    ),
  },
  {
    id: "s10",
    num: "10",
    title: "Disclaimer of Warranties",
    body: (
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available,&quot;
        without warranties of any kind, whether express or implied, including
        implied warranties of merchantability, fitness for a particular purpose,
        and non-infringement, to the fullest extent permitted by law. We do not
        warrant that the Service will be uninterrupted, error-free, or that
        third-party integrations (Google, WhatsApp) will always be available.
      </p>
    ),
  },
  {
    id: "s11",
    num: "11",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, BrandingWaale will not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits, revenue, data, or goodwill, arising
        from your use of the Service. Our total liability for any claim relating
        to the Service will not exceed the amount you paid us for the Service in
        the twelve (12) months preceding the event giving rise to the claim.
      </p>
    ),
  },
  {
    id: "s12",
    num: "12",
    title: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of India{" "}
        <span className="text-muted-foreground">
          — update if your registered entity is elsewhere
        </span>
        , without regard to conflict-of-law principles. Any disputes will be
        subject to the exclusive jurisdiction of the courts located in{" "}
        <strong className="font-semibold text-foreground">
          [Your city/state]
        </strong>
        .
      </p>
    ),
  },
  {
    id: "s13",
    num: "13",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. If we make material
        changes, we&apos;ll update the &quot;Last updated&quot; date above and,
        where appropriate, notify account admins by email. Continued use of the
        Service after a change takes effect constitutes acceptance of the
        revised Terms.
      </p>
    ),
  },
  {
    id: "s14",
    num: "14",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about these Terms can be sent to:</p>
        <ContactCard
          org="BrandingWaale — BW Tasks"
          rows={[
            "support@brandingwaale.com",
            "brandingwaale.com",
            "[Add your registered business address here]",
          ]}
        />
      </>
    ),
  },
];

function ClauseList({ items }) {
  return (
    <ul className="my-4 flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="relative pl-5 text-muted-foreground">
          <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-sm bg-[var(--accent)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }) {
  return (
    <div className="mt-5 border-l-2 border-[var(--accent)] bg-[var(--accent)]/[0.06] px-4 py-3.5 text-sm text-foreground/90">
      {children}
    </div>
  );
}

function ContactCard({ org, rows }) {
  return (
    <div className="mt-5 flex flex-col gap-2 rounded-xl border border-border bg-card px-6 py-5">
      <div className="mb-0.5 text-base font-bold tracking-tight text-foreground">
        {org}
      </div>
      {rows.map((row, i) => (
        <div key={i} className="flex gap-3 text-sm text-muted-foreground">
          <span className="shrink-0 text-[var(--accent)]">◆</span>
          {row}
        </div>
      ))}
    </div>
  );
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border px-5 py-16 sm:px-10 md:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 400px at 15% -10%, oklch(70.755% 0.19742 46.444 / 0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            <span className="inline-block h-px w-7 bg-[var(--accent)]" />
            Legal / Terms
          </div>
          <h1 className="max-w-[16ch] font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            The terms behind BW Tasks
          </h1>
          <p className="mt-4 max-w-[60ch] text-base text-muted-foreground sm:text-lg">
            These terms govern your use of BW Tasks, the CRM platform provided
            by BrandingWaale for managing leads, tasks, WhatsApp conversations,
            email, and invoicing. By creating an account or using BW Tasks, you
            agree to these terms.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {[
              ["Product", "BW Tasks"],
              ["Operated by", "BrandingWaale"],
              ["Last Updated", "August 31, 2026"],
              ["Sections", "14"],
            ].map(([dt, dd]) => (
              <div key={dt}>
                <dt className="mb-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {dt}
                </dt>
                <dd className="text-sm text-foreground">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Layout */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="border-b border-border px-5 py-8 md:sticky md:top-0 md:h-fit md:border-b-0 md:border-r md:px-6"
        >
          <div className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
            On this page
          </div>
          <ul className="flex flex-row flex-wrap gap-x-4 gap-y-1.5 md:flex-col md:gap-0.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-2.5 rounded px-1 py-1.5 text-[0.87rem] text-muted-foreground no-underline transition-colors hover:bg-white/[0.03] hover:text-foreground"
                >
                  <span className="w-5 shrink-0 font-mono text-[var(--accent)]">
                    {s.num}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main className="max-w-[780px] px-5 py-11 pb-24 sm:px-10">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="mb-14 scroll-mt-8 last:mb-0"
            >
              <div className="mb-3.5 flex items-baseline gap-2 border-b border-border pb-3">
                <span className="shrink-0 font-mono text-base text-[var(--accent)]">
                  {s.num}
                </span>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {s.title}
                </h2>
              </div>
              <div className="flex flex-col gap-3.5 text-[0.95rem] leading-7 text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
                {s.body}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
