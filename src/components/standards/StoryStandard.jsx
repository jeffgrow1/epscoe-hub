function FR({ name, badge, badgeCls = 'bdg-navy', desc, ft, fg, children }) {
  return (
    <div className="fr">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="fn" dangerouslySetInnerHTML={{ __html: name }} />
        <span className={`bdg ${badgeCls}`}>{badge}</span>
      </div>
      {desc && <div className="fd">{desc}</div>}
      {children}
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

export default function StoryStandard() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>Purpose of a DPT Business Story</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>A business story captures a discrete business need at functional level. IT product owners read these and translate them into delivery-ready stories. Make the business need unambiguous — not the solution. Ask yourself: does this describe what the business needs to be able to do, or how a system will do it? If a sentence starts with "The system shall...", "The API will...", or "The UI should..." — rewrite it from the business perspective.</p>
      </div>

      <div className="sdiv">Story Format</div>
      <div className="card mb20">
        <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 6 }}>User Story Statement</div>
        <div className="acf">
          As a [business role or persona],<br />
          I want [the capability or ability],<br />
          So that [the business outcome or value].
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.6, color: '#5a6a8a', marginTop: 8 }}>Named business role only. All three parts required. "The user" is not acceptable.</p>
      </div>

      <div className="sdiv">Fields &amp; Guidance</div>
      <div className="card mb20">
        <FR name="Story Title" badge="Required" desc="A short, plain-language label for the Jira item." fg='Example: "Daily Settlement Report Access"' />
        <FR name="User Story Statement" badge="Required" desc="The full As a / I want / So that statement. All three parts required." />
        <FR
          name="Business Acceptance Criteria"
          badge="Required"
          desc="A numbered list of conditions that must be true from the business perspective when this story is done. These are the happy-path conditions — what the business can do or see when everything works as expected. Below the numbered list, add a short notes section for extension paths or areas of risk."
          ft="⇌ IT will use these conditions to write their own test cases. Business Consultant confirms coverage before UAT begins."
        >
          <div style={{ marginTop: 10, padding: '10px 14px', background: '#f4f5f7', borderRadius: 6, border: '1px solid #dde2ed' }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#8a96b0', marginBottom: 8 }}>Writing Tips</div>
            <div style={{ fontSize: 12, lineHeight: 1.8, color: '#5a6a8a' }}>
              • One condition per line — do not bundle multiple scenarios<br />
              • Write what the business can do or see, not what the system does<br />
              • Keep ACs to the happy path; note extension paths and risks below the list<br />
              • Avoid "system," "database," "API," "field," and "screen"
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#8a96b0', marginTop: 10, marginBottom: 6 }}>Example</div>
            <div style={{ fontSize: 12, lineHeight: 1.8, color: '#5a6a8a' }}>
              <strong>ACs:</strong><br />
              1. The Finance Analyst can view all settled payment transactions from the prior business day, organized by payment channel, without requesting a data extract.<br />
              2. Each transaction shows merchant name, payment channel, transaction amount, settlement amount, settlement date, and currency.<br /><br />
              <strong>Notes / Extension Paths:</strong><br />
              • Risk: settlement file may arrive late on banking holidays — confirm handling with ops team.<br />
              • Edge case: transactions with partial settlements — confirm display logic with business stakeholder.
            </div>
          </div>
        </FR>
        <FR name="Assumptions &amp; Open Questions" badge="Optional / Must resolve before refinement" badgeCls="bdg-gray" desc="Use this field for both. List assumptions — things believed to be true during elaboration that should be validated before IT begins translation. List open questions separately below assumptions. All open questions must be resolved before this story can be marked refinement-ready." />
        <FR
          name="Linked"
          badge="Required"
          desc="All cross-references for this story go here."
        >
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['#1a3f7a', 'Parent Epic', 'Required', 'Link to the parent DPT business epic using the Jira parent/child link. No epic link = not refinement-ready.'],
              ['#aab8cc', 'IT Delivery Story', 'IT Adds', 'IT is expected to link their delivery story back to this business story using "is implemented by" or "relates to." This is how traceability is maintained through delivery and into UAT. Business Consultant confirms this link exists at refinement before approving for sprint.'],
              ['#aab8cc', 'Business Rules', 'Optional', 'Any rules governing behavior in this story. Include the Airtable Rule ID where available.'],
              ['#aab8cc', 'Process Reference / Related Items', 'Optional', 'iGrafx process map references, or related Jira stories and tasks.'],
            ].map(([color, label, badge, desc]) => (
              <div key={label} style={{ padding: '8px 12px', background: '#f4f5f7', borderRadius: 5, borderLeft: `3px solid ${color}`, fontSize: 12 }}>
                <strong style={{ color: '#0a1628' }}>{label}</strong>{' '}
                <span style={{ fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '.05em', marginLeft: 4 }}>{badge}</span>{' '}
                — <span className="muted">{desc}</span>
              </div>
            ))}
          </div>
        </FR>
      </div>

      <div className="sdiv">Quality Checklist</div>
      <div className="card">
        <CLI ok>Story title is a short, plain-language label — no leading role name</CLI>
        <CLI ok>User story statement follows As a / I want / So that with a named business role</CLI>
        <CLI ok>ACs are plain-language happy-path conditions a stakeholder can confirm without technical help</CLI>
        <CLI ok>No AC contains "system," "database," "API," "screen," or "field"</CLI>
        <CLI ok>Extension paths and areas of risk noted below the AC list where relevant</CLI>
        <CLI ok>All open questions resolved before moving to refinement-ready</CLI>
        <CLI ok>Story describes a discrete, independently understandable business need</CLI>
        <CLI>Traceability: Linked to a parent DPT epic</CLI>
        <CLI>Traceability: IT delivery story linked back to this story before sprint commitment</CLI>
      </div>
    </div>
  )
}
