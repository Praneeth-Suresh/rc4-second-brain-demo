# Project Brief

## Product Goal

Build the **RC4 Second Brain demo** for CSC stakeholders and reviewers so they can evaluate a proposed evidence-review workflow without mistaking it for a production knowledge system or pilot approval.

## Primary Workflows

1. **Leadership decision brief:** a reviewer asks how to start fictional Demo Event Aurora, sees cited eligible sources, uncertainty, a draft next action, and the fictional role that must approve it.
2. **Evidence review:** a reviewer searches the fictional local source library, opens source metadata, and returns to the unchanged answer.
3. **Boundary demonstration:** a presenter shows review-due, unsupported, prohibited-data, and withdrawn-source outcomes, then reviews Governance and the demo limitations.

## Non-Goals

- Real RC4/NUS/resident/committee/finance/welfare/disciplinary/personal data, real documents, or real user access.
- NUS AI Know integration, network requests, analytics, credentials, authentication, authorization, audit logging, encryption, retention enforcement, or model-training controls.
- Uploading, editing, deleting, sending, booking, purchasing, approving, or otherwise acting for a user.
- Claims that simulated controls prove security, platform suitability, retrieval quality, or adoption.

## External Systems

| System | Why it exists | Interface owner | Failure fallback |
| --- | --- | --- | --- |
| None | The demo is deliberately local and deterministic. | N/A | No external dependency is permitted. |

## Definition Of Done

A demo change is complete only when it preserves the fictional/offline/read-only boundary, keeps substantive answers reviewable and cited, handles unsupported/sensitive/withdrawn cases without inventing an answer, passes `npm test` and `./.beryl/scripts/check.sh`, and has browser evidence when UI behavior changes.
