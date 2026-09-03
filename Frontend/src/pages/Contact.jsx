import React from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import MapCard from '../components/MapCard';
import PageHeader from '../components/PageHeader';
import SocialLinks from '../components/SocialLinks';
import { site } from '../data/siteData';

export default function Contact() {
  return <>
    <PageHeader eyebrow="Contact" title="Let’s talk about the right learning plan." text="Ask a question, share a requirement or start with a counselling conversation. We’re happy to understand the student’s needs first." image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85" />
    <section className="py-12 sm:py-16 md:py-20"><div className="container-shell grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
      <div className="space-y-4">
        <a href="tel:+919005825347" className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-gold"><Phone size={19} /></div><div><div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500">Call us</div><div className="mt-1 font-extrabold">{site.phone}</div></div></a>
        <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-gold"><Mail size={19} /></div><div><div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500">Email us</div><div className="mt-1 break-all font-extrabold">{site.email}</div></div></a>
        <Link to="/counsellor" className="flex items-center gap-4 rounded-[1.5rem] border border-gold/50 bg-gold/15 p-5 shadow-soft transition hover:-translate-y-1"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-ink"><MessageCircle size={19} /></div><div><div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-600">Need guidance?</div><div className="mt-1 font-extrabold">Book a counsellor</div></div><ArrowUpRight className="ml-auto" size={18} /></Link>
        <MapCard />
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft"><div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500">Stay connected</div><p className="mt-2 text-sm leading-6 text-slate-500">Follow Saran for updates, learning tips and announcements.</p><div className="mt-4 rounded-2xl bg-ink p-3"><SocialLinks compact /></div></div>
      </div>
      <ContactForm />
    </div></section>
  </>;
}
