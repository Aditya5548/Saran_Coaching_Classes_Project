import nodemailer from 'nodemailer';

let transporter = null;

export function initializeMailer() {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    transporter = null;
    console.warn('SMTP is not fully configured. Email notifications will be skipped.');
    return null;
  }

  const port = Number(process.env.SMTP_PORT || 587);
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

export function getMailer() {
  return transporter;
}

export function getReceiverEmail() {
  return process.env.CONTACT_RECEIVER_EMAIL || 'admin@sarancoachingclasses.com';
}
