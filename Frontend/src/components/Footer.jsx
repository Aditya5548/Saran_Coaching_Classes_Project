import React from 'react';
import { Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { site, services } from '../data/siteData';
import Logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell py-12 sm:py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.75fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Saranesh Edu Hub" className="h-12 w-12 rounded-xl bg-white object-contain" />
              <div>
                <div className="font-display text-2xl">Saranesh Edu Hub</div>
                <div className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">Coaching & Services</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Education, coaching, admission guidance, digital services, government & job forms, cyber services, property information and technology solutions — all in one place.</p>
            <div className="mt-5"><SocialLinks compact /></div>
          </div>
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Quick links</div>
            <div className="space-y-3 text-sm text-slate-300">
              <Link className="block hover:text-white" to="/">Home</Link>
              <Link className="block hover:text-white" to="/services">Our Services</Link>
              <Link className="block hover:text-white" to="/about">About</Link>
              <Link className="block hover:text-white" to="/gallery">Gallery</Link>
              <Link className="block hover:text-white" to="/contact">Contact</Link>
              <Link className="block font-bold text-white hover:text-gold" to="/counsellor">Book a Counsellor ↗</Link>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-gold">Popular services</div><div className="mt-3 grid gap-2 text-xs text-slate-300">{services.slice(0, 4).map(x => <span key={x.no}>{x.no} · {x.title}</span>)}</div></div>
          </div>
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Contact & location</div>
            <div className="space-y-3 text-sm text-slate-300">
              <a className="flex items-center gap-2 hover:text-white" href={`tel:+91${site.phone}`}><Phone size={15} /> {site.phone}</a>
              {site.email && <a className="flex items-center gap-2 break-all hover:text-white" href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>}
              <a href={site.receiverMap} target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"><span className="flex gap-2"><Navigation size={15} className="mt-0.5 shrink-0 text-gold" /><span><b className="text-white">Open location in Google Maps</b><span className="mt-1 block text-xs text-slate-400">{site.coordinates}</span></span></span></a>
              <div className="flex items-start gap-2 pt-2 text-xs text-slate-400"><MapPin size={15} className="mt-0.5 text-gold" /> Education • Coaching • Digital • Online Assistance • Property • Technology</div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:grid-cols-2 md:items-center">
          <span>© {new Date().getFullYear()} Saranesh Edu Hub Coaching Classes. All rights reserved.</span>
          <span className="md:text-right">Developed by <a href="https://www.solvewithyou.in" className="font-semibold text-gold hover:underline">SolveWithYou Technologies</a> | <a href="mailto:solvewithyou@gmail.com" className="hover:text-white">solvewithyou@gmail.com</a> | <a href="tel:+919005825347" className="hover:text-white">9005825347</a></span>
        </div>
      </div>
    </footer>
  );
}