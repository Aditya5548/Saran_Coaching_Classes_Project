import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, CheckCircle2, ChevronRight, Clock3, GraduationCap, Sparkles, Target, Trophy, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { gallery } from '../data/siteData';

const benefits = [
  [Brain, 'Concept-first teaching', 'We simplify difficult ideas and build understanding before speed.'],
  [Target, 'Structured preparation', 'A focused rhythm of classwork, practice, revision and feedback.'],
  [UsersRound, 'Personal mentorship', 'Students get support to ask, improve, reflect and keep moving.']
];
const routine = [
  ['01', 'Understand', 'Build the concept and know the “why”.'],
  ['02', 'Practise', 'Apply the idea through guided questions.'],
  ['03', 'Review', 'Spot gaps, correct mistakes and revise smartly.']
];

export default function Home() {
  return <>
    <section className="relative overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="hero-orb right-[-120px] top-10 h-[30rem] w-[30rem] bg-[#d7aa52]/25 blur-3xl" />
      <div className="hero-orb left-1/3 top-[-160px] h-80 w-80 bg-[#e8a6a6]/20 blur-3xl" />
      <div className="container-shell relative grid items-center gap-12 py-12 sm:py-16 md:grid-cols-[1.08fr_.92fr] md:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-300"><Sparkles size={13} className="text-[#d7aa52]" /> Premium academic guidance</span>
          <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl leading-[1.02] sm:text-6xl md:text-7xl">Learn with <span className="text-[#d7aa52]">clarity.</span><br />Grow with confidence.</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">Saran Coaching Classes creates a calmer, smarter learning experience—where strong fundamentals, focused practice and personal mentorship come together.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/counsellor" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7aa52] px-6 py-3.5 text-sm font-extrabold text-[#0b1020] shadow-lg shadow-[#d7aa52]/20 transition hover:-translate-y-0.5">Book a Counsellor <ArrowUpRight size={17} /></Link><Link to="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">Explore Our Approach <ChevronRight size={17} /></Link></div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
            {[['500+', 'Students guided'], ['1:1', 'Mentor support'], ['95%', 'Focused outcomes']].map(([v, l]) => <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4"><div className="font-serif text-2xl sm:text-3xl">{v}</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">{l}</div></div>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }} className="relative">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#d7aa52]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2.5 shadow-2xl backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=88" alt="Teacher guiding students" className="h-[380px] w-full rounded-[1.5rem] object-cover sm:h-[470px] md:h-[560px]" />
            <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/10 bg-[#0b1020]/80 p-4 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8"><div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#d7aa52]">The Saran learning loop</div><div className="mt-2 font-serif text-xl sm:text-2xl">Understand → Practise → Review → Improve</div></div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white"><div className="container-shell grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">{[['01', 'Concept clarity'], ['02', 'Regular practice'], ['03', 'Personal mentorship'], ['04', 'Progress feedback']].map(([n, t]) => <div key={t} className="flex items-center gap-3 px-3 py-5 sm:px-5 sm:py-7"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0b1020] text-xs font-extrabold text-[#d7aa52]">{n}</span><span className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-600 sm:text-sm">{t}</span></div>)}</div></section>

    <section className="py-16 sm:py-20 md:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[.76fr_1.24fr]"><SectionTitle eyebrow="Why families choose Saran" title="More than tuition. A better learning system." text="The goal is not to add pressure. It is to make preparation easier to understand, easier to follow and easier to improve." /><div className="grid gap-4 md:grid-cols-3">{benefits.map(([Icon, t, d]) => <div key={t} className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 sm:p-6"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0b1020] text-[#d7aa52] transition group-hover:bg-[#d7aa52] group-hover:text-[#0b1020]"><Icon size={20} /></div><h3 className="mt-5 font-serif text-2xl">{t}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{d}</p></div>)}</div></div></section>

    <section className="bg-[#ebe7de] py-16 sm:py-20 md:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><span className="eyebrow">A simple study rhythm</span><h2 className="mt-5 section-title">Students know what to learn, how to practise and what to improve next.</h2><p className="mt-5 body-copy max-w-2xl">When students can see the next step clearly, confidence grows naturally. Our classroom rhythm is built around that idea.</p><div className="mt-8 space-y-3">{routine.map(([n, t, d]) => <div key={n} className="flex gap-4 rounded-[1.25rem] border border-black/5 bg-white/70 p-4 sm:p-5"><span className="font-serif text-2xl text-[#d7aa52]">{n}</span><div><div className="font-extrabold">{t}</div><div className="mt-1 text-sm text-slate-500">{d}</div></div></div>)}</div></div><div className="relative rounded-[2rem] bg-[#0b1020] p-4 text-white shadow-soft sm:p-5"><img src={gallery[1].image} alt="Mentor working with students" className="h-80 w-full rounded-[1.5rem] object-cover sm:h-[30rem]" /><div className="p-3 pt-5 sm:p-5"><div className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d7aa52]">Mentorship matters</div><p className="mt-2 max-w-lg font-serif text-2xl sm:text-3xl">A student should always know what to do next.</p></div></div></div></section>

    <section className="py-16 sm:py-20 md:py-24"><div className="container-shell"><SectionTitle center eyebrow="Inside the classroom" title="A learning environment built for focus." text="Explore a glimpse of the sessions, practice culture and mentorship environment at Saran." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.slice(0, 3).map(item => <Link to="/gallery" key={item.title} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-soft"><div className="overflow-hidden"><img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><div className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#d7aa52]">{item.tag}</div><div className="mt-2 flex items-center justify-between gap-3 font-serif text-2xl"><span>{item.title}</span><ChevronRight size={20} /></div></div></Link>)}</div></div></section>

    <section className="pb-16 sm:pb-20 md:pb-24"><div className="container-shell overflow-hidden rounded-[2rem] bg-[#0b1020] px-5 py-10 text-white sm:px-8 md:px-12 md:py-14"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><div className="text-xs font-extrabold uppercase tracking-[.2em] text-[#d7aa52]">Start with a conversation</div><h2 className="mt-3 font-serif text-3xl sm:text-4xl">Not sure which path is right for your child?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Book a counselling session and discuss the student’s class, goals, strengths and current challenges with our team.</p></div><Link to="/counsellor" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7aa52] px-6 py-3.5 text-sm font-extrabold text-[#0b1020]">Book a Counsellor <ArrowUpRight size={17} /></Link></div></div></section>
  </>;
}
