import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { submitLead, type LeadPayload } from '../lib/leads';
import type { LeadType } from '../lib/site';

interface LeadCaptureFormProps {
  type: LeadType;
  title?: string;
  compact?: boolean;
  sourcePage: string;
  defaultService?: string;
  showDateFields?: boolean;
  buttonLabel?: string;
}

const initial = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  preferredDate: '',
  preferredTime: '',
};

export function LeadCaptureForm({
  type,
  title,
  compact = false,
  sourcePage,
  defaultService = '',
  showDateFields = false,
  buttonLabel = 'Request Free IT Audit',
}: LeadCaptureFormProps) {
  const [form, setForm] = useState({ ...initial, service: defaultService });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const payload: LeadPayload = {
      type,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      service: form.service || defaultService,
      message: form.message,
      preferredDate: form.preferredDate,
      preferredTime: form.preferredTime,
      sourcePage,
    };

    try {
      await submitLead(payload);
      setStatus('success');
      setMessage('Thanks. Aiwana will review this and contact you soon.');
      setForm({ ...initial, service: defaultService });
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
      {title && <h3 className="mb-5 text-xl font-semibold text-white">{title}</h3>}

      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Name *</span>
          <input
            required
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-cyan-400/0 transition focus:border-cyan-300 focus:ring-4"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Company</span>
          <input
            value={form.company}
            onChange={(event) => update('company', event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-slate-300">Service focus</span>
        <select
          value={form.service}
          onChange={(event) => update('service', event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
        >
          <option value="">Select a service</option>
          <option value="Free IT Audit">Free IT Audit</option>
          <option value="Complete IT Handling">Complete IT Handling</option>
          <option value="Website and App Development">Website and App Development</option>
          <option value="AI Automation">AI Automation</option>
          <option value="CRM ERP HRMS">CRM / ERP / HRMS</option>
          <option value="Marketing and SEO">Marketing and SEO</option>
          <option value="Product Demo">Product Demo</option>
        </select>
      </label>

      {showDateFields && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Preferred date</span>
            <input
              type="date"
              value={form.preferredDate}
              onChange={(event) => update('preferredDate', event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Preferred time</span>
            <input
              type="time"
              value={form.preferredTime}
              onChange={(event) => update('preferredTime', event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
            />
          </label>
        </div>
      )}

      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-slate-300">What should we improve first?</span>
        <textarea
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/20"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
        {status === 'loading' ? 'Submitting...' : buttonLabel}
      </button>

      {message && (
        <p className={`mt-3 text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
