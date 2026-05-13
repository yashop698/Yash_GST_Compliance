export const TOPICS = [
  {
    id: 'rcm',
    label: 'Reverse Charge Mechanism',
    abbr: 'RCM',
    color: '#1d4ed8',
    bg: '#dbeafe',
    docs: [
      { id: 'rcm-01', title: 'RCM Overview', file: '/GST_Compliance_Analysis/Topic_1_RCM/01_RCM_Overview.md' },
      { id: 'rcm-02', title: 'Legal Framework', file: '/GST_Compliance_Analysis/Topic_1_RCM/02_RCM_Legal_Framework.md' },
      { id: 'rcm-03', title: 'Eligibility and Exclusions', file: '/GST_Compliance_Analysis/Topic_1_RCM/03_RCM_Eligibility_and_Exclusions.md' },
      { id: 'rcm-04', title: 'Path A: By Transaction Type', file: '/GST_Compliance_Analysis/Topic_1_RCM/04_RCM_Path_A_Transaction_Type.md' },
      { id: 'rcm-05', title: 'Path B: By Rule Section', file: '/GST_Compliance_Analysis/Topic_1_RCM/05_RCM_Path_B_Rule_Section.md' },
      { id: 'rcm-06', title: 'Practical Implementation', file: '/GST_Compliance_Analysis/Topic_1_RCM/06_RCM_Practical_Implementation.md' },
      { id: 'rcm-07', title: 'Advanced Scenarios', file: '/GST_Compliance_Analysis/Topic_1_RCM/07_RCM_Scenarios_Advanced.md' },
      { id: 'rcm-08', title: 'Audit and Compliance', file: '/GST_Compliance_Analysis/Topic_1_RCM/08_RCM_Audit_and_Compliance.md' },
      { id: 'rcm-09', title: 'Amendments and Clarifications', file: '/GST_Compliance_Analysis/Topic_1_RCM/09_RCM_Amendments_and_Clarifications.md' },
      { id: 'rcm-10', title: 'Ambiguity and Conflicts', file: '/GST_Compliance_Analysis/Topic_1_RCM/10_RCM_Ambiguity_and_Conflicts.md' },
    ],
  },
  {
    id: 'itc',
    label: 'Blocked ITC (Section 17(5))',
    abbr: 'ITC',
    color: '#dc2626',
    bg: '#fee2e2',
    docs: [
      { id: 'itc-01', title: 'Blocked ITC Overview', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/01_Blocked_ITC_Overview.md' },
      { id: 'itc-02', title: 'Legal Framework', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/02_Blocked_ITC_Legal_Framework.md' },
      { id: 'itc-03', title: 'Path A: By Section 17(5) Clause', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/03_Blocked_ITC_Path_A_Schedule_III.md' },
      { id: 'itc-04', title: 'Path B: By Practical Category', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/04_Blocked_ITC_Path_B_Grouped_Category.md' },
      { id: 'itc-05', title: 'Eligibility Decision Logic', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/05_Blocked_ITC_Eligibility_Logic.md' },
      { id: 'itc-06', title: 'Interaction with RCM / Apportionment', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/06_Blocked_ITC_Interaction.md' },
      { id: 'itc-07', title: 'Practical Implementation', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/07_Blocked_ITC_Practical_Implementation.md' },
      { id: 'itc-08', title: 'Advanced Scenarios', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/08_Blocked_ITC_Scenarios_Advanced.md' },
      { id: 'itc-09', title: 'Errors and Compliance', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/09_Blocked_ITC_Errors_and_Compliance.md' },
      { id: 'itc-10', title: 'Amendments and Circulars', file: '/GST_Compliance_Analysis/Topic_2_Blocked_ITC/10_Blocked_ITC_Amendments.md' },
    ],
  },
  {
    id: 'apr',
    label: 'ITC Apportionment (Rule 43)',
    abbr: 'APR',
    color: '#16a34a',
    bg: '#dcfce7',
    docs: [
      { id: 'apr-01', title: 'Apportionment Overview', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/01_Apportionment_Overview.md' },
      { id: 'apr-02', title: 'Legal Framework (Rule 43)', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/02_Apportionment_Legal_Framework.md' },
      { id: 'apr-03', title: 'Triggers and Input Classification', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/03_Apportionment_Triggers.md' },
      { id: 'apr-04', title: 'Methods and Calculations', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/04_Apportionment_Methods_Calculations.md' },
      { id: 'apr-05', title: 'Step-by-Step Implementation', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/05_Apportionment_Step_by_Step.md' },
      { id: 'apr-06', title: 'Eligibility of Inputs', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/06_Apportionment_Eligibility.md' },
      { id: 'apr-07', title: 'Blocked ITC Interaction', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/07_Apportionment_Blocked_ITC_Interaction.md' },
      { id: 'apr-08', title: 'Advanced Scenarios', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/08_Apportionment_Scenarios_Advanced.md' },
      { id: 'apr-09', title: 'Practical Monthly Tracking', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/09_Apportionment_Practical_Monthly.md' },
      { id: 'apr-10', title: 'Audit and Compliance', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/10_Apportionment_Audit_and_Compliance.md' },
      { id: 'apr-11', title: 'Amendments (2017–May 2026)', file: '/GST_Compliance_Analysis/Topic_3_Apportionment/11_Apportionment_Amendments.md' },
    ],
  },
  {
    id: 'shared',
    label: 'Shared Reference',
    abbr: 'REF',
    color: '#7c3aed',
    bg: '#ede9fe',
    docs: [
      { id: 'shr-01', title: 'Glossary', file: '/GST_Compliance_Analysis/Shared/Glossary.md' },
      { id: 'shr-02', title: 'Amendments Timeline (May 2026)', file: '/GST_Compliance_Analysis/Shared/Amendments_Timeline_May_2026.md' },
      { id: 'shr-03', title: 'Cross-Topic References', file: '/GST_Compliance_Analysis/Shared/Cross_Topic_References.md' },
      { id: 'shr-04', title: 'Disputed and Ambiguous Areas', file: '/GST_Compliance_Analysis/Shared/Disputed_Ambiguous_Areas.md' },
    ],
  },
]

export const ALL_DOCS = TOPICS.flatMap(t =>
  t.docs.map(d => ({ ...d, topicId: t.id, topicLabel: t.label, topicColor: t.color, topicBg: t.bg, topicAbbr: t.abbr }))
)

export function findDoc(id) {
  return ALL_DOCS.find(d => d.id === id)
}

// Load all markdown files eagerly via Vite's import.meta.glob
const rawFiles = import.meta.glob('/GST_Compliance_Analysis/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export function getContent(filePath) {
  return rawFiles[filePath] ?? '> Content not found.'
}
