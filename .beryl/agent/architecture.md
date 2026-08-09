# Architecture

## Bounded Contexts

| Context | Owns | Does Not Own | Public Entry Point |
| --- | --- | --- | --- |
| Demo corpus | Fictional source fixtures, scenario fixtures, and required governance metadata. | Query classification or DOM rendering. | `src/data.js` exports |
| Retrieval policy | Deterministic query classification, source eligibility, coverage, safety refusals, and filtering. | Browser state, network access, or persistence. | `src/retrieval.js` exports |
| Demo surface | Browser state, route rendering, source-detail navigation, and accessible user interactions. | Retrieval-policy decisions or source fixture definitions. | `src/app.js` |

## Boundary Rules

1. `src/retrieval.js` may consume exported fixtures from `src/data.js`; `src/app.js` consumes the public exports of both modules.
2. Keep source eligibility and safety decisions in retrieval policy, not in rendering code.
3. All fixtures stay local and fictional. Do not introduce external APIs, SDKs, telemetry, browser storage, or credentials.
4. The UI may represent governance controls, but must label them as simulations and must not imply enforcement.
5. Withdrawn sources are rejected before answer rendering; unsupported and prohibited queries return explicit boundary outcomes rather than generated guidance.

## Public Interface Rule

Keep the current ES-module exports explicit and small: fixture exports in `src/data.js`, and `getSource`, `classifyQuery`, `answerQuery`, and `filterSources` in `src/retrieval.js`.

## Forbidden Import/Capability Policy

- No `fetch`, `XMLHttpRequest`, telemetry/beacon, `localStorage`, `sessionStorage`, authentication, or AI SDK usage in the demo runtime.
- `src/app.js` must not duplicate or bypass eligibility, safety, or answer-routing decisions from `src/retrieval.js`.
