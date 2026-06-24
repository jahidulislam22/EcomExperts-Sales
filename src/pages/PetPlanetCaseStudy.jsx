const P = "#1B4F72";
const PM = "#2874A6";
const PL = "#EBF5FB";
const PA = "#E67E22";

const heroStats = [
  { v: "47", l: "Stores, one account" },
  { v: "290K", l: "Customers migrated" },
  { v: "1 mo", l: "IMS v1 delivered" },
  { v: "$250K", l: "Vendor quote avoided" },
];

const kpiMetrics = [
  { value: "47", label: "Locations", sub: "One Shopify account" },
  { value: "1 mo", label: "IMS v1 shipped", sub: "vs. $250K / 10 mo quote" },
  { value: "290K", label: "Customers migrated", sub: "Only 300–400 failed" },
  { value: "7 yrs", label: "Order history", sub: "Jan 2018 → present" },
  { value: "20+", label: "Per-location reports", sub: "Close-out, tips, P&L" },
  { value: "192", label: "Loyalty programs", sub: "Punch cards at POS" },
  { value: "~7K", label: "Products rebuilt", sub: "From 12K flat rows" },
  { value: "100K", label: "URLs preserved", sub: "301-mapped for SEO" },
];

const timeline = [
  { date: "Jul 2025", title: "Signed", detail: "Pet Planet selects EcomExperts as implementation partner after an overnight rollout playbook answered Crystal Ng's final objections." },
  { date: "Aug 19, 2025", title: "The wall confirmed", detail: "Shopify retail solution engineers confirm on the record: no native way for a franchisee to see only their location's data." },
  { date: "Sep 2025", title: "Pet Planet IMS v1", detail: "Two engineers ship the first working franchise operating layer in a month — inventory, POs, suppliers, orders, close-out, reports." },
  { date: "Nov 2025", title: "Proof under load", detail: "New Toronto store launches on the full Shopify stack and trades through Black Friday." },
  { date: "2025–26", title: "Chain cutover", detail: "All stores planned for one overnight window, timezone by timezone — Franpos unplugged, registers on Shopify by 8am Mountain." },
];

const imsModules = [
  { name: "Inventory", detail: "View, update, bulk import/export — their stock only." },
  { name: "Purchase orders", detail: "Create, send to suppliers as PDF/email, receive against, adjust unit costs. Supplier minimums built in." },
  { name: "Suppliers", detail: "Full distributor records down to the credit department contact." },
  { name: "Orders", detail: "Online and POS orders for their location, fulfillment included." },
  { name: "Daily close-out", detail: "Wired to Shopify cash sessions with editable adjustments and audit logs." },
  { name: "Reports", detail: "Sales, WoW, YoY, tips — scoped at the data layer, not behind a removable filter." },
];

const migrationAssets = [
  { asset: "Customer records", volume: "~348,000 (60% by phone)", note: "290K imported after dedupe; unique placeholders for shared emails" },
  { asset: "Order history", volume: "Jan 1, 2018 → present", note: "5–7 hours import per store; six-figure order lines per location" },
  { asset: "Product catalog", volume: "12,000 flat rows", note: "Rebuilt into ~7,000 variant-correct products via pattern matching" },
  { asset: "Gift cards", volume: "Active balances", note: "Silent one-shot import app — no customer emails on load" },
  { asset: "Loyalty progress", volume: "192 punch-card programs", note: "Progress reconstructed for POS" },
  { asset: "SEO equity", volume: "~140,000 legacy URLs", note: "~100,000 matched and 301-mapped" },
];

const reportingStack = [
  { layer: "Sync", tool: "Airbyte → BigQuery", detail: "Every Shopify table synced; pipeline reworked from 24hr toward 4hr latency." },
  { layer: "Visualisation", tool: "Looker Studio", detail: "Embedded in each franchisee's IMS dashboard — scoped inside the query." },
  { layer: "Close-out", tool: "Custom build", detail: "Product/service sales, payment breakdown, gift cards, tips, drawer counts — the 9:05pm routine." },
  { layer: "Payroll", tool: "Tips report", detail: "Groomers' tips by location and period, ready for payroll." },
  { layer: "Reconciliation", tool: "Frequent feeder", detail: "Per-brand, per-location redemption reports with one-click ZIP + Excel credit summary." },
  { layer: "Performance", tool: "WoW / YoY tiles", detail: "Including pre-Shopify history native analytics can't see." },
];

const vendorComparison = [
  { option: "Specialist vendors (×2)", cost: "$250K", timeline: "10 months", verdict: "Assumes one owner — doesn't solve franchising" },
  { option: "Cin7 / Brightpearl / marketplace apps", cost: "Off-the-shelf", timeline: "Weeks–months", verdict: "No per-franchisee data walls" },
  { option: "44 separate Shopify stores", cost: "Restructure", timeline: "Months", verdict: "Catalog fragments; unified commerce dies" },
  { option: "Pet Planet IMS (custom)", cost: "~$27–31K", timeline: "1 month v1", verdict: "Full operating layer on one account" },
];

const Eyebrow = ({ children }) => (
  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: PM, marginBottom: 8 }}>
    {children}
  </div>
);

const Divider = () => <div style={{ height: "0.5px", background: "var(--color-border-tertiary)", margin: "40px 0" }} />;

const Quote = ({ text, author, role, compact }) => (
  <div style={{ borderLeft: `3px solid ${P}`, paddingLeft: 20, margin: compact ? "16px 0 0" : "28px 0" }}>
    <div className="pet-planet-quote" style={{ fontSize: compact ? 15 : 17, color: "var(--color-text-primary)", lineHeight: 1.65, fontStyle: "italic", marginBottom: 10 }}>
      &ldquo;{text}&rdquo;
    </div>
    <div style={{ fontSize: 13, color: PM, fontWeight: 500 }}>{author}</div>
    {role && <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{role}</div>}
  </div>
);

const KpiCard = ({ value, label, sub, accent }) => (
  <div style={{ padding: "20px 18px", background: accent ? PL : "var(--color-background-secondary)", borderRadius: 12, border: accent ? `1px solid ${PM}30` : "0.5px solid var(--color-border-tertiary)" }}>
    <div className="pet-planet-kpi__value" style={{ fontSize: 28, fontWeight: 500, color: accent ? P : "var(--color-text-primary)", lineHeight: 1.1, marginBottom: 5 }}>{value}</div>
    <div style={{ fontSize: 13, fontWeight: 500, color: accent ? PM : "var(--color-text-secondary)", marginBottom: 2 }}>{label}</div>
    {sub && <div style={{ fontSize: 12, color: accent ? PM : "var(--color-text-tertiary)" }}>{sub}</div>}
  </div>
);

export default function PetPlanetCaseStudy() {
  return (
    <div className="pet-planet-case-study" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-primary)" }}>
      <div className="pet-planet-hero" style={{ background: P, padding: "36px 40px 32px" }}>
        <div className="pet-planet-hero__top">
          <div>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#85C1E9", marginBottom: 10 }}>
              Case Study · Shopify POS · Franchise Retail
            </div>
            <h1 className="pet-planet-hero__title" style={{ fontWeight: 500, color: "#fff", lineHeight: 1.15, margin: "0 0 6px" }}>
              Pet Planet
            </h1>
            <p style={{ fontSize: 15, color: "#AED6F1", margin: 0 }}>
              The franchise operating layer Shopify doesn&apos;t ship
            </p>
          </div>
          <div className="pet-planet-hero__meta">
            <span className="pet-planet-pill">Pet Specialty · Canada</span>
            <div style={{ fontSize: 12, color: "#85C1E9", marginTop: 4 }}>47 stores · Shopify POS · Custom IMS</div>
          </div>
        </div>

        <div style={{ height: "0.5px", background: "rgba(133,193,233,0.25)", margin: "0 0 20px" }} />

        <p style={{ fontSize: 14, color: "#D6EAF8", lineHeight: 1.7, maxWidth: 680, margin: "0 0 12px" }}>
          44 stores when we met them, growing toward 100. Tens of millions in annual sales. Every store individually owned and operated — leaving Franpos and Lightspeed for Shopify POS with one brand, one website, one account.
        </p>
        <p style={{ fontSize: 14, color: "#D6EAF8", lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
          Vendors quoted $250K and 10 months for the system that made it possible. We shipped the first working version in a month, with two engineers.
        </p>

        <div className="pet-planet-hero__stats">
          {heroStats.map((k, i) => (
            <div key={i} className="pet-planet-hero__stat-card" style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, border: "0.5px solid rgba(133,193,233,0.2)" }}>
              <div className="pet-planet-hero__stat-value" style={{ fontWeight: 500, color: "#fff", marginBottom: 3 }}>{k.v}</div>
              <div style={{ fontSize: 12, color: "#AED6F1" }}>{k.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pet-planet-body" style={{ padding: "36px 40px", border: "0.5px solid var(--color-border-tertiary)", borderTop: "none" }}>
        <Eyebrow>Key metrics</Eyebrow>
        <div className="pet-planet-kpi-grid">
          {kpiMetrics.map((item, i) => (
            <KpiCard key={i} value={item.value} label={item.label} sub={item.sub} accent={i < 2} />
          ))}
        </div>

        {/* ─── SITUATION ─── */}
        <Eyebrow>The situation</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 10px" }}>
          The problem nobody had solved
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 12px" }}>
          Pet Planet is a Canadian pet-specialty franchise. They wanted the textbook unified commerce setup — one catalog, one customer base, one Shopify account. Except franchises break the textbook. Franchisees are independent businesses, sometimes on the same street.
        </p>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 12px" }}>
          Shopify treats every location in one account as one company. The community thread asking &ldquo;is it possible to run a franchise as a second location?&rdquo; never got a real answer for five years. Anyone who has tried knows the two bad options: hand franchisees admin access and let competitors read each other&apos;s numbers, or lock them out entirely and make 44 store owners phone head office to count their own stock.
        </p>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: 0 }}>
          Shopify&apos;s own sales team had told Pet Planet that per-location separation was possible. On August 19, 2025, on a call with Shopify&apos;s retail solution engineers, we asked directly: can a franchisee log in and see only their location&apos;s data? The answer was no. There is no way of doing that. Most agencies stop there. The deal restructures into 44 separate stores, the catalog fragments, and unified commerce dies in committee.
        </p>

        <Quote
          text="It is a deal breaker for any franchisee to see sales data and reporting that is not their own location."
          author="Crystal Ng"
          role="President & COO, Pet Planet"
        />

        <div className="pet-planet-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
          <div style={{ padding: "18px 20px", background: PL, borderRadius: 10, border: `1px solid ${PM}25` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: P, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Shared chain-wide</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              <li>One product catalog</li>
              <li>One customer profile</li>
              <li>Cross-store purchase history</li>
              <li>National brand &amp; website</li>
            </ul>
          </div>
          <div style={{ padding: "18px 20px", background: "var(--color-background-secondary)", borderRadius: 10, border: "0.5px solid var(--color-border-tertiary)" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: P, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Walled per franchisee</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              <li>Inventory &amp; purchase orders</li>
              <li>Sales data &amp; close-out reports</li>
              <li>Supplier records &amp; costs</li>
              <li>Tips &amp; P&amp;L inputs</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* ─── VENDOR LANDSCAPE ─── */}
        <Eyebrow>Build vs. buy</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 16px" }}>
          Everything off the shelf failed the franchise test
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 20px" }}>
          We evaluated Cin7, Brightpearl, multi-vendor marketplace apps, and two specialist vendors. The specialist quotes came back at $250,000 and 10 months — a full BFCM cycle, plus change. None of them solve single-store franchising anyway. Unified commerce tech is built to share everything. A franchise is built not to.
        </p>
        <div className="pet-planet-table-wrap">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1.5px solid ${PM}25` }}>
                {["Option", "Cost", "Timeline", "Verdict"].map((h) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vendorComparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: "0.5px solid var(--color-border-tertiary)", background: row.option.includes("Pet Planet") ? PL : i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                  <td style={{ padding: "11px 12px", fontWeight: row.option.includes("Pet Planet") ? 500 : 400, color: row.option.includes("Pet Planet") ? P : "var(--color-text-primary)" }}>{row.option}</td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)" }}>{row.cost}</td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)" }}>{row.timeline}</td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Divider />

        {/* ─── TIMELINE ─── */}
        <Eyebrow>Project timeline</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 20px" }}>
          From signed to proof under load
        </h2>
        <div className="pet-planet-timeline">
          {timeline.map((item, i) => (
            <div key={i} className="pet-planet-timeline__item" style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 16, padding: "14px 0", borderBottom: i < timeline.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: PM, fontFamily: "var(--font-mono)" }}>{item.date}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: P, marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <Quote
          text="Congratulations. We would like to ask you to be our implementation partners."
          author="Crystal Ng"
          role="President & COO, Pet Planet — July 10, 2025, after an overnight rollout playbook"
        />

        <Divider />

        {/* ─── IMS ─── */}
        <Eyebrow>Franchise operating layer</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 10px" }}>
          Pet Planet IMS — what&apos;s inside
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 20px" }}>
          Two engineers built a standalone inventory management system that talks to Shopify&apos;s APIs, back end to back end. Each franchisee gets an operator login on Pet Planet&apos;s own domain — and sees only their location. Head office sees everything. On the floor, staff run plain Shopify POS, pinned to their location. A Calgary customer walks into Edmonton and their history is right there. Sales data stays walled.
        </p>
        <div className="pet-planet-module-grid">
          {imsModules.map((mod, i) => (
            <div key={i} style={{ padding: "16px 18px", background: "var(--color-background-secondary)", borderRadius: 10, border: "0.5px solid var(--color-border-tertiary)" }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: P, marginBottom: 6 }}>{mod.name}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{mod.detail}</div>
            </div>
          ))}
        </div>

        <Quote
          text="What's happened is that we've ended up building an IMS for you… this is groundbreaking for the franchise industry in general. That's on Shopify."
          author="Jeremy Cochrane"
          role="EcomExperts — Sep 16, 2025"
        />

        <Divider />

        {/* ─── MIGRATION ─── */}
        <Eyebrow>Enterprise migration</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 10px" }}>
          290,000 customers. Seven years of history. One overnight cutover.
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 12px" }}>
          Every retailer over $20M knows the migration math. The new platform is better. The migration could kill you. Pet Planet had 44 pet stores across Canada on Franpos and Lightspeed at engagement, approaching 50 during the project — and one legacy vendor who had stopped helping.
        </p>

        <Quote
          text="They are not helpful. They know that we are migrating away from them, so why help us?"
          author="Sarah Refky"
          role="Manager of Product and Transformation, Pet Planet"
        />

        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "20px 0 16px" }}>
          No direct database access. CSV exports and a public API. That&apos;s what we got to work with. Here&apos;s what had to survive:
        </p>

        <div className="pet-planet-table-wrap">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1.5px solid ${PM}25` }}>
                {["Dataset", "Volume", "How we carried it"].map((h) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {migrationAssets.map((row, i) => (
                <tr key={i} style={{ borderBottom: "0.5px solid var(--color-border-tertiary)", background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                  <td style={{ padding: "11px 12px", fontWeight: 500, color: "var(--color-text-primary)" }}>{row.asset}</td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{row.volume}</td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pet-planet-scar" style={{ background: PL, border: `1px solid ${PM}30`, borderRadius: 12, padding: "20px 24px", marginTop: 24 }}>
          <Eyebrow>Migration scar — the webhook storm</Eyebrow>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
            Mid-migration, order imports started failing en masse. Historical orders referenced inventory at locations where stock didn&apos;t exist yet, so Shopify rejected the fulfillment location — and the import storm fired tens of thousands of webhooks a minute into our own systems. The fix: pre-seed inventory levels, import orders unfulfilled, reassign fulfillment locations by script, throttle webhooks during import windows. We rebuilt the runbook so the remaining locations imported clean.
          </p>
        </div>

        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "20px 0 0" }}>
          <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>The cutover plan:</strong> not store-by-store over months. All ~45 stores in one overnight window, timezone by timezone — Saskatchewan at 9pm, Calgary at 9pm, BC at 9pm — Franpos unplugged behind them, registers open on Shopify by 8am Mountain. Gift cards load silently via a one-shot import app (Shopify emails customers when a gift card is created — a lovely feature, and a terrible way to announce your migration three weeks early). YoY reporting piped into BigQuery so Pet Planet compares 2026 against 2024 like the migration never happened.
        </p>

        <Quote
          text="Since we began communicating on Teams and the Notion board, you are very fast."
          author="Sarah Refky"
          role="Manager of Product and Transformation, Pet Planet"
        />

        <Divider />

        {/* ─── REPORTING ─── */}
        <Eyebrow>Reporting &amp; close-out</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 10px" }}>
          The daily close-out Shopify doesn&apos;t give you
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 12px" }}>
          47 pet stores needed end-of-day reports, tips payouts, and per-location P&amp;L. Shopify&apos;s answer is a register summary and an export button. Pet Planet had it worse three ways: each franchisee needed their own close-out (and it&apos;s a deal breaker for any to see another store&apos;s numbers), their old POS printed a proper close-out franchisees would feel as a downgrade without, and groomers get paid from tips — no tips report, no payroll.
        </p>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 20px" }}>
          Off-the-shelf report apps failed the franchise test: the ones we tested couldn&apos;t restrict report visibility per user at the data level. A filter a franchisee can change is not a wall. Shopify&apos;s reporting API is too limited — so we went around it.
        </p>

        <div className="pet-planet-stack">
          {reportingStack.map((item, i) => (
            <div key={i} className="pet-planet-stack__row" style={{ display: "grid", gridTemplateColumns: "120px 140px 1fr", gap: 12, padding: "14px 16px", background: i % 2 === 0 ? "var(--color-background-secondary)" : "transparent", borderRadius: i === 0 ? "8px 8px 0 0" : i === reportingStack.length - 1 ? "0 0 8px 8px" : 0, border: "0.5px solid var(--color-border-tertiary)", borderTop: i === 0 ? "0.5px solid var(--color-border-tertiary)" : "none", alignItems: "start" }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: PM }}>{item.layer}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>{item.tool}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="pet-planet-scar" style={{ background: PL, border: `1px solid ${PM}30`, borderRadius: 12, padding: "20px 24px", marginTop: 24 }}>
          <Eyebrow>Reporting scar — compressed timeline</Eyebrow>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
            Our first estimate for the reporting build was four to seven weeks. Crystal&apos;s response: &ldquo;No, we need it faster.&rdquo; We compressed the plan and shipped. The sync pipeline started life at a 24-hour delay; we reworked it toward a 4-hour target.
          </p>
        </div>

        <Divider />

        {/* ─── HONEST SCAR ─── */}
        <Eyebrow>The honest scar</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 12px" }}>
          What broke — and how we recovered
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 16px" }}>
          We signed in July against a mid-September go-live. The franchise permissions wall — the one Shopify&apos;s sales process had waved away — pushed the whole plan. We told Crystal directly, re-scoped, and rebuilt the timeline around the IMS instead of pretending. We took her feedback, wrote it into the playbook, and the next franchise client gets it for free. A system, not a bet.
        </p>
        <div className="pet-planet-scar" style={{ background: PL, border: `1px solid ${PM}30`, borderRadius: 12, padding: "20px 24px" }}>
          <Quote
            text="Your team's been great, but there are some areas where there has been some knowledge gap… we ended up solving it on our own."
            author="Crystal Ng"
            role="President & COO, Pet Planet"
            compact
          />
        </div>

        <Divider />

        {/* ─── OUTCOMES ─── */}
        <Eyebrow>The outcome</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 16px" }}>
          What shipped
        </h2>
        <div className="pet-planet-outcome-list">
          {[
            "47 locations on one Shopify account — zero data leaks between franchisees, the thing Shopify said couldn't be done",
            "Pet Planet IMS v1 in one month with two engineers; Shopify's retail solution engineers reviewed it and were impressed",
            "~290,000 customers migrated with only 300–400 failures, each fixed by hand",
            "Seven years of orders across all locations, imported and verified; YoY comp reporting survives the cutover",
            "20+ reports scoped per location at the data layer — close-out, tips, WoW/YoY, credit reconciliation",
            "192 punch-card loyalty programs rebuilt and working at POS in live franchisee testing",
            "Toronto store launched on the new stack and traded through Black Friday 2025",
            "Franchisees ran live parallel testing in their own stores before anyone flipped a switch",
          ].map((item, i) => (
            <div key={i} className="pet-planet-outcome-row" style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 14px", marginBottom: 8, background: i === 0 ? PL : "var(--color-background-secondary)", borderRadius: 8, border: i === 0 ? `0.5px solid ${PM}30` : "0.5px solid var(--color-border-tertiary)" }}>
              <span style={{ color: PA, fontWeight: 600, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: i === 0 ? P : "var(--color-text-primary)", lineHeight: 1.55 }}>{item}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "20px 0 0" }}>
          And the part that matters if you run a franchise: the catalog stayed national, the customer stayed shared, and every franchisee runs their store like they own it. Because they do.
        </p>

        <Divider />

        {/* ─── EXPANSION ─── */}
        <Eyebrow>Expansion arc</Eyebrow>
        <h2 className="pet-planet-section-title" style={{ fontWeight: 500, margin: "0 0 12px" }}>
          Website and POS migration became a platform partnership
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: "0 0 12px" }}>
          Pet Planet signed for a website and POS migration. Then they bought the IMS. Then the custom loyalty engine. Then additional dev capacity, brand landing pages, and an ongoing retainer. They agreed to co-sell the IMS to other franchises — and pre-agreed to this case study in writing.
        </p>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, margin: 0 }}>
          Migrations end. This engagement didn&apos;t. Reporting was one workstream inside a larger build — custom IMS, purchase orders, supplier management, and a loyalty engine. The reports are what franchisees open every morning. That&apos;s the point.
        </p>

        <div style={{ background: P, borderRadius: 12, padding: "28px 32px", marginTop: 28 }}>
          <Eyebrow>Next step</Eyebrow>
          <h2 className="pet-planet-opportunity-title" style={{ fontWeight: 500, color: "#fff", margin: "0 0 10px" }}>
            Running a franchise on Shopify POS?
          </h2>
          <p style={{ fontSize: 14, color: "#AED6F1", lineHeight: 1.65, margin: "0 0 16px" }}>
            Stuck between &ldquo;everyone sees everything&rdquo; and &ldquo;nobody can run their store&rdquo;? We map your network to the franchise operating layer — permissions, inventory, reporting, and migration — in a working session with the engineers who built this.
          </p>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>→ Get My Franchise Architecture Review</div>
        </div>
      </div>

      <div className="pet-planet-footer" style={{ background: "#0D1117", padding: "18px 40px" }}>
        <div style={{ fontSize: 12, color: "#4B5563" }}>Pet Planet · Franchise POS &amp; IMS Case Study</div>
        <div style={{ fontSize: 12, color: "#4B5563" }}>EcomExperts · Shopify POS · 2025–2026</div>
      </div>
    </div>
  );
}
