import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { leadsRouter } from './routes/leads.js';

const app = express();
const port = process.env.PORT || 8080;
const allowedOrigins = (process.env.FRONTEND_ORIGIN || '*')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

function isAllowedOrigin(origin) {
  if (!origin) return true;
  if (allowedOrigins.includes('*')) return true;
  if (allowedOrigins.includes(origin)) return true;

  try {
    const { hostname } = new URL(origin);
    return hostname.endsWith('.vercel.app') && allowedOrigins.some((allowed) => allowed.endsWith('.vercel.app'));
  } catch {
    return false;
  }
}

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) return callback(null, true);
    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
}));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'aiwana-lead-backend' });
});

app.use('/api/leads', leadsRouter);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Aiwana backend running on port ${port}`);
});
