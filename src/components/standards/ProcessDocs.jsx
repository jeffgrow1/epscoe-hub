import { useState } from 'react'

const BPMN_SYMBOLS = [
  { tag: 'bt-ev', tagLabel: 'Event', name: 'Start Event', when: 'Every process has exactly one start event. Label with the trigger.', symbol: <div style={{width:38,height:38,borderRadius:'50%',background:'#e8f5ee',border:'2px solid #1a7a45',display:'inline-block'}} /> },
  { tag: 'bt-ev', tagLabel: 'Event', name: 'End Event', when: 'Can have multiple. Label each with the business outcome.', symbol: <div style={{width:38,height:38,borderRadius:'50%',background:'#fdf0f0',border:'4px solid #8a2020',display:'inline-block'}} /> },
  { tag: 'bt-ta', tagLabel: 'Task', name: 'Task', when: 'Single unit of work by one role. Action verb + object. One task = one action.', symbol: <div style={{width:58,height:32,background:'#edf2fc',border:'2px solid #1a3f7a',borderRadius:5,display:'inline-block'}} /> },
  { tag: 'bt-gw', tagLabel: 'Gateway', name: 'Exclusive (XOR)', when: 'Only ONE path taken. Label each path Yes/No or with the condition.', symbol: <div style={{width:34,height:34,background:'#fdf8ee',border:'2px solid #b87a00',display:'flex',alignItems:'center',justifyContent:'center',transform:'rotate(45deg)'}}><span style={{transform:'rotate(-45deg)',fontWeight:700,fontSize:13,color:'#b87a00'}}>X</span></div> },
  { tag: 'bt-gw', tagLabel: 'Gateway', name: 'Parallel (AND)', when: 'ALL paths happen simultaneously. Use for split and join.', symbol: <div style={{width:34,height:34,background:'#e8f5ee',border:'2px solid #1a7a45',display:'flex',alignItems:'center',justifyContent:'center',transform:'rotate(45deg)'}}><span style={{transform:'rotate(-45deg)',fontWeight:700,fontSize:13,color:'#1a7a45'}}>+</span></div> },
  { tag: 'bt-fl', tagLabel: 'Flow', name: 'Sequence Flow', when: 'Connects elements in order. Standard arrow between steps.', symbol: <div style={{display:'flex',alignItems:'center'}}><div style={{width:44,height:2,background:'#1a3f7a'}} /><div style={{width:0,height:0,borderTop:'6px solid transparent',borderBottom:'6px solid transparent',borderLeft:'10px solid #1a3f7a'}} /></div> },
  { tag: 'bt-po', tagLabel: 'Pool/Lane', name: 'Pool & Swim Lane', when: 'Pool = process boundary. Lanes = roles. Use role titles. Max 5 lanes.', symbol: <div style={{border:'2px solid #1a3f7a',borderRadius:4,overflow:'hidden',width:80}}><div style={{background:'#1a3f7a',color:'#fff',fontSize:8,fontWeight:700,padding:'1px 4px',textTransform:'uppercase'}}>Pool</div><div style={{display:'flex',borderTop:'1px solid #b8cce8',minHeight:14}}><div style={{background:'#e8eef8',color:'#1a3f7a',fontSize:7,fontWeight:700,writingMode:'vertical-rl',transform:'rotate(180deg)',textTransform:'uppercase',padding:'1px 3px',minWidth:13,borderRight:'1px solid #b8cce8'}}>Role A</div><div style={{flex:1}} /></div><div style={{display:'flex',borderTop:'1px solid #b8cce8',minHeight:14}}><div style={{background:'#e8eef8',color:'#1a3f7a',fontSize:7,fontWeight:700,writingMode:'vertical-rl',transform:'rotate(180deg)',textTransform:'uppercase',padding:'1px 3px',minWidth:13,borderRight:'1px solid #b8cce8'}}>Role B</div><div style={{flex:1}} /></div></div> },
  { tag: 'bt-ev', tagLabel: 'Event', name: 'Intermediate Event', when: 'A wait or timer mid-process. Use sparingly.', symbol: <div style={{width:38,height:38,borderRadius:'50%',background:'#fff8e6',border:'2px solid #b87a00',display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:30,height:30,borderRadius:'50%',border:'2px solid #b87a00'}} /></div> },
  { tag: 'bt-po', tagLabel: 'Data', name: 'Data Object', when: 'A document or data item. Only include when it matters to the process.', symbol: <svg width="32" height="40" viewBox="0 0 34 42"><polygon points="0,0 24,0 34,10 34,42 0,42" fill="#f4f5f7" stroke="#7a8aaa" strokeWidth="2"/><polyline points="24,0 24,10 34,10" fill="none" stroke="#7a8aaa" strokeWidth="2"/></svg> },
  { tag: 'bt-an', tagLabel: 'Annotation', name: 'Text Annotation', when: 'Add context or pain point markers. Connect with a dotted line.', symbol: <div style={{width:38,height:32,borderLeft:'3px solid #0d6e63',borderTop:'2px solid #0d6e63',borderBottom:'2px solid #0d6e63',display:'inline-block'}} /> },
]

const SCENARIOS = {
  disc: {
    title: 'Running a Discovery Session',
    intro: 'A structured conversation with stakeholders to uncover how a process actually works.',
    steps: [
      { title: 'Prepare a blank swim lane template before the session', body: 'Set up a pool in iGrafx with lanes for the roles you expect. Prepare 4–6 open-ended questions.', tip: 'Good opener: "Walk me through what happens when [trigger occurs]."' },
      { title: 'Start from the trigger, not the middle', body: 'Ask: "What causes this process to start?" Establish the start event first.', watch: 'Watch for: stakeholders jumping to edge cases. Redirect — "Let\'s capture the normal flow first."' },
      { title: 'Follow the work, not the org chart', body: 'Ask "What happens next?" and "Who does that?" for each step. Use sticky notes in the session; clean up in iGrafx afterward.' },
      { title: 'Capture decision points as you encounter them', body: 'When a stakeholder says "it depends on..." — that is a gateway. Label all outgoing paths immediately.', watch: 'Watch for: informal undocumented decisions. High-value pain points.' },
      { title: 'Ask "what can go wrong?" at every major step', body: 'Exception paths are often the richest source of pain points.' },
      { title: 'End with a walkthrough and confirmation', body: 'Walk the draft map out loud: "Does this reflect how this actually works?"' },
    ],
  },
  lanes: {
    title: 'How to Structure Swim Lanes',
    intro: 'Swim lanes are the most important structural element in a process map.',
    works: ['Business role titles', 'Team or department names', 'System names (autonomous actions only)', 'External party names'],
    fails: ["Individual people's names", 'Vague labels like "Team" or "Staff"', 'Process step names', 'More than 5 lanes'],
    steps: [
      { title: 'One lane per role that performs work', body: 'If a role reviews, approves, creates, sends, or receives something — they get a lane.' },
      { title: 'Use the most specific role title that is still generic', body: 'Not "John from Finance" — use "Finance Analyst." The lane label should match the story persona.' },
      { title: 'Systems get lanes when they act, not just when used', body: 'A system gets a lane only if it takes an autonomous action. Otherwise note it in an annotation.', watch: 'This team tends to give systems too many lanes.' },
    ],
    lane: true,
  },
  pain: {
    title: 'Identifying and Documenting Pain Points',
    intro: 'Use a Text Annotation connected to the affected task, prefixed with a pain point type tag.',
    types: [
      { tag: '⏱ DELAY', style: { background: '#fdf0f0', border: '1px solid #e8b0b0', color: '#8a2020' }, label: 'Delay', desc: 'Process waits or stalls. Example: "⏱ DELAY — Settlement file not available until 2PM, blocking reconciliation for 6 hours."' },
      { tag: '✋ MANUAL', style: { background: '#fdf4e3', border: '1px solid #e0c880', color: '#8a5a00' }, label: 'Manual Workaround', desc: 'Step performed manually. Example: "✋ MANUAL — Analyst copies data from 3 spreadsheets by hand. 45 mins daily."' },
      { tag: '⚠ ERROR', style: { background: '#fdf8ee', border: '1px solid #e0c880', color: '#8a5a00' }, label: 'Error-Prone Step', desc: 'Regularly produces errors. Example: "⚠ ERROR — Data format mismatch causes ~30% of records to fail."' },
      { tag: '? UNCLEAR', style: { background: '#edf2fc', border: '1px solid #b8cce8', color: '#1a3f7a' }, label: 'Unclear Ownership or Rule', desc: 'No one is sure who owns this step. Example: "? UNCLEAR — Escalation threshold applied inconsistently."' },
      { tag: '↳ MISSING', style: { background: '#e6f7f5', border: '1px solid #9adbd5', color: '#0d6e63' }, label: 'Missing Step or Control', desc: 'Something that should happen does not. Example: "↳ MISSING — No confirmation after settlement file is sent."' },
    ],
    example: {
      bad: '"✋ MANUAL — Finance Analyst copies settlement data from 3 email attachments daily. 45 minutes and produces errors when files are missing."',
      good: '"As a Finance Analyst, I want to access a consolidated view of daily settlement data in one place, so that I can perform reconciliation without manually compiling data from multiple sources."',
    },
  },
  states: {
    title: 'Current State vs Future State',
    intro: 'Two process maps — one showing how things work today, one showing how they should work after the change.',
    steps: [
      { title: 'Build and validate current state first — completely', body: 'Do not start future state until current state is confirmed as accurate by a stakeholder.', watch: 'Common mistake: jumping to future state because stakeholders are excited about the solution.' },
      { title: 'Use current state pain points to define what must change', body: 'Each pain point is a candidate for change. Bring them to the requirements session: "Which of these are in scope?"' },
      { title: 'Build the future state from the current state — do not start from scratch', body: 'Copy the current state map in iGrafx and modify it. Blue = changed, green = new, gray = removed.' },
      { title: 'Validate with the same stakeholders', body: 'Walk them through both maps side by side: "Does this solve the problem?"', tip: 'If asked "how will the system do that?" — "That is for IT. We are confirming the business can do what it needs to do."' },
      { title: 'Use both maps for impact analysis', body: 'Each major change in the future state is a candidate for a DPT business story.' },
    ],
  },
}

function StepCard({ step, i }) {
  return (
    <div className="scard">
      <div className="snum">{i + 1}</div>
      <div>
        <div className="sti">{step.title}</div>
        <div className="sbo">{step.body}</div>
        {step.tip  && <div className="stip">{step.tip}</div>}
        {step.watch && <div className="swat">{step.watch}</div>}
      </div>
    </div>
  )
}

export default function ProcessDocs() {
  const [scenario, setScenario] = useState('disc')
  const sc = SCENARIOS[scenario]

  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>Purpose for This Team</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>Process maps are used as a <strong>discovery and elicitation tool</strong> — not compliance artifacts. They help the team understand how work actually flows today, surface pain points, confirm current state with stakeholders, and compare current vs future state during impact analysis.</p>
      </div>
      <div className="co co-gray">
        <div className="co-title" style={{ color: '#4a5a7a' }}>Traceability Note</div>
        <p style={{ fontSize: 13, lineHeight: 1.6 }}>Process maps are <strong>not required to be linked to Jira stories or epics at this stage</strong>. That is a Phase 2 maturity goal.</p>
      </div>

      <div className="sdiv">BPMN 2.0 Symbol Reference Card</div>
      <div className="bpmn-grid">
        {BPMN_SYMBOLS.map(s => (
          <div key={s.name} className="bpmn-card">
            <div className="bsym" style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>{s.symbol}</div>
            <span className={`btag ${s.tag}`}>{s.tagLabel}</span>
            <div className="bname">{s.name}</div>
            <div className="bwhen">{s.when}</div>
          </div>
        ))}
      </div>

      <div className="co co-amber">
        <div className="co-title" style={{ color: '#8a5a00' }}>Elements to Avoid at This Stage</div>
        <p style={{ fontSize: 13 }}>Do not use: message events, signal events, error events, compensation markers, collapsed sub-processes, or message flows between pools.</p>
      </div>

      <div className="sdiv">Scenario Guides</div>
      <div className="scnav">
        {[['disc','Discovery Session'],['lanes','Swim Lane Structure'],['pain','Pain Points'],['states','Current vs Future State']].map(([id, label]) => (
          <button key={id} className={`scb${scenario === id ? ' active' : ''}`} onClick={() => setScenario(id)}>{label}</button>
        ))}
      </div>

      <div className="co co-navy" style={{ marginBottom: 16 }}>
        <div className="co-title" style={{ color: '#1a3f7a' }}>{sc.title}</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#2a3a5a' }}>{sc.intro}</p>
      </div>

      {sc.works && (
        <div className="g2" style={{ marginBottom: 16 }}>
          <div><div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: '#1a7a45' }}>✓ Lanes That Work</div>{sc.works.map(w => <span key={w} className="pill pill-g">{w}</span>)}</div>
          <div><div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: '#8a2020' }}>✗ Lanes That Cause Problems</div>{sc.fails.map(f => <span key={f} className="pill pill-r">{f}</span>)}</div>
        </div>
      )}

      {sc.types && (
        <div style={{ marginBottom: 16 }}>
          {sc.types.map(t => (
            <div key={t.label} className="ptc">
              <span className="pmk" style={t.style}>{t.tag}</span> <strong>{t.label}</strong>
              <p style={{ fontSize: 12, color: '#5a6a8a', marginTop: 4 }}>{t.desc}</p>
            </div>
          ))}
          {sc.example && (
            <div style={{ marginTop: 14 }}>
              <div className="sdiv" style={{ marginTop: 0 }}>From Pain Points to Requirements</div>
              <div className="g2">
                <div className="ex-b"><div className="exl exl-b">Pain Point Annotation</div><div style={{ fontSize: 13, lineHeight: 1.6 }}>{sc.example.bad}</div></div>
                <div className="ex-g"><div className="exl exl-g">Resulting Business Story</div><div style={{ fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>{sc.example.good}</div></div>
              </div>
            </div>
          )}
        </div>
      )}

      {sc.steps && sc.steps.map((step, i) => <StepCard key={i} step={step} i={i} />)}

      {sc.lane && (
        <div>
          <div className="sdiv" style={{ marginTop: 20 }}>Lane Example — Payment Exception Handling</div>
          <div className="ldemo">
            <div className="lhd">Pool: Digital Payments — Payment Exception Handling</div>
            {[
              ['Payments Ops', 'Identifies exception → Logs exception → Determines resolution path'],
              ['Payments Analyst', 'Reviews detail → Applies business rule → Escalates if required'],
              ['Finance Analyst', 'Confirms financial impact → Approves write-off if applicable'],
              ['Payment Platform', 'Generates exception report automatically → Updates settlement record'],
            ].map(([label, content]) => (
              <div key={label} className="lrw">
                <div className="llb">{label}</div>
                <div className="lco">{content}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {sc.states && (
        <div className="g2" style={{ marginBottom: 16 }}>
          <div className="stc"><div className="sth-c">Current State Map</div><div className="stb">How the process works today including all workarounds. Reflects reality.<br /><br /><strong>Pain points annotated:</strong> Yes.</div></div>
          <div className="stc"><div className="sth-f">Future State Map</div><div className="stb">How the process should work after the change. Build only after current state is validated.<br /><br /><strong>Pain points annotated:</strong> No.</div></div>
        </div>
      )}

      <div className="sdiv" style={{ marginTop: 28 }}>Quality Checklist</div>
      <div className="card">
        {['One clearly labeled start event with a named trigger','Every end event labeled with the business outcome','All swim lanes represent business roles — no individual names','Every task labeled with action verb + object','Every decision gateway has ALL outgoing paths labeled','At least one exception or error path documented','A stakeholder has reviewed and confirmed accuracy','Pain points annotated on relevant steps (current state maps)','Map has a title, version number, and last updated date'].map((item, i) => (
          <div key={i} className="cli"><span style={{ color: '#1a7a45', minWidth: 18, fontWeight: 700 }}>✓</span><span style={{ fontSize: 13 }}>{item}</span></div>
        ))}
      </div>
    </div>
  )
}
