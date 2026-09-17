import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { NetworkingWizardModal } from '../components/networking/NetworkingWizardModal';
import { GraduationCap, ArrowRight, Target, CheckCircle2, TrendingUp, Layers, Users, ShieldCheck, Star } from 'lucide-react';

export const DNAPage: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'cases'>('projects');

  const directions = [
    { title: 'Обучение и бизнес-коучинг', desc: 'Прикладные модули по финансовой модели, бренд-архитектуре и индивидуальные сессии с менторами.', icon: GraduationCap },
    { title: 'Акселерация проектов', desc: 'Интенсивные 8-недельные трек-спринты упаковки продукта и вывода на целевые рынки.', icon: TrendingUp },
    { title: 'Внутренний нетворкинг', desc: 'Прямой доступ к экспертной базе AQ Networking, меценатам и бизнес-партнёрам.', icon: Users },
    { title: 'Коллаборации и обмен опытом', desc: 'Кросс-проектное взаимодействие с участниками QARA BAZAR, AQ Music и фестивалей.', icon: Layers },
    { title: 'Построение корпоративной структуры', desc: 'Юридическое оформление, регистрация товарных знаков, договоров и прозрачного учёта.', icon: ShieldCheck },
    { title: 'Настройка эффективных бизнес-процессов', desc: 'Систематизация операционки, команда-образование, внедрение CRM и финансового контроля.', icon: Target },
    { title: 'Сопровождение до внешних результатов', desc: 'Трекинг экспертов до достижения измеримых KPI: рост выручки, инвестиции, экспорт.', icon: CheckCircle2 }
  ];

  const workflowSteps = [
    { num: '01', title: 'Диагностика', desc: 'Аудит текущей бизнес-модели, выявление узких мест и фиксация базовых метрик.' },
    { num: '02', title: 'Стратегия', desc: 'Формирование пошаговой дорожной карты развития и назначение персонального трекера.' },
    { num: '03', title: 'Спринты упаковки', desc: 'Практическая работа: юридическая отладка, брендинг, упаковка продаж и финансовая модель.' },
    { num: '04', title: 'Трекинг & Менторство', desc: 'Еженедельные сессии с экспертами DNA для проверки гипотез и коррекции курса.' },
    { num: '05', title: 'Измеримый результат', desc: 'Выход на внешние показатели: привлечение ресурсов, франчайзинг, новые точки или экспорт.' }
  ];

  const dnaProjects = [
    {
      name: 'Майя бутик',
      category: 'Fashion & Ethno Craft',
      desc: 'Независимый бренд авторской одежды и аксессуаров с современными этническими мотивами.',
      result: 'Систематизация поставок, выстраивание финансового учёта, выстраивание диверсифицированных каналов и выход на онлайн-платформы.',
      tag: 'Акселератор DNA',
      metrics: '+140% прирост продаж'
    },
    {
      name: 'Фулл повер',
      category: 'Media & Production',
      desc: 'Креативный медиа-продакшн полного цикла и агентство по производству визуального контента.',
      result: 'Упаковка коммерческого предложения, выстраивание структуры субподрядных контрактов и юридическая защита авторских прав.',
      tag: 'Масштабирование',
      metrics: 'Рост чека в 2.5 раза'
    },
    {
      name: 'Грин Спун',
      category: 'Eco Food Tech',
      desc: 'Инновационный проект в сфере веганской гастрономии, здорового питания и эко-продуктов.',
      result: 'Разработка масштабируемой франчайзинговой модели и привлечение стартового инвестиционного гранта.',
      tag: 'Грант получен',
      metrics: 'Привлечены инвестиции'
    },
    {
      name: 'Фотостудия Ани в Атырау',
      category: 'Creative Space',
      desc: 'Концептуальное арт-пространство и профессиональная фотостудия в Западном регионе Казахстана.',
      result: 'Создание первой арт-студии полного цикла в Атырау, настройка регулярной загрузки и локального нетворкинга.',
      tag: 'Региональный кейс',
      metrics: 'Устойчивая прибыльность'
    }
  ];

  const reviews = [
    {
      quote: 'Благодаря сессиям DNA по юридической структуре и товарным знакам мы упорядочили все авторские права и заключили крупные контракты.',
      author: 'Команда «Фулл повер»',
      role: 'Медиа-продакшн'
    },
    {
      quote: 'DNA помог нам превратить локальное производство в просчитанный бизнес с четким пониманием себестоимости и каналов продаж.',
      author: 'Майя',
      role: 'Основательница «Майя бутик»'
    }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'DNA — Digital Nomad Academy' }]} />
      </div>

      {/* Hero Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden space-y-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold">
            <GraduationCap className="w-4 h-4 text-red-500" />
            <span>Образовательное & Акселерационное направление</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold text-white font-heading tracking-tight">
            DNA — DIGITAL NOMAD ACADEMY
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed">
            Образовательное и акселерационное направление для развития бизнеса. На текущем этапе оно объединяет независимые проекты в сфере искусства, творчества и креативных индустрий.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-base transition-all shadow-xl shadow-red-600/25 flex items-center gap-2"
            >
              <span>Подать заявку на участие</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('dna-directions')}
              className="px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-base transition-colors"
            >
              Направления работы
            </button>
          </div>
        </div>
      </section>

      {/* Академия и её подход */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Подход & Философия
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Превращаем творческий потенциал в устойчивый бизнес
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl font-medium">
            Большинство креативных инициатив сталкивается со сложностями на этапе перехода от авторской идеи к регулярной операционной деятельности. Подход DNA основан на бережном сопровождении: мы сохраняем свободу творческого видения и идентичность проекта, добавляя системность, юридическую защищенность и выверенную финансовую модель.
          </p>
        </div>
      </section>

      {/* 7 Направлений работы */}
      <section id="dna-directions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Фундамент программы
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
            7 Направлений работы DNA
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 hover:border-red-500 transition-all hover-lift flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 font-heading">{d.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{d.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                  Модуль 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Процесс работы (UX-Scheme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Дорожная карта
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Сопровождение проекта по шагам
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
              <span className="font-accent font-extrabold text-red-600 text-lg block">{step.num}</span>
              <h4 className="font-bold text-sm text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Проекты направления (EXACT 4 PROJECTS) & Кейсы */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Участники & Результаты
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Проекты направления DNA
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'projects' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Карточки проектов
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'cases' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Результаты & Отзывы
            </button>
          </div>
        </div>

        {activeTab === 'projects' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dnaProjects.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-red-400 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700">
                      {p.tag}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {p.metrics}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-2xl text-slate-900 font-heading">{p.name}</h3>
                  <p className="text-xs text-red-600 font-bold uppercase tracking-wide">{p.category}</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{p.desc}</p>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase block mb-1">Результат работы в DNA:</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                      {p.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviews.map((rev, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-800 font-medium italic leading-relaxed">
                    «{rev.quote}»
                  </p>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{rev.author}</span>
                    <span className="text-slate-500 font-medium">{rev.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            Готовы вывести проект на новый уровень?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl mx-auto leading-relaxed">
            Подайте заявку на участие в программе или первичную диагностическую консультацию с экспертами Digital Nomad Academy.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-extrabold text-sm hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30"
            >
              <span>Подать заявку / Записаться на консультацию</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <NetworkingWizardModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <EcosystemNav currentProjectId="dna" />
    </div>
  );
};
