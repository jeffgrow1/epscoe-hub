export default function Tools() {
  return (
    <div>
      <div className="section-title">Tool Ecosystem</div>
      <div className="section-sub">Each tool has a defined purpose — no duplication, no ambiguity</div>

      <div className="card mb20 ln-navy">
        <span className="lbl">Design Principle</span>
        <p style={{ fontSize: 14, lineHeight: 1.6 }}>Each tool serves a distinct, non-overlapping purpose. Cross-tool linking creates the connected documentation model described in the Traceability section.</p>
      </div>

      <div className="g2 mb20">
        <div className="card tn-navy">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22, color: '#1a3f7a' }}>⊞</span>
            <div><div style={{ fontWeight: 700, fontSize: 15 }}>Jira (DIGPAY)</div><div className="muted" style={{ fontSize: 12 }}>Work management — stories, tasks, epics</div></div>
          </div>
          <span className="bdg bdg-green" style={{ marginBottom: 10, display: 'inline-block' }}>Active — being restructured</span>
          <div className="lbl-sm">Used For</div>
          <div style={{ fontSize: 13, marginBottom: 3 }}><span style={{ color: '#1a7a45' }}>✓</span> TAP DPT business requirement stories &amp; epics</div>
          <div style={{ fontSize: 13, marginBottom: 10 }}><span style={{ color: '#1a7a45' }}>✓</span> TAP &amp; FLOW operational tasks</div>
          <div className="lbl-sm">Not Used For</div>
          <div className="muted" style={{ fontSize: 12 }}><span style={{ color: '#8a2020' }}>✗</span> Process diagrams · Rules repository · Controls</div>
        </div>
        <div className="card tn-blue">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22, color: '#4a90d9' }}>◎</span>
            <div><div style={{ fontWeight: 700, fontSize: 15 }}>iGrafx</div><div className="muted" style={{ fontSize: 12 }}>Business process documentation</div></div>
          </div>
          <span className="bdg bdg-navy" style={{ marginBottom: 10, display: 'inline-block' }}>Enterprise platform — to be introduced</span>
          <div className="lbl-sm">Used For</div>
          <div style={{ fontSize: 13, marginBottom: 3 }}><span style={{ color: '#1a7a45' }}>✓</span> End-to-end process maps &amp; swim lane diagrams</div>
          <div style={{ fontSize: 13, marginBottom: 10 }}><span style={{ color: '#1a7a45' }}>✓</span> Process discovery, current state, pain points, future state</div>
          <div className="lbl-sm">Not Used For</div>
          <div className="muted" style={{ fontSize: 12 }}><span style={{ color: '#8a2020' }}>✗</span> Business rules · Work tracking</div>
        </div>
      </div>

      <div className="card mb20 ln-amber">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 22, color: '#7a8aaa' }}>⬡</span>
          <div><div style={{ fontWeight: 700, fontSize: 15 }}>Airtable</div><div className="muted" style={{ fontSize: 12 }}>Business rules repository</div></div>
        </div>
        <span className="bdg bdg-amber" style={{ marginBottom: 12, display: 'inline-block' }}>Governance Gap — Action Required</span>
        <div className="co co-amber" style={{ marginBottom: 12 }}>
          <div className="co-title" style={{ color: '#8a5a00' }}>Payments Rules Governance Not Yet Established</div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5a3a00' }}>Airtable houses business rules but payments rules are <strong>not maintained by this team</strong>. Governance must be established. <strong>Lexie Hicklin is an Airtable admin and owns billing business rules</strong> — she is a key stakeholder for this conversation. Do not independently add or modify Airtable rules without coordination.</p>
        </div>
        <div className="lbl-sm">Used For (Target State)</div>
        <div style={{ fontSize: 13, marginBottom: 3 }}><span style={{ color: '#1a7a45' }}>✓</span> Business rule catalog for payments domain</div>
        <div style={{ fontSize: 13, marginBottom: 10 }}><span style={{ color: '#1a7a45' }}>✓</span> Rule IDs referenced in Jira stories</div>
        <div className="lbl-sm">Not Used For</div>
        <div className="muted" style={{ fontSize: 12 }}><span style={{ color: '#8a2020' }}>✗</span> Process maps · Work tracking · Controls</div>
      </div>

      <div className="card tn-dark">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 22, color: '#0a1628' }}>⬢</span>
          <div><div style={{ fontWeight: 700, fontSize: 15 }}>GRC Tool (Name TBD)</div><div className="muted" style={{ fontSize: 12 }}>Operational controls &amp; compliance</div></div>
        </div>
        <span className="bdg bdg-gray" style={{ marginBottom: 12, display: 'inline-block' }}>Approach Pending — Placeholder</span>
        <div className="co co-gray" style={{ marginBottom: 12 }}>
          <div className="co-title" style={{ color: '#4a5a7a' }}>Current Understanding</div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4a5a7a' }}>A separate department owns the GRC tool and controls domain. <strong>This team will be control owners for payments-related controls</strong>, but whether direct tool access is required is not yet confirmed.</p>
        </div>
        <div style={{ fontSize: 13 }}>
          <div><span style={{ color: '#1a7a45' }}>✓</span> This team owns payments-related operational controls</div>
          <div style={{ margin: '3px 0' }}><span style={{ color: '#8a5a00' }}>?</span> Direct tool access — TBD</div>
          <div className="muted">Next step: connect with owning department, confirm tool name, define engagement model.</div>
        </div>
      </div>
    </div>
  )
}
