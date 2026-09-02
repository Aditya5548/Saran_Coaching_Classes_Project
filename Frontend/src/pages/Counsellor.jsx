import React from 'react';
import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CounsellorForm from '../components/CounsellorForm';

export default function Counsellor() {
  return <>
    <PageHeader eyebrow="Counselling" title="A focused conversation can make the next step much clearer." text="Share the student’s class, goals and preferred time. Our team will review the request and contact you using the details you provide." image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85" />
    <section className="py-12 sm:py-16 md:py-20"><div className="container-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
      <div className="space-y-4 lg:sticky lg:top-28">
        <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-7"><div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-300"><Sparkles size={13} className="text-gold"/> What we discuss</div><h2 className="mt-5 font-display text-3xl">A practical plan, not a sales pitch.</h2><p className="mt-4 text-sm leading-7 text-slate-300">The conversation is designed to understand the learner first, so the next step feels relevant and realistic.</p><div className="mt-6 space-y-3">{[['01','Current class & subjects'],['02','Goals and preparation needs'],['03','Strengths, gaps and doubts'],['04','Recommended next step']].map(([n,t])=><div key={t} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-gold text-xs font-extrabold text-ink">{n}</span><span className="text-sm font-bold">{t}</span></div>)}</div></div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"><Info Icon={CheckCircle2} title="Simple process" text="Submit once; our team follows up."/><Info Icon={Clock3} title="Preferred slot" text="Tell us a convenient time to connect."/><Info Icon={ShieldCheck} title="Student-first" text="Clear guidance around the learner’s needs."/></div>
      </div>
      <CounsellorForm />
    </div></section>
  </>;
}
function Info({ Icon, title, text }) { return <div className="flex gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-soft"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold text-ink"><Icon size={18}/></div><div><div className="font-extrabold">{title}</div><div className="mt-1 text-xs leading-5 text-slate-500">{text}</div></div></div>; }
