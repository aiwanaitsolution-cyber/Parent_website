import { google } from 'googleapis';
import { mkdir, appendFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fallbackLeadFile = join(__dirname, '../../data/leads.jsonl');

function getSheetsClient() {
  const rawCredentials = process.env.GOOGLE_SERVICE_ACCOUNT;
  if (!rawCredentials) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT');
  }

  const credentials = JSON.parse(rawCredentials);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

export async function appendLead(lead) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId || !process.env.GOOGLE_SERVICE_ACCOUNT) {
    await mkdir(dirname(fallbackLeadFile), { recursive: true });
    await appendFile(fallbackLeadFile, `${JSON.stringify(lead)}\n`, 'utf8');
    return { ok: true, target: 'local-jsonl', warning: 'Google Sheets env not configured' };
  }

  const sheets = getSheetsClient();
  const values = [[
    lead.createdAt,
    lead.id,
    lead.type,
    lead.name,
    lead.email,
    lead.phone,
    lead.company,
    lead.service,
    lead.message,
    lead.preferredDate,
    lead.preferredTime,
    lead.sourcePage,
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Leads!A:L',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });

  return { ok: true, target: 'google-sheets' };
}
