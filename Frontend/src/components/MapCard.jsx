import React from 'react';
import { ArrowUpRight, MapPin, Navigation } from 'lucide-react';
import { site } from '../data/siteData';

export default function MapCard() {
  return (
    <a href={site.receiverMap} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-[#ddd7ca] sm:h-56">
        <iframe title="Saran Coaching Classes location map" src="https://www.google.com/maps?q=26.8854,81.0715&z=14&output=embed" className="h-full w-full border-0 grayscale-[0.25]" loading="lazy" />
        <div className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">Our location</div>
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div><div className="flex items-center gap-2 text-sm font-extrabold"><MapPin size={16} className="text-gold" /> Saran Coaching Classes</div><p className="mt-2 text-xs text-slate-500">{site.coordinates}</p></div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:bg-gold group-hover:text-ink"><ArrowUpRight size={17}/></span>
      </div>
      <div className="border-t border-slate-100 px-5 py-3 text-xs font-bold text-slate-500"><Navigation size={14} className="mr-1 inline-block"/> Open in Google Maps</div>
    </a>
  );
}
