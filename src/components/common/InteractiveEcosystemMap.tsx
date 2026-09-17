import React, { useState } from 'react';
import { Link } from 'wouter';
import { PROJECTS_DATA } from '../../data/mockCms';
import { ArrowRight, Layers } from 'lucide-react';

export const InteractiveEcosystemMap: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ART' | 'EDUCATION' | 'BUSINESS'>('ALL');

  const categories = [
    { id: 'ALL', label: 'Вся Экосистема AQ', color: '#DC2626' },
    { id: 'ART', label: 'ART (Искусство)', color: '#EC4899' },
    { id: 'EDUCATION', label: 'EDUCATION (Образование)', color: '#0284C7' },
    { id: 'BUSINESS', label: 'BUSINESS (Бизнес & Ресурсы)', color: '#4F46E5' },
  ];

  const filteredProjects = activeCategory === 'ALL' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 bg-slate-50/60 shadow-sm relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5 mb-1">
            <Layers className="w-4 h-4" /> Визуальная Модель Экосистемы
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Интегральная Схема AQ
          </h3>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  isActive 
                    ? 'bg-red-600 text-white border-red-600 shadow-md scale-105' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isActive ? '#FFFFFF' : cat.color }} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Central Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Central Core & Nodes (Visual Canvas) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-200 min-h-[360px] shadow-sm relative">
          
          {/* Central Logo Core */}
          <div className="w-36 h-36 rounded-3xl bg-white p-4 shadow-xl border border-slate-200 z-20 transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center text-center">
            <img
              src="/aq_logo.png"
              alt="AQ Foundation Logo Symbol"
              className="w-16 h-16 object-contain mb-1"
            />
            <span className="font-extrabold text-xs font-accent text-slate-900 tracking-wide">
              AQ FOUNDATION
            </span>
          </div>

          {/* Orbiting Axis Labels */}
          <div className="w-full max-w-sm grid grid-cols-3 gap-2 mt-8 text-center font-accent text-xs font-bold tracking-wider">
            <div className={`p-2.5 rounded-xl border transition-all ${activeCategory === 'ART' || activeCategory === 'ALL' ? 'bg-pink-50 text-pink-700 border-pink-200' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              ART
            </div>
            <div className={`p-2.5 rounded-xl border transition-all ${activeCategory === 'EDUCATION' || activeCategory === 'ALL' ? 'bg-sky-50 text-sky-700 border-sky-200' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              EDUCATION
            </div>
            <div className={`p-2.5 rounded-xl border transition-all ${activeCategory === 'BUSINESS' || activeCategory === 'ALL' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              BUSINESS
            </div>
          </div>
        </div>

        {/* Project Cards List corresponding to filter */}
        <div className="lg:col-span-6 space-y-3 max-h-[420px] overflow-y-auto pr-2">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.id}
              href={proj.href}
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-red-500/50 hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 bg-red-100 text-red-600"
                >
                  {proj.category[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
                      {proj.name}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-medium">
                    {proj.tagline}
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
