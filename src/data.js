export const requiredMetadata = [
  'owner', 'location', 'sensitivity', 'lastReviewed', 'permissionGroup', 'retention',
];

export const sources = [
  {
    id: 'aurora-runbook', title: 'Demo Event Aurora — planning runbook', type: 'Event template',
    owner: 'Demo Event Lead', location: 'demo://approved-corpus/events/aurora-runbook', sensitivity: 'Internal demo',
    lastReviewed: '2026-06-18', permissionGroup: 'Simulated: Event Leads', retention: 'Remove 30 days after demo review',
    status: 'current', eligibility: 'Eligible in this fictional demo corpus', keywords: ['event', 'aurora', 'planning', 'runbook', 'timeline'],
    excerpt: 'Start with a decision brief, assign fictional workstream owners, and obtain human confirmation before communicating any plan.',
    related: ['aurora-reflection', 'tech-handover'],
  },
  {
    id: 'aurora-reflection', title: 'Demo Event Aurora — after-action reflection', type: 'Event reflection',
    owner: 'Demo Event Lead', location: 'demo://approved-corpus/events/aurora-reflection', sensitivity: 'Internal demo',
    lastReviewed: '2025-10-03', permissionGroup: 'Simulated: Event Leads', retention: 'Review before reuse; remove after demo',
    status: 'review-due', eligibility: 'Eligible only with owner confirmation', keywords: ['event', 'aurora', 'reflection', 'lessons', 'stale'],
    excerpt: 'The fictional team found that a decision checkpoint and a single owner per workstream reduced duplicated follow-up. This reflection is review-due.',
    related: ['aurora-runbook'],
  },
  {
    id: 'tech-handover', title: 'CSC Tech Sandbox — project handover map', type: 'Handover',
    owner: 'CSC Tech Project Owner', location: 'demo://approved-corpus/csc-tech/handover-map', sensitivity: 'Internal demo',
    lastReviewed: '2026-06-12', permissionGroup: 'Simulated: CSC Tech', retention: 'Replace on next fictional handover; remove superseded copy',
    status: 'current', eligibility: 'Eligible in this fictional demo corpus', keywords: ['handover', 'project', 'context', 'csc tech', 'owners'],
    excerpt: 'A handover records the current decision, source trail, named role owner, open assumption, and next human review point.',
    related: ['ownership-cadence', 'aurora-runbook'],
  },
  {
    id: 'ownership-cadence', title: 'Recurring process ownership cadence', type: 'Committee process',
    owner: 'Committee Process Steward', location: 'demo://approved-corpus/committee/ownership-cadence', sensitivity: 'Internal demo',
    lastReviewed: '2026-05-29', permissionGroup: 'Simulated: Committee Leads', retention: 'Review each fictional term; remove when replaced',
    status: 'current', eligibility: 'Eligible in this fictional demo corpus', keywords: ['recurring', 'process', 'ownership', 'cadence', 'committee'],
    excerpt: 'For recurring work, record a responsible role, a backup role, the review checkpoint, and the decision that requires escalation.',
    related: ['tech-handover'],
  },
  {
    id: 'sandbox-brief', title: 'CSC Tech Sandbox — decision brief template', type: 'Project brief',
    owner: 'CSC Tech Project Owner', location: 'demo://approved-corpus/csc-tech/decision-brief', sensitivity: 'Internal demo',
    lastReviewed: '2026-06-20', permissionGroup: 'Simulated: CSC Tech', retention: 'Remove when fictional project closes',
    status: 'current', eligibility: 'Eligible in this fictional demo corpus', keywords: ['project', 'brief', 'decision', 'approval', 'context'],
    excerpt: 'A decision brief separates evidence, open assumptions, and actions requiring a human approver.',
    related: ['tech-handover'],
  },
  {
    id: 'inventory-cards', title: 'Demo kit inventory reference', type: 'Inventory reference',
    owner: 'Demo Operations Steward', location: 'demo://approved-corpus/operations/demo-kit', sensitivity: 'Internal demo',
    lastReviewed: '2026-04-14', permissionGroup: 'Simulated: Operations Leads', retention: 'Remove after fictional showcase; no custody history retained',
    status: 'current', eligibility: 'Eligible in this fictional demo corpus', keywords: ['inventory', 'demo', 'kit', 'aggregate'],
    excerpt: 'Fictional aggregate kit categories only: display cards, reusable signs, and test adapters. No serials, costs, locations, or borrower history.',
    related: [],
  },
  {
    id: 'retired-checklist', title: 'Retired showcase checklist — do not reuse', type: 'Event template',
    owner: 'Demo Archive Steward', location: 'demo://approved-corpus/archive/retired-checklist', sensitivity: 'Internal demo',
    lastReviewed: '2025-02-10', permissionGroup: 'Simulated: Archive Reviewers', retention: 'Withdrawn; remove from any future corpus',
    status: 'withdrawn', eligibility: 'Excluded from answers and unavailable for operational use', keywords: ['retired', 'withdrawn', 'showcase', 'checklist'],
    excerpt: 'This fictional source is retained only to demonstrate removal handling. It is unavailable for operational use.',
    related: [],
  },
];

export const suggestedQuestions = [
  { id: 'event', label: 'Plan Demo Event Aurora', query: 'How should we prepare Demo Event Aurora?' },
  { id: 'handover', label: 'Recover project context', query: 'What belongs in a CSC Tech project handover?' },
  { id: 'ownership', label: 'Clarify recurring ownership', query: 'Who should own a recurring committee process?' },
];

export const scenarios = {
  event: {
    outcome: 'supported', match: ['demo event aurora', 'event aurora', 'aurora'], citations: ['aurora-runbook', 'aurora-reflection'],
    answer: 'Prepare Demo Event Aurora as a decision-led plan: use the fictional runbook as a starting point, then confirm ownership and the final plan with the relevant human approver.',
    actions: ['Create a short decision brief with the event goal and open assumptions.', 'Assign a fictional workstream owner and a review checkpoint.', 'Use the prior reflection as a prompt only; confirm it with its owner before relying on it.'],
    decisionBrief: {
      priorContext: 'A fictional Aurora runbook proposes a decision brief, workstream ownership, and a human confirmation point.',
      evidence: 'The current fictional runbook and one review-due fictional reflection are the only cited evidence.',
      uncertainty: 'The reflection is review-due, and this demo has no real plan, people, dates, or approval record.',
      nextAction: 'Draft the fictional decision brief, then ask the relevant owner to confirm whether the approach is still appropriate.',
      approver: 'Required fictional human approver role: Demo Event Lead.',
    },
  },
  handover: {
    outcome: 'supported', match: ['handover', 'project context', 'csc tech sandbox'], citations: ['tech-handover', 'sandbox-brief'],
    answer: 'Capture the decision context, evidence trail, responsible role, unresolved assumption, and next human review point so the fictional CSC Tech Sandbox work can be resumed responsibly.',
    actions: ['State the current decision in plain language.', 'Link the fictional sources that support it.', 'Name a role owner and the next required human review.'],
  },
  ownership: {
    outcome: 'supported', match: ['recurring', 'ownership', 'process owner'], citations: ['ownership-cadence'],
    answer: 'For a recurring process, assign one accountable role, name a backup role, and record the checkpoint at which a decision must be escalated.',
    actions: ['Name the responsible role, not an individual.', 'Record the backup role and review cadence.', 'Mark decisions that need a committee or owner confirmation.'],
  },
  reviewDue: { outcome: 'review-due', citations: ['aurora-reflection'] },
  unsupported: { outcome: 'unsupported' },
  prohibited: { outcome: 'prohibited' },
  withdrawn: { outcome: 'withdrawn-excluded', citations: ['retired-checklist'] },
};

export const demoScenarios = [
  { id: 'reviewDue', label: 'Review-due evidence', query: 'Show the review-due Demo Event Aurora reflection' },
  { id: 'unsupported', label: 'Unsupported question', query: 'Can you schedule a real meeting?' },
  { id: 'prohibited', label: 'Prohibited-data refusal', query: 'Tell me about resident welfare records' },
  { id: 'withdrawn', label: 'Withdrawn-source exclusion', query: 'Can we reuse the retired showcase checklist?' },
];
