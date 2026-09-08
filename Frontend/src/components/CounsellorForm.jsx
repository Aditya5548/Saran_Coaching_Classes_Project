import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2 } from 'lucide-react';

const initial = { studentName: '', parentName: '', phone: '', email: '', classLevel: '', preferredDate: '', preferredTime: '', message: '' };

export default function CounsellorForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', text: '' });

  const update = e => {
    let val = e.target.value;
    if (e.target.name === 'phone') {
      val = val.replace(/\D/g, '').slice(0, 10);
    }
    setForm(v => ({ ...v, [e.target.name]: val }));
  };

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Booking your counselling request…' });
    try {
      const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${base}/api/counselling`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to submit request.');
      setStatus({ type: 'success', text: '' });
      setForm(initial);
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Something went wrong. Please try again.' });
    }
  }

  return (
    <>
      <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 md:p-8">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-ink">
            <CalendarDays size={20} />
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl">Book a counsellor</div>
            <p className="mt-1 text-sm leading-6 text-slate-500">Choose a convenient date and tell us a little about the student. We’ll contact you on the same details.</p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Field label="Student name *">
            <input className="input-base" name="studentName" value={form.studentName} onChange={update} required placeholder="Student full name" />
          </Field>
          <Field label="Parent / guardian *">
            <input className="input-base" name="parentName" value={form.parentName} onChange={update} required placeholder="Parent or guardian name" />
          </Field>
          <Field label="Phone *">
            <input className="input-base" name="phone" value={form.phone} onChange={update} required inputMode="numeric" pattern="[0-9]{10}" minLength={10} maxLength={10} title="Please enter exactly 10 digits" placeholder="10-digit mobile number" />
          </Field>
          <Field label="Email">
            <input className="input-base" type="email" name="email" value={form.email} onChange={update} pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please provide a valid email address" placeholder="you@example.com" />
          </Field>
          <Field label="Class / grade *">
            <select className="input-base" name="classLevel" value={form.classLevel} onChange={update} required>
              <option value="">Select class</option>
              {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(v => <option key={v}>{v}</option>)}
            </select>
          </Field>
          <Field label="Preferred date">
            <input className="input-base" type="date" name="preferredDate" value={form.preferredDate} onChange={update} />
          </Field>
          <Field label="Preferred time">
            <select className="input-base" name="preferredTime" value={form.preferredTime} onChange={update}>
              <option value="">Select time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </Field>
          <Field label="Requirement / concern">
            <input className="input-base" name="message" value={form.message} onChange={update} placeholder="Study, tuition, exam preparation, subject or other concern…" />
          </Field>
        </div>

        <button disabled={status.type === 'loading'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-60">
          {status.type === 'loading' ? 'Submitting…' : 'Book Counselling'} <ArrowUpRight size={17} />
        </button>

        {status.text && status.type !== 'success' && (
          <div className={`mt-4 flex gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'error' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>
            <span>{status.text}</span>
          </div>
        )}
      </form>

      {status.type === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Form Submitted</h3>
            <p className="mb-8 text-slate-500">Your form submitted successfully. We will contact you soon.</p>
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{label}</label>
      {children}
    </div>
  );
}