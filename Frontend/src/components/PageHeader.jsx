import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PageHeader({ eyebrow, title, text, image, action }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f0ece4] py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="hero-orb right-[-120px] top-[-100px] h-80 w-80 bg-gold/20 blur-3xl" />
      <div className="container-shell relative grid items-center gap-8 lg:grid-cols-[1fr_.42fr]">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
          <span className="eyebrow">
            <Sparkles size={13} className="text-gold" /> {eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl leading-[1.03] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {text}
          </p>
          {action && <div className="mt-6">{action}</div>}
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            className="hidden lg:block relative w-full"
          >
            <img
              src={image}
              alt=""
              className="w-full h-56 lg:h-72 object-cover rounded-[2rem] shadow-xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}