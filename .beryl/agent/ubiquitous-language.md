# Ubiquitous Language

| Business Term | Technical Symbol | Definition | Constraints | Avoid |
| --- | --- | --- | --- | --- |
| Fictional source | `source` | Local seed document used only for the demo. | Uses `demo://` location and complete governance metadata; never represents a real record. | Real document, live corpus |
| Eligible source | `source.status !== 'withdrawn'` | Source permitted to support a rendered answer. | Must be cited and never withdrawn. | Trusted source |
| Review-due source | `status: 'review-due'` | Eligible fictional source that needs owner confirmation. | Warn clearly; it does not establish current truth. | Current source |
| Withdrawn source | `status: 'withdrawn'` | Source excluded before any answer is rendered. | Produces an explicit exclusion outcome. | Partial evidence |
| Leadership decision brief | `scenario.decisionBrief` | Reviewable separation of context, evidence, uncertainty, next action, and approver. | Is a draft; it never makes or approves a decision. | Recommendation, approval |
| Coverage rationale | `coverage.rationale` | Deterministic explanation of the cited eligible fictional sources. | Do not turn it into a numeric confidence claim. | Confidence score |
| Prohibited-data outcome | `kind: 'safety'` | Refusal for sensitive or out-of-bound questions. | No operational answer and no query persistence. | Safety filter pass |
| No-result outcome | `kind: 'no-result'` | Explicit response when the fictional corpus has no supported answer. | Never invent an answer. | Empty answer |
| Simulated control | UI governance representation | A visible proposed control such as permission labels, freshness, or removal. | Must not imply real enforcement, security, or NUS approval. | Implemented control |
| Demo boundary | Offline, read-only, fictional constraint | The set of constraints that make this a presentation artifact rather than a pilot. | No network, storage, telemetry, credentials, or external services. | Production boundary |
