export default function BRDStreamlined() {
  const sections = [
    {
      id: 'overview', label: 'Overview',
      subsections: [
        { name: 'Document Purpose', desc: 'States what this BRD covers and its role as the input to IT for solution design and delivery.' },
        { name: 'Project Summary', desc: 'High-level description of the initiative — the problem being addressed and the intended outcome.' },
        { name: 'Business Objectives', desc: 'Measurable business goals the solution must achieve. Written as observable outcomes with specific targets and timeframes — not features or deliverables.' },
        { name: 'Solution Scope', desc: 'Two explicit lists: what is in scope and what is out of scope. Both from a business capability perspective. Prevents scope creep and misalignment with IT.' },
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
      id: 'features', label: 'Feature Catalog',
      desc: 'High-level business capabilities required to address the pain points and achieve the objectives. Each feature has a unique ID (e.g. FEAT-01), a name, description covering the why/what/who, priority (Must Have / Should Have / Nice to Have), and traces back to the pain points that drove it.',
    },
    {
      id: 'stories', label: 'User Story Catalog',
      desc: 'Detailed business requirements written as user stories: As a [role], I want to [capability] so that [outcome]. Each story has a unique ID (e.g. US-01), acceptance criteria, priority, and traces to the feature it supports. These are the primary artifacts IT uses to understand what to build.',
    },
    {
      id: 'approvals', label: 'Approvals',
      desc: 'Formal sign-off table capturing approver name, role, approval date, and method. A BRD is not final until all required approvers have signed. Business Consultant approval is required before the BRD is shared with IT.',
    },
    {
      id: 'appendices', label: 'Appendix — Traceability Matrix',
      desc: 'Shows how artifacts connect: Features → User Stories. Confirms nothing is documented without a clear business driver and nothing is missing.',
    },
  ]

  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>BRD — Streamlined Template</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>
          The streamlined BRD is used for smaller, lower-complexity efforts where a full BRD would be disproportionate to the size of the work. It covers the core sections needed to communicate the business need clearly to IT — without the full process, rules, data, and reporting depth of the full template. Every artifact still carries a unique ID for traceability.
        </p>
      </div>

      <div className="co co-teal" style={{ marginBottom: 20 }}>
        <div className="co-title" style={{ color: '#0d6e63' }}>Traceability Chain</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, fontSize: 13, color: '#0d6e63' }}>
          {['Features', 'User Stories'].map((item, i, arr) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ background: '#e6f7f5', border: '1px solid #9adbd5', borderRadius: 4, padding: '2px 10px', fontWeight: 600, fontSize: 12 }}>{item}</span>
              {i < arr.length - 1 && <span style={{ color: '#9adbd5' }}>→</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="sdiv">When to Use Streamlined vs Full</div>
      <div className="card mb20">
        <div className="g2">
          <div style={{ padding: '12px 14px', background: '#f4f5f7', borderRadius: 6, borderTop: '3px solid #1a3f7a' }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 8 }}>Use the Full BRD when:</div>
            {[
              'The effort spans multiple workstreams or teams',
              'There are 10+ individual requirements',
              'Regulatory, compliance, or audit significance is high',
              'The effort will take more than one sprint to deliver',
              'Multiple business rules govern the behavior',
              'Stakeholder sign-off from multiple parties is needed',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#5a6a8a', marginBottom: 4 }}>
                <span style={{ color: '#1a3f7a', fontWeight: 700 }}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '12px 14px', background: '#f4f5f7', borderRadius: 6, borderTop: '3px solid #4a90d9' }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 8 }}>Use the Streamlined BRD when:</div>
            {[
              'The effort is discrete and self-contained',
              'Fewer than 10 requirements',
              'Single team or workstream',
              'Can be delivered in one sprint or less',
              'Limited business rule complexity',
              'Straightforward stakeholder sign-off',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#5a6a8a', marginBottom: 4 }}>
                <span style={{ color: '#4a90d9', fontWeight: 700 }}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="co co-gray" style={{ marginTop: 14, marginBottom: 0 }}>
          <p style={{ fontSize: 13, lineHeight: 1.6 }}>
            <strong>When in doubt, use the full template.</strong> It is easier to leave sections brief than to realize mid-delivery that critical context is missing. The Business Consultant makes the template call — not IT.
          </p>
        </div>
      </div>

      <div className="sdiv">Document Sections</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sections.map((section, idx) => (
          <div key={section.id} className="card" style={{ borderLeft: '3px solid #4a90d9' }}>
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
                  <div key={sub.name} style={{ padding: '7px 12px', background: '#f4f5f7', borderRadius: 5, borderLeft: '2px solid #aacfee' }}>
                    <div style={{ fontWeight: 600, fontSize: 12, color: '#0a1628', marginBottom: 2 }}>{sub.name}</div>
                    <div style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.5 }}>{sub.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card ln-blue" style={{ marginTop: 20 }}>
        <span className="lbl">Template Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Streamlined — Active</div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>Based on the CSAA BRD template with reduced scope for smaller efforts. If during elaboration the effort grows in complexity, switch to the full template — do not force a complex initiative into the streamlined format.</p>
      </div>
    </div>
  )
}
