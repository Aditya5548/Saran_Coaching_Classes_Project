import React from 'react';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Code2, FileText, GraduationCap, Home as HomeIcon, Landmark, Monitor, Sparkles, Wifi, IdCard, School2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/siteData';

const icons = { graduation: GraduationCap, book: BookOpen, school: School2, file: FileText, monitor: Monitor, landmark: Landmark, id: IdCard, wifi: Wifi, home: HomeIcon, sparkle: Sparkles, code: Code2 };

const courses = ['B.A.', 'B.C.A.', 'B.B.A.', 'B.T.C.', 'B.Ed.', 'B.Pharma', 'D.Pharma', 'Medical', 'B.Tech', 'Polytechnic', 'ITI'];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Education, digital support & everyday solutions — all under one roof."
        text="Saranesh Edu Hub brings together coaching, tuition, education guidance, online registration, government forms, cyber services, property information and technology solutions."
        image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000"
      />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <article key={service.no} className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold transition group-hover:bg-gold group-hover:text-ink">
                      <Icon size={21} />
                    </div>
                    <span className="font-display text-2xl text-slate-300">{service.no}</span>
                  </div>
                  <div className="mt-5 text-[10px] font-extrabold uppercase tracking-[.16em] text-gold">{service.short}</div>
                  <h2 className="mt-2 font-display text-[1.7rem] leading-tight">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#eeeae1] py-14 sm:py-18">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="Admission guidance" title="Courses supported across education pathways." text="Admission information and registration assistance is available for the course categories shared by the client, including graduation, diploma, pharmacy, medical, engineering, polytechnic and ITI pathways." />
            <div className="mt-6 flex flex-wrap gap-2">
              {courses.map(x => (
                <span key={x} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-700">{x}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
              <BriefcaseBusiness size={21} />
            </div>
            <h3 className="mt-5 font-display text-3xl">Need help with an online process?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">For forms, registration, document uploads, government/job applications or other digital assistance, contact Saranesh Edu Hub and tell us what you need.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-extrabold text-ink">
              Contact Us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}