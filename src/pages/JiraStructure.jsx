import { useState } from 'react'

const BOARDS = {
  epics: {
    name: 'Epics Board', color: '#0a1628', badge: 'bdg-dark', team: 'TAP & FLOW (Shared)',
    used: 'Both teams, Lexie Hicklin (program visibility)',
    items: ['TAP Operational Work Epics', 'FLOW Operations Epics', 'Epics organize tasks — not requirements'],
    notes: 'Shared board providing a unified cross-team view of all epics in DIGPAY. Epics are used to group and organize task work — not to document business requirements. Requirements live in BRDs.',
  },
  'tap-tasks': {
    name: 'TAP Tasks Board', color: '#1a3f7a', badge: 'bdg-navy', team: 'TAP',
    used: 'TAP Business Consultants',
    items: ['Operational Tasks', 'Cross-org project tasks', 'BRD-related coordination tasks', 'Epics for grouping only'],
    notes: 'Operational and coordination work for the TAP team. Tasks link to a parent epic for organization. Business requirements are documented in BRDs — not in Jira stories on this board.',
  },
  'flow-tasks': {
    name: 'FLOW Tasks Board', color: '#2c4a72', badge: 'bdg-slate', team: 'FLOW',
    used: 'FLOW Team',
    items: ['Operational Tasks', 'Epics for grouping only'],
    notes: 'Operational task board managed by the FLOW team. Chris Shuler has oversight. Tasks are grouped under epics for organizational clarity.',
  },
  intake: {
    name: 'Intake Board', color: '#b87a00', badge: 'bdg-amber', team: 'TAP & FLOW',
    used: 'Both teams — Phase 2/3',
    items: ['Incoming requests from business stakeholders', 'Issues requiring triage and routing', 'Intake items pending assignment'],
    notes: 'Planned board for managing incoming requests and issues from across the organization. Will formalize the intake, triage, and routing process defined in the Request & Issue Intake governance standard. To be rolled out in Phase 2 or 3.',
    future: true,
  },
}

const BOARD_CARDS = [
  { id: 'epics',      topClass: 'tn-dark',  label: 'Epics Board',     badge: 'bdg-dark',  team: 'TAP & FLOW', desc: 'Shared board for epic organization across both teams. Epics group task work — not requirements.' },
  { id: 'tap-tasks',  topClass: 'tn-navy',  label: 'TAP Tasks Board', badge: 'bdg-navy',  team: 'TAP',        desc: 'Operational and coordination work for the TAP team.' },
  { id: 'flow-tasks', topClass: 'tn-slate', label: 'FLOW Tasks Board',badge: 'bdg-slate', team: 'FLOW',       desc: 'Task management board for the FLOW team.' },
  { id: 'intake',     topClass: 'tn-amber', label: 'Intake Board',    badge: 'bdg-amber', team: 'Phase 2/3',  desc: 'Planned board for intake, triage, and routing of incoming requests and issues.', future: true },
]

export default function JiraStructure() {
  const [open, setOpen] = useState(null)
  const toggle = (id) => setOpen(o => o === id ? null : id)

  return (
    <div>
      <div className="section-title">Jira Structure — DIGPAY Project</div>
      <div className="section-sub">Task and epic organization for both teams. Business requirements live in BRDs — not in Jira.</div>

      <div className="co co-navy" style={{ marginBottom: 20 }}>
        <div className="co-title" style={{ color: '#1a3f7a' }}>Important Shift</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#2a3a5a' }}>Business requirements are now documented in BRDs (Business Requirements Documents), not Jira stories. Jira is used by this team for <strong>task and epic organization only</strong>. Epics group task work by theme. IT delivery teams manage their own Jira projects and trace back to BRD requirement IDs independently.</p>
      </div>

      <div className="card mb20" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Project: Digital Payments (DIGPAY)</div>
          <div className="muted" style={{ fontSize: 13, marginTop: 2 }}>3 active boards + 1 planned — task and epic organization only</div>
        </div>
        <span className="bdg bdg-green">3 Active · 1 Planned</span>
      </div>

      <div className="g2m">
        {BOARD_CARDS.map(bc => (
          <div key={bc.id} className={`bc ${bc.topClass}`} onClick={() => toggle(bc.id)}
            style={{ position: 'relative' }}>
            {bc.future && (
              <div style={{ position: 'absolute', top: 10, right: 10 }}>
                <span className="bdg bdg-amber" style={{ fontSize: 10 }}>Planned</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{bc.label}</div>
              <span className={`bdg ${bc.badge}`}>{bc.team}</span>
            </div>
            <div className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>{bc.desc}</div>
            <div className="dim" style={{ fontSize: 11, marginTop: 10 }}>Click to {open === bc.id ? 'collapse ↑' : 'expand ↓'}</div>
          </div>
        ))}
      </div>

      {open && (() => {
        const b = BOARDS[open]
        return (
          <div className="card ln-navy" style={{ marginTop: 4, borderLeftColor: b.color }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>{b.name} — Detail</div>
            <div className="g2" style={{ marginBottom: 14 }}>
              <div style={{ background: '#f4f5f7', borderRadius: 6, padding: '10px 14px', border: '1px solid #dde2ed' }}>
                <div className="lbl-sm" style={{ marginBottom: 6 }}>Item Types</div>
                {b.items.map(item => <div key={item} style={{ fontSize: 13, marginBottom: 3 }}>• {item}</div>)}
              </div>
              <div style={{ background: '#f4f5f7', borderRadius: 6, padding: '10px 14px', border: '1px solid #dde2ed' }}>
                <div className="lbl-sm" style={{ marginBottom: 6 }}>Used By</div>
                <div style={{ fontSize: 13 }}>{b.used}</div>
              </div>
            </div>
            <span className="lbl">Notes</span>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>{b.notes}</p>
          </div>
        )
      })()}
    </div>
  )
}
