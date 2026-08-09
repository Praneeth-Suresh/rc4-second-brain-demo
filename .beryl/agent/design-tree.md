# Design Tree

## Current Design Concept

An offline field-dossier demo that turns a small fictional document trail into a cautious leadership decision brief. Its evidence rail, citations, freshness states, and explicit refusals make the demo’s limits as visible as its happy path.

## Open Decisions

| Decision | Options | Current Lean | Why |
| --- | --- | --- | --- |
| Controlled pilot sponsorship and approval route | Named sponsor/office and documented RACI vs. no pilot | Unresolved; no pilot work | President feedback requires named authority and written operating evidence before any real-data work. |
| NUS/platform suitability | Written confirmation vs. no integration | Unresolved; no integration | The demo must not claim NUS AI Know approval or suitability. |
| Pilot corpus allowlist and removal process | Owner-approved, enumerated corpus vs. broad categories | Unresolved; fictional corpus only | Real sources require separate owner sign-off, review, retention, and removal controls. |

## Settled Decisions

| Decision | Choice | Date | ADR |
| --- | --- | --- | --- |
| Product boundary | Local, fictional, read-only, deterministic demo with no external services or persisted queries. | 2026-08-09 | [ADR 0002](adr/0002-offline-fictional-demo-boundary.md) |
| Answer behavior | Cited eligible sources only; show explicit review-due, no-result, prohibited-data, and withdrawn outcomes. | 2026-08-09 | [ADR 0002](adr/0002-offline-fictional-demo-boundary.md) |
| Test strategy | Node built-in tests plus Beryl deterministic checks; browser evidence remains required for UI changes. | 2026-08-09 | [ADR 0002](adr/0002-offline-fictional-demo-boundary.md) |

## Pressure Points

- A polished demo can create false confidence unless simulated controls and approval gaps remain explicit.
- Any real corpus, service integration, or pilot-access request is a scope expansion requiring written platform confirmation and accountable owners.
