import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, LabelList
} from "recharts";

const G = "#1B5E3B";
const GM = "#2D7A50";
const GL = "#EAF4EE";
const GB = "#0F3D24";

const revenueData = [
  { month: "Month 1", current: 5.26, prior: 2.85 },
  { month: "Month 2", current: 6.01, prior: 3.20 },
  { month: "Month 3", current: 5.50, prior: 3.66 },
];

const sessionWeekly = [
  { w:"W1",c:87,p:255},{w:"W2",c:148,p:199},{w:"W3",c:224,p:170},
  {w:"W4",c:264,p:218},{w:"W5",c:181,p:84},{w:"W6",c:191,p:101},
  {w:"W7",c:191,p:83},{w:"W8",c:199,p:71},{w:"W9",c:194,p:73},
  {w:"W10",c:179,p:85},{w:"W11",c:175,p:91},{w:"W12",c:206,p:85},{w:"W13",c:192,p:71},
];

const channelData = [
  { name: "Direct", value: 74.5, sessions: "1,810,919" },
  { name: "Search", value: 13.4, sessions: "326,019" },
  { name: "Social", value: 10.8, sessions: "262,693" },
  { name: "Email", value: 0.1, sessions: "3,617" },
  { name: "Paid", value: 0.03, sessions: "720" },
  { name: "Unknown", value: 1.1, sessions: "27,437" },
];

const CHANNEL_COLORS = [G, "#4CAF7D","#7DC9A0","#A8D5BA","#C4E8D1","#DDEDD5"];

const funnelData = [
  { stage: "Sessions", value: 2431406, pct: 100, cvr: "" },
  { stage: "Add to cart", value: 60462, pct: 2.49, cvr: "2.49%" },
  { stage: "Checkout", value: 35473, pct: 1.46, cvr: "1.46%" },
  { stage: "Purchase", value: 16015, pct: 0.66, cvr: "0.66%" },
];

const landingPages = [
  { page: "/collections/t-shirts", cvr: 1.23, sessions: 20894 },
  { page: "/collections/headwear", cvr: 0.89, sessions: 42983 },
  { page: "/collections/accessories", cvr: 0.71, sessions: 27712 },
  { page: "/ (Homepage)", cvr: 0.76, sessions: 424269 },
  { page: "/collections/polos", cvr: 0.60, sessions: 60097 },
  { page: "/collections/mens-best-sellers", cvr: 0.43, sessions: 68039 },
  { page: "/collections/new", cvr: 0.39, sessions: 254407 },
  { page: "/collections/icons", cvr: 0.28, sessions: 69434 },
];

const productData = [
  { name: "Fairway Polo", rev: 614, orders: 4833 },
  { name: "New Era M Script Hat", rev: 521, orders: 7846 },
  { name: "Scooter Coolcore Short", rev: 409, orders: 2503 },
  { name: "Resort Crochet Polo", rev: 365, orders: 2381 },
  { name: "Fairway Baldwin Polo", rev: 360, orders: 2949 },
  { name: "Adidas Samba Golf Shoe", rev: 335, orders: 2209 },
  { name: "Navarro Polo", rev: 293, orders: 1871 },
  { name: "New Balance 550 Shoe", rev: 269, orders: 1874 },
];

const geoData = [
  { country: "United States", revenue: 10103, orders: 46149, aov: 219, flag: "🇺🇸" },
  { country: "Canada", revenue: 609, orders: 2316, aov: 263, flag: "🇨🇦" },
  { country: "United Kingdom", revenue: 465, orders: 1705, aov: 273, flag: "🇬🇧" },
  { country: "Japan", revenue: 312, orders: 772, aov: 404, flag: "🇯🇵" },
  { country: "Australia", revenue: 234, orders: 694, aov: 337, flag: "🇦🇺" },
  { country: "Hong Kong", revenue: 123, orders: 272, aov: 454, flag: "🇭🇰" },
  { country: "UAE", revenue: 99, orders: 175, aov: 568, flag: "🇦🇪" },
];

const abTests = [
  { test: "New Arrivals CVR — editorial storytelling", priority: "P0", page: "/collections/new", sessions: "254K", uplift: 112 },
  { test: "Homepage hero — lifestyle vs product-led grid", priority: "P0", page: "/", sessions: "424K", uplift: 65 },
  { test: "Sticky Add-to-Cart across all PDPs", priority: "P1", page: "All PDPs", sessions: "Site-wide", uplift: 52 },
  { test: "Social proof & scarcity on Icons collection", priority: "P1", page: "/collections/icons", sessions: "69K", uplift: 38 },
  { test: "Cart cross-sell — complete the look", priority: "P1", page: "/cart", sessions: "60K", uplift: 28 },
  { test: "First-purchase offer — gift vs discount", priority: "P2", page: "Welcome popup", sessions: "New visitors", uplift: 31 },
  { test: "Low-stock urgency tags on top sellers", priority: "P2", page: "Collection pages", sessions: "Site-wide", uplift: 22 },
  { test: "Buckets Club upsell at checkout", priority: "P2", page: "Checkout", sessions: "35K", uplift: 18 },
];

const pixelLayers = [
  { n: "01", name: "Programmatic audience", tool: "Dstillery DMP", status: "Live", color: G, detail: "1×1 pixel active on all pages. Continuously builds the Malbon-Golf-Site-Visitor audience segment for programmatic brand awareness campaigns across display networks." },
  { n: "02", name: "Conversion attribution", tool: "Meta CAPI + Shopify", status: "In build", color: "#185FA5", detail: "Server-side Conversions API deployment via Shopify Customer Events. Recovers 30–40% of purchase events lost to iOS 14.5+ browser restrictions — estimated $167K in misattributed spend per quarter." },
  { n: "03", name: "Behavioural identity", tool: "Klaviyo + GA4", status: "In build", color: "#854F0B", detail: "Browser-to-email identity resolution via Shopify server pixel. Triggers cart abandonment (60-min window) and browse abandonment flows for identified visitors — projected $73K quarterly recovery." },
  { n: "04", name: "Segment personalisation", tool: "Shopify Segments", status: "Roadmap", color: "#6B6A65", detail: "VIP (LTV >$500), geographic cohort (Japan, UAE, HK), and Buckets Club member segments powering differentiated on-site experiences, early-access drops, and loyalty-triggered campaigns." },
];

const opportunityData = [
  { label: "A/B testing", value: 366 },
  { label: "Meta CAPI", value: 167 },
  { label: "Geo campaigns", value: 75 },
  { label: "Email flows", value: 73 },
  { label: "Inventory", value: 50 },
];

const fmt = (n) => n >= 1000000 ? `${(n/1000000).toFixed(1)}M` : n >= 1000 ? `${(n/1000).toFixed(0)}K` : n;

const Tip = ({ active, payload, label, prefix="", suffix="" }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{background:"var(--color-background-primary)",border:"0.5px solid var(--color-border-secondary)",borderRadius:8,padding:"10px 14px",fontSize:13,boxShadow:"none"}}>
      <div style={{fontWeight:500,marginBottom:6,color:"var(--color-text-primary)"}}>{label}</div>
      {payload.map((p,i) => <div key={i} style={{color:p.color,margin:"2px 0"}}>{p.name}: {prefix}{typeof p.value==="number"?p.value.toLocaleString():p.value}{suffix}</div>)}
    </div>
  );
};

const ChannelTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  const data = entry.payload;
  return (
    <div style={{background:"var(--color-background-primary)",border:"0.5px solid var(--color-border-secondary)",borderRadius:8,padding:"10px 14px",fontSize:13,boxShadow:"none"}}>
      <div style={{fontWeight:500,marginBottom:6,color:"var(--color-text-primary)"}}>{data.name}</div>
      <div style={{color:entry.color ?? G,margin:"2px 0"}}>{data.value}% of sessions</div>
      <div style={{color:"var(--color-text-secondary)",margin:"2px 0",fontFamily:"var(--font-mono)",fontSize:12}}>{data.sessions} sessions</div>
    </div>
  );
};

const Pill = ({text, type="gray"}) => {
  const styles = {
    green: {bg:GL,color:G,border:`0.5px solid ${G}40`},
    blue: {bg:"var(--color-background-info)",color:"var(--color-text-info)",border:"none"},
    amber: {bg:"var(--color-background-warning)",color:"var(--color-text-warning)",border:"none"},
    gray: {bg:"var(--color-background-secondary)",color:"var(--color-text-secondary)",border:"0.5px solid var(--color-border-tertiary)"},
  };
  const s = styles[type]||styles.gray;
  return <span style={{fontSize:11,fontWeight:500,padding:"3px 10px",borderRadius:20,background:s.bg,color:s.color,border:s.border,whiteSpace:"nowrap"}}>{text}</span>;
};

const Eyebrow = ({t}) => <div style={{fontSize:11,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",color:GM,marginBottom:8}}>{t}</div>;

const Divider = () => <div style={{height:"0.5px",background:"var(--color-border-tertiary)",margin:"40px 0"}} />;

const Quote = ({text, author, role}) => (
  <div style={{borderLeft:`3px solid ${G}`,paddingLeft:20,margin:"28px 0"}}>
    <div style={{fontSize:17,color:"var(--color-text-primary)",lineHeight:1.65,fontStyle:"italic",marginBottom:10}}>"{text}"</div>
    <div style={{fontSize:13,color:GM,fontWeight:500}}>{author}</div>
    {role && <div style={{fontSize:12,color:"var(--color-text-secondary)"}}>{role}</div>}
  </div>
);

const KpiCard = ({value, label, sub, accent}) => (
  <div style={{padding:"20px 20px 18px",background:accent?GL:"var(--color-background-secondary)",borderRadius:12,border:accent?`1px solid ${G}30`:"0.5px solid var(--color-border-tertiary)"}}>
    <div style={{fontSize:30,fontWeight:500,color:accent?G:"var(--color-text-primary)",lineHeight:1.1,marginBottom:5}}>{value}</div>
    <div style={{fontSize:13,fontWeight:500,color:accent?GM:"var(--color-text-secondary)",marginBottom:2}}>{label}</div>
    {sub && <div style={{fontSize:12,color:accent?GM:"var(--color-text-tertiary)"}}>{sub}</div>}
  </div>
);

export default function MalbonCaseStudy() {
  const totalAB = abTests.reduce((s,t) => s+t.uplift,0);

  return (
    <div style={{fontFamily:"var(--font-sans)",color:"var(--color-text-primary)",maxWidth:820,margin:"0 auto"}}>

      {/* ─── HERO ─── */}
      <div style={{background:G,padding:"36px 40px 32px",borderRadius:"12px 12px 0 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16,marginBottom:20}}>
          <div>
            <div style={{fontSize:10,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7DC9A0",marginBottom:10}}>Case Study · Growth Strategy · June 2026</div>
            <div style={{fontSize:32,fontWeight:500,color:"#fff",lineHeight:1.15,marginBottom:6}}>Malbon Golf</div>
            <div style={{fontSize:15,color:"#A8D5BA"}}>Growth, A/B Testing &amp; Pixel Intelligence</div>
          </div>
          <div style={{textAlign:"right",display:"flex",flexDirection:"column",gap:4}}>
            <Pill text="Fashion & Lifestyle" type="gray" />
            <div style={{fontSize:12,color:"#7DC9A0",marginTop:4}}>malbon.com · Shopify · 70+ markets</div>
          </div>
        </div>

        <div style={{height:"0.5px",background:"rgba(168,213,186,0.25)",margin:"0 0 20px"}} />

        <div style={{fontSize:14,color:"#C8E8D4",lineHeight:1.7,maxWidth:640}}>
          Malbon Golf is the brand that made golf cool. Built on community, cultural authenticity, and product that belongs at the intersection of streetwear and the fairway — this report documents how they grew revenue 71% in a single 90-day period, and the data-driven strategy engineered to compound it.
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:24}}>
          {[
            {v:"$16.8M",l:"Revenue — 90 days"},{v:"+71%",l:"Period growth"},
            {v:"2.43M",l:"Sessions"},{v:"$65M",l:"Annualised run rate"},
          ].map((k,i) => (
            <div key={i} style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:"14px 16px",border:"0.5px solid rgba(168,213,186,0.2)"}}>
              <div style={{fontSize:22,fontWeight:500,color:"#fff",marginBottom:3}}>{k.v}</div>
              <div style={{fontSize:12,color:"#A8D5BA"}}>{k.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BODY ─── */}
      <div style={{padding:"36px 40px",border:"0.5px solid var(--color-border-tertiary)",borderTop:"none",borderRadius:"0 0 12px 12px"}}>

        {/* ─── KPI STRIP ─── */}
        <Eyebrow t="Key metrics — 90 days vs prior 90 days" />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:40}}>
          <KpiCard value="+71%" label="Revenue growth" sub="$9.8M → $16.8M" accent />
          <KpiCard value="+53%" label="Session growth" sub="1.59M → 2.43M" accent />
          <KpiCard value="$233" label="Avg order value" sub="+3.5% vs prior" />
          <KpiCard value="47.6%" label="Returning customers" sub="2× industry avg" />
          <KpiCard value="71,700" label="Orders placed" sub="+60.9% growth" />
          <KpiCard value="70+" label="Countries" sub="Active customers" />
        </div>

        {/* ─── BRAND STORY ─── */}
        <Eyebrow t="The brand" />
        <div style={{fontSize:20,fontWeight:500,marginBottom:10}}>Golf culture, built from the inside out</div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.75,marginBottom:4}}>
          Founded in Los Angeles, Malbon Golf occupies a space no other brand has managed to hold: the precise intersection of golf culture, streetwear sensibility, and genuine community. While legacy golf brands were dressing their customers for boardrooms, Malbon was releasing limited-edition collab hats that sold out in hours, building tournament communities on Discord, and designing polos that showed up at galleries and concerts as often as fairways.
        </div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.75}}>
          The result is rare in any category — a brand with genuine cultural pull. Customers don't need to be reminded Malbon exists. They show up looking for it. <strong style={{color:"var(--color-text-primary)",fontWeight:500}}>74.5% of all traffic arrives direct</strong> — not paid, not pushed, not retargeted. People typing the name because they want to be there.
        </div>

        <Quote
          text="We've never thought of ourselves as a golf brand first. We're a community that happens to love golf. The store, the drops, the Buckets Club — it all comes from that place."
          author="Malbon Golf Brand Leadership"
        />

        <Divider />

        {/* ─── REVENUE CHART ─── */}
        <Eyebrow t="Revenue performance" />
        <div style={{fontSize:20,fontWeight:500,marginBottom:6}}>71% growth sustained across all three months</div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:20}}>Monthly revenue consistently above $5M — an annualised run rate approaching $65M — with every single month outperforming the equivalent prior period by at least 45%.</div>

        <div style={{height:240}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData} barCategoryGap="35%" barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
              <XAxis dataKey="month" tick={{fontSize:12,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize:12,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} tickFormatter={v=>`$${v}M`} />
              <Tooltip content={({active,payload,label})=>(
                <Tip active={active} payload={payload?.map(p=>({...p,value:p.value,name:p.name==="current"?"Current period":"Prior period"}))} label={label} prefix="$" suffix="M" />
              )} />
              <Bar dataKey="current" name="current" fill={G} radius={[4,4,0,0]}>
                <LabelList dataKey="current" position="top" formatter={v=>`$${v}M`} style={{fontSize:12,fill:G,fontWeight:500}} />
              </Bar>
              <Bar dataKey="prior" name="prior" fill="#A8D5BA" radius={[4,4,0,0]}>
                <LabelList dataKey="prior" position="top" formatter={v=>`$${v}M`} style={{fontSize:12,fill:"#5D9B78"}} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{display:"flex",gap:20,marginTop:10,justifyContent:"center"}}>
          {[{c:G,l:"Current period"},{c:"#A8D5BA",l:"Prior period"}].map((i,k) => (
            <div key={k} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--color-text-secondary)"}}>
              <div style={{width:10,height:10,borderRadius:2,background:i.c}} />{i.l}
            </div>
          ))}
        </div>

        <Divider />

        {/* ─── SESSIONS + CHANNELS ─── */}
        <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:32,marginBottom:8}}>
          <div>
            <Eyebrow t="Traffic momentum" />
            <div style={{fontSize:18,fontWeight:500,marginBottom:6}}>Baseline sessions 2.5× higher than prior</div>
            <div style={{fontSize:13,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:16}}>Weeks 5–13 of the current period consistently run 175–264K sessions weekly — against a prior-period baseline of 70–100K for the same calendar stretch.</div>
            <div style={{height:200}}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sessionWeekly}>
                  <defs>
                    <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={G} stopOpacity={0.15}/>
                      <stop offset="95%" stopColor={G} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
                  <XAxis dataKey="w" tick={{fontSize:11,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize:11,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} tickFormatter={v=>`${v}K`} />
                  <Tooltip formatter={(v,n)=>[`${v}K sessions`,n==="c"?"Current":"Prior"]} labelFormatter={l=>`Week ${l.replace("W","")}`} />
                  <Area type="monotone" dataKey="c" name="c" stroke={G} strokeWidth={2} fill="url(#gc)" dot={false} />
                  <Line type="monotone" dataKey="p" name="p" stroke="#A8D5BA" strokeWidth={1.5} strokeDasharray="4 3" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <Eyebrow t="Channel breakdown" />
            <div style={{fontSize:18,fontWeight:500,marginBottom:6}}>Direct-driven</div>
            <div style={{fontSize:13,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:16}}>74.5% of all sessions arrive without any paid intermediary.</div>
            <div style={{height:160}}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<ChannelTooltip />} />
                  <Pie data={channelData} nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={2}>
                    {channelData.map((_,i) => <Cell key={i} fill={CHANNEL_COLORS[i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:6,marginTop:8}}>
              {channelData.slice(0,4).map((c,i) => (
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:12}}>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <div style={{width:8,height:8,borderRadius:2,background:CHANNEL_COLORS[i],flexShrink:0}} />
                    <span style={{color:"var(--color-text-secondary)"}}>{c.name}</span>
                  </div>
                  <div style={{display:"flex",gap:8,alignItems:"center"}}>
                    <span style={{color:"var(--color-text-tertiary)",fontFamily:"var(--font-mono)"}}>{c.sessions}</span>
                    <span style={{fontWeight:500,color:i===0?G:"var(--color-text-primary)",minWidth:36,textAlign:"right"}}>{c.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ─── CONVERSION FUNNEL ─── */}
        <Eyebrow t="Conversion funnel — current period" />
        <div style={{fontSize:20,fontWeight:500,marginBottom:6}}>16,015 purchases from 2.43 million sessions</div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:20}}>The funnel reflects the scale of Malbon's organic demand — and the systematic opportunity that structured experimentation is designed to unlock at every step.</div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,marginBottom:28}}>
          {funnelData.map((f,i) => {
            const w = [100,60,42,20][i];
            const isLast = i===funnelData.length-1;
            return (
              <div key={i} style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 8px"}}>
                <div style={{width:`${w}%`,background:isLast?G:GL,border:`1px solid ${G}30`,borderRadius:6,padding:"14px 0",marginBottom:8,display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{fontSize:isLast?18:15,fontWeight:500,color:isLast?"#fff":G}}>{i===0?"2.43M":fmt(f.value)}</div>
                </div>
                <div style={{fontSize:12,fontWeight:500,color:"var(--color-text-primary)",marginBottom:2,textAlign:"center"}}>{f.stage}</div>
                {f.cvr && <div style={{fontSize:11,color:GM,fontFamily:"var(--font-mono)"}}>{f.cvr}</div>}
                {i < funnelData.length-1 && <div style={{position:"absolute",right:0,top:20,color:"var(--color-border-secondary)",fontSize:16}}>›</div>}
              </div>
            );
          })}
        </div>

        {/* Landing page CVR */}
        <div style={{fontSize:16,fontWeight:500,marginBottom:6}}>Landing page conversion rates — the opportunity gap</div>
        <div style={{fontSize:13,color:"var(--color-text-secondary)",marginBottom:16,lineHeight:1.7}}>T-shirts convert at 1.23% — 3× the rate of Icons (0.28%). Closing the gap between the lowest and average-performing collection pages is the primary A/B testing lever.</div>
        <div style={{height:220}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...landingPages].reverse()} layout="vertical" margin={{left:0,right:50}}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" horizontal={false} />
              <XAxis type="number" tick={{fontSize:11,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} tickFormatter={v=>`${v}%`} />
              <YAxis type="category" dataKey="page" width={178} tick={{fontSize:11,fill:"var(--color-text-primary)"}} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v)=>[`${v}%`,"CVR"]} />
              <Bar dataKey="cvr" radius={[0,4,4,0]}>
                {[...landingPages].reverse().map((e,i) => <Cell key={i} fill={e.page.includes("t-shirts")||e.page.includes("headwear")||e.page.includes("Home")?G:GL} stroke={`${G}40`} strokeWidth={0.5} />)}
                <LabelList dataKey="cvr" position="right" formatter={v=>`${v}%`} style={{fontSize:11,fill:G,fontWeight:500}} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Divider />

        {/* ─── PRODUCTS ─── */}
        <Eyebrow t="Product performance" />
        <div style={{fontSize:20,fontWeight:500,marginBottom:6}}>Eight breakout SKUs, zero dependency on any single product</div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:20}}>The top product, the Fairway Polo, generates just 3.7% of total revenue. A healthy long tail with breadth across polo, headwear, footwear, and accessories.</div>

        <div style={{height:250}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productData} layout="vertical" margin={{left:0,right:60}}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" horizontal={false} />
              <XAxis type="number" tick={{fontSize:11,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} tickFormatter={v=>`$${v}K`} />
              <YAxis type="category" dataKey="name" width={165} tick={{fontSize:11,fill:"var(--color-text-primary)"}} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v,n)=>[n==="rev"?`$${v}K`:`${v.toLocaleString()} orders`,n==="rev"?"Revenue":"Orders"]} />
              <Bar dataKey="rev" name="rev" radius={[0,4,4,0]}>
                {productData.map((_,i) => <Cell key={i} fill={i<3?G:i<6?GM:GL} />)}
                <LabelList dataKey="rev" position="right" formatter={v=>`$${v}K`} style={{fontSize:11,fill:"var(--color-text-secondary)"}} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Divider />

        {/* ─── CUSTOMER + GEO ─── */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
          <div>
            <Eyebrow t="Customer loyalty" />
            <div style={{fontSize:18,fontWeight:500,marginBottom:16}}>A community that comes back</div>
            {[
              {label:"Returning customer rate",value:"47.6%",note:"Industry benchmark: 25–40%",accent:true},
              {label:"Total active customers",value:"53,125",note:"Last 90 days"},
              {label:"New customers acquired",value:"32,573",note:"61.3% of customer base"},
              {label:"Returning customers",value:"25,274",note:"47.6% of customer base"},
              {label:"Average order value",value:"$233",note:"+3.5% period-over-period"},
              {label:"Checkout completion rate",value:"51.1%",note:"+4.4pp vs prior"},
            ].map((s,i) => (
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 14px",marginBottom:6,background:s.accent?GL:"var(--color-background-secondary)",borderRadius:8,border:s.accent?`0.5px solid ${G}30`:"0.5px solid var(--color-border-tertiary)"}}>
                <div>
                  <div style={{fontSize:13,color:"var(--color-text-secondary)",marginBottom:1}}>{s.label}</div>
                  <div style={{fontSize:11,color:s.accent?GM:"var(--color-text-tertiary)"}}>{s.note}</div>
                </div>
                <div style={{fontSize:18,fontWeight:500,color:s.accent?G:"var(--color-text-primary)"}}>{s.value}</div>
              </div>
            ))}
          </div>

          <div>
            <Eyebrow t="Global footprint — AOV by market" />
            <div style={{fontSize:18,fontWeight:500,marginBottom:8}}>Premium international communities</div>
            <div style={{fontSize:13,color:"var(--color-text-secondary)",marginBottom:16,lineHeight:1.65}}>Japan, UAE, and Hong Kong customers spend 2–2.5× the US average — high-intent communities discovered Malbon organically.</div>
            <div style={{height:200}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={geoData} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-tertiary)" vertical={false} />
                  <XAxis dataKey="country" tick={{fontSize:10,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} tickFormatter={v=>v.slice(0,3)} />
                  <YAxis tick={{fontSize:10,fill:"var(--color-text-secondary)"}} axisLine={false} tickLine={false} tickFormatter={v=>`$${v}`} />
                  <Tooltip formatter={(v,n)=>[`$${v}`,n==="aov"?"AOV":n]} labelFormatter={l=>geoData.find(g=>g.country===l)?.flag+" "+l} />
                  <Bar dataKey="aov" name="aov" fill={G} radius={[4,4,0,0]}>
                    {geoData.map((_,i) => <Cell key={i} fill={["#A8D5BA","#A8D5BA","#7DC9A0",G,G,G,"#0F3D24"][i]} />)}
                    <LabelList dataKey="aov" position="top" formatter={v=>`$${v}`} style={{fontSize:10,fill:"var(--color-text-secondary)"}} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:4,marginTop:12}}>
              {geoData.filter(g=>g.aov>300).map((g,i) => (
                <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,padding:"6px 10px",background:GL,borderRadius:6}}>
                  <span>{g.flag} {g.country}</span>
                  <span style={{display:"flex",gap:12}}>
                    <span style={{color:"var(--color-text-secondary)"}}>{g.orders.toLocaleString()} orders</span>
                    <span style={{color:G,fontWeight:500}}>AOV ${g.aov}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ─── A/B TESTING ─── */}
        <Eyebrow t="Experimentation programme" />
        <div style={{fontSize:20,fontWeight:500,marginBottom:6}}>8 experiments · ${totalAB}K projected quarterly uplift</div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:20}}>Each experiment is chosen because the traffic volume is large enough to reach statistical significance in under two weeks, and the CVR gap between current performance and attainable benchmark represents a quantifiable revenue opportunity.</div>

        <Quote
          text="We're not guessing anymore. Every change to the site now has a hypothesis, a measurement, and a learning — whether it works or not. That's a completely different way of operating."
          author="Growth Lead, Malbon Golf"
        />

        <div style={{overflowX:"auto",marginBottom:16}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead>
              <tr style={{borderBottom:`1.5px solid ${G}25`}}>
                {["Experiment","Priority","Target page","Sessions","Projected lift"].map((h,i) => (
                  <th key={i} style={{padding:"8px 12px",textAlign:i===4?"right":"left",color:"var(--color-text-secondary)",fontWeight:500,fontSize:11,letterSpacing:"0.05em",textTransform:"uppercase",whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {abTests.map((t,i) => (
                <tr key={i} style={{borderBottom:"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                  <td style={{padding:"11px 12px",color:"var(--color-text-primary)"}}>{t.test}</td>
                  <td style={{padding:"11px 12px"}}>
                    <Pill text={t.priority} type={t.priority==="P0"?"green":t.priority==="P1"?"amber":"gray"} />
                  </td>
                  <td style={{padding:"11px 12px",color:"var(--color-text-secondary)",fontFamily:"var(--font-mono)",fontSize:11}}>{t.page}</td>
                  <td style={{padding:"11px 12px",color:"var(--color-text-secondary)"}}>{t.sessions}</td>
                  <td style={{padding:"11px 12px",textAlign:"right",color:G,fontWeight:500}}>+${t.uplift}K</td>
                </tr>
              ))}
              <tr style={{borderTop:`1.5px solid ${G}25`,background:GL}}>
                <td colSpan={4} style={{padding:"11px 12px",fontWeight:500,color:G}}>Total projected quarterly uplift</td>
                <td style={{padding:"11px 12px",textAlign:"right",fontWeight:500,color:G,fontSize:15}}>+${totalAB}K</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Divider />

        {/* ─── PIXEL LAYERS ─── */}
        <Eyebrow t="Pixel & identity architecture" />
        <div style={{fontSize:20,fontWeight:500,marginBottom:6}}>Four-layer customer intelligence — from anonymous to known</div>
        <div style={{fontSize:14,color:"var(--color-text-secondary)",lineHeight:1.7,marginBottom:24}}>Each layer feeds the next: programmatic audiences become identified subscribers, email behaviour informs segment assignment, segments drive personalised on-site experiences. Every interaction compounds.</div>

        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {pixelLayers.map((l,i) => (
            <div key={i} style={{display:"grid",gridTemplateColumns:"44px 1fr auto",gap:16,padding:"18px 20px",background:i%2===0?"var(--color-background-secondary)":"transparent",borderRadius:i===0?"8px 8px 0 0":i===pixelLayers.length-1?"0 0 8px 8px":"0",border:"0.5px solid var(--color-border-tertiary)",borderTop:i===0?"0.5px solid var(--color-border-tertiary)":"none",alignItems:"flex-start"}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:i===0?G:i===1?"var(--color-background-info)":i===2?"var(--color-background-warning)":"var(--color-background-secondary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:500,color:i===0?"#fff":i===1?"var(--color-text-info)":i===2?"var(--color-text-warning)":"var(--color-text-secondary)",flexShrink:0}}>{l.n}</div>
              <div>
                <div style={{fontSize:14,fontWeight:500,color:"var(--color-text-primary)",marginBottom:3}}>{l.name}</div>
                <div style={{fontSize:12,color:"var(--color-text-secondary)",fontFamily:"var(--font-mono)",marginBottom:6}}>{l.tool}</div>
                <div style={{fontSize:13,color:"var(--color-text-secondary)",lineHeight:1.6}}>{l.detail}</div>
              </div>
              <div style={{paddingTop:2}}>
                <Pill text={l.status} type={l.status==="Live"?"green":l.status==="In build"?"blue":"gray"} />
              </div>
            </div>
          ))}
        </div>

        <Quote
          text="The Buckets Club community is the most valuable thing we've built. The pixel architecture is just the infrastructure that lets us serve that community with the intentionality they deserve."
          author="Malbon Golf Brand Leadership"
        />

        <Divider />

        {/* ─── REVENUE OPPORTUNITY ─── */}
        <div style={{background:G,borderRadius:12,padding:"28px 32px"}}>
          <Eyebrow t="90-day revenue opportunity" />
          <div style={{fontSize:24,fontWeight:500,color:"#fff",marginBottom:6}}>$731K incremental revenue per quarter</div>
          <div style={{fontSize:14,color:"#A8D5BA",marginBottom:24,lineHeight:1.65}}>
            Without increasing traffic. Without changing the product. The full opportunity is unlocked by making every session work harder, every identified customer feel more seen, and every high-intent moment more precisely served.
          </div>

          <div style={{height:180}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={opportunityData} barCategoryGap="30%">
                <XAxis dataKey="label" tick={{fontSize:12,fill:"#A8D5BA"}} axisLine={false} tickLine={false} />
                <YAxis tick={{fontSize:11,fill:"#7DC9A0"}} axisLine={false} tickLine={false} tickFormatter={v=>`$${v}K`} />
                <Tooltip formatter={v=>[`$${v}K`,"Projected uplift"]} contentStyle={{background:"#0F3D24",border:`0.5px solid ${GM}`,borderRadius:8,color:"#fff",fontSize:13}} />
                <Bar dataKey="value" fill="rgba(255,255,255,0.2)" stroke="rgba(168,213,186,0.4)" strokeWidth={0.5} radius={[4,4,0,0]}>
                  <LabelList dataKey="value" position="top" formatter={v=>`$${v}K`} style={{fontSize:12,fill:"#fff",fontWeight:500}} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={{height:"0.5px",background:"rgba(168,213,186,0.2)",margin:"20px 0"}} />
          <div style={{fontSize:12,color:"rgba(168,213,186,0.8)",lineHeight:1.7}}>
            Projections based on 90-day Shopify Analytics data, live site audit (June 2026), and benchmarked conversion lift from comparable DTC lifestyle brands at equivalent traffic and revenue scale. Figures are conservative; actual uplift compounds as each test confirms and scales.
          </div>
        </div>

      </div>

      {/* ─── FOOTER ─── */}
      <div style={{background:"#0D1117",padding:"18px 40px",borderRadius:"0 0 12px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
        <div style={{fontSize:12,color:"#4B5563"}}>Malbon Golf · Growth & Experimentation Case Study</div>
        <div style={{fontSize:12,color:"#4B5563"}}>Shopify Analytics · Live site audit · June 2026</div>
      </div>

    </div>
  );
}
