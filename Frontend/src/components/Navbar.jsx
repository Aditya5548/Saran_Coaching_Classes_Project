import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const NAV = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200 ${isActive
      ? 'bg-[#0b1020] text-white shadow-md shadow-[#0b1020]/15'
      : 'text-[#334155] hover:bg-[#f7f4ee] hover:text-[#0b1020]'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e7e1d6] bg-[#f7f4ee]/95 backdrop-blur-2xl">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
        <Logo onClick={() => setOpen(false)} />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map(([to, label]) => <NavLink key={to} to={to} className={navClass}>{label}</NavLink>)}
        </nav>
        <div className="hidden sm:block">
          <Link to="/counsellor" className="inline-flex items-center gap-2 rounded-full bg-[#d7aa52] px-5 py-3 text-sm font-extrabold text-[#0b1020] shadow-lg shadow-[#d7aa52]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e1b85f]">
            Book a Counsellor <ArrowUpRight size={16} />
          </Link>
        </div>
        <button type="button" onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-[#ddd6ca] bg-white text-[#0b1020] shadow-sm lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-[#e7e1d6] bg-[#f7f4ee] lg:hidden">
            <div className="container-shell flex flex-col gap-2 py-4">
              {NAV.map(([to, label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className={navClass}>{label}</NavLink>)}
              <Link onClick={() => setOpen(false)} to="/counsellor" className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d7aa52] px-4 py-3 font-extrabold text-[#0b1020] shadow-md shadow-[#d7aa52]/15">Book a Counsellor <ArrowUpRight size={16} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
