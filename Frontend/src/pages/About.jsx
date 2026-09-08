import React from 'react';
import { ArrowUpRight, BookOpenCheck, CheckCircle2, Code2, HeartHandshake, Lightbulb, Monitor, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PageHeader from '../components/PageHeader';

const pillars = [
  [BookOpenCheck, 'Education first', 'Clear coaching, tuition and admission guidance designed around practical student needs.'],
  [Monitor, 'Easy online support', 'Forms, registration, document upload, print/scan and other everyday digital assistance.'],
  [Code2, 'Technology ready', 'Websites, software and business-related apps for modern digital requirements.']
];

const serviceList = [
  'Coaching Classes & Tuition — 1st to 10th',
  'Admission & Education Guidance',
  'Online Admission Registration',
  'Digital, Cyber & General Online Assistance',
  'Government & Job Form Services',
  'Aadhaar & Document-related online services',
  'Property Consultancy & Information',
  'Software, Website & Business App Development'
];

const coreValues = [
  [HeartHandshake, 'Support'],
  [Lightbulb, 'Guidance'],
  [UsersRound, 'Convenience'],
  [CheckCircle2, 'Solutions']
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Saranesh Edu Hub"
        title="A local learning and service centre built around practical help."
        text="Saranesh Edu Hub combines coaching and tuition with admission guidance, online services, government/job form assistance, cyber services, property information and technology solutions."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
      />
      <section className="py-16 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Our approach" title="Simple, useful and focused on what people actually need." text="Whether the requirement is academic, administrative, digital or technology-related, the goal is straightforward: understand the need and help with the next practical step." />
            <Link to="/services" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-extrabold text-white">
              View all services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="grid gap-3">
            {serviceList.map((x, i) => (
              <div key={x} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-xs font-extrabold text-gold">0{i + 1}</span>
                <div className="pt-1 text-sm font-bold leading-6 text-slate-700">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#eeeae1] py-16 sm:py-20">
        <div className="container-shell">
          <SectionTitle center eyebrow="What guides us" title="Three clear promises to students and families" text="A practical service mindset across education, digital assistance and technology." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map(([Icon, t, d]) => (
              <div key={t} className="rounded-[1.75rem] bg-white p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map(([Icon, t]) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-ink">
                <Icon size={18} />
              </div>
              <span className="font-extrabold">{t}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}