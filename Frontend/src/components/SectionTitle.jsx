import React from 'react';

export default function SectionTitle({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && <div className={`text-xs font-extrabold uppercase tracking-[0.2em] ${light ? 'text-gold' : 'text-slate-500'}`}>{eyebrow}</div>}
      <h2 className={`mt-3 section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 body-copy ${light ? 'text-slate-300' : ''}`}>{text}</p>}
    </div>
  );
}
