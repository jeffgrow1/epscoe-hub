const INTERNAL_JIRA = [
  { from: 'TAP Tasks', fromSub: 'DIGPAY · TAP Tasks', to: 'Parent Epic', toSub: 'DIGPAY · Epics Board', cls: 'lr-c', badge: 'lb-c', label: 'Confirmed', desc: 'Every TAP task links to a parent epic for organization and visibility. No orphan tasks.' },
  { from: 'FLOW Tasks', fromSub: 'DIGPAY · FLOW Tasks', to: 'Parent Epic', toSub: 'DIGPAY · Epics Board', cls: 'lr-c', badge: 'lb-c', label: 'Confirmed', desc: 'Every FLOW task links to a parent epic. Epics organize work by operational theme.' },
  { from: 'Intake Item', fromSub: 'DIGPAY · Intake Board (Phase 2)', to: 'TAP or FLOW Task', cls: 'lr-p', badge: 'lb-p', label: 'Phase 2', desc: 'Once the Intake board is live, triaged items convert to tasks on the appropriate board.' },
]

const BRD_LINKS = [
  { from: 'BRD Requirement', fromSub: 'Unique ID per requirement', to: 'IT Delivery Epic/Story', toSub: "IT's Jira project", cls: 'lr-g', badge: 'lb-g', label: 'Expectation', desc: "IT delivery teams are expected to reference the BRD requirement ID in their delivery artifacts. IT is responsible for establishing how they implement this traceability in their own Jira project." },
  { from: 'BRD Requirement', to: 'Business Rule Record', toSub: 'Airtable', cls: 'lr-c', badge: 'lb-c', label: 'Confirmed', desc: 'Every business rule cited in a BRD must have an Airtable record with a Rule ID. Payments rules governance being established — coordinate with Jeff Grow.' },
  { from: 'BRD', to: 'Process Map', toSub: 'iGrafx — Phase 2', cls: 'lr-p', badge: 'lb-p', label: 'Phase 2', desc: 'Optional process reference once iGrafx is active. BRDs may reference relevant process map names and steps.' },
  { from: 'BRD Requirement', to: 'Operational Control', toSub: 'GRC Tool — Phase 2', cls: 'lr-p', badge: 'lb-p', label: 'Phase 2', desc: 'Requirements touching a controlled process step will reference the GRC Control ID. Approach TBD.' },
]

const IT_LINKS = [
  { from: 'IT Delivery Epic/Story', to: 'BRD Requirement ID', toSub: 'TAP BRD document', cls: 'lr-g', badge: 'lb-g', label: 'Expectation', desc: "Most critical link. IT's delivery artifacts reference the BRD requirement ID they implement. IT determines how they implement this in their own Jira project." },
  { from: 'IT UAT Test Case', to: 'BRD Acceptance Condition', cls: 'lr-g', badge: 'lb-g', label: 'Expectation', desc: 'IT UAT test cases reference the specific BRD requirement and acceptance condition they test.' },
  { from: 'IT Delivery Defect', to: 'BRD Requirement ID', cls: 'lr-g', badge: 'lb-g', label: 'Expectation', desc: 'Defects are linked back to the BRD requirement whose conditions were not met.' },
]

function LinkRow({ from, fromSub, to, toSub, cls, badge, label, desc }) {
  return (
    <div className={`lr ${cls}`}>
      <div className="lf">{from}{fromSub && <div style={{ fontSize: 11, color: '#8a96b0' }}>{fromSub}</div>}</div>
      <div className="la">→</div>
      <div className="lt">{to}{toSub && <div style={{ fontSize: 11, color: '#8a96b0' }}>{toSub}</div>}</div>
      <div className="lm"><span className={`lb ${badge}`}>{label}</span><div className="ld">{desc}</div></div>
    </div>
  )
}

function TraceGroup({ header, headerClass = '', rows }) {
  return (
    <div className="tr-grp mb20">
      <div className={`tr-hdr ${headerClass}`}>{header}</div>
      <div className="tr-body">{rows.map((r, i) => <LinkRow key={i} {...r} />)}</div>
    </div>
  )
}

export default function Traceability() {
  return (
    <div>
      <div className="section-title">Traceability Model</div>
      <div className="section-sub">How EPS CoE deliverables connect to each other and to IT delivery artifacts</div>

      <div className="co co-navy" style={{ marginBottom: 16 }}>
        <div className="co-title" style={{ color: '#1a3f7a' }}>How Traceability Works Under the BRD Model</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>
          Business requirements live in BRDs — not Jira. Every individual requirement in a BRD carries a unique ID. IT delivery teams are expected to reference those IDs in their own delivery artifacts to maintain the traceability chain from business need to delivered capability. IT determines how they implement that reference in their own Jira project. This team's responsibility is to produce clear, well-structured BRDs with stable requirement IDs and to share them with IT before delivery begins.
        </p>
      </div>

      <div className="co co-amber">
        <div className="co-title" style={{ color: '#8a5a00' }}>⚑ IT Traceability — Expectation, Not Yet Formalized</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5a3a00' }}>IT delivery teams are expected to trace their delivery work back to BRD requirement IDs. The specific mechanism is IT's responsibility to define and implement in their own tooling. Formal confirmation of the approach is pending.</p>
      </div>

      <div className="card mb20">
        <span className="lbl">Legend</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[['lb-c','Confirmed','Active & required now'],['lb-p','Phase 2','Planned, tools not yet active'],['lb-g','Expectation','Expected, not yet formalized']].map(([cls, label, desc]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className={`lb ${cls}`}>{label}</span>
              <span style={{ fontSize: 12 }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <TraceGroup header="Internal Jira Links — Task to Epic" rows={INTERNAL_JIRA} />
      <TraceGroup header="BRD Links — Requirements to Enterprise Tools" rows={BRD_LINKS} />
      <TraceGroup header="IT Delivery Links — Back to BRD Requirement IDs (Expectation)" headerClass="tr-hdr-it" rows={IT_LINKS} />

      <div className="sdiv">What Breaks Without Traceability</div>
      <div className="g2">
        <div className="card ln-red">
          <strong style={{ color: '#8a2020' }}>If BRD requirement IDs are missing or unstable</strong>
          <ul style={{ fontSize: 13, marginTop: 8, paddingLeft: 16, lineHeight: 1.8 }}>
            <li>IT has no reliable anchor to trace their work back to</li>
            <li>Business rules get reinvented or ignored</li>
            <li>UAT has no documented basis — what are we testing against?</li>
            <li>Audits have no traceable requirements chain</li>
          </ul>
        </div>
        <div className="card ln-amber">
          <strong style={{ color: '#8a5a00' }}>If IT does not reference BRD IDs</strong>
          <ul style={{ fontSize: 13, marginTop: 8, paddingLeft: 16, lineHeight: 1.8 }}>
            <li>IT can deliver features with no verifiable business justification</li>
            <li>TAP cannot confirm requirements were implemented correctly</li>
            <li>Defects cannot be traced back to the requirement that failed</li>
            <li>TAP loses its seat at the table during delivery reviews</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
