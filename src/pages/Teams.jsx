import { useState } from 'react'

const TAP_MEMBERS = [
  { initials: 'JH', name: 'Joseph Holmes',   title: 'Finance Systems Consultant', focus: 'DPT Focus: OB1 Claims Payments',   desc: 'Primary business consultant for the OB1 Claims Payments workstream within the DPT program.' },
  { initials: 'MB', name: 'Michelle Baugher', title: 'Finance Systems Consultant', focus: 'DPT Focus: NextGen Payments',       desc: 'Primary business consultant for the NextGen Payments workstream within the DPT program.' },
  { initials: 'MB', name: 'Mike Bigatti',     title: 'Finance Systems Consultant', focus: 'DPT Focus: TPS Payment Solution',  desc: 'Primary business consultant for the TPS Payment Solution workstream within the DPT program.' },
  { initials: 'TA', name: 'Taylor Aichele',   title: 'Finance Systems Consultant', focus: 'DPT Focus: NextGen Payments',       desc: 'Business consultant supporting the NextGen Payments workstream within the DPT program.' },
]

function PersonCard({ initials, name, title, focus, desc, focusClass = '', color = '#1a3f7a', topClass = 'tn-navy' }) {
  return (
    <div className={`pc ${topClass}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <div className="pav" style={{ background: color }}>{initials}</div>
        <div><div className="pname">{name}</div><div className="ptitle">{title}</div></div>
      </div>
      <div className={`pfocus ${focusClass}`} style={{ marginBottom: 8 }}>{focus}</div>
      {desc && <p style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.5 }}>{desc}</p>}
    </div>
  )
}

function TAPDetail() {
  return (
    <div>
      <div className="g2 mb20">
        {TAP_MEMBERS.map(m => <PersonCard key={m.name} {...m} color="#1a3f7a" topClass="tn-navy" />)}
      </div>
      <div className="card ln-navy">
        <span className="lbl">Team Responsibilities</span>
        {['Elicit and document business requirements from stakeholders across the org',
          'Write and maintain BRDs (Business Requirements Documents) — full and streamlined templates depending on effort size. Every requirement carries a unique ID for traceability.',
          'Support IT delivery: BRD review sessions, shoulder checks, demos, and formal UAT',
          'Represent the payments domain on non-DPT projects org-wide',
          'Track non-DPT operational work via TAP Tasks board in Jira',
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < 4 ? '1px solid #dde2ed' : 'none' }}>
            <span style={{ color: '#1a3f7a', fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FLOWDetail() {
  return (
    <div>
      <div className="g2 mb20">
        <div className="pc tn-slate" style={{ gridColumn: '1/-1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div className="pav" style={{ background: '#2c4a72' }}>CS</div>
            <div><div className="pname">Chris Shuler</div><div className="ptitle">Manager, Payment Strategy &amp; Operations</div></div>
          </div>
          <div className="pfocus pfocus-f" style={{ marginBottom: 8 }}>Operations Manager</div>
          <p style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.6 }}>Leads strategy-to-execution for scalable, resilient payment operations. Translates enterprise priorities into clear operating models, ensures strong third-party oversight, and drives disciplined adoption of Digital Payment Transformation outcomes across day-to-day operations.</p>
        </div>
        <div className="pc tn-slate" style={{ gridColumn: '1/-1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div className="pav" style={{ background: '#2c4a72' }}>CB</div>
            <div><div className="pname">Cindy Banzon</div><div className="ptitle">Payment Strategy &amp; Operations Analyst, Senior</div></div>
          </div>
          <div className="pfocus pfocus-f" style={{ marginBottom: 8 }}>Operations Controls</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 10 }}>
            {['Reconciliation', 'Exceptions', 'Compliance Ops', 'Partners'].map(b => <span key={b} className="bdg bdg-slate">{b}</span>)}
          </div>
          <p style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.6 }}>Runs the high-control, high-precision operational processes and provides the 'control tower' view of daily health across payment operations.</p>
        </div>
        {[
          { i: 'RC', n: 'Roxietta Jean Chaplin', t: 'Payment Strategy & Operations Analyst' },
          { i: 'EN', n: 'Eileen Noguera',         t: 'Payment Strategy & Operations Analyst' },
        ].map(m => (
          <div key={m.n} className="pc tn-slate">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div className="pav" style={{ background: '#2c4a72' }}>{m.i}</div>
              <div><div className="pname">{m.n}</div><div className="ptitle">{m.t}</div></div>
            </div>
            <div className="pfocus pfocus-f" style={{ marginBottom: 8 }}>RTB Intake, Prioritization &amp; Governance</div>
            <p style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.6 }}>Enables disciplined, transparent delivery of Run the Business and transformation work by owning intake, prioritization, and governance — adapting to funding constraints, IT capacity realities, and the evolving DPT delivery model.</p>
          </div>
        ))}
      </div>
      <div className="card ln-slate">
        <span className="lbl">Team Responsibilities</span>
        {['Support day-to-day payment operations',
          'Track and manage operational tasks via FLOW Tasks board',
          'Utilize epics to organize operational work themes',
          'Operate within standards set by the EPS CoE',
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < 3 ? '1px solid #dde2ed' : 'none' }}>
            <span style={{ color: '#2c4a72', fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgDetail() {
  return (
    <div>
      <div className="co co-gray" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4a5a7a' }}>These team members work closely with and across the EPS CoE but sit outside the TAP and FLOW team structures. Their work is closely aligned to the Digital Payments program and they are key collaborators for both teams.</p>
      </div>
      <div className="g2">
        <div className="pc tn-gray">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div className="pav" style={{ background: '#7a8aaa' }}>JG</div>
            <div><div className="pname">Jeff Grow</div><div className="ptitle">Finance Systems Senior Consultant</div></div>
          </div>
          <span className="bdg bdg-gray" style={{ marginBottom: 8, display: 'inline-block' }}>Special Assignments &amp; Team Support</span>
          <p style={{ fontSize: 12, color: '#5a6a8a', marginTop: 8 }}>Special assignments and cross-team support. Leading the EPS CoE setup effort. Role is being defined as the initiative matures.</p>
        </div>
        <div className="pc tn-amber">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div className="pav" style={{ background: '#b87a00' }}>LH</div>
            <div><div className="pname">Lexie Hicklin</div><div className="ptitle">Project Manager I</div></div>
          </div>
          <span className="bdg bdg-amber" style={{ marginBottom: 8, display: 'inline-block' }}>DPT Program Management</span>
          <p style={{ fontSize: 12, color: '#5a6a8a', marginTop: 8 }}>DPT program management — scheduling, milestones, and coordination across teams. Sits outside the EPS CoE structure but closely aligned to DPT delivery.</p>
          <p style={{ fontSize: 12, color: '#5a6a8a', marginTop: 8, padding: '6px 10px', background: '#fdf8ee', borderRadius: 4, border: '1px solid #e0c880' }}>Airtable admin — currently owns billing business rules. Key stakeholder for payments rules governance conversation.</p>
        </div>
      </div>
    </div>
  )
}

const LANDING_CARDS = [
  {
    id: 'tap', icon: '◆', colorClass: 'tn-navy', linkColor: '#1a3f7a',
    title: 'TAP Team',
    desc: 'Four Business Consultants embedded in the DPT program. TAP owns business requirements — eliciting, documenting, and maintaining the epics and stories that IT delivery teams translate into working software. They are the business voice throughout the delivery lifecycle.',
    badges: [['bdg-navy','OB1 Claims Payments'],['bdg-navy','NextGen Payments'],['bdg-navy','TPS Payment Solution']],
  },
  {
    id: 'flow', icon: '◇', colorClass: 'tn-slate', linkColor: '#2c4a72',
    title: 'FLOW Team',
    desc: 'A manager and three analysts focused on payment strategy and operations. FLOW owns the control tower view of daily payment health, runs high-precision operational processes, and drives disciplined RTB intake and governance.',
    badges: [['bdg-slate','Operations Controls'],['bdg-slate','Reconciliation'],['bdg-slate','RTB Intake & Governance']],
  },
  {
    id: 'prog', icon: '◈', colorClass: 'tn-gray', linkColor: '#4a5a7a',
    title: 'Program & Support',
    desc: 'Two colleagues who work closely alongside both teams but sit outside the TAP and FLOW structures. Jeff Grow leads the EPS CoE setup effort. Lexie Hicklin manages the DPT program and is a key collaborator for governance and tooling.',
    badges: [['bdg-gray','EPS CoE Setup'],['bdg-amber','DPT Program Management']],
  },
]

export default function Teams() {
  const [active, setActive] = useState(null)

  const open = (id) => setActive(id)
  const back = () => setActive(null)

  if (active) {
    return (
      <div>
        <div className="section-title">{LANDING_CARDS.find(c => c.id === active)?.title}</div>
        <div className="section-sub">Enterprise Payment Systems · Digital Payments EPS CoE · Director: Stacey Etsuko Bocci</div>
        <button className="back-btn" onClick={back}>← Back to Teams</button>
        {active === 'tap'  && <TAPDetail />}
        {active === 'flow' && <FLOWDetail />}
        {active === 'prog' && <ProgDetail />}
      </div>
    )
  }

  return (
    <div>
      <div className="section-title">Our Team</div>
      <div className="section-sub">Enterprise Payment Systems · Digital Payments EPS CoE · Director: Stacey Etsuko Bocci</div>

      <div className="card ln-navy mb20">
        <p style={{ fontSize: 15, lineHeight: 1.8 }}>Although TAP, FLOW, and our program colleagues each have distinct focuses, we operate as one team. We share knowledge, support each other through busy periods, and hold ourselves to the same standards of quality and professionalism. The work we do — whether writing requirements or managing operations — all serves the same mission: making Digital Payments work better for the people who depend on it. When one of us succeeds, the whole team succeeds.</p>
      </div>

      <div className="g3">
        {LANDING_CARDS.map(card => (
          <div key={card.id} className={`bc ${card.colorClass}`} onClick={() => open(card.id)}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#0a1628', marginBottom: 6 }}>{card.title}</div>
            <div style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 14 }}>{card.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
              {card.badges.map(([cls, label]) => <span key={label} className={`bdg ${cls}`}>{label}</span>)}
            </div>
            <div style={{ fontSize: 12, color: card.linkColor, fontWeight: 600 }}>View {card.title} →</div>
          </div>
        ))}
      </div>
    </div>
  )
}
