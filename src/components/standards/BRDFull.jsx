export default function BRDFull() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>BRD — Full Template</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>
          The full BRD template is used for larger or more complex efforts where comprehensive documentation of business requirements is needed. Each requirement in the BRD carries a unique ID that IT delivery teams use to trace their delivery work back to the business need.
        </p>
      </div>

      <div className="co co-amber">
        <div className="co-title" style={{ color: '#8a5a00' }}>⚑ Template Pending</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5a3a00' }}>
          The BRD full template is being finalized. Once uploaded, this section will document the structure, field-by-field guidance, writing examples, and quality checklist for the full template. Check back soon.
        </p>
      </div>

      <div className="sdiv">What Goes Into a BRD</div>
      <div className="card mb20">
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5a6a8a', marginBottom: 14 }}>
          While the specific template is being finalized, every BRD — full or streamlined — will cover the following core areas. The full template includes all of these in detail.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Business Context', 'Why this effort exists — the business problem or opportunity, the objective, and the scope boundary from a business perspective.'],
            ['Stakeholders', 'Who commissioned the work, who is impacted, who will validate, and who will participate in UAT.'],
            ['Business Requirements', 'The numbered list of individual requirements. Each has a unique ID (e.g. BR-001), a clear statement of what the business needs to be able to do, and the acceptance conditions. These IDs are what IT uses to trace their delivery work back to the business need.'],
            ['Business Rules', 'The constraints, thresholds, decision logic, and policies that govern the behavior described in the requirements. Referenced by Airtable Rule ID where available.'],
            ['Assumptions & Open Questions', 'Things assumed true during elaboration, and questions that must be resolved before delivery begins.'],
            ['Out of Scope', 'Explicit list of what is not included in this effort, to prevent scope creep.'],
            ['Process References', 'Links to relevant iGrafx process maps where applicable (Phase 2 goal).'],
          ].map(([title, desc]) => (
            <div key={title} style={{ padding: '10px 14px', background: '#f4f5f7', borderRadius: 6, borderLeft: '3px solid #1a3f7a' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 3 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sdiv">Requirement ID Convention</div>
      <div className="card mb20">
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5a6a8a', marginBottom: 12 }}>
          Each requirement in a BRD is assigned a unique ID. This ID is the traceability anchor — IT delivery teams reference it in their own delivery artifacts to establish the chain from business need to delivered capability.
        </p>
        <div style={{ padding: '10px 14px', background: '#f4f5f7', borderRadius: 6, border: '1px solid #dde2ed', fontSize: 13, lineHeight: 1.8, color: '#5a6a8a' }}>
          <strong style={{ color: '#0a1628' }}>Format (to be confirmed with template):</strong><br />
          <em style={{ color: '#1a3f7a' }}>BR-[BRD Reference]-[###]</em><br />
          Example: <em style={{ color: '#1a3f7a' }}>BR-OB1-001, BR-OB1-002, BR-NG-001</em>
        </div>
        <div className="co co-gray" style={{ marginTop: 12, marginBottom: 0 }}>
          <p style={{ fontSize: 13, lineHeight: 1.6 }}>
            IT is responsible for establishing how they trace their delivery work back to BRD requirement IDs. The team's responsibility is to ensure every requirement has a clear, stable ID and that the BRD is shared with IT before delivery begins.
          </p>
        </div>
      </div>

      <div className="card ln-gray">
        <span className="lbl">Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Template Pending — Phase 1</div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>Full guidance, field-level descriptions, writing examples, and quality checklist will be added here once the template is finalized and uploaded.</p>
      </div>
    </div>
  )
}
