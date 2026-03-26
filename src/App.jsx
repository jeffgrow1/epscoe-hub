import { useState } from 'react'
import { EditProvider, useEdit } from './context/EditContext'
import Overview from './pages/Overview'
import Teams from './pages/Teams'
import Standards from './pages/Standards'
import Governance from './pages/Governance'
import JiraStructure from './pages/JiraStructure'
import Tools from './pages/Tools'
import Traceability from './pages/Traceability'
import Roadmap from './pages/Roadmap'

const SECTIONS = [
  { id: 'overview',     label: '◈ Overview' },
  { id: 'teams',        label: 'Teams' },
  { id: 'standards',    label: 'Standards' },
  { id: 'governance',   label: 'Governance' },
  { id: 'jira',         label: 'Jira Structure' },
  { id: 'tools',        label: 'Tools' },
  { id: 'traceability', label: 'Traceability' },
  { id: 'roadmap',      label: 'Roadmap' },
]

function Header({ active }) {
  const { editMode, setEditMode } = useEdit()
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <div className="header-logo">◈</div>
          <div>
            <div className="header-title">EPS CoE Planning Hub</div>
            <div className="header-sub">Enterprise Payment Systems Center of Excellence · Digital Payments</div>
          </div>
        </div>
        <div className="header-badges">
          <span className="bdg bdg-slate">TAP · FLOW</span>
          <span className="bdg bdg-amber">Phase 1 Active</span>
          <button
            className={`edit-toggle${editMode ? ' active' : ''}`}
            onClick={() => setEditMode(e => !e)}
            title={editMode ? 'Exit edit mode' : 'Enter edit mode to update content'}
          >
            {editMode ? '✓ Editing' : '✏ Edit Mode'}
          </button>
        </div>
      </div>
    </div>
  )
}

function Nav({ active, setActive }) {
  return (
    <div className="nav">
      <div className="nav-inner">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            className={`nav-btn${active === s.id ? ' active' : ''}`}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function PageContent({ active }) {
  switch (active) {
    case 'overview':     return <Overview />
    case 'teams':        return <Teams />
    case 'standards':    return <Standards />
    case 'governance':   return <Governance />
    case 'jira':         return <JiraStructure />
    case 'tools':        return <Tools />
    case 'traceability': return <Traceability />
    case 'roadmap':      return <Roadmap />
    default:             return <Overview />
  }
}

function AppInner() {
  const [active, setActive] = useState('overview')
  const { editMode } = useEdit()

  return (
    <div className={`app${editMode ? ' edit-mode-on' : ''}`}>
      <Header active={active} />
      <Nav active={active} setActive={setActive} />
      <div className="main">
        <PageContent active={active} />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <EditProvider>
      <AppInner />
    </EditProvider>
  )
}
