import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d7aa52] text-[#0b1020] font-serif text-2xl font-bold shadow-sm">
        S
      </div>
      <span className="block"><span className="block font-display text-[22px] leading-none text-ink">Saran</span><span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.24em] text-slate-500">Coaching Classes</span></span>
    </Link>
  );
}
