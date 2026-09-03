import React from 'react';
import { Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { site } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#0b1020] text-white">
      <div className="container-shell pt-12 sm:pt-14 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.6fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d7aa52]/15 text-[#d7aa52]">S</div><span className="font-serif text-2xl">Saranesh Edu Hub</span></div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#cbd5e1]">Thoughtful teaching, focused preparation and personal mentorship for students who want to understand better, practise smarter and move ahead with confidence.</p>
            <div className="mt-5"><SocialLinks compact /></div>
          </div>
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d7aa52]">Quick links</div>
            <div className="space-y-3 text-sm text-[#cbd5e1]">
              <Link className="block hover:text-white" to="/">Home</Link><Link className="block hover:text-white" to="/about">About</Link><Link className="block hover:text-white" to="/gallery">Gallery</Link><Link className="block hover:text-white" to="/contact">Contact</Link><Link className="block font-bold text-white hover:text-[#d7aa52]" to="/counsellor">Book a Counsellor ↗</Link>
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d7aa52]">Find & connect</div>
            <div className="space-y-3 text-sm text-[#cbd5e1]">
              <a className="flex items-center gap-2 transition hover:text-white" href={`tel:${site.phone}`}><Phone size={15} /> {site.phone}</a>
              <a className="flex items-center gap-2 break-all transition hover:text-white" href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>
              <a href={site.receiverMap} target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"><span className="flex gap-2"><Navigation size={15} className="mt-0.5 shrink-0 text-[#d7aa52]" /><span><b className="text-white">Open location in Google Maps</b><span className="mt-1 block text-xs text-[#94a3b8]">{site.coordinates}</span></span></span></a>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-white/10 py-5 text-xs text-[#94a3b8] md:grid-cols-2 md:items-center">
          <span>© {new Date().getFullYear()} Saran Coaching Classes. All rights reserved.</span>
          <span className="md:text-right">Developed by <a href="mailto:adityakumar9377@gmail.com" className="font-semibold text-[#d7aa52] hover:underline">Aditya</a> | <a href="mailto:adityakumar9377@gmail.com" className="hover:text-white">adityakumar9377@gmail.com</a> | <a href="tel:+919005825347" className="hover:text-white">+91 90058 25347</a></span>
        </div>
      </div>
    </footer>
  );
}
