import React from 'react';
import { Award, BookOpenCheck, CheckCircle2, GraduationCap, HeartHandshake, Lightbulb, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const pillars = [
  [BookOpenCheck, 'Strong fundamentals', 'Build understanding first so practice becomes purposeful and less stressful.'],
  [UsersRound, 'Personal attention', 'Give students a comfortable space to ask questions, discuss mistakes and improve.'],
  [Award, 'Progress mindset', 'Use regular practice and feedback to make improvement visible and motivating.']
];

export default function About() {
  return <>
    <PageHeader eyebrow="About Saran" title="Education should make students feel capable, not overwhelmed." text="Saran Coaching Classes is built around concept-first teaching, focused preparation and dependable mentorship for students and parents." image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85" />
    <section className="py-16 sm:py-20 md:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><SectionTitle eyebrow="Our philosophy" title="Better understanding creates better confidence." text="Every learner has a different pace. Our job is to create a clear path from where a student is today to where they want to go next." /><Link to="/counsellor" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b1020] px-5 py-3.5 text-sm font-extrabold text-white">Talk to a Counsellor ↗</Link></div><div className="grid gap-3">{['Structured learning plans that keep students on track', 'Interactive doubt solving with patient explanation', 'Regular practice, revision and progress checks', 'Mentor-led preparation strategy for important exams', 'Simple communication with parents about next steps'].map((x, i) => <div key={x} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0b1020] text-xs font-extrabold text-[#d7aa52]">0{i + 1}</span><div className="pt-1 text-sm font-bold leading-6 text-slate-700">{x}</div></div>)}</div></div></section>

    <section className="bg-[#eeeae1] py-16 sm:py-20 md:py-24"><div className="container-shell"><SectionTitle center eyebrow="What guides us" title="Three principles behind the classroom" text="Small habits compound. We keep the learning process simple enough to follow and strong enough to build lasting confidence." /><div className="mt-10 grid gap-4 md:grid-cols-3">{pillars.map(([Icon, t, d]) => <div key={t} className="rounded-[1.75rem] bg-white p-6 shadow-soft"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0b1020] text-[#d7aa52]"><Icon size={21} /></div><h3 className="mt-5 font-serif text-2xl">{t}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{d}</p></div>)}</div></div></section>

    <section className="py-16 sm:py-20 md:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div className="overflow-hidden rounded-[2rem] bg-[#0b1020] p-3 shadow-soft sm:p-4"><img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85" alt="Students learning together" className="h-80 w-full rounded-[1.5rem] object-cover sm:h-[28rem]" /></div><div><SectionTitle eyebrow="What students should feel" title="Prepared. Supported. Ready for the next challenge." text="We want students to leave every session with something valuable: a clearer idea, a solved doubt, a better plan or simply the confidence to keep going." /><div className="mt-7 grid gap-3 sm:grid-cols-2">{[[HeartHandshake, 'Supported'], [Lightbulb, 'Curious'], [GraduationCap, 'Prepared'], [CheckCircle2, 'Consistent']].map(([Icon, t]) => <div key={t} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d7aa52] text-[#0b1020]"><Icon size={18} /></div><span className="font-extrabold">{t}</span></div>)}</div></div></div></section>
  </>;
}
