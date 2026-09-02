import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2 } from 'lucide-react';

const initial = { studentName: '', parentName: '', phone: '', email: '', classLevel: '', preferredDate: '', preferredTime: '', message: '' };

export default function CounsellorForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const update = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Booking your counselling request…' });
    try {
      const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${base}/api/counselling`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to submit request.');

      setSubmittedData({ email: form.email, phone: form.phone });
      setStatus({ type: 'success', text: data.message || 'Counselling request received successfully.' });
      setForm(initial);
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Something went wrong. Please try again.' });
    }
  }

  return (
    <>
      <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 md:p-8">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-ink"><CalendarDays size={20} /></div>
          <div>
            <div className="font-display text-2xl sm:text-3xl">Book a counsellor</div>
            <p className="mt-1 text-sm leading-6 text-slate-500">Choose a convenient date and tell us a little about the student. We’ll contact you on the same details.</p>
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Field label="Student name *"><input className="input-base" name="studentName" value={form.studentName} onChange={update} required placeholder="Student full name" /></Field>
          <Field label="Parent / guardian *"><input className="input-base" name="parentName" value={form.parentName} onChange={update} required placeholder="Parent or guardian name" /></Field>
          <Field label="Phone *"><input className="input-base" name="phone" value={form.phone} onChange={update} required inputMode="tel" placeholder="10-digit mobile number" /></Field>
          <Field label="Email"><input className="input-base" type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></Field>
          <Field label="Class / grade *">
            <select className="input-base" name="classLevel" value={form.classLevel} onChange={update} required>
              <option value="">Select class</option>
              {['5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', 'Graduation / Other'].map(v => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Preferred date"><input className="input-base" type="date" name="preferredDate" value={form.preferredDate} onChange={update} /></Field>
          <Field label="Preferred time">
            <select className="input-base" name="preferredTime" value={form.preferredTime} onChange={update}>
              <option value="">Select time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </Field>
          <Field label="What would you like to discuss?"><input className="input-base" name="message" value={form.message} onChange={update} placeholder="Goals, exam, subject, doubts…" /></Field>
        </div>
        <button disabled={status.type === 'loading'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-60">
          {status.type === 'loading' ? 'Submitting…' : 'Book Counselling'} <ArrowUpRight size={17} />
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