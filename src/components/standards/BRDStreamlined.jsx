export default function BRDStreamlined() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>BRD — Streamlined Template</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>
          The streamlined BRD template is used for smaller, lower-complexity efforts where a full BRD would be disproportionate to the size of the work. It covers the same core areas as the full template but with less required depth. Every requirement still carries a unique ID for traceability.
        </p>
      </div>

      <div className="co co-amber">
        <div className="co-title" style={{ color: '#8a5a00' }}>⚑ Template Pending</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5a3a00' }}>
          The streamlined BRD template is being finalized alongside the full template. This section will be updated with structure, guidance, and examples once the template is available.
        </p>
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

      <div className="card ln-gray">
        <span className="lbl">Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Template Pending — Phase 1</div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>Full guidance will be added here once the streamlined template is finalized and uploaded.</p>
      </div>
    </div>
  )
}
