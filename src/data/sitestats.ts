// Single source of truth for headline numbers (update here only).
// Source: DOSHS Approved Persons Report export, 25 Oct 2026.
// ORGANIZATIONS is a conservative floor: branches are grouped under one organization.
export const SITE_STATS = {
  ORGANIZATIONS: '120+',
  WORKPLACES: '285+',
  REPORTS: '613+', // OSH audits + risk assessments filed
} as const;
