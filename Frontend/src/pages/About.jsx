import React from 'react';
import { ArrowUpRight, BookOpenCheck, CheckCircle2, Code2, HeartHandshake, Lightbulb, Monitor, UsersRound, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const pillars = [
  [BookOpenCheck, 'Education first', 'Clear coaching, tuition and admission guidance designed around practical student needs.'],
  [Monitor, 'Easy online support', 'Forms, registration, document upload, print/scan and other everyday digital assistance.'],
  [Code2, 'Technology ready', 'Websites, software and business-related apps for modern digital requirements.']
];

export default function About() {
  return <>
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="container-shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-500 shadow-sm">
            <Sparkles size={13} className="text-gold" /> About Saranesh Edu Hub
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl text-ink">
            A local learning and service centre built around practical help.
          </h1>
          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
            Saranesh Edu Hub combines coaching and tuition with admission guidance, online services, government/job form assistance, cyber services, property information and technology solutions.
          </p>
        </div>
        <div className="relative w-full mt-4 lg:mt-0">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gold/15 blur-2xl lg:-inset-6" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
            alt="About Saranesh Edu Hub"
            className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] object-cover rounded-[2rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
    <section className="py-16 sm:py-20"><div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><SectionTitle eyebrow="Our approach" title="Simple, useful and focused on what people actually need." text="Whether the requirement is academic, administrative, digital or technology-related, the goal is straightforward: understand the need and help with the next practical step." /><Link to="/services" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-extrabold text-white">View all services <ArrowUpRight size={17} /></Link></div><div className="grid gap-3">{['Coaching Classes & Tuition — 1st to 10th', 'Admission & Education Guidance', 'Online Admission Registration', 'Digital, Cyber & General Online Assistance', 'Government & Job Form Services', 'Aadhaar & Document-related online services', 'Property Consultancy & Information', 'Software, Website & Business App Development'].map((x, i) => <div key={x} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-xs font-extrabold text-gold">0{i + 1}</span><div className="pt-1 text-sm font-bold leading-6 text-slate-700">{x}</div></div>)}</div></div></section>
    <section className="bg-[#eeeae1] py-16 sm:py-20"><div className="container-shell"><SectionTitle center eyebrow="What guides us" title="Three clear promises to students and families" text="A practical service mindset across education, digital assistance and technology." /><div className="mt-10 grid gap-4 md:grid-cols-3">{pillars.map(([Icon, t, d]) => <div key={t} className="rounded-[1.75rem] bg-white p-6 shadow-soft"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold"><Icon size={21} /></div><h3 className="mt-5 font-display text-2xl">{t}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{d}</p></div>)}</div></div></section>
    <section className="py-16 sm:py-20"><div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[HeartHandshake, 'Support'], [Lightbulb, 'Guidance'], [UsersRound, 'Convenience'], [CheckCircle2, 'Solutions']].map(([Icon, t]) => <div key={t} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"><div className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-ink"><Icon size={18} /></div><span className="font-extrabold">{t}</span></div>)}</div></section>
  </>;
}