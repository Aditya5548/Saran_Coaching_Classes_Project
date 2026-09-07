import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center gap-3">
      <img src="/assets/logo.png" alt="Saranesh Edu Hub Coaching Classes logo" className="h-12 w-12 rounded-xl object-contain" />
      <span className="block">
        <span className="block font-display text-[21px] leading-none text-ink">Saranesh Edu Hub</span>
        <span className="mt-1 block text-[8px] font-extrabold uppercase tracking-[0.2em] text-slate-500">Coaching & Services</span>
      </span>
    </Link>
  );
}
