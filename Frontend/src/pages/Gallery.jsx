import React, { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { gallery } from '../data/siteData';

export default function Gallery() {
  const tags = useMemo(() => ['All', ...new Set(gallery.map(x => x.tag))], []);
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? gallery : gallery.filter(x => x.tag === active);
  return <>
    <PageHeader eyebrow="Gallery" title="A closer look at the Saran learning experience." text="Explore a glimpse of classroom learning, mentor guidance, practice sessions and the moments that make progress meaningful." image={gallery[0].image}/>
    <section className="py-12 sm:py-16 md:py-20"><div className="container-shell"><div className="flex items-end justify-between gap-4"><div><div className="text-xs font-extrabold uppercase tracking-[.2em] text-slate-500">Explore moments</div><h2 className="mt-2 font-display text-3xl sm:text-4xl">Learning in action</h2></div><Link to="/counsellor" className="hidden rounded-full bg-ink px-4 py-3 text-sm font-extrabold text-white sm:inline-flex items-center gap-2">Visit through a conversation <ArrowUpRight size={16}/></Link></div><div className="scrollbar-hide mt-7 flex gap-2 overflow-x-auto pb-2">{tags.map(tag=><button key={tag} type="button" onClick={()=>setActive(tag)} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${active===tag?'bg-ink text-white':'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}>{tag}</button>)}</div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item,index)=><article key={item.title} className={`group overflow-hidden rounded-[1.75rem] bg-white shadow-soft ${index===0&&active==='All'?'sm:col-span-2 lg:row-span-2':''}`}><div className="overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index===0&&active==='All'?'h-80 sm:h-full min-h-[28rem]':'h-64'}`}/></div><div className="p-5"><div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-gold">{item.tag}</div><h3 className="mt-2 font-display text-2xl">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">A focused moment from the Saran learning journey.</p></div></article>)}</div></div></section>
  </>;
}
