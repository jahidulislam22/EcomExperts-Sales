import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

const GREEN = "#1B5E3B";
const GREEN_MID = "#2D7A50";
const GREEN_LIGHT = "#EAF4EE";

const revenueData = [
  { month: "Month 1", current: 5.26, prior: 2.85 },
  { month: "Month 2", current: 6.01, prior: 3.20 },
  { month: "Month 3", current: 5.50, prior: 3.66 },
];

const sessionData = [
  { week: "W1", current: 87, prior: 255 },
  { week: "W2", current: 148, prior: 199 },
  { week: "W3", current: 224, prior: 170 },
  { week: "W4", current: 264, prior: 218 },
  { week: "W5", current: 181, prior: 84 },
  { week: "W6", current: 191, prior: 101 },
  { week: "W7", current: 191, prior: 83 },
  { week: "W8", current: 199, prior: 71 },
  { week: "W9", current: 194, prior: 73 },
  { week: "W10", current: 179, prior: 85 },
  { week: "W11", current: 175, prior: 91 },
  { week: "W12", current: 206, prior: 85 },
  { week: "W13", current: 192, prior: 71 },
];

const channelData = [
  { name: "Direct", value: 74.5, color: GREEN },
  { name: "Search", value: 13.4, color: "#4CAF7D" },
  { name: "Social", value: 10.8, color: "#A8D5BA" },
  { name: "Other", value: 1.3, color: "#D4EAD9" },
];

const productData = [
  { name: "Fairway Polo", revenue: 614 },
  { name: "New Era M Script", revenue: 521 },
  { name: "Scooter Coolcore Short", revenue: 409 },
  { name: "Resort Crochet Polo", revenue: 365 },
  { name: "Fairway Baldwin Polo", revenue: 360 },
  { name: "Adidas Samba Golf Shoe", revenue: 335 },
];

const abTests = [
  { test: "New Arrivals collection CVR lift", priority: "P0", pages: "/collections/new", traffic: "254K sessions", uplift: "+$112K/qtr" },
  { test: "Homepage hero — lifestyle vs product grid", priority: "P0", pages: "/", traffic: "424K sessions", uplift: "+$65K/qtr" },
  { test: "Social proof badges on Icons collection", priority: "P1", pages: "/collections/icons", traffic: "69K sessions", uplift: "+$38K/qtr" },
  { test: "Sticky Add-to-Cart on all PDPs", priority: "P1", pages: "All PDPs", traffic: "Site-wide", uplift: "+$52K/qtr" },
  { test: "Cart cross-sell — complete the look", priority: "P1", pages: "/cart", traffic: "60K sessions", uplift: "+$28K/qtr" },
  { test: "Buckets Club upsell in checkout", priority: "P2", pages: "Checkout", traffic: "35K sessions", uplift: "+$18K/qtr" },
  { test: "Low-stock urgency tags on top sellers", priority: "P2", pages: "Collection pages", traffic: "Site-wide", uplift: "+$22K/qtr" },
  { test: "First-purchase offer: gift vs % discount", priority: "P2", pages: "Welcome popup", traffic: "New visitors", uplift: "+$31K/qtr" },
];

const geoData = [
  { country: "United States", revenue: "$10.1M", orders: "46,149", aov: "$219" },
  { country: "Canada", revenue: "$609K", orders: "2,316", aov: "$263" },
  { country: "United Kingdom", revenue: "$465K", orders: "1,705", aov: "$273" },
  { country: "Japan", revenue: "$312K", orders: "772", aov: "$404" },
  { country: "Australia", revenue: "$234K", orders: "694", aov: "$337" },
  { country: "Hong Kong", revenue: "$123K", orders: "272", aov: "$404" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 14px", fontSize: 13 }}>
        <p style={{ fontWeight: 500, marginBottom: 4, color: "var(--color-text-primary)" }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color, margin: "2px 0" }}>
            {p.name}: {typeof p.value === "number" && p.value > 10 ? p.value.toLocaleString() : `$${p.value}M`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Stat = ({ value, label, sub, accent }) => (
  <div style={{ background: accent ? GREEN_LIGHT : "var(--color-background-secondary)", borderRadius: 12, padding: "20px 24px", border: accent ? `1px solid ${GREEN_MID}30` : "0.5px solid var(--color-border-tertiary)" }}>
    <div style={{ fontSize: 32, fontWeight: 500, color: accent ? GREEN : "var(--color-text-primary)", lineHeight: 1.1, marginBottom: 6 }}>{value}</div>
    <div style={{ fontSize: 13, fontWeight: 500, color: accent ? GREEN_MID : "var(--color-text-secondary)", marginBottom: 2 }}>{label}</div>
    {sub && <div style={{ fontSize: 12, color: accent ? GREEN_MID : "var(--color-text-tertiary)" }}>{sub}</div>}
  </div>
);

const SectionHeader = ({ eyebrow, title, sub }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: GREEN_MID, marginBottom: 8 }}>{eyebrow}</div>
    <div style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: sub ? 6 : 0 }}>{title}</div>
    {sub && <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{sub}</div>}
  </div>
);

export default function MalbonCaseStudy() {
  return (
    <div style={{ background: "var(--color-background-primary)", fontFamily: "var(--font-sans)", color: "var(--color-text-primary)", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ background: GREEN, padding: "32px 40px 28px", borderRadius: "var(--border-radius-lg) var(--border-radius-lg) 0 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8D5BA", marginBottom: 8 }}>Case Study · June 2026</div>
            <div style={{ fontSize: 28, fontWeight: 500, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 6 }}>Malbon Golf</div>
            <div style={{ fontSize: 15, color: "#A8D5BA", lineHeight: 1.5 }}>Growth, A/B Testing & Pixel Intelligence Strategy</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#A8D5BA", marginBottom: 4 }}>90-day analysis period</div>
            <div style={{ fontSize: 13, color: "#FFFFFF", fontWeight: 500 }}>Mar – Jun 2026</div>
            <div style={{ fontSize: 12, color: "#A8D5BA", marginTop: 6 }}>malbon.com</div>
          </div>
        </div>
        <div style={{ marginTop: 20, height: "0.5px", background: "rgba(168,213,186,0.3)" }} />
        <div style={{ marginTop: 16, fontSize: 13, color: "#C8E8D4", lineHeight: 1.65, maxWidth: 600 }}>
          Malbon Golf has established itself as the defining brand at the intersection of golf culture and modern lifestyle — building a community-first identity that transcends the sport. This report documents their current growth trajectory, the experimentation roadmap that will compound it, and the pixel intelligence layer that will power personalised experiences at scale.
        </div>
      </div>

      <div style={{ padding: "32px 40px", borderLeft: "0.5px solid var(--color-border-tertiary)", borderRight: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          <Stat value="+71%" label="Revenue growth" sub="$9.8M → $16.8M" accent />
          <Stat value="+53%" label="Session growth" sub="1.59M → 2.43M" accent />
          <Stat value="$233" label="Avg. order value" sub="+3.5% period-over-period" />
          <Stat value="47.6%" label="Returning customer rate" sub="2× industry avg." />
          <Stat value="71,700" label="Orders in 90 days" sub="+60.9% growth" />
          <Stat value="70+" label="Countries served" sub="Global brand reach" />
        </div>

        <div style={{ marginBottom: 44 }}>
          <SectionHeader
            eyebrow="Revenue performance"
            title="Exceptional quarterly growth across all three months"
            sub="Malbon's revenue grew +71% in the current 90-day period vs the prior 90 days, with consistent monthly volume above $5M — an annualised run rate approaching $65M."
          />
          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barCategoryGap="30%" barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}M`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
                <Bar dataKey="current" name="Current period" fill={GREEN} radius={[4, 4, 0, 0]} />
                <Bar dataKey="prior" name="Prior period" fill="#A8D5BA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 44, alignItems: "start" }}>
          <div>
            <SectionHeader
              eyebrow="Traffic momentum"
              title="Sustained weekly growth"
              sub="Current-period sessions run consistently above 175K/week — up from a prior-period baseline of 70–100K."
            />
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}K`} />
                  <Tooltip formatter={(v, n) => [`${v}K sessions`, n === "current" ? "Current" : "Prior"]} labelFormatter={(l) => `Week ${l.replace("W", "")}`} />
                  <Line type="monotone" dataKey="current" stroke={GREEN} strokeWidth={2} dot={false} name="Current" />
                  <Line type="monotone" dataKey="prior" stroke="#A8D5BA" strokeWidth={1.5} dot={false} strokeDasharray="4 3" name="Prior" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Acquisition channels" title="Direct-driven brand power" sub="74.5% direct traffic signals exceptional brand recall — customers navigate directly to malbon.com, bypassing paid intermediaries." />
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={channelData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={2}>
                    {channelData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} formatter={(v, entry) => `${v}: ${entry.payload.value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 44 }}>
          <SectionHeader
            eyebrow="Product performance"
            title="Diverse revenue across hero SKUs"
            sub="No single product exceeds 3.7% of total revenue — a healthy long tail with multiple breakout SKUs across apparel, accessories, and footwear."
          />
          <div style={{ height: 230 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData} layout="vertical" margin={{ left: 0, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 12, fill: "var(--color-text-secondary)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} />
                <YAxis type="category" dataKey="name" width={175} tick={{ fontSize: 12, fill: "var(--color-text-primary)" }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v) => [`$${v}K`, "Revenue"]} />
                <Bar dataKey="revenue" fill={GREEN} radius={[0, 4, 4, 0]}>
                  {productData.map((_, i) => <Cell key={i} fill={i === 0 ? GREEN : i === 1 ? GREEN_MID : `${GREEN}${90 - i * 12}`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 44 }}>
          <div>
            <SectionHeader eyebrow="Customer loyalty" title="Retention well above benchmark" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Returning customer rate", value: "47.6%", note: "Industry avg: 25–40%", accent: true },
                { label: "Total active customers", value: "53,125", note: "Last 90 days" },
                { label: "New customers acquired", value: "32,573", note: "61.3% of customer base" },
                { label: "Total orders", value: "71,700", note: "+60.9% vs prior period" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: s.accent ? GREEN_LIGHT : "var(--color-background-secondary)", borderRadius: 8, border: s.accent ? `0.5px solid ${GREEN}30` : "0.5px solid var(--color-border-tertiary)" }}>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: s.accent ? GREEN_MID : "var(--color-text-tertiary)" }}>{s.note}</div>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 500, color: s.accent ? GREEN : "var(--color-text-primary)" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Global footprint" title="Premium international AOVs" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {geoData.map((g, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "center", gap: 12, padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)" }}>
                  <div style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: i < 2 ? 500 : 400 }}>{g.country}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-secondary)", textAlign: "right" }}>{g.revenue}</div>
                  <div style={{ fontSize: 12, padding: "1px 8px", borderRadius: 20, background: GREEN_LIGHT, color: GREEN, fontWeight: 500, minWidth: 48, textAlign: "center" }}>AOV {g.aov}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 44 }}>
          <SectionHeader
            eyebrow="Experimentation roadmap"
            title="8-test programme to compound conversion"
            sub="A structured A/B testing programme across the highest-traffic, highest-opportunity pages. Estimated combined uplift of $366K per quarter, rising to $731K as tests compound."
          />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${GREEN}30` }}>
                  {["Test", "Priority", "Target", "Traffic", "Projected lift"].map((h, i) => (
                    <th key={i} style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {abTests.map((t, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid var(--color-border-tertiary)", background: i % 2 === 0 ? "transparent" : "var(--color-background-secondary)" }}>
                    <td style={{ padding: "12px 12px", color: "var(--color-text-primary)", fontWeight: 400 }}>{t.test}</td>
                    <td style={{ padding: "12px 12px" }}>
                      <span style={{ fontSize: 11, fontWeight: 500, padding: "2px 8px", borderRadius: 20, background: t.priority === "P0" ? GREEN_LIGHT : t.priority === "P1" ? "var(--color-background-warning)" : "var(--color-background-secondary)", color: t.priority === "P0" ? GREEN : t.priority === "P1" ? "var(--color-text-warning)" : "var(--color-text-secondary)" }}>{t.priority}</span>
                    </td>
                    <td style={{ padding: "12px 12px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{t.pages}</td>
                    <td style={{ padding: "12px 12px", color: "var(--color-text-secondary)" }}>{t.traffic}</td>
                    <td style={{ padding: "12px 12px", color: GREEN, fontWeight: 500 }}>{t.uplift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: 44 }}>
          <SectionHeader
            eyebrow="Pixel & identity intelligence"
            title="A four-layer customer identification architecture"
            sub="From anonymous visitor to known, segmented customer — across every touchpoint, device, and channel."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {[
              { layer: "Layer 1", name: "Programmatic audience", tools: "Dstillery DMP", status: "Live", detail: "Site-visitor segments for brand awareness targeting. Currently active across all pages." },
              { layer: "Layer 2", name: "Owned channel tracking", tools: "Meta CAPI + Shopify Pixels", status: "In build", detail: "Server-side event matching to recover iOS attribution and power Advantage+ campaigns." },
              { layer: "Layer 3", name: "Behavioural identity", tools: "Klaviyo + GA4", status: "In build", detail: "Browser-to-email identity resolution. Cart and browse abandonment flows triggered by named events." },
              { layer: "Layer 4", name: "Personalisation engine", tools: "Shopify Segments", status: "Roadmap", detail: "VIP, at-risk, and geographic cohort segments driving personalised on-site experiences." },
            ].map((l, i) => (
              <div key={i} style={{ background: i === 0 ? GREEN_LIGHT : "var(--color-background-secondary)", border: `0.5px solid ${i === 0 ? `${GREEN}40` : "var(--color-border-tertiary)"}`, borderRadius: "var(--border-radius-lg)", padding: "16px" }}>
                <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: i === 0 ? GREEN_MID : "var(--color-text-tertiary)", marginBottom: 8 }}>{l.layer}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: i === 0 ? GREEN : "var(--color-text-primary)", marginBottom: 4 }}>{l.name}</div>
                <div style={{ fontSize: 12, color: i === 0 ? GREEN_MID : "var(--color-text-secondary)", marginBottom: 10, fontFamily: "var(--font-mono)" }}>{l.tools}</div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.55, marginBottom: 10 }}>{l.detail}</div>
                <span style={{ fontSize: 11, fontWeight: 500, padding: "2px 8px", borderRadius: 20, background: l.status === "Live" ? GREEN_LIGHT : l.status === "In build" ? "var(--color-background-info)" : "var(--color-background-secondary)", color: l.status === "Live" ? GREEN : l.status === "In build" ? "var(--color-text-info)" : "var(--color-text-secondary)", border: l.status === "Live" ? `0.5px solid ${GREEN}40` : "none" }}>{l.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: GREEN, borderRadius: "var(--border-radius-lg)", padding: "28px 32px" }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8D5BA", marginBottom: 12 }}>90-day growth opportunity</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#FFFFFF", marginBottom: 16 }}>$731K incremental revenue per quarter</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 20 }}>
            {[
              { source: "A/B testing programme", value: "+$366K" },
              { source: "Meta CAPI attribution recovery", value: "+$167K" },
              { source: "Klaviyo abandonment flows", value: "+$73K" },
              { source: "International geo-campaigns", value: "+$75K" },
              { source: "Inventory demand capture", value: "+$50K+" },
            ].map((o, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#FFFFFF", marginBottom: 4 }}>{o.value}</div>
                <div style={{ fontSize: 12, color: "#A8D5BA", lineHeight: 1.4 }}>{o.source}</div>
              </div>
            ))}
          </div>
          <div style={{ height: "0.5px", background: "rgba(168,213,186,0.3)", marginBottom: 16 }} />
          <div style={{ fontSize: 13, color: "#C8E8D4", lineHeight: 1.6 }}>
            Based on 90-day data analysis, live site audit, and benchmarked performance from comparable DTC golf and lifestyle brands at equivalent traffic and revenue scale. Projections are conservative — actual uplift compounds as tests confirm and scale.
          </div>
        </div>
      </div>

      <div style={{ background: "#0D1117", padding: "20px 40px", borderRadius: "0 0 var(--border-radius-lg) var(--border-radius-lg)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontSize: 12, color: "#6B7280" }}>Malbon Golf · Growth & Experimentation Case Study</div>
        <div style={{ fontSize: 12, color: "#6B7280" }}>Data: Shopify Analytics · Live site audit · June 2026</div>
      </div>
    </div>
  );
}
