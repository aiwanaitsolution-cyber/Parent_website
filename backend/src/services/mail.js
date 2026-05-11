import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
}

export async function sendLeadNotification(lead) {
  const transporter = getTransporter();
  if (!transporter) {
    return { ok: true, target: 'skipped', warning: 'Gmail env not configured' };
  }
  const to = process.env.GMAIL_USER || 'aiwanaitsolution@gmail.com';

  await transporter.sendMail({
    from: `"Aiwana Website" <${process.env.GMAIL_USER}>`,
    to,
    subject: `New Aiwana lead: ${lead.type}`,
    html: `
      <h2>New Aiwana Website Lead</h2>
      <p><strong>ID:</strong> ${escapeHtml(lead.id)}</p>
      <p><strong>Type:</strong> ${escapeHtml(lead.type)}</p>
      <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
      <p><strong>Company:</strong> ${escapeHtml(lead.company)}</p>
      <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
      <p><strong>Preferred:</strong> ${escapeHtml(lead.preferredDate)} ${escapeHtml(lead.preferredTime)}</p>
      <p><strong>Source:</strong> ${escapeHtml(lead.sourcePage)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(lead.message)}</p>
    `,
  });

  return { ok: true, target: 'gmail' };
}
