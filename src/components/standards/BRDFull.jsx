export default function BRDFull() {
  const sections = [
    {
      id: 'overview', label: 'Overview',
      subsections: [
        { name: 'Document Purpose', desc: 'States what this BRD covers and its role as the input to IT for solution design and delivery.' },
        { name: 'Project Summary', desc: 'High-level description of the initiative — the problem being addressed and the intended outcome.' },
        { name: 'Business Objectives', desc: 'Measurable business goals the solution must achieve. Written as observable outcomes with specific targets and timeframes — not features or deliverables.' },
        { name: 'Solution Scope', desc: 'Two explicit lists: what is in scope and what is out of scope. Both from a business capability perspective. Prevents scope creep and misalignment with IT.' },
        { name: 'Assumptions', desc: 'Conditions assumed to be true during requirements definition. Must be validated before delivery begins.' },
        { name: 'Risks', desc: 'Known risks that may impact the requirements or delivery. Surfaced early so they can be managed, not discovered mid-sprint.' },
      ]
    },
    {
      id: 'stakeholders', label: 'Key Stakeholders',
      desc: 'The business stakeholders involved in this effort — their name, what they represent, their level of participation, and any other relevant context. Each stakeholder gets a unique ID (e.g. STK-01).',
    },
    {
      id: 'users', label: 'Users / Actors',
      subsections: [
        { name: 'Human Actors', desc: 'The business roles and external parties who interact with the solution. Each gets a unique ID (e.g. HUM-01) and a description of their role. These become the personas in user stories.' },
        { name: 'System Actors', desc: 'External systems or platforms that interact with the solution. Named and described so IT understands the integration landscape from a business perspective.' },
      ]
    },
    {
      id: 'context', label: 'Business Context Diagram',
      desc: 'A visual showing how users and external systems interact with the solution — key inputs, outputs, and boundaries. Gives IT a clear picture of the solution environment before requirements are detailed.',
    },
    {
      id: 'processes', label: 'Business Processes',
      subsections: [
        { name: 'Current-State Process Catalog', desc: 'A table of existing business processes impacted by this effort — process name, description, owner, impacted users, and traceability to other artifacts.' },
        { name: 'Current-State Process Maps', desc: 'Links to detailed process flows in iGrafx (Phase 2). Not required now — reference the process map name and step if available.' },
        { name: 'User Pain Points', desc: 'Specific issues and inefficiencies in current processes — description, business impact, priority, and which process is affected. Pain points drive the feature requirements.' },
        { name: 'Future-State Approach', desc: 'Note that formal future-state design is IT\'s responsibility. This section confirms the BRD focuses on business needs and current-state context — IT defines the solution and both parties validate alignment.' },
      ]
    },
    {
      id: 'features', label: 'Feature Catalog',
      desc: 'High-level business capabilities required to address the pain points and achieve the objectives. Each feature has a unique ID (e.g. FEAT-01), a name, description covering the why/what/who, priority (Must Have / Should Have / Nice to Have), and traces back to the pain points that drove it.',
    },
    {
      id: 'stories', label: 'User Story Catalog',
      desc: 'Detailed business requirements written as user stories: As a [role], I want to [capability] so that [outcome]. Each story has a unique ID (e.g. US-01), acceptance criteria, priority, and traces to the feature it supports. These are the primary artifacts IT uses to understand what to build.',
    },
    {
      id: 'rules', label: 'Business Rules',
      desc: 'The constraints, policies, and decision logic that must be enforced — not design decisions, but non-negotiable business facts. Each rule has a unique ID (e.g. BR-01), the rule statement, the policy or standard it comes from, a type classification, and traceability to the user story it governs.',
    },
    {
      id: 'reports', label: 'Reports & Files',
      desc: 'Required reports, outputs, and file exchanges. Each entry has a unique ID (e.g. REP-01), report name, description, owner, frequency, consumers, and traceability. Detailed report requirements follow the Reports Standard.',
    },
    {
      id: 'bio', label: 'Business Information Objects (BIOs)',
      desc: 'Key business data entities and their attributes — names, validation rules, constraints, and required formats. Written in business terms (not database schema). Each BIO traces to the user stories and rules that reference it.',
    },
    {
      id: 'approvals', label: 'Approvals',
      desc: 'Formal sign-off table capturing approver name, role, approval date, and method. A BRD is not final until all required approvers have signed. Business Consultant approval is required before the BRD is shared with IT.',
    },
    {
      id: 'appendices', label: 'Appendices',
      subsections: [
        { name: 'Appendix A — Glossary of Terms', desc: 'Definitions for business-specific terms, acronyms, and language used in the document. Ensures IT and business stakeholders have a shared understanding.' },
        { name: 'Appendix B — Traceability Matrix', desc: 'Shows how artifacts connect: Pain Points → Features → User Stories → Business Rules / BIOs / Reports. Confirms nothing is documented without a clear business driver and nothing is missing.' },
      ]
    },
  ]

  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>BRD — Full Template</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>
          The full BRD is used for larger or more complex efforts. It documents the complete business context — stakeholders, processes, pain points, features, user stories, business rules, reports, and data — so IT has everything needed to design and build the right solution. Every artifact carries a unique ID that flows through the traceability matrix.
        </p>
      </div>

      <div className="co co-teal" style={{ marginBottom: 20 }}>
        <div className="co-title" style={{ color: '#0d6e63' }}>Traceability Chain</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, fontSize: 13, color: '#0d6e63' }}>
          {['Pain Points', 'Features', 'User Stories', 'Business Rules / BIOs / Reports'].map((item, i, arr) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ background: '#e6f7f5', border: '1px solid #9adbd5', borderRadius: 4, padding: '2px 10px', fontWeight: 600, fontSize: 12 }}>{item}</span>
              {i < arr.length - 1 && <span style={{ color: '#9adbd5' }}>→</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="sdiv">Document Sections</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sections.map((section, idx) => (
          <div key={section.id} className="card" style={{ borderLeft: '3px solid #1a3f7a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: section.subsections || section.desc ? 8 : 0 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#7a8aaa', minWidth: 28, letterSpacing: '.06em' }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span style={{ fontWeight: 700, fontSize: 14, color: '#0a1628' }}>{section.label}</span>
            </div>
            {section.desc && (
              <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.6, marginLeft: 38 }}>{section.desc}</p>
            )}
            {section.subsections && (
              <div style={{ marginLeft: 38, display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                {section.subsections.map(sub => (
                  <div key={sub.name} style={{ padding: '7px 12px', background: '#f4f5f7', borderRadius: 5, borderLeft: '2px solid #b8cce8' }}>
                    <div style={{ fontWeight: 600, fontSize: 12, color: '#0a1628', marginBottom: 2 }}>{sub.name}</div>
                    <div style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.5 }}>{sub.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card ln-amber" style={{ marginTop: 20 }}>
        <span className="lbl">Template Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>CSAA BRD Template — Active</div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>Template sourced from CSAA Insurance Group BRD standard. Adapt section depth and detail to the complexity of the effort — a smaller initiative does not need every sub-section fully populated, but all sections should at minimum be acknowledged.</p>
      </div>
    </div>
  )
}
