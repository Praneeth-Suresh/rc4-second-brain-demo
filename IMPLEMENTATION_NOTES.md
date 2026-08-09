# Implementation notes

## Approved delivery approach

The requested implementation authority covers a dependency-free static single-page demo. Its public interface is `index.html`; all retrieval behavior is a local, deterministic ES module and query text stays in runtime memory only.

## Success checks

- Expected artifacts: `index.html`, local CSS/JS modules, a seeded fictional corpus, and Node tests.
- Narrow check: `npm test` validates scenario routing, safety/no-result handling, and corpus metadata rules.
- Broader check: `./.beryl/scripts/check.sh` from the parent repository.
- Generated-output/browser evidence: inspect the static module graph; browser automation will be used only if a browser tool is available.
- User-visible proof: a reviewer can complete the event-planning walkthrough, open a citation, return to the preserved answer, and see a stale warning.

## Intended commit boundaries

1. **Deterministic demo domain** — `package.json`, `src/data.js`, `src/retrieval.js`, and `tests/retrieval.test.js`; validated with `npm test`.
2. **Accessible product surface** — `index.html`, `src/app.js`, and `styles.css`; validated with `npm test` plus browser/static inspection.
3. **Review handoff** — `README.md`, `TRACEABILITY.md`, and this file; validated with Markdown and aggregate checks.

## Frontend direction

**Subject / audience / job:** a committee lead preparing one recurring fictional event; the page must turn an approved-document trail into a cautious next-step brief.

**Tokens:** Ink `#17262b`, Paper `#f2efe7`, Signal `#f05a3c`, Moss `#7fa28c`, Lagoon `#427a81`, Mist `#dce5df`.

**Type:** system serif for high-context source headings; system sans for reading; monospace for evidence labels and document metadata. The design uses a “field dossier” rhythm: a narrow evidence rail and an oversized answer workspace.

**Signature:** the answer’s source trail is physically represented as a numbered evidence rail, so citations read as a chain of custody rather than generic cards. This is intentionally specific to evidence review and avoids a generic dashboard visual language.

**Self-critique:** the initial inclination toward an all-dark governance console was dropped: it would imply a production security posture. The final paper-and-ink dossier treatment keeps the boundary honest while reserving signal orange for warnings and reviewer decisions.
