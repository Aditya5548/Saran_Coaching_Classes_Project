import React from 'react';
import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CounsellorForm from '../components/CounsellorForm';

const discussionPoints = [
  ['01', 'Current class & subjects'],
  ['02', 'Study / exam goals'],
  ['03', 'Gaps, doubts or concerns'],
  ['04', 'Next practical step']
];

export default function Counsellor() {
  return (
    <>
      <PageHeader
        eyebrow="Education Counselling"
        title="Let’s understand the student before choosing the next step."
        text="Share the student’s class, preferred time and the area where guidance is needed. Saranesh Edu Hub will review the request and contact you."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
      />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-300">
                <Sparkles size={13} className="text-gold" /> What we can discuss
              </div>
              <h2 className="mt-5 font-display text-3xl">A practical education conversation.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Coaching, tuition, subject support, exam preparation, admission or the student’s general academic direction.</p>
              <div className="mt-6 space-y-3">
                {discussionPoints.map(([n, t]) => (
                  <div key={t} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold text-xs font-extrabold text-ink">{n}</span>
                    <span className="text-sm font-bold">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <Info Icon={CheckCircle2} title="Simple process" text="Submit the form once; our team follows up." />
              <Info Icon={Clock3} title="Preferred slot" text="Choose a convenient day and time." />
              <Info Icon={ShieldCheck} title="Student-first" text="Focus on needs, clarity and useful next steps." />
            </div>
          </div>
          <CounsellorForm />
        </div>
      </section>
    </>
  );
}

function Info({ Icon, title, text }) {
  return (
    <div className="flex gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-soft">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold text-ink">
        <Icon size={18} />
      </div>
      <div>
        <div className="font-extrabold">{title}</div>
        <div className="mt-1 text-xs leading-5 text-slate-500">{text}</div>
      </div>
    </div>
  );
}