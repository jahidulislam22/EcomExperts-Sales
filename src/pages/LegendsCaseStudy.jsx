import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, LabelList
} from "recharts";

const P = "#1B3A5C";
const PM = "#3D6E9E";
const PL = "#EDF4FA";
const PA = "#C8A24A";
const PS = "#6BA3D0";
const CHANNEL_COLORS = [P, "#4A7BA7", PS, PA, "#D4E4F0"];

const revenueWeekly = [
  { week: "3/23", revenue: 99.6, orders: 699, aov: 131.93 },
  { week: "3/30", revenue: 194.5, orders: 1389, aov: 134.68 },
  { week: "4/6", revenue: 192.7, orders: 1445, aov: 127.06 },
  { week: "4/13", revenue: 216.6, orders: 1668, aov: 126.55 },
  { week: "4/20", revenue: 170.6, orders: 1308, aov: 126.17 },
  { week: "4/27", revenue: 208.6, orders: 1538, aov: 131.46 },
  { week: "5/4", revenue: 190.3, orders: 1421, aov: 129.77 },
  { week: "5/11", revenue: 144.7, orders: 1229, aov: 117.35 },
  { week: "5/18", revenue: 367.5, orders: 2634, aov: 131.41 },
  { week: "5/25", revenue: 277.5, orders: 2017, aov: 128.28 },
  { week: "6/1", revenue: 214.1, orders: 1699, aov: 121.36 },
  { week: "6/8", revenue: 240.3, orders: 1905, aov: 122.12 },
  { week: "6/15", revenue: 229.1, orders: 1934, aov: 112.51 },
  { week: "6/22", revenue: 87.7, orders: 840, aov: 107.0 },
];

const sessionWeekly = [
  { w: "3/23", c: 24.5 }, { w: "3/30", c: 50.0 }, { w: "4/6", c: 55.2 },
  { w: "4/13", c: 54.3 }, { w: "4/20", c: 43.9 }, { w: "4/27", c: 46.1 },
  { w: "5/4", c: 51.7 }, { w: "5/11", c: 51.1 }, { w: "5/18", c: 64.9 },
  { w: "5/25", c: 58.3 }, { w: "6/1", c: 52.7 }, { w: "6/8", c: 63.7 },
  { w: "6/15", c: 46.9 }, { w: "6/22", c: 20.0 },
];

const channelData = [
  { name: "Direct", value: 49.6, sessions: "338,688", change: "49.6% share" },
  { name: "Social", value: 30.7, sessions: "210,083", change: "+20.1%" },
  { name: "Search", value: 18.6, sessions: "126,956", change: "+1.0%" },
  { name: "Email", value: 0.3, sessions: "1,831", change: "+20.9%" },
  { name: "Unknown", value: 0.9, sessions: "5,975", change: "+16.0%" },
];

const funnelData = [
  { stage: "Sessions", value: "683K", cvr: "" },
  { stage: "Add to Cart", value: "53.2K", cvr: "7.78%" },
  { stage: "Checkout", value: "31.7K", cvr: "4.64%" },
  { stage: "Purchased", value: "18.9K", cvr: "2.76%" },
];

const landingPages = [
  { page: "/collections/best-sellers", cvr: 6.68, sessions: 6861, flag: "top" },
  { page: "/collections/new-arrivals", cvr: 6.47, sessions: 8476, flag: "top" },
  { page: "/collections/shorts", cvr: 4.28, sessions: 34100, flag: "good" },
  { page: "/ (Homepage)", cvr: 3.51, sessions: 160605, flag: "good" },
  { page: "/products/luka-hd-white-black-splatter", cvr: 3.19, sessions: 39590, flag: "good" },
  { page: "/products/luka-short-black-splatter", cvr: 2.84, sessions: 30236, flag: "mid" },
  { page: "/collections/luka", cvr: 2.31, sessions: 7968, flag: "mid" },
  { page: "/products/luka-short-black", cvr: 3.96, sessions: 5751, flag: "good" },
];

const utmCampaigns = [
  { campaign: "CTC - Acquisition - CBO - Shorts Consolidated - RG", sessions: "73,867", note: "Top acquisition campaign" },
  { campaign: "CTC - Retention - ABO - CC", sessions: "55,381", note: "Retention driver" },
  { campaign: "CTC - Acquisition - ABO - Tops - RG", sessions: "24,811", note: "" },
  { campaign: "CTC - Acquisition - ABO - Spring 2026 Collection - RG", sessions: "12,569", note: "" },
  { campaign: "CTC - Acquisition - ABO - Memorial Day Weekend - RG", sessions: "7,160", note: "Memorial Day" },
  { campaign: "Order-Shipped", sessions: "11,944", note: "Transactional email" },
  { campaign: "SMS #1", sessions: "3,362", note: "SMS campaign" },
  { campaign: "MDW Sale 05/23", sessions: "1,887", note: "Memorial Day Weekend" },
];

const productData = [
  { name: "Luka Short Black Splatter", rev: 208, orders: 3616 },
  { name: "Luka HD White Black Splatter", rev: 167, orders: 2880 },
  { name: "Luka Short Black", rev: 125, orders: 1996 },
  { name: "Luka Short Charcoal Gray", rev: 76, orders: 1299 },
  { name: "Luka Short Mosaic Tile Clay", rev: 74, orders: 1164 },
  { name: "Luka Short Light Gray Heather", rev: 73, orders: 1303 },
  { name: "Luka HD River Rock", rev: 64, orders: 1124 },
  { name: "Luka Short Camel Camo", rev: 61, orders: 1042 },
];

const geoData = [
  { city: "Dallas", revenue: 56051, orders: 356, aov: 157 },
  { city: "Manhattan Beach", revenue: 45937, orders: 302, aov: 152 },
  { city: "New York", revenue: 22130, orders: 156, aov: 142 },
  { city: "Houston", revenue: 35379, orders: 255, aov: 139 },
  { city: "Phoenix", revenue: 21313, orders: 158, aov: 135 },
  { city: "Austin", revenue: 29032, orders: 223, aov: 130 },
  { city: "Los Angeles", revenue: 19044, orders: 152, aov: 125 },
  { city: "Chicago", revenue: 24958, orders: 200, aov: 125 },
];

const cohortData = [
  { month: "Dec", customers: 535, spend: 89 },
  { month: "Jan", customers: 2319, spend: 389 },
  { month: "Feb", customers: 1251, spend: 193 },
  { month: "Mar", customers: 1657, spend: 278 },
  { month: "Apr", customers: 2279, spend: 385 },
  { month: "May", customers: 2882, spend: 430 },
  { month: "Jun", customers: 2639, spend: 370 },
];

const abTests = [
  { test: "Sticky Add-to-Cart across all Luka PDPs", priority: "P0", page: "All Luka PDPs", sessions: "Site-wide", uplift: 35 },
  { test: "Social proof & size guide on Luka Short PDPs", priority: "P0", page: "Top PDPs", sessions: "~100K", uplift: 22 },
  { test: "Shorts collection — filter & sort UX optimization", priority: "P1", page: "/collections/shorts", sessions: "34.1K", uplift: 18 },
  { test: "Best-sellers editorial layout expansion", priority: "P1", page: "/collections/best-sellers", sessions: "6.9K", uplift: 28 },
  { test: "New Arrivals — hero storytelling & product grid", priority: "P1", page: "/collections/new-arrivals", sessions: "8.5K", uplift: 24 },
  { test: "Aviation Tee — lifestyle vs product-first imagery", priority: "P2", page: "/aviation-tees", sessions: "16.1K", uplift: 28 },
  { test: "Checkout cross-sell — socks & accessories", priority: "P2", page: "Checkout", sessions: "31.7K", uplift: 15 },
  { test: "Memorial Day playbook — scale winning promo structure", priority: "P2", page: "Site-wide", sessions: "683K", uplift: 40 },
];

const opportunityData = [
  { label: "Landing pages", value: 83 },
  { label: "PDP & ATC", value: 57 },
  { label: "Collections", value: 46 },
  { label: "Retention", value: 31 },
  { label: "Checkout", value: 15 },
];

const tooltipStyle = {
  background: "var(--color-background-primary)",
  border: "0.5px solid var(--color-border-secondary)",
  borderRadius: 8,
  padding: "10px 14px",
  fontSize: 13,
  boxShadow: "none",
};

const getLandingFill = (flag) => {
  if (flag === "top") return P;
  if (flag === "good") return PM;
  return PS;
};

const Pill = ({ text, type = "gray" }) => {
  const styles = {
    dark: { bg: P, color: "#fff", border: "none" },
    red: { bg: "#FEE2E2", color: "#B91C1C", border: "none" },
    amber: { bg: "#FEF3C7", color: "#92400E", border: "none" },
    gold: { bg: PL, color: PM, border: `0.5px solid ${PA}60` },
    gray: { bg: "var(--color-background-secondary)", color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-tertiary)" },
  };
  const s = styles[type] || styles.gray;
  return (
    <span style={{ fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 20, background: s.bg, color: s.color, border: s.border, whiteSpace: "nowrap" }}>
      {text}
    </span>
  );
};

const Eyebrow = ({ t }) => (
  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: PM, marginBottom: 8 }}>{t}</div>
);

const Divider = () => <div style={{ height: "0.5px", background: "var(--color-border-tertiary)", margin: "36px 0" }} />;

const KpiCard = ({ value, label, sub, accent }) => (
  <div style={{
    padding: "18px 20px", borderRadius: 10,
    border: accent ? `1px solid ${PA}40` : "0.5px solid var(--color-border-tertiary)",
    background: accent ? PL : "var(--color-background-secondary)",
  }}>
    <div className="legends-kpi__value" style={{ fontSize: 26, fontWeight: 600, color: accent ? P : "var(--color-text-primary)", lineHeight: 1.1, marginBottom: 5 }}>{value}</div>
    <div style={{ fontSize: 12, fontWeight: 500, color: accent ? PM : "var(--color-text-secondary)", marginBottom: 2 }}>{label}</div>
    {sub && <div style={{ fontSize: 11, color: accent ? PM : "var(--color-text-tertiary)" }}>{sub}</div>}
  </div>
);

const StatRow = ({ label, note, value, accent }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "10px 14px", marginBottom: 6, borderRadius: 8,
    background: accent ? PL : "var(--color-background-secondary)",
    border: accent ? `0.5px solid ${PA}30` : "0.5px solid var(--color-border-tertiary)",
  }}>
    <div>
      <div style={{ fontSize: 13, color: accent ? PM : "var(--color-text-secondary)", marginBottom: 1 }}>{label}</div>
      <div style={{ fontSize: 11, color: accent ? PM : "var(--color-text-tertiary)" }}>{note}</div>
    </div>
    <div style={{ fontSize: 17, fontWeight: 600, color: accent ? P : "var(--color-text-primary)", marginLeft: 12, flexShrink: 0 }}>{value}</div>
  </div>
);

const ChannelTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={tooltipStyle}>
      <div style={{ fontWeight: 500, marginBottom: 4, color: "var(--color-text-primary)" }}>{d.name}</div>
      <div style={{ color: payload[0].fill }}>{d.value}% of sessions</div>
      <div style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{d.sessions} · {d.change}</div>
    </div>
  );
};

export default function LegendsCaseStudy() {
  const totalAB = abTests.reduce((s, t) => s + t.uplift, 0);

  return (
    <div className="legends-case-study" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-primary)" }}>
      <div className="legends-hero" style={{ background: P, padding: "36px 40px 32px" }}>
        <div className="legends-hero__top">
          <div>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#85C1E9", marginBottom: 10 }}>
              Case Study · Analytics &amp; CRO · June 2026
            </div>
            <div className="legends-hero__title" style={{ fontWeight: 600, color: "#fff", lineHeight: 1.1, marginBottom: 5 }}>Legends</div>
            <div style={{ fontSize: 14, color: "#AED6F1" }}>Analytics, CRO &amp; Conversion Growth</div>
            <div style={{ fontSize: 11, color: "rgba(174,214,241,0.65)", marginTop: 6 }}>Mar 27 – Jun 25, 2026 vs prior 90 days · Live Shopify pull</div>
          </div>
          <div className="legends-hero__meta">
            <Pill text="Performance Apparel" type="dark" />
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>legends.com · Shopify · United States</div>
          </div>
        </div>

        <div style={{ height: "0.5px", background: "rgba(133,193,233,0.3)", margin: "0 0 20px" }} />

        <div style={{ fontSize: 14, color: "#D6EAF8", lineHeight: 1.75, maxWidth: 620 }}>
          Legends builds performance athletic apparel engineered by athletes and tested in sport — designed for the everyday grind without compromising on style. In 90 days, clean analytics and targeted conversion optimization drove a 23.2% lift in CVR, $2.83M in revenue, and social traffic growth of 20.1% as the primary acquisition driver.
        </div>

        <div className="legends-hero__stats">
          {[
            { v: "$2.83M", l: "Gross sales — 90 days" },
            { v: "+23.2%", l: "CVR improvement" },
            { v: "683K", l: "Total sessions" },
            { v: "21,726", l: "Orders placed" },
          ].map((k, i) => (
            <div key={i} className="legends-hero__stat-card" style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "14px 16px", border: "0.5px solid rgba(133,193,233,0.25)" }}>
              <div style={{ fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{k.v}</div>
              <div style={{ fontSize: 11, color: "#AED6F1" }}>{k.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="legends-body" style={{ padding: "36px 40px", border: "0.5px solid var(--color-border-tertiary)", borderTop: "none" }}>
        <Eyebrow t="Key metrics — 90 days vs prior 90 days" />
        <div className="legends-kpi-grid">
          <KpiCard value="+23.2%" label="Conversion rate" sub="2.24% → 2.76%" accent />
          <KpiCard value="+20.1%" label="Social traffic" sub="175K → 210K sessions" accent />
          <KpiCard value="+4.0%" label="Total sessions" sub="657K → 683K" />
          <KpiCard value="+28.4%" label="Completed checkouts" sub="14,698 → 18,871" />
          <KpiCard value="55–66%" label="Returning customers" sub="1.5–2.1× revenue vs new weekly" />
          <KpiCard value="$117–$134" label="Average order value" sub="Typical weekly range · 21,726 orders" />
        </div>

        <Eyebrow t="The brand" />
        <div className="legends-section-title" style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>Athletic performance, without compromise</div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: 8 }}>
          Legends was built on a single conviction: elite athletic design shouldn&apos;t be limited to the field. Each piece is engineered by athletes and stress-tested with sports professionals — producing apparel that moves between the gym, the track, and everyday life. Their signature <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>Luka line</strong> has become the cornerstone of a deeply loyal community.
        </div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
          That loyalty shows in the data. Returning customers represented <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>55–66% of orders each week</strong>, generating 1.5–2.1× the revenue of new customers — evidence of a brand that earns repeat business on product quality alone.
        </div>

        <div className="legends-quote">
          <div style={{ fontSize: 16, color: P, lineHeight: 1.65, fontStyle: "italic", marginBottom: 8 }}>
            &ldquo;A 23.2% conversion rate lift on 683K sessions. That&apos;s not optimization at the margin — it&apos;s a fundamentally more efficient store.&rdquo;
          </div>
          <div style={{ fontSize: 12, color: PM, fontWeight: 500 }}>EcomExperts · Analytics &amp; CRO Review · June 2026</div>
        </div>

        <Divider />

        <Eyebrow t="Revenue performance" />
        <div className="legends-section-title" style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>
          $2.83M generated — Memorial Day week peaked at $367K
        </div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
          Revenue compounded as conversion improvements amplified traffic and promotional events. The week of 5/18 delivered $367,529 gross sales — 2,634 orders at $131 AOV, the highest week in the period.
        </div>
        <div className="legends-chart legends-chart--revenue">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueWeekly} barCategoryGap="20%" margin={{ top: 16, right: 4, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 10, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} width={44} />
              <Tooltip formatter={(v, n) => [n === "revenue" ? `$${v}K` : v, n === "revenue" ? "Revenue" : "Orders"]} contentStyle={tooltipStyle} />
              <Bar dataKey="revenue" name="revenue" fill={P} radius={[4, 4, 0, 0]}>
                <LabelList dataKey="revenue" position="top" formatter={(v) => `$${v}K`} style={{ fontSize: 9, fill: PM, fontWeight: 500 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Divider />

        <div className="legends-two-col legends-two-col--equal">
          <div>
            <Eyebrow t="Traffic momentum" />
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>683K sessions — momentum building through Q2</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 14 }}>
              May through June averaged 58K sessions per week, with Memorial Day week (5/18) peaking at 64.9K. Total sessions grew +4.0% period-over-period.
            </div>
            <div className="legends-chart legends-chart--sessions">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sessionWeekly}>
                  <defs>
                    <linearGradient id="legendsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={P} stopOpacity={0.15} />
                      <stop offset="95%" stopColor={P} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
                  <XAxis dataKey="w" tick={{ fontSize: 10, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}K`} width={36} />
                  <Tooltip formatter={(v) => [`${v}K sessions`, "Sessions"]} labelFormatter={(l) => `Week ${l}`} contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="c" stroke={P} strokeWidth={2} fill="url(#legendsGrad)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <Eyebrow t="Channel breakdown" />
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Social at 30.7% — fastest-growing channel</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 14 }}>
              Social grew +20.1% to 210K sessions. Direct remains the largest channel at 338K sessions and 49.6% share.
            </div>
            <div className="legends-chart legends-chart--pie">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<ChannelTooltip />} />
                  <Pie data={channelData} nameKey="name" cx="50%" cy="50%" innerRadius={38} outerRadius={62} dataKey="value" paddingAngle={2}>
                    {channelData.map((_, i) => <Cell key={i} fill={CHANNEL_COLORS[i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ marginTop: 8 }}>
              {channelData.map((c, i) => (
                <div key={i} className="legends-channel-row">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: CHANNEL_COLORS[i], flexShrink: 0 }} />
                    <span>{c.name}</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 13 }}>
                    <span className="legends-channel-sessions" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text-tertiary)" }}>{c.sessions}</span>
                    <span style={{ fontWeight: 600, color: i === 1 ? P : "var(--color-text-primary)", minWidth: 36, textAlign: "right" }}>{c.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        <Eyebrow t="UTM campaign performance — top sources" />
        <div className="legends-section-title" style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>
          CTC campaigns drive 130K+ tagged sessions
        </div>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
          Acquisition and retention campaigns from CTC lead tagged traffic, with Shorts Consolidated and Retention CC as the top performers. Memorial Day and SMS campaigns added meaningful incremental volume.
        </div>
        <div className="legends-table-wrap" style={{ marginBottom: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 520 }}>
            <thead>
              <tr style={{ borderBottom: `1.5px solid ${PA}25` }}>
                {["Campaign", "Sessions", "Notes"].map((h) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {utmCampaigns.map((row, i) => (
                <tr key={i} style={{ borderBottom: "0.5px solid var(--color-border-tertiary)", background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                  <td style={{ padding: "10px 12px", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text-primary)" }}>{row.campaign}</td>
                  <td style={{ padding: "10px 12px", fontFamily: "var(--font-mono)", fontSize: 12 }}>{row.sessions}</td>
                  <td style={{ padding: "10px 12px", color: "var(--color-text-secondary)", fontSize: 12 }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Divider />

        <Eyebrow t="Conversion funnel — current period" />
        <div className="legends-section-title" style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>Every stage of the funnel improved</div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
          Add-to-cart rose from 7.08% to 7.78% (+9.9%). Checkout completion jumped from 59.6% to 65.1% (+9.1%). The result: 18,871 completed purchases from 683,543 sessions — 4,173 more than the prior period.
        </div>
        <div className="legends-funnel legends-funnel--flex">
          {funnelData.map((f, i) => {
            const isLast = i === funnelData.length - 1;
            return (
              <div key={i} className="legends-funnel__step">
                <div className="legends-funnel__bar" style={{ background: isLast ? P : PL, border: `1px solid ${isLast ? P : `${PA}30`}` }}>
                  <div style={{ fontSize: isLast ? 17 : 14, fontWeight: 600, color: isLast ? "#fff" : P }}>{f.value}</div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2, textAlign: "center" }}>{f.stage}</div>
                {f.cvr && <div style={{ fontSize: 11, color: PM, fontFamily: "var(--font-mono)" }}>{f.cvr}</div>}
                {i < funnelData.length - 1 && <div className="legends-funnel__arrow">›</div>}
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, marginTop: 28 }}>Top landing pages by conversion rate</div>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 16, lineHeight: 1.7 }}>
          Best-sellers and New Arrivals lead at 6.5%+ CVR. Homepage, Shorts collection, and hero Luka PDPs all convert above 2.8% on high session volume — a strong foundation to build on.
        </div>
        <div className="legends-chart legends-chart--landing">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={landingPages} layout="vertical" margin={{ left: 0, right: 55 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey="page" width={178} tick={{ fontSize: 10, fill: "var(--color-text-primary)" }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v) => [`${v}%`, "CVR"]} contentStyle={tooltipStyle} />
              <Bar dataKey="cvr" radius={[0, 4, 4, 0]}>
                {landingPages.map((e, i) => <Cell key={i} fill={getLandingFill(e.flag)} />)}
                <LabelList dataKey="cvr" position="right" formatter={(v) => `${v}%`} style={{ fontSize: 11, fill: PM, fontWeight: 500 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="legends-chart-legend legends-chart-legend--left">
          {[
            { c: P, l: "Top performers (6%+)" },
            { c: PM, l: "Strong (3–5%)" },
            { c: PS, l: "Solid (2–3%)" },
          ].map((item, i) => (
            <div key={i} className="legends-chart-legend-item">
              <div style={{ width: 8, height: 8, borderRadius: 2, background: item.c, border: item.border }} />{item.l}
            </div>
          ))}
        </div>

        <Divider />

        <Eyebrow t="Product performance — top 8 by revenue" />
        <div className="legends-section-title" style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>The Luka line is the engine — Black Splatter is the crown jewel</div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
          Luka Short Black Splatter alone generated $208,312 gross across 3,616 orders. The top 3 Luka products account for ~$500K — 17.7% of total 90-day gross revenue. Revenue is overwhelmingly full-price; discount codes represent fewer than 30 orders combined.
        </div>
        <div className="legends-chart legends-chart--products">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productData} layout="vertical" margin={{ left: 0, right: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} />
              <YAxis type="category" dataKey="name" width={178} tick={{ fontSize: 11, fill: "var(--color-text-primary)" }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v, n) => [n === "rev" ? `$${v}K` : `${v.toLocaleString()} orders`, n === "rev" ? "Revenue" : "Orders"]} contentStyle={tooltipStyle} />
              <Bar dataKey="rev" name="rev" radius={[0, 4, 4, 0]}>
                {productData.map((_, i) => <Cell key={i} fill={i < 2 ? P : i < 4 ? PM : PL} />)}
                <LabelList dataKey="rev" position="right" formatter={(v) => `$${v}K`} style={{ fontSize: 11, fill: PM }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Divider />

        <div className="legends-two-col legends-two-col--equal">
          <div>
            <Eyebrow t="Customer retention" />
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>The returning customer is the business model</div>
            {[
              { label: "Returning customer rate", note: "1.5–2.1× revenue of new customers, weekly", value: "55–66%", accent: true },
              { label: "New customers — May 2026", note: "Highest acquisition month · $430K cohort spend", value: "2,882" },
              { label: "Memorial Day week (5/18)", note: "931 new + 1,664 returning · $245K returning revenue", value: "$367K" },
              { label: "Checkout completion rate", note: "59.6% → 65.1% (+9.1% relative)", value: "65.1%" },
              { label: "US revenue concentration", note: "98.9% of $2.8M from US customers", value: "98.9%" },
              { label: "Total orders — 90 days", note: "+28.4% vs prior completed checkouts", value: "21,726" },
            ].map((s, i) => <StatRow key={i} {...s} />)}
          </div>

          <div>
            <Eyebrow t="Top cities — AOV performance" />
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Dallas &amp; Manhattan Beach index 20% above average AOV</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 14, lineHeight: 1.65 }}>
              Dallas leads in total revenue ($56K) and AOV ($157), with Manhattan Beach and New York close behind at $152 and $142 AOV.
            </div>
            <div className="legends-chart legends-chart--geo">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={geoData} barCategoryGap="28%">
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
                  <XAxis dataKey="city" tick={{ fontSize: 9, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => v.split(" ")[0]} />
                  <YAxis tick={{ fontSize: 10, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} domain={[110, 170]} width={40} />
                  <Tooltip formatter={(v) => [`$${v}`, "AOV"]} contentStyle={tooltipStyle} />
                  <Bar dataKey="aov" radius={[4, 4, 0, 0]}>
                    {geoData.map((_, i) => <Cell key={i} fill={i < 2 ? P : i < 4 ? PM : PL} />)}
                    <LabelList dataKey="aov" position="top" formatter={(v) => `$${v}`} style={{ fontSize: 10, fill: PM }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ marginTop: 10 }}>
              {geoData.slice(0, 4).map((g, i) => (
                <div key={i} className="legends-geo-row" style={{ background: i < 2 ? PL : "transparent" }}>
                  <span>{g.city}</span>
                  <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{g.orders} orders</span>
                    <span style={{ color: i < 2 ? P : PM, fontWeight: 600, fontSize: 13 }}>${g.aov} AOV</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        <Eyebrow t="Customer cohorts — last 7 months" />
        <div className="legends-section-title" style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>May 2026 is the highest-spend acquisition cohort at $430K</div>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
          Jan and May are the two strongest acquisition months. Jun 2026 is on pace to match Jan given the month was still in progress at report date.
        </div>
        <div className="legends-chart legends-chart--cohort">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cohortData} barCategoryGap="25%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v} width={40} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: PM }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} width={44} />
              <Tooltip formatter={(v, n) => [n === "customers" ? v.toLocaleString() : `$${v}K`, n === "customers" ? "New customers" : "Spend"]} contentStyle={tooltipStyle} />
              <Bar yAxisId="left" dataKey="customers" name="customers" fill={PL} stroke={PA} strokeWidth={0.5} radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="spend" name="spend" fill={P} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Divider />

        <Eyebrow t="Experimentation roadmap" />
        <div className="legends-section-title" style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>8 experiments · ${totalAB}K projected quarterly uplift</div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
          Each experiment builds on what&apos;s already working — scaling top PDP performance, expanding best-seller layouts, and replicating the Memorial Day playbook across future promotional windows.
        </div>
        <div className="legends-table-wrap">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1.5px solid ${PA}25` }}>
                {["Experiment", "Priority", "Target page", "Sessions", "Projected lift"].map((h, i) => (
                  <th key={i} style={{ padding: "8px 12px", textAlign: i === 4 ? "right" : "left", color: "var(--color-text-secondary)", fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {abTests.map((t, i) => (
                <tr key={i} style={{ borderBottom: "0.5px solid var(--color-border-tertiary)", background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                  <td style={{ padding: "11px 12px" }}>{t.test}</td>
                  <td style={{ padding: "11px 12px" }}>
                    <Pill text={t.priority} type={t.priority === "P0" ? "dark" : t.priority === "P1" ? "amber" : "gray"} />
                  </td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{t.page}</td>
                  <td style={{ padding: "11px 12px", color: "var(--color-text-secondary)" }}>{t.sessions}</td>
                  <td style={{ padding: "11px 12px", textAlign: "right", color: P, fontWeight: 600 }}>+${t.uplift}K</td>
                </tr>
              ))}
              <tr style={{ borderTop: `1.5px solid ${PA}25`, background: PL }}>
                <td colSpan={4} style={{ padding: "11px 12px", fontWeight: 600, color: P }}>Total projected quarterly uplift</td>
                <td style={{ padding: "11px 12px", textAlign: "right", fontWeight: 600, color: P, fontSize: 15 }}>+${totalAB}K</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Divider />

        <div className="legends-opp">
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#85C1E9", marginBottom: 8 }}>90-day revenue opportunity</div>
          <div className="legends-opportunity-title" style={{ fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 6 }}>${totalAB}K incremental revenue per quarter</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 24, lineHeight: 1.65 }}>
            Without increasing ad spend. Without changing the product line. The full opportunity comes from scaling what already converts — top landing pages, hero PDPs, and the retention engine that drives 55–66% returning customers each week.
          </div>
          <div className="legends-chart legends-chart--opportunity">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={opportunityData} barCategoryGap="30%" margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: "rgba(255,255,255,0.5)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} width={44} />
                <Tooltip formatter={(v) => [`$${v}K`, "Projected uplift"]} contentStyle={{ background: "#142D4A", border: "0.5px solid #3D6E9E", borderRadius: 8, color: "#fff", fontSize: 13 }} />
                <Bar dataKey="value" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth={0.5} radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="value" position="insideTop" offset={8} formatter={(v) => `$${v}K`} style={{ fontSize: 11, fill: "#fff", fontWeight: 600 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.1)", margin: "20px 0" }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
            Projections based on 90-day Shopify Analytics live pull (June 25, 2026), store audit, and benchmarked conversion lift from comparable performance apparel DTC brands at equivalent traffic and revenue scale.
          </div>
        </div>
      </div>

      <div className="legends-footer" style={{ background: "#142D4A", padding: "18px 40px", borderRadius: "0 0 12px 12px" }}>
        <div style={{ fontSize: 12, color: "#85C1E9" }}>Legends · Analytics &amp; CRO Case Study · Verified live pull</div>
        <div style={{ fontSize: 12, color: "#6BA3D0" }}>Shopify Analytics · Mar 27 – Jun 25, 2026 · June 25, 2026</div>
      </div>
    </div>
  );
}
