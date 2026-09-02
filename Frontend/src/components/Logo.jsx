import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-gold shadow-lg shadow-ink/10"><GraduationCap size={20} /></span>
      <span className="block"><span className="block font-display text-[22px] leading-none text-ink">Saran</span><span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.24em] text-slate-500">Coaching Classes</span></span>
    </Link>
  );
}
