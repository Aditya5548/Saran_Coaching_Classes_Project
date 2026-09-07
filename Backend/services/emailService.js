import { getMailer, getReceiverEmail } from '../config/mail.js';

const BRAND = {
  navy: '#0b1020',
  gold: '#dcae4a',
  cream: '#f7f3ea',
  text: '#1f2937',
  muted: '#667085',
  border: '#e6e1d8',
  white: '#ffffff',
};

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const field = (label, value) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0;">
    <tr>
      <td style="padding:11px 0 5px;color:${BRAND.muted};font-size:11px;line-height:1.3;font-weight:700;letter-spacing:.12em;text-transform:uppercase;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 11px;color:${BRAND.text};font-size:15px;line-height:1.55;word-break:break-word;overflow-wrap:anywhere;border-bottom:1px solid ${BRAND.border};">
        ${escapeHtml(value || 'Not provided')}
      </td>
    </tr>
  </table>`;

function emailShell({ badge, title, intro, content, footerNote = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="x-apple-disable-message-reformatting" />
<title>${escapeHtml(title)}</title>
<style>
  html, body { margin:0 !important; padding:0 !important; width:100% !important; }
  body { background:${BRAND.cream}; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:collapse; }
  img { border:0; outline:none; text-decoration:none; max-width:100%; }
  @media only screen and (max-width: 600px) {
    .email-wrap { padding:12px 8px !important; }
    .card { border-radius:16px !important; }
    .header { padding:22px 18px !important; }
    .body { padding:22px 18px !important; }
    .brand { font-size:25px !important; }
    .title { font-size:26px !important; line-height:1.18 !important; }
    .intro { font-size:14px !important; line-height:1.6 !important; }
    .details { padding:8px 14px !important; }
    .footer { padding:16px 18px !important; }
  }
</style>
</head>
<body>
  <div class="email-wrap" style="width:100%;box-sizing:border-box;padding:24px 12px;background:${BRAND.cream};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;">
      <tr>
        <td>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="card" style="background:${BRAND.white};border:1px solid ${BRAND.border};border-radius:20px;overflow:hidden;">
            <tr>
              <td class="header" style="padding:28px 28px 24px;background:${BRAND.navy};">
                <div style="display:inline-block;padding:6px 10px;border-radius:999px;background:#fff7df;color:#8a671c;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">
                  ${escapeHtml(badge)}
                </div>
                <div class="brand" style="margin-top:13px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.15;font-weight:700;color:${BRAND.white};">
                  Saran Coaching Classes
                </div>
                <div style="margin-top:7px;color:#cbd5e1;font-size:13px;line-height:1.5;">
                  Learning with clarity. Growing with confidence.
                </div>
              </td>
            </tr>
            <tr>
              <td class="body" style="padding:28px;">
                <div class="title" style="font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.18;font-weight:700;color:${BRAND.navy};">
                  ${escapeHtml(title)}
                </div>
                <p class="intro" style="margin:10px 0 22px;color:${BRAND.muted};font-size:15px;line-height:1.7;">
                  ${escapeHtml(intro)}
                </p>

                <div class="details" style="padding:8px 18px;background:#fcfbf8;border:1px solid ${BRAND.border};border-radius:16px;">
                  ${content}
                </div>

                ${footerNote ? `<p style="margin:18px 0 0;color:${BRAND.muted};font-size:12px;line-height:1.6;">${escapeHtml(footerNote)}</p>` : ''}
              </td>
            </tr>
            <tr>
              <td class="footer" style="padding:17px 28px;background:#faf9f6;border-top:1px solid ${BRAND.border};text-align:center;">
                <div style="color:${BRAND.muted};font-size:11px;line-height:1.5;">
                  Saran Coaching Classes
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}

export function buildContactEmail({ name, phone, email, service, message, enquiryId }) {
  return emailShell({
    badge: 'New Enquiry',
    title: `New service enquiry from ${name}`,
    intro: 'A new service enquiry has been submitted through the Saran website.',
    content: [
      field('Name', name),
      field('Phone', phone),
      field('Email', email || 'Not provided'),
      field('Service requested', service || 'Not selected'),
      field('Message', message || 'No message'),
    ].join(''),
    footerNote: email
      ? 'Reply to this email to contact the person directly.'
      : 'This notification was submitted through the Saran website.',
  });
}

export function buildCounsellingEmail({ studentName, parentName, phone, email, classLevel, preferredDate, preferredTime, message }) {
  return emailShell({
    badge: 'Counselling Request',
    title: `Counselling request for ${studentName}`,
    intro: 'A student or parent has requested a counselling session through the website.',
    content: [
      field('Student', studentName),
      field('Parent / Guardian', parentName),
      field('Phone', phone),
      field('Email', email || 'Not provided'),
      field('Class / Grade', classLevel),
      field('Preferred Date', preferredDate || 'Not specified'),
      field('Preferred Time', preferredTime || 'Not specified'),
      field('Message', message || 'No additional message'),
    ].join(''),
    footerNote: email
      ? 'Reply to this email to contact the parent or student directly.'
      : 'This notification was submitted through the Saran website.',
  });
}

export async function sendNotificationEmail({ subject, text, html, replyTo }) {
  const mailer = getMailer();
  if (!mailer) return false;

  await mailer.sendMail({
    from: `Saran Coaching Classes <${process.env.SMTP_USER}>`,
    to: getReceiverEmail(),
    replyTo: replyTo || process.env.SMTP_USER,
    subject,
    text,
    html,
  });

  return true;
}
