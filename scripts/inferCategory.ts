// scripts/inferCategory.ts
export function inferCategory(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes('ampoule') || lower.includes('ampoules')) return 'injectables-ampoules';
  if (lower.includes('tab') || lower.includes('tablet')) return 'oral-tablets';
  if ((lower.includes('ml') || lower.includes('injection')) && lower.includes('i.m')) return 'vials';
  return 'others';
}
