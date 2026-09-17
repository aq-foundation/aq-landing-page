import React from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PROJECTS_DATA } from '../data/mockCms';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { Sparkles, ArrowRight, Users, Lightbulb, Coins, Layers, Globe, Trophy } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const principles = [
    { title: 'Творчество + знания + экономика', desc: 'Единство эстетического поиска, фундаментальных знаний и устойчивых системных бизнес-моделей.' },
    { title: 'Целостный взгляд на человека', desc: 'Человек не средство, а главная ценность. Культура создает условия для развития всех граней потенциала.' },
    { title: 'Культура + предпринимательство', desc: 'Культурные проекты должны владеть языком экономики, чтобы оставаться независимыми и долговечными.' },
    { title: 'Идеи → устойчивые действия', desc: 'От абстрактной концепции до ежедневной последовательной реализации с измеримым социально-культурным эффектом.' },
    { title: 'Личное развитие → развитие сообществ', desc: 'Растущий участник сообщества обогащает всю экосистему, создавая синергетический эффект.' }
  ];

  const workflowSteps = [
    { icon: Users, title: 'Люди', desc: 'Привлечение авторов и экспертов' },
    { icon: Lightbulb, title: 'Идеи', desc: 'Формирование концепций' },
    { icon: Coins, title: 'Ресурсы', desc: 'Накопление капитала в Endowment' },
    { icon: Layers, title: 'Проекты', desc: 'Запуск музыкальных, образовательных и ремесленных площадок' },
    { icon: Globe, title: 'Сообщества', desc: 'Сеть взаимодействия в AQ Networking' },
    { icon: Trophy, title: 'Результат', desc: 'Устойчивая интегральная культура' }
  ];

  return (
    <div className="space-y-20 pb-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'О фонде AQ' }]} />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-slate-200 bg-slate-50/50 space-y-6">
          <div className="flex items-center gap-3">
            <img src="/aq_logo.png" alt="AQ Logo" className="w-12 h-12 object-contain" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Позиционирование
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-heading">
            О фонде AQ
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 font-accent max-w-3xl">
            Мы развиваем интегральную культуру — пространство, где искусство, образование и бизнес работают вместе.
          </p>
        </div>
      </section>

      {/* Editorial Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Quote */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-red-50/60 border border-red-200 space-y-4">
            <span className="text-4xl font-serif text-red-600">“</span>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading leading-snug">
              Интегральная культура — это не просто объединение областей, а новый уровень мышления и создания смыслов.
            </p>
            <div className="pt-4 border-t border-red-200 text-xs text-red-600 font-accent font-bold">
              AQ FOUNDATION MANIFESTO
            </div>
          </div>

          {/* Right Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base font-medium">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Почему необходим системный подход?
            </h3>
            <p>
              Традиционно искусство, академическое образование и коммерческий бизнес существовали в изолированных парадигмах. Творцы искали спонсоров, бизнес рассматривал культуру лишь как маркетинговый элемент, а образование оставалось оторванным от рыночных реалий.
            </p>
            <p>
              Фонд AQ преодолевает эту фрагментацию. Мы создаем единую операционную среду, в которой артист получает финансовую защиту и продюсирование, предприниматель обретает глубокий культурный контекст, а студенты академии DNA внедряют полученные знания напрямую в действующие проекты.
            </p>
          </div>

        </div>
      </section>

      {/* Principles Visual Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Фундамент
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading mt-1">
            5 Принципов интегральной культуры
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 border border-slate-200 bg-white space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 font-bold font-accent flex items-center justify-center text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-lg text-slate-900 font-heading">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Механика
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading mt-1">
            Как работает AQ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">{step.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ecosystem Detail Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Экосистема проектов
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading mt-1">
            7 Институциональных направлений
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <div key={proj.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 px-2.5 py-0.5 rounded bg-red-50">{proj.badge}</span>
                  <span className="text-[10px] text-slate-500 font-accent font-bold uppercase">{proj.category}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{proj.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{proj.fullDescription}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href={proj.href} className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1">
                  <span>Перейти на страницу проекта</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-10 text-center space-y-6 border border-red-200 bg-red-50/40">
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            Стать частью экосистемы AQ
          </h2>
          <p className="text-sm text-slate-700 max-w-lg mx-auto font-medium">
            Присоединяйтесь к нашим образовательным программам, поддерживайте целевой капитал или заявляйте свой проект.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-500 transition-colors shadow-md"
            >
              Посмотреть проекты
            </Link>
            <Link
              href="/networking"
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-50"
            >
              Связаться с AQ
            </Link>
          </div>
        </div>
      </section>

      <EcosystemNav />
    </div>
  );
};
