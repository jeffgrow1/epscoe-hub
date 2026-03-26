function FR({ name, badge, badgeCls = 'bdg-navy', desc, ft, fg }) {
  return (
    <div className="fr">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="fn" dangerouslySetInnerHTML={{ __html: name }} />
        <span className={`bdg ${badgeCls}`}>{badge}</span>
      </div>
      <div className="fd">{desc}</div>
      {ft && <div className="ft">{ft}</div>}
      {fg && <div className="fg">{fg}</div>}
    </div>
  )
}

function CLI({ ok, children }) {
  return (
    <div className="cli">
      <span style={{ color: ok ? '#1a7a45' : '#0d6e63', minWidth: 18, fontWeight: 700 }}>{ok ? '✓' : '⇌'}</span>
      <span style={{ fontSize: 13 }}>{children}</span>
    </div>
  )
}

export default function EpicStandard() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>Purpose of a DPT Business Epic</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>A business epic frames a capability need at summary level — the <strong>what</strong>, <strong>why</strong>, and <strong>who</strong>, never the how. Keep epics light — if it is getting long, solution thinking has crept in. Write as if IT does not exist — if you find yourself writing about databases, APIs, screens, or system behavior, stop and reframe from the business perspective.</p>
      </div>

      <div className="sdiv">What Belongs — and What Does Not</div>
      <div className="g2 mb20">
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: '#1a7a45' }}>✓ Include in a Business Epic</div>
          {['Business capability or outcome needed','Business problem being solved','Who in the business is affected','Why it matters','Known constraints and dependencies','Link to DPT program goal'].map(t => <span key={t} className="pill pill-g">{t}</span>)}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: '#8a2020' }}>✗ Does Not Belong</div>
          {['System names or platform decisions','Database, API, or integration design','Screen layouts or UI descriptions','Technical architecture choices','Development approach or sprint planning','Detailed step-by-step process'].map(t => <span key={t} className="pill pill-r">{t}</span>)}
        </div>
      </div>

      <div className="sdiv">Fields &amp; Guidance</div>
      <div className="card mb20">
        <FR name="Epic Name" badge="Required" desc="Short title communicating the business capability. Format: [Domain] — [Capability or Outcome]." />
        <FR name='Business Problem Statement <span style="color:#5a6a8a;font-weight:400;">(Why)</span>' badge="Required" desc="2–3 sentences describing the gap from the perspective of the people experiencing it. What can the business not do today, and why does that matter?" />
        <FR name='Business Objective <span style="color:#5a6a8a;font-weight:400;">(What)</span>' badge="Required" desc="The measurable or observable business outcome when this epic is complete. Link to a named DPT program goal. This is what success looks like from the business perspective — not a feature or a deliverable." />
        <FR name="Business Dependencies &amp; Constraints" badge="Optional" badgeCls="bdg-gray" desc="Other epics or capabilities this work depends on, and any constraints that shape the approach — regulatory deadlines, policy restrictions, contractual obligations, or organizational readiness. No technical constraints." />
        <FR name='Impacted Business Roles <span style="color:#5a6a8a;font-weight:400;">(Who)</span>' badge="Required" desc="The business roles affected by or benefiting from this capability. These become the personas in child stories. Role titles only — no IT team names." />
        <FR name="Key Business Stakeholders" badge="Optional" badgeCls="bdg-gray" desc="The business owners and SMEs who will validate stories and participate in UAT for this epic. At least one per epic is recommended." />
        <FR name="Linked" badge="Optional" badgeCls="bdg-gray" desc="Used by IT to link their delivery epic back to this business epic for traceability. Once IT creates a delivery epic, they link it here using 'is implemented by' or 'relates to'." ft="⇌ Business Consultant confirms the link exists before approving IT epic for sprint." />
        <div className="fr">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="fn">Status</div><span className="bdg bdg-navy">Required</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
            {[['#f0f2f6','#c8d0e0','#4a5a7a','Funnel'],['#eaf2fb','#aacfee','#1a6ab8','To Do'],['#e8eef8','#b8cce8','#1a3f7a','In Progress'],['#fdf4e3','#e0c880','#8a5a00','Verified'],['#e8f5ee','#a8d8bc','#1a7a45','Done'],['#fdf0f0','#e0b0b0','#8a2020','Canceled']].map(([bg, border, color, label]) => (
              <span key={label} style={{ background: bg, border: `1px solid ${border}`, color, borderRadius: 4, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>{label}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="sdiv">Quality Checklist</div>
      <div className="card">
        <CLI ok>Epic name communicates business capability with no system or technology reference</CLI>
        <CLI ok>Problem statement (Why) describes what the business cannot do today and why it matters</CLI>
        <CLI ok>Objective (What) is a measurable business outcome linked to a named DPT program goal</CLI>
        <CLI ok>Impacted roles (Who) are business roles only — no IT team names</CLI>
        <CLI ok>No screen designs, APIs, database references, or architecture language anywhere</CLI>
        <CLI ok>Epic is summary-level — detailed requirements live in child stories</CLI>
        <CLI>Traceability: At least one child story linked before status moves to In Progress</CLI>
        <CLI>Traceability: IT delivery epic linked back to this epic before IT sprint commitment</CLI>
      </div>
    </div>
  )
}
