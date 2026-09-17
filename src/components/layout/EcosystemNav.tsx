import React from 'react';
import { Link } from 'wouter';
import { PROJECTS_DATA } from '../../data/mockCms';
import { ArrowRight, Sparkles } from 'lucide-react';

interface EcosystemNavProps {
  currentProjectId?: string;
}

export const EcosystemNav: React.FC<EcosystemNavProps> = ({ currentProjectId }) => {
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== currentProjectId);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Экосистема AQ Foundation
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Исследуйте другие проекты AQ
            </h3>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-medium">
            Каждый проект имеет собственный визуальный характер, но действует внутри единой экосистемы.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.slice(0, 3).map((proj) => (
            <Link
              key={proj.id}
              href={proj.href}
              className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between hover-lift"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-xs px-2.5 py-1 rounded-full font-bold bg-red-50 text-red-600 border border-red-200"
                  >
                    {proj.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {proj.name}
                </h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-medium">
                  {proj.shortDescription}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-800 group-hover:text-red-600">
                <span>Перейти к проекту</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
