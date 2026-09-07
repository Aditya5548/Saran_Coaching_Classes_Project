import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';

const initial = { name: '', phone: '', email: '', service: '', message: '' };

export default function ContactForm() {
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
    setStatus({ type: 'loading', text: 'Sending your enquiry…' });
    try {
      const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to send enquiry.');
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
            <MessageCircle size={20} />
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl">Send an enquiry</div>
            <p className="mt-1 text-sm leading-6 text-slate-500">Share what you need and our team will guide you with the next practical step.</p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Field label="Name *">
            <input className="input-base" name="name" value={form.name} onChange={update} required placeholder="Your full name" />
          </Field>
          <Field label="Phone *">
            <input className="input-base" name="phone" value={form.phone} onChange={update} required inputMode="numeric" pattern="[0-9]{10}" minLength={10} maxLength={10} title="Please enter exactly 10 digits" placeholder="10-digit mobile number" />
          </Field>
          <Field label="Email">
            <input className="input-base" type="email" name="email" value={form.email} onChange={update} pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please provide a valid email address" placeholder="you@example.com" />
          </Field>
          <Field label="Service required">
            <select className="input-base" name="service" value={form.service} onChange={update}>
              <option value="">Select a service</option>
              <option>Coaching Classes</option>
              <option>Tuition Classes</option>
              <option>Admission & Education Guidance</option>
              <option>Online Registration / Forms</option>
              <option>Government & Job Form Services</option>
              <option>Digital / Cyber Services</option>
              <option>Property Consultancy & Information</option>
              <option>Website / Software / Business App</option>
              <option>Other Online Assistance</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message">
              <textarea className="input-base min-h-36 resize-y" name="message" value={form.message} onChange={update} placeholder="Tell us about the class, exam, goals or doubts…" />
            </Field>
          </div>
        </div>

        <button disabled={status.type === 'loading'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-60">
          {status.type === 'loading' ? 'Sending…' : 'Send Enquiry'} <ArrowUpRight size={17} />
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