import { useState, useRef } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import RichNoteEditor from '../components/RichNoteEditor'

const DEFAULT_PHASES = [
  {
    phase: 'Phase 1', title: 'Foundation & Standards', active: true,
    steps: [
      'Confirm DIGPAY project scope with IT/Jira admin',
      'Stand up 3 active boards: Epics, TAP Tasks, FLOW Tasks',
      'Define epic naming conventions and workflow statuses',
      'Work with TAP team members to review existing DIGPAY items and clean up — archive stale work, re-categorize to correct boards',
      'Finalize full BRD template and publish to hub',
      'Finalize streamlined BRD template and publish to hub',
      'Define BRD requirement ID convention',
      'Communicate BRD standards and process to TAP team',
      'Share governance model and IT engagement expectations with IT delivery team leads',
      'Communicate BRD traceability expectations to IT product owner leads — IT to define their own mechanism for referencing BRD requirement IDs',
      'Initiate Airtable governance conversation with Lexie Hicklin',
      'Confirm FLOW team analyst focus areas and update hub',
      'Pilot first BRD with a real effort (Joseph Holmes / OB1 Claims Payments)',
    ],
  },
  {
    phase: 'Phase 2a', title: 'Process Documentation (iGrafx)', active: false,
    steps: [
      'Identify iGrafx admin contact and onboarding path',
      'Define iGrafx folder/library structure for Digital Payments',
      'Walk team through BPMN basics reference card and process standards',
      'Run first discovery session on a priority payment process',
      'Build and validate current state map with business stakeholders',
      'Identify and annotate pain points on the current state map',
      'Pilot future state map for one process based on validated requirements',
    ],
  },
  {
    phase: 'Phase 2b', title: 'Business Rules Standard (Airtable)', active: false,
    steps: [
      'Complete Airtable governance setup with Lexie Hicklin',
      'Define team write/maintain access to payments rules in Airtable',
      'Establish Rule ID convention (BR-[Domain]-[###])',
      'Draft business rules standard documentation',
      'Inventory existing payments rules in Airtable and confirm ownership',
      'Retroactively link existing Jira stories to Airtable rule records',
    ],
  },
  {
    phase: 'Phase 2c', title: 'Controls Standard (GRC Tool)', active: false,
    steps: [
      'Confirm name of enterprise GRC tool',
      'Connect with the department that owns the GRC tool and controls domain',
      'Inventory existing payments-related controls',
      'Define engagement model — direct access vs. supported through owning department',
      'Define how this team attests to and supports payments controls',
      'Document operational controls standard once approach is confirmed',
    ],
  },
  {
    phase: 'Phase 3', title: 'Governance Operationalization', active: false,
    steps: [
      'Socialize IT Delivery Governance Standard with all IT delivery team leads',
      'Define sprint capacity reservation percentages per IT delivery team',
      'Define Change Request template, routing, and SLA',
      'Define shoulder check format and scheduling with each IT delivery team',
      'Define formal IT Jira traceability enforcement mechanism',
      'Align reporting cadence and format with Lexie Hicklin',
      'Publish final governance model and working agreements',
      'Schedule first governance review checkpoint (30 days post-launch)',
    ],
  },
]

const STATUS_CYCLE = ['', 'ip', 'done']
const STATUS_LABELS = { '': '○ Not Started', 'ip': '▶ In Progress', 'done': '✓ Done' }
const STATUS_CLASS  = { '': 'rm-ns', 'ip': 'rm-ip', 'done': 'rm-done' }

function TaskRow({ step, status, note, onStatusChange, onNoteChange, onMove, onRemove, isFirst, isLast }) {
  const [open, setOpen] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const cycleStatus = () => {
    const idx = STATUS_CYCLE.indexOf(status)
    onStatusChange(STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length])
  }

  return (
    <div className="cbrow-wrap">
      <div className="cbrow">
        <button className={`rm-status ${STATUS_CLASS[status]}`} onClick={cycleStatus}>
          {STATUS_LABELS[status]}
        </button>
        <span style={{ fontSize: 13, lineHeight: 1.4, flex: 1, textDecoration: status === 'done' ? 'line-through' : 'none' }}>
          {step}
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginRight: 2 }}>
          <button className="rm-mv" onClick={() => onMove('up')}  disabled={isFirst} title="Move up">▲</button>
          <button className="rm-mv" onClick={() => onMove('down')} disabled={isLast}  title="Move down">▼</button>
        </div>
        <button className="rm-expand" onClick={() => setOpen(o => !o)} title="Notes">
          {open ? '▲' : '▼'}
        </button>
        {!showConfirm ? (
          <button className="rm-del" onClick={() => setShowConfirm(true)} title="Remove">✕</button>
        ) : (
          <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <button onClick={onRemove} style={{ padding: '1px 7px', background: '#8a2020', color: '#fff', border: 'none', borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>Remove</button>
            <button onClick={() => setShowConfirm(false)} style={{ padding: '1px 7px', background: '#f0f2f6', color: '#5a6a8a', border: 'none', borderRadius: 3, fontSize: 11, cursor: 'pointer' }}>Cancel</button>
          </span>
        )}
      </div>
      {open && (
        <div className="rm-note-panel open" style={{ paddingLeft: 0 }}>
          <RichNoteEditor
            value={note || ''}
            onChange={onNoteChange}
            placeholder="Add notes, updates, or context for this task..."
          />
        </div>
      )}
    </div>
  )
}

export default function Roadmap() {
  const [phases, setPhases] = useLocalStorage('eps-rm-phases', DEFAULT_PHASES)
  const [statuses, setStatuses] = useLocalStorage('eps-rm-statuses', {})
  const [notes, setNotes] = useLocalStorage('eps-rm-notes', {})
  const addRefs = useRef({})

  const key = (phase, si) => `${phase}::${si}`

  const getStatus = (phase, si) => statuses[key(phase, si)] || ''
  const setStatus = (phase, si, val) => setStatuses(s => ({ ...s, [key(phase, si)]: val }))

  const getNote = (phase, si) => notes[key(phase, si)] || ''
  const setNote = (phase, si, val) => setNotes(n => ({ ...n, [key(phase, si)]: val }))

  const swapData = (phase, a, b) => {
    const sa = getStatus(phase, a), sb = getStatus(phase, b)
    const na = getNote(phase, a),   nb = getNote(phase, b)
    setStatuses(s => ({ ...s, [key(phase, a)]: sb, [key(phase, b)]: sa }))
    setNotes(n => ({ ...n, [key(phase, a)]: nb, [key(phase, b)]: na }))
  }

  const moveTask = (pi, si, dir) => {
    const target = dir === 'up' ? si - 1 : si + 1
    const p = phases[pi]
    if (target < 0 || target >= p.steps.length) return
    const newSteps = [...p.steps]
    ;[newSteps[si], newSteps[target]] = [newSteps[target], newSteps[si]]
    swapData(p.phase, si, target)
    setPhases(ph => ph.map((phase, i) => i === pi ? { ...phase, steps: newSteps } : phase))
  }

  const removeTask = (pi, si) => {
    const p = phases[pi]
    const total = p.steps.length
    // shift data down
    for (let i = si; i < total - 1; i++) {
      setStatuses(s => ({ ...s, [key(p.phase, i)]: s[key(p.phase, i + 1)] || '' }))
      setNotes(n => ({ ...n, [key(p.phase, i)]: n[key(p.phase, i + 1)] || '' }))
    }
    setPhases(ph => ph.map((phase, i) => i === pi ? { ...phase, steps: phase.steps.filter((_, si2) => si2 !== si) } : phase))
  }

  const addTask = (pi) => {
    const input = addRefs.current[pi]
    if (!input) return
    const val = input.value.trim()
    if (!val) return
    setPhases(ph => ph.map((phase, i) => i === pi ? { ...phase, steps: [...phase.steps, val] } : phase))
    input.value = ''
    input.focus()
  }

  return (
    <div>
      <div className="section-title">Setup Roadmap &amp; Checklist</div>
      <div className="section-sub">Click a status to cycle: Not Started → In Progress → Done. Use ▲▼ to reorder. Click ▼ to expand notes per task.</div>

      {phases.map((p, pi) => (
        <div key={p.phase} className="card" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div>
              <span className="dim" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', marginRight: 10 }}>{p.phase}</span>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{p.title}</span>
            </div>
            <span className={`bdg ${p.active ? 'bdg-green' : 'bdg-navy'}`}>{p.active ? 'Active' : 'Planned'}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {p.steps.map((step, si) => (
              <TaskRow
                key={`${pi}-${si}`}
                step={step}
                status={getStatus(p.phase, si)}
                note={getNote(p.phase, si)}
                onStatusChange={val => setStatus(p.phase, si, val)}
                onNoteChange={val => setNote(p.phase, si, val)}
                onMove={dir => moveTask(pi, si, dir)}
                onRemove={() => removeTask(pi, si)}
                isFirst={si === 0}
                isLast={si === p.steps.length - 1}
              />
            ))}
          </div>
          <div className="rm-add-row">
            <input
              ref={el => addRefs.current[pi] = el}
              className="rm-add-input"
              type="text"
              placeholder={`Add a task to ${p.title}...`}
              onKeyDown={e => e.key === 'Enter' && addTask(pi)}
            />
            <button className="rm-add-btn" onClick={() => addTask(pi)}>+ Add Task</button>
          </div>
        </div>
      ))}
    </div>
  )
}
