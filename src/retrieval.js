import { scenarios, sources } from './data.js';

const safetyTerms = ['welfare', 'discipline', 'disciplinary', 'resident', 'personal data', 'personal information', 'identity', 'confidential finance', 'private finance', 'financial record', 'student record', 'external-cloud ai', 'external cloud ai'];

export function getSource(id) {
  return sources.find((source) => source.id === id);
}

export function classifyQuery(query) {
  const normalized = String(query || '').toLowerCase().trim();
  if (safetyTerms.some((term) => normalized.includes(term))) return { kind: 'safety' };
  if (normalized.includes('retired showcase checklist') || normalized.includes('withdrawn')) return { kind: 'withdrawn-excluded', scenario: scenarios.withdrawn };
  if (normalized.includes('review-due') || normalized.includes('review due')) return { kind: 'supported', scenario: scenarios.reviewDue };
  const scenario = Object.values(scenarios).find(({ match = [] }) => match.some((term) => normalized.includes(term)));
  return scenario ? { kind: 'supported', scenario } : { kind: 'no-result' };
}

export function answerQuery(query) {
  const result = classifyQuery(query);
  if (result.kind === 'safety') {
    return { ...result, title: 'This question is outside the demo boundary', message: 'This fictional demo does not handle resident identity, welfare, discipline, confidential finance, or personal data. It does not store your query. Contact the relevant accountable owner through an approved process.' };
  }
  if (result.kind === 'no-result') {
    return { ...result, title: 'No supported answer in the approved demo sources', message: 'The fictional corpus cannot answer this question. Refine the query using event planning, handover, or recurring-process ownership terms, or contact the relevant owner. No answer was invented.' };
  }
  if (result.kind === 'withdrawn-excluded') return { ...result, title: 'Withdrawn source excluded', message: 'The fictional Retired showcase checklist is withdrawn, unavailable for operational use, and contributed no evidence to an answer. Contact the relevant owner for a current approved starting point.' };
  const citationIds = result.scenario.citations || [];
  const citationSources = citationIds.map(getSource);
  if (!citationSources.length || citationSources.some((source) => !source || source.status === 'withdrawn')) return { kind: 'withdrawn-excluded', title: 'Source excluded before answer rendering', message: 'A required fictional source is unavailable, so the demo will not produce a partial or unsupported answer. Contact the relevant owner for a current approved starting point.' };
  const reviewDueCount = citationSources.filter((source) => source.status === 'review-due').length;
  const coverage = { label: `${citationSources.length} eligible fictional source${citationSources.length === 1 ? '' : 's'}`, rationale: `Deterministic basis: ${citationSources.length} cited local fictional source${citationSources.length === 1 ? '' : 's'}; ${reviewDueCount ? `${reviewDueCount} is review-due and needs owner confirmation.` : 'all cited sources are marked current in this demo.'}`, eligibleCount: citationSources.length, reviewDueCount };
  const scenario = result.scenario.outcome === 'review-due' ? { ...scenarios.event, citations: ['aurora-reflection'], answer: 'This review-due fictional reflection can help frame a question, but it must not be relied on without owner confirmation.', actions: ['Review the fictional reflection as a prompt only.', 'Confirm its current relevance with the fictional owner.', 'Use a current source before forming a real plan.'] } : result.scenario;
  return { kind: 'supported', scenario, sources: citationSources, citationIds, answerId: `answer-${scenario === scenarios.event ? 'event' : citationIds.join('-')}`, coverage, hasReviewDue: reviewDueCount > 0 };
}

export function filterSources({ search = '', type = 'all', owner = 'all', status = 'all' } = {}) {
  const terms = search.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return sources.filter((source) => {
    const haystack = `${source.title} ${source.keywords.join(' ')} ${source.excerpt}`.toLowerCase();
    return (!terms.length || terms.every((term) => haystack.includes(term)))
      && (type === 'all' || source.type === type)
      && (owner === 'all' || source.owner === owner)
      && (status === 'all' || source.status === status);
  });
}
