# PRD traceability and demo evidence

This checklist records implementation evidence only. “Manual gate” means it remains unverified because it needs a reviewer or moderated study; it is not represented as completed.

| PRD review item | Implementation evidence | Acceptance evidence / status |
| --- | --- | --- |
| High-value decision workflow | `src/data.js` event fixture; `src/app.js` Leadership decision brief | Automated retrieval scenario test; browser walkthrough still manual |
| Operational knowledge retrieval | `src/retrieval.js`, seven fictional local sources, Sources search/filters | `npm test` tests deterministic filtering; UI interaction requires browser review |
| Grounded draft outputs | Standard answer renderer with citations, coverage rationale, and draft warning | `npm test` checks cited eligible sources; browser citation round-trip requires manual review |
| Narrow pilot corpus | `src/data.js` local `demo://` fixture corpus | Metadata/fake-location test passes |
| Governance metadata | Source cards and source detail `metadata()` | Required-field fixture test passes |
| Least-privilege representation | Simulated permission labels and governance disclosure | Static source inspection; no enforcement claim |
| Sensitive-data exclusion | Safety taxonomy in `src/retrieval.js` | Safety taxonomy test passes |
| Freshness and removal | Review-due warning and withdrawn-exclusion rule | Review-due/withdrawn tests pass |
| NUS approval questions | Governance awaiting-confirmation panel and decision register | Static source inspection; no claimed confirmation |
| No autonomous actions | Read-only controls; README boundary | Manual text/UI scan; no action controls present |
| Honest demo boundary | Header, About, README, local-only static test | Static test passes; network inspector is a manual gate |
| Cannot-prove disclosure | About and Governance panels | Static test passes |
| Degraded evidence | Four visible Ask presenter controls | Fixture outcome test passes; browser manual gate |
| Decision accountability | Governance decision register and committee ownership statement | Static source inspection; real owners/evidence intentionally unconfirmed |
| Stop and next-gate conditions | Governance stop card and next-gate list | Static source inspection; requirements not delivered by demo |
| Measurable demo usefulness | PRD’s moderated-review plan retained | **Manual gate — not run. Demo is not marked stakeholder-ready on this basis.** |

## Verification record

- `npm test` — deterministic source/retrieval/static-boundary tests.
- `node --check src/app.js` and `node --check src/retrieval.js` — module syntax.
- Parent Beryl aggregate check — run at handoff; any manifest update is recorded with test changes.
- Browser accessibility, responsive viewport, keyboard, and network panels — unavailable to this implementation environment and require a reviewer using a browser; no browser result is claimed here.
