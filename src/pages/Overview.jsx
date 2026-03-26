import { useEdit } from '../context/EditContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import InlineEdit from '../components/InlineEdit'

const DEFAULT_CONTENT = {
  whyTitle: 'Why This Exists',
  why1: 'The Digital Payments organization has two strong, capable teams — TAP and FLOW — doing skilled, important work. This initiative is about building on that strength. With a shared operating model — a consistent way of writing requirements, organizing work, engaging with IT, and managing requests — both teams can deliver at an even higher level: more consistently, more visibly, and in a way that clearly demonstrates the value they bring.',
  why2: 'This initiative establishes that operating model. It is not a reorganization. It does not change what either team does. It gives both teams a common structure, shared standards, and clear rules of engagement — so that the work they already do is more consistent, more visible, and more defensible.',
}

export default function Overview() {
  const { editMode } = useEdit()
  const [content, setContent] = useLocalStorage('eps-overview-content', DEFAULT_CONTENT)

  const update = (key) => (val) => setContent(c => ({ ...c, [key]: val }))

  return (
    <div>
      <div className="section-title">EPS CoE — Initiative Overview</div>
      <div className="section-sub">Enterprise Payment Systems · Digital Payments · Director: Stacey Etsuko Bocci</div>

      {/* WHY */}
      <div className="card mb20 ln-navy">
        <span className="lbl">
          <InlineEdit value={content.whyTitle} onChange={update('whyTitle')} tag="span" multiline={false} />
        </span>
        <InlineEdit value={content.why1} onChange={update('why1')} tag="p" style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 12 }} />
        <InlineEdit value={content.why2} onChange={update('why2')} tag="p" style={{ fontSize: 15, lineHeight: 1.8 }} />
        {editMode && (
          <div style={{ marginTop: 10, padding: '6px 10px', background: '#eaf2fb', borderRadius: 4, fontSize: 12, color: '#1a6ab8' }}>
            ✏ Click any text above to edit it
          </div>
        )}
      </div>

      {/* WHAT WE ARE BUILDING */}
      <div className="sdiv">What We Are Building</div>
      <div className="g2m">
        <div className="bc tn-navy">
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: '#1a3f7a' }}>◎ Delivery Standards</div>
          <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 10 }}>A consistent framework for how TAP documents business requirements in BRDs (Business Requirements Documents), and how FLOW documents operational work. Standards cover BRD structure, field-by-field guidance, quality checklists, and writing examples. Every requirement in a BRD carries a unique ID that IT uses to trace their delivery work back to the business need.</p>
        </div>
        <div className="bc tn-blue">
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: '#1a6ab8' }}>⬢ Governance</div>
          <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 10 }}>Clear rules for how the team engages with IT delivery, how UAT is owned and signed off, and how requests and issues from across the organization are received, triaged, assigned, and tracked. Governance is what prevents the team from being a passive order-taker — it establishes the Business Consultant as a decision authority, not just a note-taker.</p>
        </div>
        <div className="bc tn-gray">
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: '#4a5a7a' }}>⊞ Jira Structure</div>
          <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 10 }}>A single Jira project — DIGPAY — with three active boards for task and epic organization, plus an Intake board planned for Phase 2. Jira is the team's work management and task tracking tool. Business requirements live in BRDs, not Jira stories.</p>
        </div>
        <div className="bc tn-dark">
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: '#0a1628' }}>⬡ Tool Ecosystem</div>
          <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 10 }}>Each tool has a defined, non-overlapping purpose. Jira for work tracking. iGrafx for process documentation. Airtable for business rules. GRC tool for operational controls. Cross-tool linking is how traceability is maintained from business requirement through delivery through audit.</p>
        </div>
      </div>

      {/* DELIVERY FLOW */}
      <div className="sdiv">Where We Are Now</div>
      <div className="card mb20">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '12px 0', borderBottom: '1px solid #dde2ed' }}>
          <div style={{ minWidth: 120 }}><span className="bdg bdg-green">Phase 1 — Active</span></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Jira Foundation &amp; Standards</div>
            <div className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>Standing up the DIGPAY project with 3 active boards, publishing BRD standards, establishing the team's operating model, and communicating governance expectations to IT delivery teams.</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '12px 0', borderBottom: '1px solid #dde2ed' }}>
          <div style={{ minWidth: 120 }}><span className="bdg bdg-navy">Phase 2 — Next</span></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Documentation &amp; Tooling</div>
            <div className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>Process documentation in iGrafx, business rules catalog in Airtable (pending governance setup with Lexie Hicklin), and operational controls engagement via GRC tool.</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '12px 0' }}>
          <div style={{ minWidth: 120 }}><span className="bdg bdg-navy">Phase 3 — Later</span></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Governance Operationalization</div>
            <div className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>Formalizing IT engagement working agreements, capacity reservations, change request processes, and reporting cadence with each delivery team.</div>
          </div>
        </div>
      </div>

      {/* WHAT THIS IS NOT */}
      <div className="card ln-gray">
        <span className="lbl">What This Is Not</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
          {[
            ['Not a reorganization.', 'TAP and FLOW remain distinct teams with distinct charters. This is a shared operating model, not a structural change.'],
            ['Not overhead.', "Every standard, governance document, and Jira structure in this hub exists to make the work faster and cleaner — not to add process for its own sake."],
            ['Not finished.', "Phase 1 is active now. Phases 2 and 3 build on it. The goal is a mature, defensible operating model — built incrementally so the team isn't disrupted while delivering."],
          ].map(([bold, rest]) => (
            <div key={bold} style={{ display: 'flex', gap: 10, fontSize: 13, lineHeight: 1.5 }}>
              <span style={{ color: '#8a2020', fontWeight: 700, flexShrink: 0 }}>✗</span>
              <span><strong>{bold}</strong> {rest}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
