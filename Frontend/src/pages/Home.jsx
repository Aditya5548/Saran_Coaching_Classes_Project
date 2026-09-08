import React from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Code2, GraduationCap, Landmark, Monitor, Sparkles, Target, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { services, site } from '../data/siteData';
import Logo from '../assets/logo.png';

const featured = services.slice(0, 6);
const icons = { 0: GraduationCap, 1: GraduationCap, 2: CheckCircle2, 3: Monitor, 4: Monitor, 5: Landmark };

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="hero-orb right-[-140px] top-[-40px] h-[34rem] w-[34rem] bg-gold/20 blur-3xl" />
        <div className="container-shell relative grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.08fr_.92fr] md:py-24 lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-300">
              <Sparkles size={13} className="text-gold" /> One place. Many solutions.
            </span>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl leading-[1.1] sm:text-5xl sm:leading-[1] md:text-6xl lg:text-7xl lg:leading-[.98]">
              Education. <span className="text-gold">Guidance.</span><br />Digital solutions.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">
              Saranesh Edu Hub Coaching Classes helps students with coaching and tuition, supports admission and online processes, and provides everyday digital and technology services.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link to="/services" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-extrabold text-ink shadow-glow sm:w-auto">
                Explore Services <ArrowUpRight size={17} />
              </Link>
              <Link to="/counsellor" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto">
                Book a Counsellor <ChevronRight size={17} />
              </Link>
            </div>
            <div className="mt-8 w-full grid grid-cols-1 gap-3 min-[450px]:grid-cols-3 sm:gap-4">
              {[['01', 'Classes 1st–10th'], ['02', 'Admission & Forms'], ['03', 'Digital & Tech']].map(([n, l]) => (
                <div key={l} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl">{n}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[.11em] text-slate-400 lg:text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gold/10 blur-2xl" />
            <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 pb-28 shadow-2xl backdrop-blur-xl sm:min-h-[450px] sm:p-8 sm:pb-32 lg:min-h-[540px] lg:p-10 lg:pb-36">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,174,74,.18),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,.08),transparent_40%)]" />
              <img src={Logo} alt="Saranesh Edu Hub logo" className="relative h-48 w-48 object-contain drop-shadow-2xl sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col rounded-2xl border border-white/10 bg-ink/80 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 lg:p-5">
                <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-gold sm:text-[10px] lg:text-xs">Saranesh Edu Hub</div>
                <div className="mt-1 font-display text-lg sm:mt-2 sm:text-xl lg:text-2xl">Learning + Services + Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-shell grid grid-cols-1 divide-y divide-slate-200 min-[450px]:grid-cols-2 min-[450px]:divide-x sm:grid-cols-4 sm:divide-y-0">
          {[['01', 'Coaching'], ['02', 'Admissions'], ['03', 'Digital Services'], ['04', 'Technology']].map(([n, t]) => (
            <div key={t} className="flex items-center gap-4 px-4 py-4 sm:px-3 sm:py-6 lg:px-5 lg:py-7">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-extrabold text-gold sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:text-sm">{n}</span>
              <span className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-600 lg:text-sm">{t}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <SectionTitle
              eyebrow="What we do"
              title="A practical mix of education, online support and modern services."
              text="The service list follows the client requirements closely — from classes and admissions to forms, cyber services, property information and software development."
            />
            <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 lg:grid-cols-3">
              {featured.map((item, index) => {
                const Icon = icons[index] || CheckCircle2;
                return (
                  <Link to="/services" key={item.no} className="group flex flex-col rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-gold/50 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                        <Icon size={20} />
                      </div>
                      <ChevronRight size={18} className="text-slate-300 transition group-hover:translate-x-1" />
                    </div>
                    <h3 className="mt-5 font-display text-xl leading-tight sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.short}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeae1] py-16 sm:py-20 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
          <div className="flex flex-col">
            <SectionTitle
              eyebrow="Why Saranesh Edu Hub"
              title="One trusted point of contact for learning and everyday digital needs."
              text="Students and families can reach out for education support, admission processes, government/job forms, general online work and other services shared in the client brief."
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {['Classes & tuition for 1st to 10th', 'Admission & education guidance', 'Online forms & registration support', 'Government & job form assistance', 'Cyber / print / scan support', 'Website & business app development'].map(x => (
                <div key={x} className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/75 p-4 text-sm font-bold text-slate-700 lg:p-5 lg:text-base">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold text-ink">
                    <CheckCircle2 size={18} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-[2rem] bg-ink p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink">
              <Code2 size={24} />
            </div>
            <div className="mt-6 text-xs font-extrabold uppercase tracking-[.2em] text-gold lg:text-sm">Technology services</div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl">Need a website or business app?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Saranesh Edu Hub also offers software development, websites and business-related applications.
            </p>
            <Link to="/contact" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-ink transition hover:bg-slate-100 sm:w-fit sm:px-8">
              Discuss a requirement <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-ink px-6 py-10 text-white sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="flex flex-col">
                <div className="text-xs font-extrabold uppercase tracking-[.2em] text-gold sm:text-sm">Contact Saranesh Edu Hub</div>
                <h2 className="mt-3 font-display text-3xl sm:mt-4 sm:text-4xl lg:text-5xl">Education, online work or digital support?</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Call {site.phone} or send an enquiry online and share what you need.
                </p>
              </div>
              <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-extrabold text-ink transition hover:brightness-110 sm:w-auto sm:px-10 sm:py-5 lg:text-base">
                Get in touch <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}