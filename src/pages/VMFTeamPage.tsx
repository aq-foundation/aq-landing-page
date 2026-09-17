import React, { useState } from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { TEAM_DATA, TeamMember } from '../data/mockCms';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { Modal } from '../components/common/Modal';
import {
  ArrowLeft,
  Leaf,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  ExternalLink
} from 'lucide-react';

export const VMFTeamPage: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<TeamMember | null>(null);

  const vmfTeamMembers = TEAM_DATA.filter((m) => m.isVmfCore);

  return (
    <div className="space-y-16 pb-24 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'VMF', href: '/vmf' },
            { label: 'Команда VMF' }
          ]}
          mobileBackText="Вернуться к VMF"
          mobileBackHref="/vmf"
        />
      </div>

      {/* Block 01. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700">
              <Leaf className="w-4 h-4 text-emerald-400" /> Организационная команда фестиваля
            </span>
            <Link
              href="/vmf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-700" />
              <span>Вернуться к VMF</span>
            </Link>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
              Команда <span className="text-emerald-400">VMF</span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-200 font-normal leading-relaxed">
              Организаторы, кураторы направлений, продюсеры площадок и лидеры эко-инфраструктуры Vegan Music Fest.
            </p>
          </div>
        </div>
      </section>

      {/* Block 02. Команда Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vmfTeamMembers.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:border-emerald-300 transition-all"
            >
              <div className="space-y-4">
                {/* Photo & Role */}
                <div className="flex items-start gap-4">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shadow-sm shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {m.vmfRole || m.role}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading pt-1">{m.name}</h3>
                    <p className="text-xs text-slate-600 font-medium line-clamp-2">{m.bio}</p>
                  </div>
                </div>

                {/* Professional Experience */}
                {m.vmfExperience && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span>Профессиональный опыт & Функции:</span>
                    </div>
                    <p className="leading-relaxed font-normal">{m.vmfExperience}</p>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 block">Зоны ответственности:</span>
                  <div className="space-y-1">
                    {m.responsibilities.map((res, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Powers & Managed Decisions */}
                {m.vmfPowers && (
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Полномочия и ведение решений:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 font-medium text-emerald-900">
                      {m.vmfPowers.map((pow, i) => (
                        <li key={i}>{pow}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Socials & Drawer Trigger */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {m.links?.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors inline-flex items-center gap-1"
                    >
                      <span>{l.title}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPerson(m)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Карточка участника
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Block 03. Return Button Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/vmf"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Вернуться на главную страницу VMF</span>
        </Link>
      </section>

      {/* Detailed Person Modal */}
      {selectedPerson && (
        <Modal isOpen={!!selectedPerson} onClose={() => setSelectedPerson(null)} title={selectedPerson.name}>
          <div className="space-y-6 text-slate-900">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <img src={selectedPerson.avatar} alt={selectedPerson.name} className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shrink-0" />
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase">
                  {selectedPerson.vmfRole || selectedPerson.role}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">{selectedPerson.name}</h4>
                <p className="text-xs text-slate-600 mt-1">{selectedPerson.bio}</p>
              </div>
            </div>

            {selectedPerson.vmfExperience && (
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Опыт и фестивальные функции</span>
                <p className="text-xs text-slate-700 leading-relaxed p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium">
                  {selectedPerson.vmfExperience}
                </p>
              </div>
            )}

            {selectedPerson.vmfPowers && (
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Перечень полномочий</span>
                <div className="space-y-1 text-xs text-slate-800 font-medium">
                  {selectedPerson.vmfPowers.map((pow, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{pow}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}

      {/* Unified Ecosystem Footer Navigation */}
      <EcosystemNav currentProjectId="vmf" />
    </div>
  );
};

