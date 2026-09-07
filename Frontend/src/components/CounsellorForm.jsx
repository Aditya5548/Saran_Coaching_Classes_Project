import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2 } from 'lucide-react';

const initial = { studentName: '', parentName: '', phone: '', email: '', classLevel: '', preferredDate: '', preferredTime: '', message: '' };

export default function CounsellorForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', text: '' });
  const update = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }));
  async function submit(e) {
    e.preventDefault(); setStatus({ type: 'loading', text: 'Booking your counselling request…' });
    try {
      const base = import.meta.env.VITE_API_URL || 'https://saran-coaching-classes-project-qavc.vercel.app';
      const res = await fetch(`${base}/api/counselling`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json(); if (!res.ok) throw new Error(data.message || 'Unable to submit request.');
      setStatus({ type: 'success', text: data.message || 'Counselling request received successfully.' }); setForm(initial);
    } catch (error) { setStatus({ type: 'error', text: error.message || 'Something went wrong. Please try again.' }); }
  }
  return <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7 md:p-8">
    <div className="flex items-start gap-3"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-ink"><CalendarDays size={20} /></div><div><div className="font-display text-2xl sm:text-3xl">Book a counsellor</div><p className="mt-1 text-sm leading-6 text-slate-500">Choose a convenient date and tell us a little about the student. We’ll contact you on the same details.</p></div></div>
    <div className="mt-7 grid gap-4 sm:grid-cols-2">
      <Field label="Student name *"><input className="input-base" name="studentName" value={form.studentName} onChange={update} required placeholder="Student full name" /></Field>
      <Field label="Parent / guardian *"><input className="input-base" name="parentName" value={form.parentName} onChange={update} required placeholder="Parent or guardian name" /></Field>
      <Field label="Phone *"><input className="input-base" name="phone" value={form.phone} onChange={update} required inputMode="tel" placeholder="10-digit mobile number" /></Field>
      <Field label="Email"><input className="input-base" type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></Field>
      <Field label="Class / grade *"><select className="input-base" name="classLevel" value={form.classLevel} onChange={update} required><option value="">Select class</option>{['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(v => <option key={v}>{v}</option>)}</select></Field>
      <Field label="Preferred date"><input className="input-base" type="date" name="preferredDate" value={form.preferredDate} onChange={update} /></Field>
      <Field label="Preferred time"><select className="input-base" name="preferredTime" value={form.preferredTime} onChange={update}><option value="">Select time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></Field>
      <Field label="Requirement / concern"><input className="input-base" name="message" value={form.message} onChange={update} placeholder="Study, tuition, exam preparation, subject or other concern…" /></Field>
    </div>
    <button disabled={status.type === 'loading'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-60">{status.type === 'loading' ? 'Submitting…' : 'Book Counselling'} <ArrowUpRight size={17} /></button>
    {status.text && <div className={`mt-4 flex gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : status.type === 'error' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>{status.type === 'success' && <CheckCircle2 size={17} />}<span>{status.text}</span></div>}
  </form>;
}
function Field({ label, children }) { return <div><label className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">{label}</label>{children}</div>; }
