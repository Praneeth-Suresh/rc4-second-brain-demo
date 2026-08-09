import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { demoScenarios, requiredMetadata, scenarios, sources } from '../src/data.js';
import { answerQuery, filterSources } from '../src/retrieval.js';

test('event scenario returns citations and warns about review-due evidence', () => {
  const result = answerQuery('How should we plan Demo Event Aurora?');
  assert.equal(result.kind, 'supported');
  assert.equal(result.sources.length, 2);
  assert.equal(result.hasReviewDue, true);
  assert.ok(result.sources.every((source) => source.status !== 'withdrawn'));
});

test('sensitive question receives boundary response without an operational answer', () => {
  const result = answerQuery('What welfare concerns do residents have?');
  assert.equal(result.kind, 'safety');
  assert.match(result.message, /does not store your query/i);
});

test('unsupported question receives deterministic no-result response', () => {
  const result = answerQuery('Can you book a venue?');
  assert.equal(result.kind, 'no-result');
  assert.match(result.message, /No answer was invented/i);
});

test('generic planning terms do not accidentally route to the Aurora scenario', () => {
  assert.equal(answerQuery('How should we plan the project?').kind, 'no-result');
});

test('withdrawn source is an explicit exclusion and never partial evidence', () => {
  const result = answerQuery('Can we reuse the retired showcase checklist?');
  assert.equal(result.kind, 'withdrawn-excluded');
  assert.match(result.message, /contributed no evidence/i);
});

test('all required safety categories are refused without echoing the query', () => {
  for (const query of ['confidential student record', 'private finance', 'unapproved external cloud AI']) {
    assert.equal(answerQuery(query).kind, 'safety');
  }
});

test('search and review-status filter yield deterministic subsets', () => {
  assert.equal(filterSources({ search: 'aurora' }).length, 2);
  assert.deepEqual(filterSources({ status: 'withdrawn' }).map((source) => source.id), ['retired-checklist']);
  assert.deepEqual(filterSources({ search: 'not-in-corpus' }), []);
});

test('every seeded source has complete governance metadata and is clearly fictional', () => {
  assert.equal(sources.length >= 6 && sources.length <= 10, true);
  for (const source of sources) {
    for (const field of requiredMetadata) assert.ok(source[field], `${source.id} needs ${field}`);
    assert.match(source.location, /^demo:\/\//);
    assert.equal(/@|https?:\/\//.test(source.location), false);
    assert.ok(source.related.every((id) => sources.some((candidate) => candidate.id === id)), `${source.id} has a valid related source`);
  }
});

test('scenario fixtures declare all presenter outcomes', () => {
  const outcomes = new Set(Object.values(scenarios).map((scenario) => scenario.outcome));
  for (const outcome of ['supported', 'review-due', 'unsupported', 'prohibited', 'withdrawn-excluded']) assert.ok(outcomes.has(outcome));
  assert.equal(demoScenarios.length, 4);
});

test('event decision brief contains all five human-decision fields', () => {
  const brief = scenarios.event.decisionBrief;
  for (const field of ['priorContext', 'evidence', 'uncertainty', 'nextAction', 'approver']) assert.ok(brief[field]);
});

test('static app keeps the workspace concise and ships a technical pitch deck', async () => {
  const app = await readFile(new URL('../src/app.js', import.meta.url), 'utf8');
  assert.match(app, /Find the <em>context<\/em> you need/);
  assert.match(app, /Operational context is scattered/);
  assert.match(app, /A governed retrieval layer/);
  assert.match(app, /Ingestion: approved corpus allowlist/);
  assert.match(app, /Approve a controlled pilot/);
  assert.doesNotMatch(app, /CANONICAL WALKTHROUGH/);
  assert.doesNotMatch(app, /What this cannot prove/);
  assert.doesNotMatch(app, /Presenter controls/);
  assert.equal(/fetch\(|XMLHttpRequest|localStorage|sessionStorage|navigator\.sendBeacon/.test(app), false);
});
