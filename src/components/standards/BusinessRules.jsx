export function BusinessRules() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>Business Rules</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>Business rules define the conditions, constraints, and logic that govern how the organization operates. They are the non-negotiable facts of the business — policies, thresholds, decision logic, and constraints that exist independently of any system or technology.</p>
      </div>

      <div className="sdiv">What Is a Business Rule?</div>
      <div className="card mb20">
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5a6a8a', marginBottom: 14 }}>A business rule is a statement that defines or constrains some aspect of the business. It reflects a decision the organization has already made — it is not a requirement for a system to do something, it is a fact that any system supporting the business must respect.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Constraints', 'Limits on what the business can or cannot do. Example: A payment cannot be released without dual authorization if the amount exceeds $50,000.'],
            ['Decision Logic', 'Conditions that determine what happens next. Example: If a payment fails settlement on day one, it must be retried within one business day before being escalated.'],
            ['Thresholds and Calculations', 'Values, formulas, or numeric boundaries. Example: Merchant settlement is calculated on net transaction value after fees, rounded to two decimal places in USD.'],
            ['Policies and Compliance Requirements', 'Rules driven by regulation, contract, or organizational policy. Example: All payment records must be retained for seven years.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ padding: '10px 14px', background: '#f4f5f7', borderRadius: 6, borderLeft: '3px solid #1a3f7a' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 3 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sdiv">Why We Capture Business Rules</div>
      <div className="card mb20">
        {[
          ['01', 'They prevent ambiguity in requirements', 'An acceptance criterion tells IT what the business can do when the story is done. A business rule tells IT what constraints and logic govern that behavior. Without explicitly stated rules, IT makes assumptions — and those assumptions may be wrong.'],
          ['02', 'They are reusable across stories', 'The same business rule often applies to multiple stories. Maintaining rules in one place (Airtable) and referencing them by ID means the rule only needs to be written and validated once.'],
          ['03', 'They create an auditable record', 'Payment operations are subject to audits, regulatory reviews, and compliance checks. A documented rule catalog gives the organization a clear, traceable record of the business logic that was in effect.'],
          ['04', 'They protect against rework', 'Rules that are discovered during UAT or after go-live are expensive to fix. Surfacing and documenting rules during requirements elaboration is one of the highest-value activities this team can perform.'],
        ].map(([num, title, desc], i) => (
          <div key={num} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 3 ? '1px solid #dde2ed' : 'none' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#1a3f7a', flexShrink: 0 }}>{num}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#0a1628', marginBottom: 2 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sdiv">How Business Rules Work With Other Requirements</div>
      <div className="card mb20">
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5a6a8a', marginBottom: 14 }}>Business rules, user stories, and acceptance criteria work together but serve different purposes.</p>
        <div className="g3">
          {[
            ['tn-navy', 'User Story', 'Describes the business need — who needs what capability and why. Sets the context and intent.', '"As a Payments Analyst, I want to release a payment, so that the merchant receives funds on the agreed settlement date."', '#1a3f7a'],
            ['tn-blue', 'Acceptance Criteria', "Defines what must be true for the story to be done. Happy-path conditions verifiable by a stakeholder.", '"The analyst can select a payment and release it. A confirmation is shown with the settlement date and amount."', '#1a6ab8'],
            ['tn-gray', 'Business Rule', 'States the constraint or logic that governs the behavior. Applies regardless of who initiates the action.', '"BR-PMT-014: Payments exceeding $50,000 require dual authorization before release."', '#4a5a7a'],
          ].map(([cls, title, desc, example, color]) => (
            <div key={title} style={{ padding: '12px 14px', background: '#f4f5f7', borderRadius: 6, borderTop: `3px solid ${color}` }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 12, color: '#5a6a8a', lineHeight: 1.6, marginBottom: 8 }}>{desc}</div>
              <div style={{ fontSize: 11, color, fontStyle: 'italic' }}>{example}</div>
            </div>
          ))}
        </div>
        <div className="co co-gray" style={{ marginTop: 14, marginBottom: 0 }}>
          <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4a5a7a' }}><strong>Practical test:</strong> If the statement is true regardless of which system, screen, or person is involved — it is a business rule. If it describes what a specific user can do in a specific situation — it belongs in a story or AC.</div>
        </div>
      </div>

      <div className="sdiv">Referencing Business Rules in Jira Stories</div>
      <div className="card mb20">
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5a6a8a', marginBottom: 12 }}>When a business rule governs behavior described in a story, reference it explicitly in the Linked field by Rule ID.</p>
        <div style={{ padding: '10px 14px', background: '#f4f5f7', borderRadius: 6, border: '1px solid #dde2ed', fontSize: 13, color: '#5a6a8a', lineHeight: 1.7 }}>
          <em style={{ color: '#1a3f7a' }}>BR-PMT-014 — Dual authorization required for payments over $50,000</em><br />
          <em style={{ color: '#1a3f7a' }}>BR-PMT-031 — Settlement currency must match the merchant's registered currency</em>
        </div>
      </div>

      <div className="co co-amber">
        <div className="co-title" style={{ color: '#8a5a00' }}>⚑ Airtable Governance — Action Required</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5a3a00' }}>Payments business rules exist in Airtable but are not currently maintained by this team. Governance must be established before the team can begin formally cataloging rules. <strong>Lexie Hicklin is the Airtable admin and owns billing business rules</strong> — key stakeholder. Coordinate with Jeff Grow to initiate. Phase 2b roadmap item.</p>
      </div>
      <div className="card ln-gray">
        <span className="lbl">Tooling Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Airtable — Governance Pending · Phase 2b</div>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>Once governance is established, the team will maintain a Rule ID catalog in Airtable with rule statements, ownership, type classification, and links back to the Jira stories that reference each rule.</p>
      </div>
    </div>
  )
}

export function Reports() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>Report Requirements Standard</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: '#2a3a5a' }}>This team documents report requirements for two audiences: IT delivery teams who build or modify reports, and business stakeholders who consume them. A well-documented report requirement removes ambiguity about what data is needed, how it should be presented, when it runs, and who acts on it.</p>
      </div>

      <div className="sdiv">Report Types</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {[
          ['#1a3f7a', 'Operational / Daily Run Reports', 'Reports that run on a scheduled basis to support day-to-day operations. Consumers use them to confirm normal business activity and identify items requiring action. Examples: daily payment volume summary, end-of-day settlement status, batch processing confirmation.'],
          ['#2c4a72', 'Settlement and Reconciliation Reports', 'Reports that enable the business to confirm that payment amounts, merchant records, and financial positions are aligned. Examples: daily settlement file, merchant reconciliation report, net position summary.'],
          ['#8a2020', 'Exception and Error Reports', 'Reports that surface transactions or conditions that fall outside expected parameters and require human review. Examples: failed payment report, settlement exception queue, unmatched transaction report.'],
        ].map(([color, title, desc]) => (
          <div key={title} style={{ padding: '12px 16px', background: '#fff', border: '1px solid #dde2ed', borderRadius: 8, borderLeft: `4px solid ${color}` }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#0a1628', marginBottom: 6 }}>{title}</div>
            <p style={{ fontSize: 13, color: '#5a6a8a', lineHeight: 1.5 }}>{desc}</p>
          </div>
        ))}
      </div>

      <div className="sdiv">What Goes Into a Report Requirement</div>
      <div className="card mb20">
        {[
          ['Report Name and Purpose', 'What the report is called and what business question it answers. The purpose statement should describe what decision or action the report enables — not what data it contains.'],
          ['Consumer and Use Case', 'Who uses the report, in what context, and what action they take based on it. A report consumed by a Finance Analyst during reconciliation has different requirements than one used by an Operations Analyst to manage exceptions.'],
          ['Data Elements', 'The fields or data points the consumer needs to see, expressed in business terms. For each element, document the business label, what it represents, and any formatting or calculation logic. Do not use system column names or database field names.'],
          ['Filters and Parameters', 'How the consumer scopes or adjusts the report. Document the default values and the range of options available.'],
          ['Frequency and Delivery', 'When the report runs and how the consumer receives it. Include the scheduled run time, any SLA for availability, and the delivery method.'],
          ['Sort Order and Layout', 'How the report should be organized to support the consumer\'s workflow. Includes default sort order, groupings, and subtotals.'],
          ['Exception Highlighting and Alerts', 'For exception and operational reports, document the conditions that should be flagged prominently and what the consumer is expected to do when they see it.'],
          ['Export and Access Requirements', 'Whether the consumer needs to export the report, who has access, and any data sensitivity or access control considerations.'],
        ].map(([title, desc], i, arr) => (
          <div key={title} className="fr" style={i === 0 ? { borderTop: 'none', paddingTop: 0 } : {}}>
            <div className="fn">{title}</div>
            <div className="fd">{desc}</div>
          </div>
        ))}
      </div>

      <div className="sdiv">Quality Checklist</div>
      <div className="card">
        {[
          ['ok', 'Report name and purpose describe the business question it answers'],
          ['ok', 'Consumer and use case clearly defined — who uses it and what action it drives'],
          ['ok', 'All data elements documented in business terms, not system or database field names'],
          ['ok', 'Filters and default values specified'],
          ['ok', 'Frequency, run time, and delivery method documented'],
          ['ok', 'Exception conditions and thresholds defined for operational and exception reports'],
          ['ok', 'Applicable business rules referenced by Rule ID — not restated inline'],
          ['ok', 'A Jira story exists for any report being built or modified, with the Report Specification linked'],
          ['trace', 'Traceability: Report Specification document linked to the Jira story in the Linked field'],
          ['trace', 'Traceability: IT delivery story linked back to the TAP business story before sprint commitment'],
        ].map(([type, text], i) => (
          <div key={i} className="cli">
            <span style={{ color: type === 'ok' ? '#1a7a45' : '#0d6e63', minWidth: 18, fontWeight: 700 }}>{type === 'ok' ? '✓' : '⇌'}</span>
            <span style={{ fontSize: 13 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function OpControls() {
  return (
    <div>
      <div className="co co-navy">
        <div className="co-title" style={{ color: '#1a3f7a' }}>Operational Controls Standard</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#2a3a5a' }}>This team owns payments-related operational controls. A separate department manages the GRC tool and controls domain. The engagement model is still being defined.</p>
      </div>
      <div className="co co-amber">
        <div className="co-title" style={{ color: '#8a5a00' }}>⚑ Approach Pending</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5a3a00' }}>Next step: connect with the department that owns the GRC tool, inventory payments controls, and define the engagement model. Phase 2c roadmap item.</p>
      </div>
      <div className="card ln-slate">
        <span className="lbl">Status</span>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Placeholder — Phase 2c · Approach to be defined</div>
        <div style={{ marginTop: 10, fontSize: 13, color: '#5a6a8a', lineHeight: 1.8 }}>
          • This team is the control owner for payments-related controls<br />
          • A separate department owns the GRC tool and domain<br />
          • Direct tool access for this team has not been confirmed<br />
          • GRC tool name TBD
        </div>
      </div>
    </div>
  )
}

export default BusinessRules
