import React, { useState } from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { MASTERS_DATA, EVENTS_DATA, CraftMaster } from '../data/mockCms';
import { Modal } from '../components/common/Modal';
import { ShoppingBag, ArrowRight, GraduationCap, Calendar, Sparkles, ExternalLink, Camera } from 'lucide-react';

export const QaraBazarPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('все');
  const [selectedMaster, setSelectedMaster] = useState<CraftMaster | null>(null);

  const categories = ['все', 'украшения', 'одежда', 'аксессуары', 'декор', 'искусство'];

  const filteredMasters = selectedCategory === 'все' 
    ? MASTERS_DATA 
    : MASTERS_DATA.filter((m) => m.category === selectedCategory);

  const qaraBazarEvents = EVENTS_DATA.filter((e) => e.project === 'QARA BAZAR' || e.title.includes('QARA BAZAR') || e.title.includes('Маркет'));

  const participationConditions = [
    { title: 'Авторское производство', desc: 'Изделия должны быть созданными локальными мастерами или разработанными казахстанскими брендами.' },
    { title: 'Качество & Экологичность', desc: 'Использование натурального войлока, ювелирного серебра, кожи, глины и перерабатываемых материалов.' },
    { title: 'Готовность к масштабированию', desc: 'Желание систематизировать бренд, упаковать продукцию и проходить программы обучения DNA.' }
  ];

  const scrollToMasters = () => {
    const el = document.getElementById('masters-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20 bg-[#FDFBF7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'QARA BAZAR' }]} />
      </div>

      {/* Hero Block with Modern Kazakh Ethnic Motif */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-amber-950 text-amber-50 border border-amber-900/60 relative overflow-hidden space-y-6 shadow-2xl">
          {/* Subtle Kazakh Ethnic Ornament Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D42306_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-900/80 border border-amber-700/60 text-amber-300 text-xs font-bold">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Ремесленное творчество & Этническая культура</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold text-amber-50 font-heading tracking-tight">
            QARA BAZAR
          </h1>

          <p className="text-lg sm:text-2xl text-amber-200/90 font-medium max-w-3xl leading-relaxed">
            Направление, посвящённое ремесленному творчеству и современной этнической культуре Казахстана. Объединяем мастеров, создающих украшения, одежду, аксессуары и авторский декор.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToMasters}
              className="px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-base transition-all shadow-xl shadow-amber-900/40 flex items-center gap-2"
            >
              <span>Смотреть каталог мастеров</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="#participation-terms"
              className="px-8 py-4 rounded-2xl bg-amber-900/60 border border-amber-700/50 text-amber-200 hover:text-white font-bold text-base transition-colors"
            >
              Условия участия
            </Link>
          </div>
        </div>
      </section>

      {/* Миссия и описание проекта */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Миссия проекта</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Развиваем ремесленный бизнес и сохраняем культурный код
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl font-medium">
            Задача QARA BAZAR — помогать казахстанским мастерам развивать творческий бизнес, представлять и продавать работы на площадках фонда, участвовать в выставочных событиях и создавать коллаборации с современными дизайнерами. Мы доказываем, что традиционное ремесло — это актуальная и высоко ценящаяся часть современной мировой индустрии.
          </p>
        </div>
      </section>

      {/* Категории & Карточки мастеров и брендов */}
      <section id="masters-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/60 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Каталог брендов
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Мастера и авторские бренды
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                  selectedCategory === cat 
                    ? 'bg-amber-800 text-amber-50 shadow-md shadow-amber-900/20' 
                    : 'bg-white border border-amber-200/80 text-slate-700 hover:bg-amber-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMasters.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMaster(m)}
              className="bg-white rounded-3xl p-5 border border-amber-200/70 shadow-sm hover:border-amber-500 hover-lift cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={m.image} alt={m.brandName} className="w-full h-56 object-cover border border-amber-100 transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/80 backdrop-blur-md text-amber-200 border border-amber-700/50">
                    {m.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading">{m.brandName}</h3>
                  <p className="text-xs text-amber-800 font-bold mt-0.5">{m.masterName} ({m.location})</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2 line-clamp-2">{m.description}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-100 text-xs font-bold text-amber-800 flex items-center justify-between">
                <span>Смотреть профиль мастера</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Предстоящие маркеты и события */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Событийный календарь
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Предстоящие маркеты и выставочные события
          </h2>
        </div>

        {qaraBazarEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {qaraBazarEvents.map((ev) => (
              <div key={ev.id} className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5">
                  <img src={ev.poster} alt={ev.title} className="w-full h-48 rounded-2xl object-cover border border-amber-100" />
                </div>
                <div className="sm:col-span-7 space-y-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {ev.project}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2">{ev.title}</h3>
                  <p className="text-xs text-amber-800 font-bold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{ev.date} · {ev.venue}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">{ev.description}</p>
                  <Link href={`/aas/events/${ev.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900">
                    <span>Подробнее о маркете</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-amber-200/80 text-center space-y-3">
            <ShoppingBag className="w-8 h-8 text-amber-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">Осенний маркет QARA BAZAR 2026</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Ближайший масштабный маркет состоится на площадке фестиваля VMF в Центральном парке. Открыт приём заявок мастеров.
            </p>
          </div>
        )}
      </section>

      {/* Условия участия */}
      <section id="participation-terms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Для ремесленников
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Условия участия в QARA BAZAR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {participationConditions.map((cond, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-lg text-slate-900 font-heading">{cond.title}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{cond.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Связь с событиями и DNA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-amber-950 text-white border border-amber-900/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-3 z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Экосистемная интеграция
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-50 font-heading">
              QARA BAZAR × DNA × VMF
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/90 font-medium max-w-xl leading-relaxed">
              Мастера QARA BAZAR проходят акселерацию в бизнесе через программы DNA (учёт, брендинг, упаковочные стандарты) и получают приоритетные площадки для продаж на событиях VMF и AAS.
            </p>
          </div>
          <Link href="/dna" className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs flex items-center gap-2 shrink-0 shadow-lg z-10">
            <span>Узнать о бизнесе в DNA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 text-center space-y-4 border border-amber-300 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Хотите представить свой бренд на QARA BAZAR?
          </h3>
          <p className="text-sm text-slate-600 font-medium max-w-md mx-auto">
            Подайте заявку через анкету участников AQ Networking для проверки модератором и вхождения в закрытый каталог мастеров.
          </p>
          <div className="pt-2">
            <Link href="/networking" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-800 text-white font-extrabold text-sm hover:bg-amber-700 transition-colors shadow-md">
              <span>Заполнить заявку мастера</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Master Detail Modal */}
      {selectedMaster && (
        <Modal isOpen={!!selectedMaster} onClose={() => setSelectedMaster(null)} title={selectedMaster.brandName}>
          <div className="space-y-5 text-slate-900">
            <img src={selectedMaster.image} alt={selectedMaster.brandName} className="w-full h-64 rounded-2xl object-cover border border-slate-200 shadow-sm" />
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 uppercase tracking-wider">{selectedMaster.category}</span>
              <h4 className="text-2xl font-extrabold text-slate-900 mt-2 font-heading">{selectedMaster.brandName}</h4>
              <p className="text-xs text-amber-800 font-bold mt-1 font-accent">Мастер: {selectedMaster.masterName} · {selectedMaster.location}</p>
              <p className="text-sm text-slate-700 font-medium mt-3 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">{selectedMaster.description}</p>
            </div>
            
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-amber-700" />
                <span>Instagram: {selectedMaster.instagram}</span>
              </span>
              <a
                href={`https://instagram.com/${selectedMaster.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-800 text-white font-bold text-xs hover:bg-amber-700 inline-flex items-center gap-1"
              >
                <span>Перейти</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Modal>
      )}

      <EcosystemNav currentProjectId="qara-bazar" />
    </div>
  );
};

