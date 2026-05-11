import { Router } from 'express';
import { appendLead } from '../services/sheets.js';
import { sendLeadNotification } from '../services/mail.js';

export const leadsRouter = Router();

const allowedTypes = new Set(['contact', 'audit', 'appointment', 'product-demo', 'newsletter', 'career-talent']);

function isEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

leadsRouter.post('/', async (req, res, next) => {
  try {
    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      type: clean(req.body.type),
      name: clean(req.body.name),
      email: clean(req.body.email),
      phone: clean(req.body.phone),
      company: clean(req.body.company),
      service: clean(req.body.service),
      message: clean(req.body.message),
      preferredDate: clean(req.body.preferredDate),
      preferredTime: clean(req.body.preferredTime),
      sourcePage: clean(req.body.sourcePage),
      createdAt: new Date().toISOString(),
    };

    if (!allowedTypes.has(lead.type)) {
      return res.status(400).json({ success: false, error: 'Invalid lead type' });
    }

    if (!isEmail(lead.email)) {
      return res.status(400).json({ success: false, error: 'A valid email is required' });
    }

    if (lead.type !== 'newsletter' && !lead.name) {
      return res.status(400).json({ success: false, error: 'Name is required' });
    }

    const storage = await appendLead(lead);
    const notification = await sendLeadNotification(lead);

    return res.json({
      success: true,
      id: lead.id,
      storage,
      notification,
    });
  } catch (error) {
    return next(error);
  }
});
