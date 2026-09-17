import React, { useState } from 'react';
import { Link } from 'wouter';
import { PROJECTS_DATA } from '../data/mockCms';
import { InteractiveEcosystemMap } from '../components/common/InteractiveEcosystemMap';
import { ArrowRight, Sparkles, Heart, Users, Handshake, Compass, ChevronDown } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principles = [
    { num: '01', title: 'Творчество + знания + экономика', desc: 'Слияние креативной энергии, системных знаний и жизнеспособных финансовых моделей.' },
    { num: '02', title: 'Целостный взгляд на человека', desc: 'Культура как пространство непрерывного гармоничного роста каждого участника сообщества.' },
    { num: '03', title: 'Культура + предпринимательство', desc: 'Превращение самобытных культурных инициатив в устойчивые институциональные структуры.' },
    { num: '04', title: 'Идеи → устойчивые действия', desc: 'Перевод смелых концепций в прикладные проекты, дающие измеримый социальный и творческий результат.' },
    { num: '05', title: 'Личное развитие → развитие сообществ', desc: 'Формирование среды, где эволюция отдельной личности расширяет потенциал всей экосистемы.' }
  ];

  const scrollToProjects = () => {
    const el = document.getElementById('projects-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 pb-20 bg-white text-slate-900">
      
      {/* Block 01. Hero */}
      <section className="relative pt-10 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Subtle Red Soft Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          
          {/* Main Logo Display */}
          <div className="flex items-center justify-center mb-2">
            <img
              src="/aq_logo.png"
              alt="AQ Foundation Symbol"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md transition-transform hover:scale-105"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Интегральная экосистема</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.1]">
              AQ Foundation
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-red-600 font-accent max-w-3xl mx-auto">
              Фонд развития интегральной культуры
            </p>
          </div>

          <div className="pt-2">
            <p className="text-lg sm:text-xl text-slate-700 font-medium tracking-wide">
              Искусство. Образование. Бизнес.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-base shadow-xl shadow-red-600/20 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
            >
              <span>Исследовать проекты</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-base transition-all hover:bg-slate-200/60"
            >
              О фонде AQ
            </Link>
          </div>
        </div>
      </section>

      {/* Block 02. Что такое AQ (Манифест) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-slate-200 bg-slate-50/50 relative shadow-sm">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Манифест фонда
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug font-heading">
              AQ — фонд развития интегральной культуры, объединяющей искусство, образование и бизнес.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Фонд объединяет людей, накапливает ресурсы и направляет их на создание и развитие проектов.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Узнать больше о манифесте</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="hidden sm:flex items-center gap-3 text-xs text-slate-600 font-accent font-bold">
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800">ART</span>
                <span>→</span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800">EDUCATION</span>
                <span>→</span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800">BUSINESS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 03. Миссия & 5 Принципов */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Идеологическое ядро
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1 font-heading">
            Развивать интегральную культуру
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl font-medium">
            Пять фундаментальных принципов, определяющих любое действие в экосистеме AQ Foundation.
          </p>
        </div>

        {/* Interactive Vertical Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {principles.map((item, idx) => {
            const isActive = activePrinciple === idx;
            return (
              <div
                key={idx}
                onClick={() => setActivePrinciple(idx)}
                className={`lg:col-span-12 rounded-2xl p-6 border transition-all cursor-pointer ${
                  isActive 
                    ? 'border-red-500/60 bg-red-50/40 shadow-md' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`font-accent font-bold text-lg sm:text-xl ${isActive ? 'text-red-600' : 'text-slate-400'}`}>
                      {item.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isActive ? 'rotate-180 text-red-600' : ''}`} />
                </div>

                {isActive && (
                  <p className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-700 leading-relaxed animate-in fade-in font-medium">
                    {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Block 04. Экосистема AQ (Visual Schema) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveEcosystemMap />
      </section>

      {/* Block 05. Проекты (Grid of 7 Projects) */}
      <section id="projects-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Направления
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1 font-heading">
              Проекты AQ
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-medium">
            Каждое направление обладает уникальным visual language, но работает на единую задачу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <Link
              key={proj.id}
              href={proj.href}
              className="group glass-panel rounded-3xl p-6 border border-slate-200 hover:border-red-500/50 hover-lift flex flex-col justify-between bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-bold border bg-red-50 text-red-600 border-red-200"
                  >
                    {proj.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-accent font-bold">
                    {proj.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors font-heading">
                    {proj.name}
                  </h3>
                  <p className="text-xs font-bold text-red-600 font-accent">
                    {proj.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 pt-1">
                    {proj.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-red-600">
                <span>Подробнее о проекте</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Block 06. Команда Teaser (temporarily disabled) */}
      {/* 
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 bg-slate-50/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Люди AQ
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1 font-heading">
                Люди, которые создают AQ
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-lg font-medium">
                Команда продюсеров и кураторов, развивающих все 7 направлений экосистемы.
              </p>
            </div>

            <Link
              href="/team"
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-sm transition-colors flex items-center gap-2 shrink-0 shadow-sm"
            >
              <span>Команда AQ Foundation</span>
              <ArrowRight className="w-4 h-4 text-red-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM_DATA.slice(0, 3).map((m) => (
              <div key={m.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{m.name}</h4>
                  <p className="text-xs text-red-600 font-semibold">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Block 07. Призыв к действию (Action Matrix) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Возможности
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">
            Что вы можете сделать прямо сейчас?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/endowment"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500/50 transition-all space-y-4 hover-lift group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors">
                Поддержать
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Поддержать проекты AQ через целевой капитал Endowment.
              </p>
            </div>
          </Link>

          <Link
            href="/aas"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500/50 transition-all space-y-4 hover-lift group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors">
                Участвовать
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Присоединиться к ближайшим событиям и концертам.
              </p>
            </div>
          </Link>

          <Link
            href="/networking"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500/50 transition-all space-y-4 hover-lift group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors">
                Сотрудничать
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Предложить партнёрство или творческую коллаборацию.
              </p>
            </div>
          </Link>

          <Link
            href="/about"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500/50 transition-all space-y-4 hover-lift group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors">
                Познакомиться
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Узнать детали концепции интегральной культуры.
              </p>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
};
