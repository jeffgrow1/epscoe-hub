import { useState } from 'react'

function GovSection({ num, title, children }) {
  return (
    <div className="gov-section">
      <div className="gov-section-header">
        <span className="gov-num">{num}</span>
        <span className="gov-title">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

function GP({ children }) {
  return (
    <div className="gp">
      <span className="gbl">•</span>
      <span>{children}</span>
    </div>
  )
}

function GNote({ children }) {
  return <div className="gnote">{children}</div>
}

function ITEngagement() {
  return (
    <div>
      <div className="section-title" style={{ fontSize: 18, marginBottom: 6 }}>Consultant Engagement with IT Delivery</div>
      <p className="muted" style={{ fontSize: 13, marginBottom: 20 }}>How Business Consultants engage directly with IT delivery teams for DPT and other program-funded work</p>

      <div className="co co-navy" style={{ marginBottom: 24 }}>
        <div className="co-title" style={{ color: '#1a3f7a' }}>About This Standard</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#2a3a5a' }}>This standard defines when and how Business Consultants engage with IT delivery teams throughout the delivery lifecycle. The Business Consultant is the single decision authority for scope, priority, and acceptance — while IT retains responsibility for technical execution within those boundaries.</p>
      </div>

      {/* Delivery Flow Diagram */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: '#0a1628', borderBottom: '2px solid #dde2ed', paddingBottom: 8, marginBottom: 14 }}>How It All Connects</div>
        <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.7, marginBottom: 16 }}>The Business Consultant is present at every critical decision point in the delivery lifecycle — from writing the business requirement through authorizing the release.</p>
        <div style={{ display: 'flex', alignItems: 'flex-start', overflowX: 'auto', gap: 0, padding: '4px 0' }}>
          {[
            ['#1a3f7a', '#e8eef8', '◎', 'BRD Requirements', 'TAP writes & owns'],
            ['#1a3f7a', '#e8eef8', '◎', 'BRD Req IDs', 'IT references these'],
            ['#4a90d9', '#eaf2fb', '⊞', 'IT Refinement', 'BC approves & attends'],
            ['#4a90d9', '#eaf2fb', '⬢', 'IT Delivery', 'Shoulder checks'],
            ['#b87a00', '#fdf4e3', '✓', 'UAT', 'BC owns & signs off'],
            ['#1a7a45', '#e8f5ee', '◆', 'Release', 'BC authorizes'],
          ].map(([borderColor, bg, icon, label, sub], i, arr) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', minWidth: 100 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: bg, border: `2px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontSize: 18, color: borderColor }}>{icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: borderColor }}>{label}</div>
                <div style={{ fontSize: 11, color: '#8a96b0', marginTop: 2 }}>{sub}</div>
              </div>
              {i < arr.length - 1 && <div style={{ padding: '0 4px', color: '#aab8cc', fontSize: 20, marginTop: -16 }}>→</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="sdiv">Direct Engagement Touch Points</div>
      <div className="card mb20" style={{ borderLeft: '3px solid #1a3f7a' }}>
        <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 12 }}>Business Consultants engage directly with IT delivery teams at each of the following points. Outside of these touch points, IT executes independently within the boundaries set by the business epic and stories.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            ['BRD handoff and review', 'Business Consultant shares the finalized BRD with IT before delivery begins. IT creates their delivery artifacts referencing the BRD requirement IDs — they do not modify or co-own the BRD.'],
            ['IT refinement sessions', 'Business Consultant participates in IT refinement sessions to clarify BRD requirements, answer questions, and confirm IT\'s understanding of the business need before sprint commitment.'],
            ['Sprint planning', 'Business Consultant is included when program-funded work is being planned or committed so they can confirm priority, sequencing, and alignment to the BRD.'],
            ['Shoulder check', 'A mid-sprint review where the Business Consultant confirms work in progress aligns to the BRD requirements before development is complete. Required as part of the Definition of Done.'],
            ['Sprint review / demo', 'Business Consultant attends sprint reviews to validate completed work against BRD requirements. This is distinct from formal UAT — it is an early signal of alignment or concern.'],
            ['UAT coordination and sign-off', 'Business Consultant leads UAT coordination, confirms AC coverage before testing begins, and provides formal sign-off before release. See UAT Governance for full detail.'],
            ['Change requests', 'Any change to approved scope, sequencing, or milestones is reviewed and decided by the Business Consultant before IT acts on it.'],
            ['Status escalations', 'IT teams escalate variances to scope, capacity, or timeline to the Business Consultant promptly. The Business Consultant is the decision point, not a passive recipient of status updates.'],
          ].map(([label, desc], i) => (
            <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '8px 10px', background: '#f4f5f7', borderRadius: 5 }}>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#1a3f7a', minWidth: 20 }}>{i + 1}.</span>
              <div><strong style={{ fontSize: 13, color: '#0a1628' }}>{label}</strong> — <span style={{ fontSize: 13, color: '#5a6a8a' }}>{desc}</span></div>
            </div>
          ))}
        </div>
      </div>

      <GovSection num="01" title="Business Consultant Role and Authority">
        <GP>The Business Consultant represents both the business and the program for all program-funded work, serving as the single point of accountability for business requirements and acceptance.</GP>
        <GP>Owns scope, priority, and sequencing aligned to the program roadmap and funded commitments. These cannot be changed without Business Consultant approval.</GP>
        <GP>Authors and owns the BRD. IT delivery teams create their own delivery artifacts which reference the BRD requirement IDs — they do not modify or co-own the BRD. The BRD is the requirements anchor; IT's Jira epics and stories are the execution container.</GP>
        <GP>Serves as the single decision and approval authority for program-funded work from requirements through acceptance. IT product owners translate BRD requirements into delivery artifacts and execute; Business Consultants decide and accept.</GP>
      </GovSection>

      <GovSection num="02" title="Business Engagement">
        <GP>All business direction for program-funded work flows through the Business Consultant. Business stakeholders engage with the Business Consultant — not directly with IT delivery teams — on matters of scope, priority, or requirements.</GP>
        <GP>Application team BRMs, BRMCs, or equivalent roles do not independently engage business partners on program scope or priorities. Any such engagement must be coordinated through the Business Consultant.</GP>
        <GNote>This protects the integrity of requirements and prevents conflicting direction from reaching IT delivery teams.</GNote>
      </GovSection>

      <GovSection num="03" title="Backlog and Requirements Governance">
        <GP>No IT delivery work proceeds without a finalized BRD that covers the scope being built. IT delivery work with no traceable BRD requirement ID is not eligible for sprint commitment.</GP>
        <GP>Business Consultant finalizes and shares the BRD before IT begins elaboration. Approval confirms the business requirements are complete and accurate — not that IT's technical approach is validated.</GP>
        <GP>IT's interpretation of BRD requirements requires Business Consultant confirmation prior to sprint commitment. Confirmation ensures IT's understanding aligns to the documented business need.</GP>
        <GP>IT product owners are responsible for ensuring their delivery artifacts reference the correct BRD requirement IDs before presenting work for Business Consultant review.</GP>
      </GovSection>

      <GovSection num="04" title="Planning and Prioritization">
        <GP>Priority and sequencing of all program-linked backlog items is set by the Business Consultant. IT delivery teams execute within these parameters.</GP>
        <GP>Program-funded work may not be deprioritized or displaced from the sprint without Business Consultant approval.</GP>
        <GP>A defined amount of sprint capacity is reserved for program-funded work. The specific percentage is agreed per IT delivery team and documented in the team working agreement.</GP>
        <GP>The Business Consultant is included in all team ceremonies where program work is planned, committed, reviewed, or reprioritized.</GP>
      </GovSection>

      <GovSection num="05" title="Scope and Change Control">
        <GP>Any change to approved scope, sequencing, or committed milestones requires a formal Change Request covering additions, removals, and modifications.</GP>
        <GP>Change Requests must include impact to timeline, capacity, and dependencies.</GP>
        <GP>Business Consultant approval is required before any change is implemented. Changes implemented without approval are out of scope and will not be accepted at UAT.</GP>
        <GNote>Change Request template, routing, and SLA to be defined and published as a companion document.</GNote>
      </GovSection>

      <GovSection num="06" title="Completion and Acceptance">
        <GP>Shoulder checks are required at the requirement level as part of the Definition of Done. A shoulder check is a mid-development review where the Business Consultant confirms work in progress aligns to the BRD requirements.</GP>
        <GP>Business Consultant sign-off is required for story completion. A story is not eligible for Done status without Business Consultant acceptance.</GP>
        <GP>The business requirement — not the technical implementation — defines done.</GP>
        <GNote>Shoulder check format and scheduling to be agreed upon as a working agreement with each IT delivery team.</GNote>
      </GovSection>

      <GovSection num="07" title="Progress Reporting">
        <GP>Application teams provide milestone, PI, epic, and story-level status aligned to the program reporting cadence. Status is maintained in Jira and reflects current reality.</GP>
        <GP>Variances to committed scope, priority, capacity, or timeline must be escalated to the Business Consultant promptly — not held until the next ceremony.</GP>
        <GP>The Business Consultant compiles program-level reporting from IT team inputs and represents program status to leadership.</GP>
        <GNote>Reporting cadence and format to be aligned with Lexie Hicklin and the program reporting structure.</GNote>
      </GovSection>

      <div className="card ln-amber" style={{ marginTop: 24 }}>
        <span className="lbl">Open Items — To Be Defined</span>
        {['Change Request template, routing, and SLA', 'Sprint capacity reservation percentage — to be agreed per IT delivery team', 'Shoulder check format and scheduling', 'Jira enforcement mechanism for IT traceability link requirement', 'Reporting cadence and format — alignment with Lexie Hicklin'].map((item, i, arr) => (
          <div key={item} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid #dde2ed' : 'none' }}>
            <span style={{ color: '#b87a00', fontWeight: 700, minWidth: 20 }}>?</span>
            <span style={{ fontSize: 13 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function UATGov() {
  return (
    <div>
      <div className="section-title" style={{ fontSize: 18, marginBottom: 6 }}>UAT Governance</div>
      <p className="muted" style={{ fontSize: 13, marginBottom: 20 }}>How the team plans, coordinates, executes, and signs off on User Acceptance Testing</p>
      <div className="co co-navy mb20"><div className="co-title" style={{ color: '#1a3f7a' }}>About This Standard</div><p style={{ fontSize: 13, lineHeight: 1.6, color: '#2a3a5a' }}>The Business Consultant owns UAT. This is not a shared responsibility — IT prepares the environment and provides test data, but the Business Consultant owns the test plan, coordinates testers, manages defects from a business perspective, and signs off on release. UAT is the final business confirmation that the delivered capability meets the requirements before it reaches production.</p></div>
      {[
        ['01','Scope and Entry Criteria', [
          'UAT is required for all DPT program-funded stories before they can be promoted to production.',
          'Entry criteria: all BRD requirements confirmed as in scope by IT, test environment ready, test data confirmed, and IT delivery artifacts traceable to BRD requirement IDs.',
          'Business Consultant confirms entry criteria are met before scheduling UAT sessions.',
        ], 'UAT does not begin until entry criteria are confirmed. A story that has not met entry criteria is returned to IT with documented gaps.'],
        ['02','UAT Planning', [
          'Business Consultant drafts the UAT test plan based on the business story\'s acceptance criteria. Each AC must have at least one test case.',
          'Business stakeholders who will act as testers are identified per story. Testers should be the actual consumers of the capability being tested.',
          'UAT schedule is coordinated with the IT delivery team and communicated at least one sprint in advance.',
        ]],
        ['03','UAT Execution', [
          'Testers execute test cases and document pass/fail results against each AC.',
          'The Business Consultant monitors execution progress and provides real-time guidance to testers.',
          'All test results are documented — not communicated verbally only.',
        ]],
        ['04','Defect Management', [
          'Defects are logged in Jira and linked to the business story whose requirements were not met.',
          'Defects are classified by severity: Critical (blocks sign-off), Major (must be resolved before release), Minor (can be deferred).',
          'The Business Consultant determines defect severity from the business perspective. IT does not unilaterally reclassify business-assigned severity.',
          'Critical and Major defects are resolved before UAT sign-off. Minor defects require documented acceptance by the Business Consultant.',
        ], 'Defect severity from a business perspective may differ from IT\'s technical severity assessment. Both perspectives are documented.'],
        ['05','UAT Sign-Off', [
          'UAT sign-off is provided by the Business Consultant in writing — email or documented Jira comment is acceptable.',
          'Sign-off confirms the delivered capability meets the business requirements documented in the TAP story.',
          'No story may be promoted to production without Business Consultant sign-off.',
          'If sign-off cannot be provided, the Business Consultant documents the specific gaps that must be resolved.',
        ]],
      ].map(([num, title, bullets, note]) => (
        <GovSection key={num} num={num} title={title}>
          {bullets.map((b, i) => <GP key={i}>{b}</GP>)}
          {note && <GNote>{note}</GNote>}
        </GovSection>
      ))}
    </div>
  )
}

function IntakeGov() {
  return (
    <div>
      <div className="section-title" style={{ fontSize: 18, marginBottom: 6 }}>Request &amp; Issue Intake</div>
      <p className="muted" style={{ fontSize: 13, marginBottom: 20 }}>How requests and issues from business users and stakeholders are received, triaged, routed, assigned, and tracked</p>
      <div className="co co-navy mb20"><div className="co-title" style={{ color: '#1a3f7a' }}>About This Standard</div><p style={{ fontSize: 13, lineHeight: 1.6, color: '#2a3a5a' }}>This standard applies to both TAP and FLOW depending on request type. TAP receives requests related to business requirements, DPT scope, and IT engagement. FLOW receives requests related to payment operations, exceptions, and run-the-business activities. All requests follow the same intake, triage, assignment, and completion process.</p></div>

      <div className="sdiv">Request Routing Table</div>
      <div className="card mb20">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: '#0a1628', color: '#fff' }}>
                {['Request Type', 'Goes To', 'Jira Board', 'Notes'].map(h => <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['New DPT business requirement', 'TAP Business Consultant', 'DPT Story Board', 'Triaged against program backlog. May become a new story or be added to an existing epic.'],
                ['Change to existing DPT requirement', 'TAP Business Consultant', 'DPT Story Board', 'Follows Change Control process. May require a Change Request if scope-impacting.'],
                ['Operational payment request or issue', 'FLOW Team', 'FLOW Tasks Board', 'Triaged by FLOW. Escalated to TAP if it surfaces a requirements gap.'],
                ['Cross-team or program request', 'Jeff Grow / TAP Lead', 'TAP Tasks Board', 'Logged as a task. Jeff Grow has oversight on special assignments.'],
              ].map(([type, to, board, note], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #dde2ed', background: i % 2 === 0 ? '#fff' : '#f8f9fc' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600, color: '#0a1628' }}>{type}</td>
                  <td style={{ padding: '10px 12px' }}>{to}</td>
                  <td style={{ padding: '10px 12px' }}><span className="bdg bdg-navy" style={{ fontSize: 10 }}>{board}</span></td>
                  <td style={{ padding: '10px 12px', color: '#5a6a8a' }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {[
        ['01','Intake', ['All requests are logged in Jira before any action is taken. Verbal requests must be captured in Jira within one business day.', 'The requestor provides: what they need, why they need it, and any timing constraints.', 'Intake does not imply commitment. Logging a request means it will be reviewed — not that it will be actioned.']],
        ['02','Triage', ['Triage happens within 2 business days of intake.', 'Triage assigns a priority, confirms the correct team and board, and identifies whether the request can be actioned independently or requires planning.', 'High-priority items are flagged for same-day review by the appropriate team lead.']],
        ['03','Assignment and Scheduling', ['Requests are assigned to a specific team member with a target resolution date.', 'DPT-related requests are assessed against the program backlog before committing. New scope requires Business Consultant approval before entry into the backlog.', 'Operational requests are sized, scheduled, and linked to a parent epic on the relevant tasks board.']],
        ['04','Completion', ['All requests are updated to Done only after the requestor has confirmed the need has been met.', 'For DPT stories, Done requires Business Consultant sign-off.', 'Partial completion is not Done — if part of a request cannot be met, the remaining gap is logged as a new request.']],
        ['05','Tracking and Visibility', ['All open requests are visible in Jira at all times. No shadow tracking in spreadsheets or email.', 'Requestors can ask for status at any time — the Jira item is the status.', 'Monthly review of open requests to identify aging items and resolve or close.']],
      ].map(([num, title, bullets]) => (
        <GovSection key={num} num={num} title={title}>
          {bullets.map((b, i) => <GP key={i}>{b}</GP>)}
        </GovSection>
      ))}
    </div>
  )
}

function Placeholder({ title, desc }) {
  return (
    <div>
      <div className="section-title" style={{ fontSize: 18, marginBottom: 6 }}>{title}</div>
      <div className="co co-gray">
        <div className="co-title" style={{ color: '#4a5a7a' }}>Placeholder</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4a5a7a' }}>{desc}</p>
      </div>
      <div className="card ln-gray">
        <span className="lbl">Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>To Be Defined</div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>This governance area will be developed as the EPS CoE matures. Content will be added here once the approach has been defined and agreed upon.</p>
      </div>
    </div>
  )
}

const GOV_CARDS = [
  { id: 'itdelivery', icon: '⇌', colorClass: 'tn-navy', linkColor: '#1a3f7a', title: 'Consultant Engagement with IT Delivery', status: 'Defined', statusCls: 'bdg-green', desc: 'How Business Consultants engage directly with IT delivery teams — touch points, authority, backlog governance, planning, change control, and progress reporting.' },
  { id: 'uat',        icon: '✓', colorClass: 'tn-teal', linkColor: '#0d6e63', title: 'UAT Governance',              status: 'Defined', statusCls: 'bdg-green', desc: 'How the team plans, coordinates, executes, and signs off on User Acceptance Testing. Covers scope, entry criteria, execution, defect management, and sign-off authority.' },
  { id: 'intake',     icon: '⊞', colorClass: 'tn-blue', linkColor: '#1a6ab8', title: 'Request & Issue Intake',     status: 'Defined', statusCls: 'bdg-green', desc: 'How requests and issues from business users and stakeholders are received, triaged, routed, assigned, and tracked to completion.' },
  { id: 'internal',   icon: '◆', colorClass: 'tn-gray', linkColor: '#4a5a7a', title: 'Internal Team Governance',  status: 'Placeholder', statusCls: 'bdg-gray', desc: 'How the EPS CoE team operates internally — team ceremonies, decision-making, standards review cadence, onboarding, and knowledge management.' },
  { id: 'ops',        icon: '⬡', colorClass: 'tn-gray', linkColor: '#4a5a7a', title: 'Operational Process Support Governance', status: 'Placeholder', statusCls: 'bdg-gray', desc: 'How the team supports ongoing payment operations processes — including process documentation ownership, change notification, and operational escalation paths.' },
  { id: 'other',      icon: '◈', colorClass: 'tn-gray', linkColor: '#4a5a7a', title: 'Additional Governance Areas', status: 'Placeholder', statusCls: 'bdg-gray', desc: 'Other governance frameworks to be defined as the EPS CoE matures. Areas may include controls governance, tools governance, and cross-team standards management.' },
]

const PLACEHOLDER_DESCS = {
  internal: 'How the EPS CoE team operates internally — team ceremonies, decision-making, standards review cadence, onboarding, and knowledge management. To be defined as the team operating rhythm is established.',
  ops: 'How the team supports ongoing payment operations processes — including process documentation ownership, change notification, and operational escalation paths. To be defined during Phase 2 tooling setup.',
  other: 'Other governance frameworks to be defined as the EPS CoE matures. Areas may include controls governance, tools governance, and cross-team standards management.',
}

export default function Governance() {
  const [active, setActive] = useState(null)

  if (active) {
    const card = GOV_CARDS.find(c => c.id === active)
    return (
      <div>
        <div className="section-title">Governance</div>
        <div className="section-sub">Standards and frameworks that define how the EPS CoE team operates, engages stakeholders, and delivers work</div>
        <button className="back-btn" onClick={() => setActive(null)}>← Back to Governance</button>
        {active === 'itdelivery' && <ITEngagement />}
        {active === 'uat'        && <UATGov />}
        {active === 'intake'     && <IntakeGov />}
        {['internal', 'ops', 'other'].includes(active) && (
          <Placeholder title={card.title} desc={PLACEHOLDER_DESCS[active]} />
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="section-title">Governance</div>
      <div className="section-sub">Standards and frameworks that define how the EPS CoE team operates, engages stakeholders, and delivers work</div>
      <div className="g2">
        {GOV_CARDS.map(card => (
          <div key={card.id} className={`bc ${card.colorClass}`} onClick={() => setActive(card.id)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#0a1628' }}>{card.title}</div>
              <span className={`bdg ${card.statusCls}`} style={{ flexShrink: 0, marginLeft: 8 }}>{card.status}</span>
            </div>
            <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.5, marginBottom: 12 }}>{card.desc}</p>
            <div style={{ fontSize: 12, color: card.linkColor, fontWeight: 600 }}>Click to view →</div>
          </div>
        ))}
      </div>
    </div>
  )
}
