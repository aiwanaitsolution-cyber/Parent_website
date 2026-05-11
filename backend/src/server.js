import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { leadsRouter } from './routes/leads.js';

const app = express();
const port = process.env.PORT || 8080;
const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';

app.use(helmet());
app.use(cors({ origin: allowedOrigin === '*' ? true : allowedOrigin }));
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
