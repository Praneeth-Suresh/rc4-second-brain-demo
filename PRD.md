# RC4 Second Brain Demo — Product Requirements

## 1. Product Summary

The RC4 Second Brain demo is a read-only, browser-based product demonstration of a proposed knowledge layer for RC4 operational documents. Security is a required property of any future pilot, not a capability this demo validates. The demo must show how a simulated authorized student-leader persona could use source-backed context to prepare a decision, inspect its sources and uncertainty, and understand the governance controls that a real pilot would require.

This demo is evidence for an approval conversation, not a production deployment of NUS AI Know. It uses only fictional, non-sensitive seed data and must never imply that real RC4 documents, real access controls, or a live NUS AI Know integration are present.

## 2. Target Users

| User | Need represented in the demo |
| --- | --- |
| CSC Tech member | Recover technical and project context without rebuilding it from memory. |
| RC4 committee or event lead | Find prior plans, checklists, owners, decisions, and lessons for recurring work. |
| Document owner or reviewer | See document ownership, sensitivity, permission group, review date, and removal status. |
| Faculty, administrative, or data-governance reviewer | Evaluate the proposed value, access model, safety limits, and readiness gaps before approving a pilot. |

The primary demo persona simulates an authorized RC4 student leader; it is not an authenticated user. Governance reviewers are the secondary audience.

## 3. Demo Goals

1. Demonstrate a high-value leadership decision workflow across a small fictional corpus, using retrieval as supporting capability rather than an "ask anything" promise.
2. Demonstrate that every substantive answer is a reviewable draft grounded in visible source documents.
3. Make document governance, least-privilege access, sensitivity, freshness, and removal controls visible in the product experience.
4. Communicate the pilot's safety boundary clearly enough for stakeholders to distinguish the demo from an approved production system.
5. Provide a deterministic walkthrough that can be reviewed without network access, credentials, or an external AI service.

## 4. Non-Goals

The demo will not:

- integrate with NUS AI Know or claim NUS approval;
- ingest, upload, edit, or delete documents;
- use real RC4, NUS, resident, committee, finance, welfare, disciplinary, inventory, or personal data;
- provide real authentication, authorization, audit logging, encryption, retention enforcement, or model-training controls;
- generate unconstrained answers from a live model;
- send, publish, purchase, book, approve, or otherwise act on a user's behalf;
- demonstrate production administration, corpus maintenance, analytics, or a wider resident rollout;
- implement event-management or inventory-management transactions.

## 5. Product Scope and Demo Flow

The product is a responsive single-user web demo with four linked surfaces:

1. **Ask:** a knowledge-query workspace with suggested questions, a deterministic answer, citations, limitations, and a human-review warning.
2. **Sources:** a searchable/filterable document library and read-only document detail view.
3. **Governance:** a summary of pilot ownership, corpus controls, prohibited data, and approval gaps.
4. **About this demo:** a persistent disclosure of simulated features and fake-data boundaries.

The canonical walkthrough is:

1. A user starts from **Ask**, where the primary call to action is the fictional recurring-event question: **What should the lead decide now to start Demo Event Aurora, based on the eligible demo template and prior reflection?**
2. The demo returns a **Leadership decision brief** that separates prior decision/context, evidence, uncertainty, proposed next action, and the fictional role that must approve that next action. The system does not make the decision.
3. The user opens a citation, checks the fictional source and metadata, then returns to the unchanged brief.
4. The presenter runs four explicit degraded cases: a review-due source warning, an unsupported question, a prohibited-data refusal, and a withdrawn-source exclusion.
5. The user visits **Governance** to see why a source is eligible, which controls are simulated, what would stop a real pilot, and what still requires written NUS/platform confirmation.
6. The user opens **About this demo** and reviews **What this cannot prove** before any approval discussion.

## 6. User Stories

| ID | User story |
| --- | --- |
| US-01 | As an authorized student leader, I want to ask about a recurring operational task so that I can find an actionable starting point quickly. |
| US-02 | As an event lead, I want answers to cite prior templates and reflections so that I can verify and reuse relevant learning. |
| US-03 | As a cautious user, I want unsupported or sensitive questions to be declined clearly so that I do not mistake fabricated output for RC4 policy. |
| US-04 | As a document owner, I want each source to show its governance metadata and freshness so that I can judge whether it should be used. |
| US-05 | As a governance reviewer, I want to see the pilot's roles, controls, exclusions, and unresolved approvals so that I can assess whether a controlled pilot should proceed. |
| US-06 | As a demo viewer, I want simulated capabilities and fictional content to be unmistakable so that I do not confuse the prototype with a live NUS system. |
| US-07 | As a student leader, I want retrieved context organized into decision, evidence, uncertainty, next action, and approver so that I can make a better human decision rather than receive a generic summary. |
| US-08 | As an approver, I want successful and degraded cases demonstrated side by side so that I can judge the concept without a success-only walkthrough. |

## 7. Functional Requirements

### 7.1 Global shell and disclosure

| ID | Requirement |
| --- | --- |
| FR-01 | The app must provide persistent navigation to Ask, Sources, Governance, and About this demo. |
| FR-02 | Every surface must display a persistent label equivalent to **Demo only — fictional data, no NUS AI Know connection**. |
| FR-03 | The app must not display controls that suggest a completed production action, including upload, send, approve, book, purchase, publish, or invite. |
| FR-04 | The app must work without login, network access, or external service credentials. Any persona or permission selector must be labelled as a simulation, not authentication. |

### 7.2 Ask and answer

| ID | Requirement |
| --- | --- |
| FR-05 | Ask must lead with the recurring-event decision workflow and provide at least two additional suggested operational questions covering handover/project context and recurring process ownership. It must not position itself as an unrestricted "ask anything" assistant. |
| FR-06 | A user may submit free text, but responses must be produced only from deterministic seeded scenarios or a deterministic no-result/safety response. |
| FR-07 | A supported answer must contain: a direct response, a short actionable list, at least one source citation, a coverage state with its source-based rationale, and the warning **Draft — verify sources and obtain required human approval**. It must not present a numeric AI confidence score. |
| FR-08 | Each citation must open the corresponding source detail without losing the user's current answer. |
| FR-09 | If the corpus does not support the question, the app must say that it cannot answer from the approved demo sources and suggest refining the query or contacting the relevant owner. It must not invent an answer. |
| FR-10 | Questions involving prohibited categories such as resident identity, welfare, discipline, confidential finance, or personal data must return a safety refusal that explains the pilot boundary without echoing or storing sensitive details. |
| FR-11 | When a cited document is stale or pending review, the answer and source detail must visibly warn the user not to rely on it without owner confirmation. |

### 7.3 Source library

| ID | Requirement |
| --- | --- |
| FR-12 | Sources must list a fictional corpus of 6–10 documents across CSC Tech operations, committee processes, event templates/reflections, project briefs, and an optional non-sensitive inventory reference. |
| FR-13 | Every source must show: title, document type, owner role, fictional source location, sensitivity, last reviewed date, permission group, and retention/removal instruction. |
| FR-14 | Users must be able to search by title or keyword and filter by document type, owner role, and review status. |
| FR-15 | Source detail must show fictional content or a concise excerpt, full governance metadata, related sources where relevant, and whether the source is current, review-due, or withdrawn. |
| FR-16 | Withdrawn sources must be excluded from generated answers and visually marked unavailable for operational use. |
| FR-17 | The source library must contain no real names, contact details, IDs, room numbers, account data, URLs to private storage, or copied RC4 operational content. |

### 7.4 Governance and safety representation

| ID | Requirement |
| --- | --- |
| FR-18 | Governance must represent these roles: CSC Tech Director as project owner; faculty/administrative sponsor as unconfirmed; committee/stakeholder document owners; CSC Tech technical maintainers; and an approval review group. Named individuals from the proposal must not be represented as having approved the demo. |
| FR-19 | Governance must show the six required metadata/control fields: owner, source location, sensitivity, last reviewed date, permission group, and retention/removal instruction. |
| FR-20 | Governance must distinguish three states: **represented in demo**, **required for a real pilot**, and **awaiting NUS confirmation**. |
| FR-21 | The following must be listed as awaiting confirmation: approved document categories, NUS storage/retrieval boundaries, NUS user/group restriction, auditability, restrictions on committee/finance/resident/PII data, and answer logging/model-training use. |
| FR-22 | The following prohibited categories must be visible: disciplinary records, welfare records, confidential student records, private financial records, unnecessary personal data, and unapproved external-cloud AI use. |
| FR-23 | The app must state that least privilege, source traceability, human approval, document removal, and a data-concern escalation path are required production controls; visual representation does not prove enforcement. |

### 7.5 Accessibility and responsive behavior

| ID | Requirement |
| --- | --- |
| FR-24 | All core flows must be usable by keyboard with visible focus states and semantic labels for navigation, query input, filters, citations, warnings, and status messages. |
| FR-25 | Text and status indicators must meet WCAG 2.1 AA contrast expectations and must not rely on color alone. |
| FR-26 | Ask, source inspection, and governance content must remain usable at 360 px viewport width and at common desktop widths without horizontal page scrolling. |

### 7.6 Decision evidence and approval honesty

| ID | Requirement |
| --- | --- |
| FR-27 | The primary recurring-event response must render a **Leadership decision brief** with five distinct fields: prior decision/context, supporting evidence, uncertainty or missing context, proposed next action, and required fictional human approver role. |
| FR-28 | Every coverage state must explain its deterministic basis, such as the number and eligibility of cited sources and whether any are review-due. Coverage language must not imply real-model accuracy, completeness, or security. |
| FR-29 | About this demo, and a visible link or summary from Governance, must include a **What this cannot prove** panel. It must list retrieval quality on real documents, NUS security controls, real group authorization, audit records, retention/removal enforcement, logging/model-training settings, corpus quality, and user adoption. |
| FR-30 | Ask must provide a presenter-accessible **Demo scenarios** control for the four degraded cases: review-due source, unsupported question, prohibited-data refusal, and withdrawn-source exclusion. These states must use the same answer area as the successful workflow and must not require special developer tooling. |
| FR-31 | Governance must show an approval decision register for: demo presentation, platform suitability, each corpus category, pilot users/access groups, and expansion or shutdown. Each row must expose accountable role or office, named person/office status, written-evidence status, decision date, and escalation route; unresolved fields must remain visibly unconfirmed rather than be invented. |
| FR-32 | Governance must list the real-pilot stop conditions: unauthorized corpus inclusion, unconfirmed platform boundaries, incorrect permission exposure, uncitable or materially misleading answers, failure to remove withdrawn content, and no accountable sponsor. It must state that stop authority and user-notification procedure require assignment before real data or access. |
| FR-33 | Governance must state that contributing committees remain accountable for their operational records and document-owner obligations; CSC Tech's technical-maintainer role does not make it the owner or approver of all committee content. |
| FR-34 | The demo content must include a compact **Evidence needed for the next gate** checklist: written NUS/platform answers, accountable sponsor and decision record, itemized corpus allowlist with owner sign-off, review/removal/incident procedure, usefulness metrics, and stop criteria. It must state that these are not delivered by the demo. |

## 8. Governance and Safety Model

The demo represents governance as product information, not as implemented security. UI copy must preserve this distinction.

| Control area | Represented in this demo | Required before a real pilot |
| --- | --- | --- |
| Corpus approval | Every fake source has an eligibility and review state. | Document owner and platform/data-governance approval. |
| Access | A clearly labelled simulated permission group may explain least privilege. | NUS-backed identity, group authorization, and access testing. |
| Traceability | Answers link to fictional sources and metadata. | Reliable citations plus permitted query/document audit records. |
| Human authority | Every answer is labelled as a draft. | Usage policy, training, and accountable human approvers. |
| Freshness/removal | Current, review-due, and withdrawn states are demonstrated. | Owner workflow, retention policy, removal SLA, and corpus propagation checks. |
| Sensitive data | Sensitive query categories are refused and absent from seed data. | Approved classification policy, ingestion controls, incident response, and escalation contacts. |
| Platform boundary | The absence of a live integration is disclosed. | Written confirmation of NUS AI Know storage, access, logging, and model-training behavior. |
| Accountability | Unresolved decision owners and evidence gaps are visible. | Named accountable people/offices, dates, escalation routes, and executable procedures. |
| Stop authority | Proposed stop conditions are visible. | Assigned incident lead, pause authority, notification process, and tested operating procedure. |

### What this cannot prove

The implemented product must present this limitation as first-class demo content, not only in repository documentation:

> This fictional, deterministic demo can show the intended decision experience and safety messages. It cannot prove retrieval quality on real documents, NUS security or platform suitability, identity/group authorization, auditability, retention or removal enforcement, logging or model-training behavior, real corpus quality, or user adoption.

No usability result from the fake corpus may be described as evidence that a real pilot is secure, useful, approved, or ready.

## 9. Fake-Data Boundaries

1. All organizations, committees, events, projects, inventory items, source locations, dates, owners, and document contents in the corpus must be invented for the demo. Generic RC4 and CSC Tech role labels may be used, but no real person's name may appear as a document owner, approver, or participant.
2. The seed corpus must use obvious placeholders such as `Demo Event Aurora`, `CSC Tech Sandbox`, and `demo://approved-corpus/...`; it must not imitate a real private folder path or use a live URL.
3. Dates may be realistic but must not encode or imply actual RC4 decisions, schedules, or review history.
4. Inventory data, if included, must use fictional asset names and aggregate quantities only—never serial numbers, borrower history, locations, costs, or custody records.
5. The interface may simulate retrieval, citations, permission groups, review status, and safety refusals. It must label these as simulations and must not claim encryption, auditing, access enforcement, NUS hosting, or AI accuracy.
6. User-entered queries must remain in browser memory only for the current session; the demo must not transmit, persist, log, or include them in analytics.
7. Seed data must live locally in the demo codebase so reviewers can inspect it. A later implementation review must treat any non-seed network request or telemetry as a release blocker.

## 10. Demo Decision-Usefulness Evidence Plan

The stakeholder presentation must test a defined experience, not ask whether the audience liked a polished walkthrough. Use five fictional task scripts:

| Task | Expected safe outcome |
| --- | --- |
| Recurring-event kickoff | A complete Leadership decision brief grounded in the current event template and prior reflection. |
| Handover prioritization | A source-backed next-action draft that distinguishes prior context from a proposed action. |
| Process ownership | The current fictional owner role and review status, with no invented named person. |
| Review-due guidance | A usable summary with a prominent owner-confirmation warning and qualified coverage state. |
| Prohibited resident-data request | A boundary explanation with no operational answer and no persistence. |

Before stakeholder presentation, run a small moderated review with at least five representative CSC members or student leaders and record:

1. time to identify the decision, evidence, uncertainty, and required approver using the source library alone;
2. time to identify the same four elements using the decision brief;
3. whether each cited source and status was identified correctly;
4. whether the reviewer understood that the next action needs human approval; and
5. any no-answer, stale, missing-context, misleading-draft, or false-confidence event.

The demo-usefulness threshold is: at least four of five reviewers identify all four decision elements within two minutes using the brief; the median brief time is at least 50% lower than the manual-library baseline; all citations and freshness states are correct; and no degraded case produces a misleading or prohibited answer. Any incorrect/withdrawn citation, prohibited answer, or reviewer belief that simulated controls are real is a demo failure.

These measures evaluate comprehension and navigation on a fictional corpus only. They do not satisfy real-pilot usefulness, security, governance, or adoption evidence.

## 11. Acceptance Criteria

| ID | Acceptance criterion |
| --- | --- |
| AC-01 | From a fresh load, a reviewer can navigate to all four product surfaces and sees the demo/fake-data disclosure on each one. |
| AC-02 | Each of the three suggested questions produces a deterministic draft answer with an actionable list, coverage state, human-review warning, and one or more working citations. |
| AC-03 | Opening a citation reveals the matching fake source and all six governance metadata fields, then allows the reviewer to return to the unchanged answer. |
| AC-04 | An unsupported question returns a grounded no-result state and contains no invented operational answer. |
| AC-05 | A question about resident welfare, discipline, confidential finance, or personal data returns the safety-boundary response and creates no persisted browser or server record. |
| AC-06 | A review-due source produces a freshness warning; a withdrawn source never appears as evidence in an answer. |
| AC-07 | Source search and each required filter produce correct deterministic subsets of the 6–10-document corpus, including an explicit empty state. |
| AC-08 | Every seeded source passes a content review confirming fictional content, all required metadata, and absence of sensitive or identifying data. |
| AC-09 | Governance shows represented controls, real-pilot requirements, all six NUS confirmation questions, prohibited categories, ownership roles, and the unconfirmed sponsor state. |
| AC-10 | Browser/network inspection during the canonical walkthrough shows no external requests, telemetry, query persistence, or credential dependency. |
| AC-11 | Keyboard-only review can submit a question, open a citation, operate source filters, inspect governance, and perceive focus/status changes. Automated accessibility checks report no critical violations on the four surfaces. |
| AC-12 | At 360 px and a common desktop viewport, the canonical walkthrough completes without horizontal page scrolling, clipped actions, or unreadable answer/source content. |
| AC-13 | A repository text scan finds no claim that the demo is approved by NUS, connected to NUS AI Know, production-secure, or suitable for real sensitive data. |
| AC-14 | No UI control offers upload, edit, delete, send, publish, booking, purchase, approval, or other autonomous action. |
| AC-15 | On a fresh Ask view, the recurring-event decision workflow is the primary call to action and produces all five Leadership decision brief fields without suggesting that the system made or approved the decision. |
| AC-16 | About this demo contains the complete **What this cannot prove** disclosure, and Governance exposes it without requiring the reviewer to infer limitations from generic demo wording. |
| AC-17 | A presenter can run all four degraded cases from visible demo controls; each produces the specified warning, refusal, no-result, or exclusion state in the standard answer area. |
| AC-18 | Every coverage state explains its cited-source basis, qualifies review-due evidence, and contains no numeric or unsupported confidence claim. |
| AC-19 | Governance shows all five real-pilot decisions, unresolved accountability/evidence fields, all six stop conditions, committee content ownership, and the complete next-gate evidence checklist without implying these requirements have been fulfilled. |
| AC-20 | A five-person moderated review records the defined baseline and brief measures; it meets the demo-usefulness threshold with zero unsafe-failure event, or the demo is explicitly marked not ready for stakeholder presentation. |

## 12. Product Requirements Traceability Checklist

Use this checklist during design review, implementation review, and demo sign-off. A row is complete only when the implementation evidence and acceptance evidence have both been recorded.

| Review item | Proposal intent | Requirement IDs | Acceptance evidence | Status |
| --- | --- | --- | --- | --- |
| High-value decision workflow | Improve a recurring leadership decision, not generic retrieval. | US-01, US-02, US-07; FR-05–FR-08, FR-27–FR-28 | AC-02–AC-03, AC-15, AC-18 | [ ] |
| Operational knowledge retrieval | Search approved committee, event, handover, and project context. | US-01, US-02; FR-05–FR-09, FR-12–FR-15 | AC-02–AC-04, AC-07 | [ ] |
| Grounded draft outputs | Cite sources and require human review. | FR-07–FR-09, FR-11, FR-23 | AC-02–AC-04, AC-06 | [ ] |
| Narrow pilot corpus | Use only approved, non-sensitive operational categories. | FR-12, FR-17, FR-22 | AC-08, AC-09 | [ ] |
| Governance metadata | Owner, location, sensitivity, review date, permission group, retention/removal. | FR-13, FR-15, FR-19 | AC-03, AC-08 | [ ] |
| Least-privilege representation | Explain access restriction without claiming real enforcement. | FR-04, FR-20, FR-23 | AC-01, AC-09, AC-13 | [ ] |
| Sensitive-data exclusion | Exclude and refuse welfare, discipline, confidential finance, and PII use. | FR-10, FR-17, FR-22 | AC-05, AC-08, AC-09 | [ ] |
| Freshness and removal | Surface stale content and exclude withdrawn sources. | FR-11, FR-15, FR-16, FR-23 | AC-06 | [ ] |
| NUS approval questions | Keep platform, storage, access, audit, data, logging, and training questions unresolved. | FR-18, FR-20, FR-21, FR-23 | AC-09, AC-13 | [ ] |
| No autonomous actions | Answers remain drafts; no operational action is performed. | FR-03, FR-07 | AC-02, AC-14 | [ ] |
| Honest demo boundary | Disclose fake data, deterministic behavior, and no live NUS integration. | FR-02, FR-04, FR-06; fake-data boundaries 1–7 | AC-01, AC-08, AC-10, AC-13 | [ ] |
| Cannot-prove disclosure | State which real-platform, corpus, enforcement, and adoption claims remain unvalidated. | US-06; FR-29 | AC-16 | [ ] |
| Degraded evidence | Demonstrate stale, unsupported, prohibited, and withdrawn handling. | US-03, US-08; FR-09–FR-11, FR-16, FR-30 | AC-04–AC-06, AC-17 | [ ] |
| Decision accountability | Expose unresolved owners, evidence, dates, escalation, and content ownership. | US-05; FR-18, FR-31, FR-33 | AC-09, AC-19 | [ ] |
| Stop and next-gate conditions | Make shutdown triggers and missing pilot evidence explicit. | FR-21–FR-23, FR-32, FR-34 | AC-09, AC-19 | [ ] |
| Measurable demo usefulness | Compare manual lookup with decision-brief comprehension on the fake corpus. | US-07; Demo Decision-Usefulness Evidence Plan | AC-20 | [ ] |
| Accessible, responsive review | Core evidence is available across input methods and viewport sizes. | FR-24–FR-26 | AC-11, AC-12 | [ ] |

## 13. President Review Prompts

After the canonical walkthrough, the CSC President should give targeted feedback on:

1. **Value:** Which demonstrated workflow would save CSC or committee leaders the most repeated effort, and which feels unnecessary?
2. **Scope:** Is the proposed pilot corpus narrow enough? Name any document category that should be added, removed, or require separate approval.
3. **Trust:** Do citations, freshness warnings, and draft labels make it clear when a user must verify information? What could still create false confidence?
4. **Safety:** Are the prohibited-data and no-autonomous-action boundaries sufficient for an approval conversation? Identify any missing boundary.
5. **Ownership:** Are the proposed project, document, technical, sponsor, and review roles accountable enough? Identify any unclear owner.
6. **Decision:** What evidence or condition would be required before the President supports a controlled pilot, and what would be a stop condition?

## 14. Implementation Handoff for SWE

Implement the PRD as a deterministic state-driven demo, not as a prototype backend:

1. Define the local fictional source fixtures and scenario fixtures before UI composition. Each scenario should declare its outcome type (`supported`, `review-due`, `unsupported`, `prohibited`, or `withdrawn-excluded`), cited source IDs, coverage rationale, and decision-brief fields when applicable.
2. Build the recurring-event Leadership decision brief as the first vertical slice, including citation round-trip and unchanged answer state.
3. Reuse the same answer component for all degraded states so warnings and refusals are part of the product flow rather than presentation-only mockups.
4. Treat withdrawn-source eligibility as a data rule: withdrawn IDs must be rejected before answer rendering, even if a scenario fixture references one accidentally.
5. Keep all fixtures and query handling local. Do not add network requests, analytics, storage, authentication, AI SDKs, or NUS branding that implies integration.
6. Add deterministic tests for each scenario outcome, all required metadata, citation integrity, withdrawn-source rejection, no persistence/network behavior, and exact presence of the cannot-prove disclosure.
7. Capture browser evidence for the canonical and degraded walkthroughs at mobile and desktop widths, including keyboard operation and coverage-state explanations.

Implementation is complete only against the demo release gate below. Real-pilot procedures, owner appointments, NUS answers, and production controls remain documentation-only prerequisites and must not be fabricated in the UI.

## 15. Release Gate for the Demo

The demo is ready for stakeholder presentation only when:

- AC-01 through AC-20 pass;
- every traceability row has implementation and acceptance evidence;
- seed-data review confirms the fake-data boundaries;
- a reviewer confirms that represented controls are not described as production enforcement; and
- the product can complete the canonical walkthrough locally with no external service dependency.

Anything beyond this PRD—real documents, real user accounts, NUS AI Know connectivity, analytics, or production controls—requires a separately approved pilot plan.
