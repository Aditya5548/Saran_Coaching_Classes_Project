import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';

const initial = { name: '', phone: '', email: '', course: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const update = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending your enquiry…' });
    try {
      const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to send enquiry.');

      setSubmittedData({ email: form.email, phone: form.phone });
      setStatus({ type: 'success', text: data.message || 'Enquiry sent successfully.' });
      setForm(initial);
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Something went wrong. Please try again.' });
    }
  }

  return (
    <>
      <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 md:p-8">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-ink"><MessageCircle size={20} /></div>
          <div>
            <div className="font-display text-2xl sm:text-3xl">Send an enquiry</div>
            <p className="mt-1 text-sm leading-6 text-slate-500">Tell us what the student needs and our team will guide you with the next steps.</p>
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Field label="Name *"><input className="input-base" name="name" value={form.name} onChange={update} required placeholder="Your full name" /></Field>
          <Field label="Phone *"><input className="input-base" name="phone" value={form.phone} onChange={update} required inputMode="tel" placeholder="10-digit mobile number" /></Field>
          <Field label="Email"><input className="input-base" type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></Field>
          <Field label="Interested in">
            <select className="input-base" name="course" value={form.course} onChange={update}>
              <option value="">Select a subject / course</option>
              <option>School Coaching</option>
              <option>Board Exam Preparation</option>
              <option>Competitive Exam Preparation</option>
              <option>Personalised Doubt Support</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message"><textarea className="input-base min-h-36 resize-y" name="message" value={form.message} onChange={update} placeholder="Tell us about the class, exam, goals or doubts…" /></Field>
          </div>
        </div>
        <button disabled={status.type === 'loading'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-60">
          {status.type === 'loading' ? 'Sending…' : 'Send Enquiry'} <ArrowUpRight size={17} />
        </button>
        {status.type === 'error' && status.text && (
          <div className="mt-4 flex gap-2 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            <span>{status.text}</span>
          </div>
        )}
      </form>

      {status.type === 'success' && submittedData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-[2rem] bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-800">Request Submitted!</h3>
            <p className="mb-6 text-sm text-slate-500">We will contact you within 24 hours.</p>
            <div className="mb-8 flex flex-col text-start gap-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              {submittedData.phone && <div><strong>Phone:</strong> {submittedData.phone}</div>}
              {submittedData.email && <div><strong>Email:</strong> {submittedData.email}</div>}
            </div>
            <button onClick={() => { setStatus({ type: '', text: '' }); setSubmittedData(null); }} className="inline-flex w-full items-center justify-center rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, children }) {
  return <div><label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{label}</label>{children}</div>;
}