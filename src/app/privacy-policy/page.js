const sections = [
  {
    id: "s1",
    num: "01",
    title: "Who We Are",
    body: (
      <p>
        BW Tasks is a customer relationship management (CRM) product built and
        operated by BrandingWaale (&quot;BrandingWaale,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). This policy applies to the BW Tasks
        web application and its connected integrations (Google, WhatsApp
        Business API, and email), and describes how we handle information
        belonging to the businesses and individual users who use BW Tasks, and
        the leads/contacts that our customers manage inside it.
      </p>
    ),
  },
  {
    id: "s2",
    num: "02",
    title: "Information We Collect",
    body: (
      <>
        <SubLabel>Account information</SubLabel>
        <p>
          Name, email address, phone number, role, and password (stored hashed)
          when you or your team create a BW Tasks account.
        </p>
        <SubLabel>Lead & contact data</SubLabel>
        <p>
          Names, phone numbers, emails, and enquiry details that you or your
          team enter or import into BW Tasks about your own customers/leads.
        </p>
        <SubLabel>Communications data</SubLabel>
        <p>
          WhatsApp messages, email messages, and templates sent or received
          through BW Tasks on your behalf, and their delivery status.
        </p>
        <SubLabel>Usage & device data</SubLabel>
        <p>
          Log-in timestamps, IP address, browser type, and basic activity logs
          (e.g. which pages or features were used) for security and support.
        </p>
        <p>
          We do not knowingly collect more information than is needed to operate
          the features described above, and we do not require any data beyond
          what a given feature (e.g. connecting an inbox, sending a WhatsApp
          template) needs to function.
        </p>
      </>
    ),
  },
  {
    id: "s3",
    num: "03",
    title: "Google Account & Gmail Data",
    body: (
      <>
        <p>
          If you choose to connect a Gmail account under Email → Accounts, BW
          Tasks requests limited access to your Google account through
          Google&apos;s OAuth flow, specifically:
        </p>
        <ClauseList
          items={[
            <>
              <strong>Send email on your behalf (gmail.send)</strong> — used
              only to send messages you compose, or automated/template emails
              you configure (e.g. campaigns, automation rules), from the mailbox
              you connected.
            </>,
            <>
              <strong>View your email messages (gmail.readonly)</strong> — used
              only to sync messages into your BW Tasks mailbox view and to match
              inbound replies to the correct lead/contact and conversation
              thread.
            </>,
            <>
              <strong>View your basic account info (userinfo.email)</strong> —
              used only to confirm which mailbox was connected.
            </>,
          ]}
        />
        <Callout>
          Limited Use disclosure: BW Tasks&apos;s use and transfer of
          information received from Google APIs to any other app will adhere to
          the Google API Services User Data Policy, including the Limited Use
          requirements.
        </Callout>
        <p>
          We do not use Gmail data for advertising, we do not sell it, and we do
          not allow anyone other than you (and, if applicable, teammates
          you&apos;ve given access to that mailbox inside your own BW Tasks
          account) to view it. Gmail data is never read or transferred by human
          reviewers except where necessary to investigate abuse, comply with
          law, or with your explicit consent for support purposes.
        </p>
        <p>
          You can revoke this access at any time from Google Account → Security
          → Third-party access, or by disconnecting the mailbox inside BW Tasks
          — either immediately stops all further access and BW Tasks deletes the
          associated access/refresh tokens.
        </p>
      </>
    ),
  },
  {
    id: "s4",
    num: "04",
    title: "How We Use Information",
    body: (
      <>
        <ClauseList
          items={[
            "To provide, maintain, and secure the BW Tasks application and its features (CRM, tasks, WhatsApp, email, invoicing)",
            "To send transactional and automated messages you configure (email campaigns, automation rules, WhatsApp templates) to your own leads/contacts",
            "To sync and thread inbound/outbound email and WhatsApp conversations against the correct lead record",
            "To provide customer support and respond to requests",
            "To monitor for misuse, fraud, or security incidents",
            "To comply with legal obligations",
          ]}
        />
        <Callout>
          We do not use your data, your team&apos;s data, or your leads&apos;
          data to train machine-learning models, and we do not sell personal
          information to third parties.
        </Callout>
      </>
    ),
  },
  {
    id: "s5",
    num: "05",
    title: "How We Share Information",
    body: (
      <>
        <p>We share information only in the following circumstances:</p>
        <ClauseList
          items={[
            "Service providers that host or operate parts of BW Tasks on our behalf (e.g. cloud hosting, database hosting, transactional email/SMS delivery), bound by confidentiality and data-processing obligations",
            "Google and Meta (WhatsApp Business API), solely to deliver the messages you send through those channels and to receive delivery/read receipts",
            "Legal requirements, if required to comply with a subpoena, court order, or similar legal process, or to protect the rights, property, or safety of BrandingWaale, our customers, or others",
            "With your direction, such as exporting your own data",
          ]}
        />
        <Callout>
          We do not share Gmail data with any advertising network, data broker,
          or analytics platform.
        </Callout>
      </>
    ),
  },
  {
    id: "s6",
    num: "06",
    title: "Data Retention",
    body: (
      <p>
        We retain account, lead, and communications data for as long as your BW
        Tasks account is active, or as needed to provide the service. Gmail
        messages synced into BW Tasks are retained only for as long as the
        corresponding mailbox stays connected; disconnecting a mailbox stops
        further syncing and you may request deletion of previously synced
        messages at any time (see Section 8). Backups are rotated on a routine
        schedule and are not retained indefinitely.
      </p>
    ),
  },
  {
    id: "s7",
    num: "07",
    title: "Security",
    body: (
      <>
        <p>
          We use industry-standard safeguards to protect information in BW
          Tasks, including encryption of data in transit (HTTPS/TLS), access
          controls limiting which team members and systems can reach production
          data, hashed password storage, and secure storage of OAuth tokens.
        </p>
        <p>
          No method of transmission or storage is 100% secure, and we cannot
          guarantee absolute security, but we work to continuously improve these
          protections.
        </p>
      </>
    ),
  },
  {
    id: "s8",
    num: "08",
    title: "Your Rights & Choices",
    body: (
      <>
        <ClauseList
          items={[
            <>
              <strong>Access & correction</strong> — update your account details
              directly inside BW Tasks, or contact us for data we hold that
              isn&apos;t editable in the app
            </>,
            <>
              <strong>Deletion</strong> — request deletion of your account and
              associated data by contacting us at the email below; we will
              delete it except where we&apos;re required to retain it by law
            </>,
            <>
              <strong>Revoke Google access</strong> — disconnect a Gmail account
              from Email → Accounts inside BW Tasks, or from your Google
              Account&apos;s third-party access settings, at any time
            </>,
            <>
              <strong>Export</strong> — request an export of the data associated
              with your account
            </>,
          ]}
        />
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:privacy@brandingwaale.com"
            className="text-[var(--accent)] underline-offset-2 hover:underline"
          >
            privacy@brandingwaale.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "s9",
    num: "09",
    title: "Children's Privacy",
    body: (
      <p>
        BW Tasks is a business tool intended for use by adults acting on behalf
        of a business. It is not directed to children, and we do not knowingly
        collect personal information from anyone under the age of 18.
      </p>
    ),
  },
  {
    id: "s10",
    num: "10",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. If we make material
        changes, we&apos;ll update the &quot;Last updated&quot; date above and,
        where appropriate, notify account admins by email. Continued use of BW
        Tasks after a change takes effect constitutes acceptance of the revised
        policy.
      </p>
    ),
  },
  {
    id: "s11",
    num: "11",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about this policy or your data can be sent to:</p>
        <ContactCard
          org="BrandingWaale — BW Tasks"
          rows={[
            "privacy@brandingwaale.com",
            "brandingwaale.com",
            "[Add your registered business address here]",
          ]}
        />
      </>
    ),
  },
];

function SubLabel({ children }) {
  return (
    <div className="mb-1.5 mt-4 font-mono text-[0.78rem] tracking-wide text-primary">
      {children}
    </div>
  );
}

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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground ">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border px-5 pb-16 pt-30 sm:px-10 md:pb-24 ">
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
            Legal / Data Practices
          </div>
          <h1 className="max-w-[16ch] font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            How BW Tasks handles your information
          </h1>
          <p className="mt-4 max-w-[60ch] text-base text-muted-foreground sm:text-lg">
            BW Tasks is a CRM used to manage leads, tasks, WhatsApp
            conversations, email, and invoicing for your business. This policy
            explains what information we collect to run that service — including
            what happens to data we access from your Google account when you
            connect Gmail — and how you can control or delete it.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {[
              ["Product", "BW Tasks"],
              ["Operated by", "BrandingWaale"],
              ["Last Updated", "August 31, 2026"],
              ["Sections", "11"],
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
