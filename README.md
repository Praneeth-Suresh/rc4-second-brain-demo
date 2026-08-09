# RC4 Second Brain — fictional offline demo

This is a dependency-free, read-only front-end demonstration of a proposed evidence-review workflow. It uses a small local fictional corpus only. It is not connected to NUS AI Know, real RC4 records, credentials, telemetry, or any external service.

## Run locally

Node/npm are used only for deterministic tests; no package installation is required.

```bash
npm test
npm start
```

Then open `http://localhost:4173`. Any static HTTP server can serve this directory; ES modules will not work from a `file://` URL in all browsers.

## Suggested walkthrough

1. On **Ask**, choose “Plan Demo Event Aurora.”
2. Read the Leadership decision brief, coverage basis, review-due warning, and draft warning.
3. Open a citation and use **Back to unchanged answer**.
4. Use the four **Demo scenarios** controls to show review-due, unsupported, prohibited-data, and withdrawn-source handling.
5. Inspect **Sources**, then **Governance** and **About this demo**.

## Deliberate limitations

- Every source, owner role, location, date, and excerpt is fictional local seed data.
- Query text stays only in browser runtime memory for the current page session; the app has no storage, network, logging, analytics, or authentication code.
- The UI represents proposed traceability, permission labels, freshness, and removal controls. It does not implement or prove authorization, auditing, security, retention enforcement, platform suitability, model-training settings, real retrieval quality, or user adoption.
- No result is an operational instruction or approval. A real pilot would require separately documented platform confirmation, owner approvals, operating procedures, measures, and stop authority.

See [TRACEABILITY.md](TRACEABILITY.md) for implementation evidence and remaining presentation gates.
