# Testing Policy

## Command Matrix

| Check | Command | Status | Notes |
| --- | --- | --- | --- |
| Unit/static boundary tests | `npm test` | available | Node built-in test runner; validates routing, safety/no-result behavior, metadata, and local-only constraints. |
| Markdown sanity | `./.beryl/scripts/check-md.sh` | available | Beryl deterministic check. |
| Test manifest immutability | `./.beryl/scripts/check-tests-unchanged.sh` | available | Tracks the configured `tests/**` scope. |
| Aggregate deterministic gate | `./.beryl/scripts/check.sh` | available | Includes Beryl checks and the configured full project test fallback. |
| Format | not configured | unavailable | No formatter command is declared in `package.json`. |
| Lint | not configured | unavailable | No lint command is declared in `package.json`. |
| Typecheck | not configured | unavailable | JavaScript project with no typecheck command declared. |
| Browser walkthrough | browser automation/manual review | required for UI changes | Verify keyboard, responsive, citation-return, and degraded scenarios when a browser tool is available. |

## Default Loop

1. For retrieval/data changes, run `npm test` first.
2. For HTML, CSS, or browser-state changes, also capture browser evidence for the changed workflow when browser automation is available.
3. Run `./.beryl/scripts/check.sh` before handoff.
4. Never weaken boundary or safety tests to make an implementation pass.

## Test Modification Rule

Intentional test changes require an explicit behavior/design change, `./.beryl/scripts/update-test-manifest.sh`, and inclusion of `tests/.manifest.sha256` with the test change. The final handoff must explain both changes.

## Boundary Regression Coverage

Protect the following behavior: cited eligible answers; review-due warnings; no-result and prohibited-data outcomes; withdrawn-source exclusion before rendering; complete fictional metadata; and absence of network/persistence/telemetry APIs.
