# Aiwana Lead Backend

Standalone Express backend for Render.

## Endpoints

- `GET /api/health`
- `POST /api/leads`

## Lead payload

```json
{
  "type": "audit",
  "name": "Client Name",
  "email": "client@example.com",
  "phone": "+91...",
  "company": "Company",
  "service": "Free IT Audit",
  "message": "Need website and automation help",
  "preferredDate": "2026-05-10",
  "preferredTime": "11:00",
  "sourcePage": "contact"
}
```

## Render setup

1. Set root directory to `backend`.
2. Build command: `npm install`.
3. Start command: `npm start`.
4. Add environment variables from `.env.example`.
5. Create a Google Sheet tab named `Leads` with columns A to L.

## Fallback behavior

If Google Sheets or Gmail env vars are missing, `POST /api/leads` will still return success and save leads to `backend/data/leads.jsonl` locally. This prevents local development from failing.

For production, configure `GOOGLE_SERVICE_ACCOUNT`, `GOOGLE_SHEET_ID`, `GMAIL_USER`, and `GMAIL_PASS` so leads go to Google Sheets and Gmail.
