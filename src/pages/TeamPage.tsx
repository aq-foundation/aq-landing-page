import React, { useState } from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { TEAM_DATA, Trustee, TeamMember } from '../data/mockCms';
import { MemberDetailDrawer } from '../components/team/MemberDetailDrawer';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { Users, ArrowRight, Sparkles } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Trustee | TeamMember | null>(null);

  return (
    <div className="space-y-16 pb-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Команда AQ Foundation' }]} />
      </div>

      {/* Block 01. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-slate-200 bg-slate-50/60 space-y-4 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Архитекторы экосистемы
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-heading">
            Команда AQ Foundation
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 font-medium max-w-2xl">
            Люди, которые создают и развивают экосистему AQ.
          </p>
        </div>
      </section>

      {/* Block 02. Попечительский совет (Закомментировано по запросу)
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Стратегия и кураторство
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading mt-1">
            Попечительский совет
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUSTEES_DATA.map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedPerson(t)}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-red-400 hover-lift cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-64 rounded-2xl object-cover border border-slate-200"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {t.name}
                  </h3>
                  <p className="text-xs font-bold text-red-600 mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2 line-clamp-3">
                    {t.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-bold text-slate-900 hover:text-red-600 flex items-center justify-between">
                <span>Подробный профиль</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Block 03. Команда */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Исполнительная дирекция
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading mt-1">
            Операционная команда
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_DATA.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedPerson(m)}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-red-400 hover-lift cursor-pointer space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-full h-48 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-base text-slate-900">{m.name}</h4>
                  <p className="text-xs font-bold text-red-600">{m.role}</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1 line-clamp-2">
                    {m.bio}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 hover:text-red-600 flex items-center justify-between">
                <span>Подробнее</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Block 05. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50/50 rounded-3xl p-10 text-center space-y-4 border border-red-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Хотите стать частью проектов AQ?
          </h3>
          <p className="text-sm text-slate-700 font-medium max-w-md mx-auto">
            Мы открыты к новым продюсерам, кураторам и экспертам для расширения нашей команды.
          </p>
          <div className="pt-2">
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-500 transition-colors shadow-md"
            >
              <span>Связаться с AQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Drawer */}
      <MemberDetailDrawer
        person={selectedPerson}
        isOpen={!!selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

      <EcosystemNav />
    </div>
  );
};
