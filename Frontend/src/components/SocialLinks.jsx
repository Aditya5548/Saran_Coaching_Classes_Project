import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { site } from '../data/siteData';

const links = [
  ['Facebook', site.social.facebook, Facebook],
  ['Instagram', site.social.instagram, Instagram],
  ['Twitter', site.social.twitter, Twitter],
  ['LinkedIn', site.social.linkedin, Linkedin]
];

export default function SocialLinks({ compact = false }) {
  return <div className={compact ? 'flex gap-2' : 'grid grid-cols-2 gap-3 sm:grid-cols-4'}>
    {links.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`${compact ? 'grid h-10 w-10' : 'flex items-center gap-2 px-3 py-2'} place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-gold`}>{compact ? <Icon size={17} /> : <><Icon size={16}/><span className="text-xs font-bold">{label}</span></>}</a>)}
  </div>;
}
