import type { LeadType } from './site';

export interface LeadPayload {
  type: LeadType;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  sourcePage?: string;
}

export async function submitLead(payload: LeadPayload) {
  const apiBase = import.meta.env.VITE_API_BASE_URL || '';
  const endpoint = `${apiBase}/api/leads`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.error || 'Submission failed. Please try again.');
  }

  return data as { success: true; id: string };
}
