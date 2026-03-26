import { useState } from 'react'
import BRDFull from '../components/standards/BRDFull'
import BRDStreamlined from '../components/standards/BRDStreamlined'
import ProcessDocs from '../components/standards/ProcessDocs'
import BusinessRules from '../components/standards/BusinessRules'
import Reports from '../components/standards/Reports'
import OpControls from '../components/standards/OpControls'

const TABS = [
  { id: 'brd-full',       label: 'BRD — Full' },
  { id: 'brd-streamlined',label: 'BRD — Streamlined' },
  { id: 'process',        label: 'Process Docs' },
  { id: 'rules',          label: 'Business Rules' },
  { id: 'reports',        label: 'Reports' },
  { id: 'controls',       label: 'Op. Controls' },
]

export default function Standards() {
  const [active, setActive] = useState('brd-full')

  return (
    <div>
      <div className="section-title">Deliverable Standards</div>
      <div className="section-sub">Guidance for what goes into each deliverable — structure, content, writing examples, quality expectations, and traceability requirements</div>

      <div className="std-nav">
        {TABS.map(t => (
          <button key={t.id} className={`snb${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {active === 'brd-full'        && <BRDFull />}
      {active === 'brd-streamlined' && <BRDStreamlined />}
      {active === 'process'         && <ProcessDocs />}
      {active === 'rules'           && <BusinessRules />}
      {active === 'reports'         && <Reports />}
      {active === 'controls'        && <OpControls />}
    </div>
  )
}
