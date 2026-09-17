import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { Modal } from '../components/common/Modal';
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Lock,
  PieChart,
  Users,
  Award,
  Sparkles,
  Briefcase,
  Cpu,
  Layers,
  Repeat,
  Send,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export const EndowmentPage: React.FC = () => {
  // Modal states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    interestFormat: 'Частный донор',
    comment: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      contact: '',
      interestFormat: 'Частный донор',
      comment: ''
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQ Items
  const faqList = [
    {
      q: 'Что происходит с моим вкладом?',
      a: 'Средства входят в капитал AQ Endowment и размещаются в соответствии с инвестиционной политикой фонда.'
    },
    {
      q: 'Расходуется ли сам капитал?',
      a: 'Модель предполагает сохранение основного капитала. Для реализации программ используется инвестиционный доход.'
    },
    {
      q: 'Во что инвестируется капитал?',
      a: 'В допустимые финансовые инструменты в соответствии с инвестиционной политикой: депозиты, облигации, акции и другие инвестиционные активы.'
    },
    {
      q: 'На что направляется доход?',
      a: 'На образовательные, инкубационные и акселерационные программы, а также развитие инфраструктуры экосистемы AQ.'
    },
    {
      q: 'Endowment напрямую инвестирует в стартапы?',
      a: 'Средства Endowment финансируют программы развития. Отдельные прямые инвестиции в перспективные проекты могут осуществляться через отдельные инвестиционные механизмы AQ.'
    },
    {
      q: 'Можно ли профинансировать конкретное направление?',
      a: 'Да. Для крупных доноров могут создаваться именные или тематические программы (например, AQ Tech Program supported by...).'
    },
    {
      q: 'Как получить отчётность?',
      a: 'AQ предусматривает регулярную финансовую и программную отчётность перед донорами с независимым аудиторским заключением.'
    }
  ];

  return (
    <div className="space-y-20 pb-24 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'AQ Endowment' }]} />
      </div>

      {/* BLOCK 3. Первый экран (Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white relative overflow-hidden space-y-8 shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-red-500" />
            <span>Институциональный целевой капитал</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Капитал, который работает на развитие <span className="text-red-500">год за годом</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
              AQ Endowment формирует долгосрочный капитал фонда, сохраняет его и размещает в финансовых инструментах. Инвестиционный доход направляется на образование, инкубацию, акселерацию и развитие сильных проектов в креативных индустриях, IT и бизнесе.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('contact-form')}
              className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base transition-all shadow-lg shadow-red-600/30 flex items-center gap-2"
            >
              <span>Обсудить участие</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition-all"
            >
              Как это работает
            </button>
          </div>

          {/* Scheme Card inside Hero */}
          <div className="pt-6 border-t border-slate-800">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-4">
              Модель движения капитала:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs text-red-400 font-bold block mb-1">01. Вклад</span>
                <span className="text-sm font-bold text-white">Капитал</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs text-red-400 font-bold block mb-1">02. Доход</span>
                <span className="text-sm font-bold text-white">Инвестиционный доход</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs text-red-400 font-bold block mb-1">03. Поддержка</span>
                <span className="text-sm font-bold text-white">Люди и проекты</span>
              </div>
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/50">
                <span className="text-xs text-red-400 font-bold block mb-1">04. Результат</span>
                <span className="text-sm font-bold text-white">Рост экосистемы</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4. Зачем нужен AQ Endowment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Устойчивая финансовая модель
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Не разовое финансирование, а постоянный источник развития
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              Большинство образовательных и предпринимательских программ зависят от грантов, спонсоров и разовых бюджетов.
            </p>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              <strong className="text-slate-900">AQ Endowment создаёт другую модель.</strong> Фонд формирует капитал, который не расходуется на операционную деятельность. Он сохраняется и работает, создавая регулярный инвестиционный доход.
            </p>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              За счёт этого AQ может финансировать программы развития системно и долгосрочно.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-red-50 border-2 border-red-200 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3 text-red-600 font-bold text-sm uppercase tracking-wider">
              <Lock className="w-5 h-5" />
              <span>Главный принцип Endowment</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block">Защита активов</span>
                  <span className="text-lg font-bold text-slate-900">Основной капитал сохраняется</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block">Движитель развития</span>
                  <span className="text-lg font-bold text-slate-900">Работает инвестиционный доход</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5. Как работает Endowment (5 Шагов) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Механика целевого капитала
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Как работает Endowment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Формируем капитал',
              desc: 'Частные лица, предприниматели и компании вносят средства в AQ Endowment.'
            },
            {
              step: '02',
              title: 'Размещаем капитал',
              desc: 'Капитал размещается в финансовых инструментах: депозитах, облигациях, акциях и иных допустимых инструментах с приоритетом сохранения активов.'
            },
            {
              step: '03',
              title: 'Получаем доход',
              desc: 'Сам капитал не расходуется. Для деятельности фонда используется доход, который он генерирует.'
            },
            {
              step: '04',
              title: 'Финансируем программы',
              desc: 'Доход направляется на образование, инкубацию, акселерацию, развитие команд и инфраструктуру.'
            },
            {
              step: '05',
              title: 'Инвестируем в сильнейших',
              desc: 'Наиболее перспективные проекты, прошедшие программы AQ, могут отдельно получать инвестиции на рост.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-red-300 transition-all">
              <div>
                <span className="text-2xl font-extrabold font-accent text-red-600 block mb-2">{item.step}</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-full h-1 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-red-600" style={{ width: `${(idx + 1) * 20}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 6. Что мы развиваем */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Направления поддержки
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            От идеи до устойчивого проекта
          </h2>
          <p className="text-slate-600 text-base mt-1">AQ Endowment работает сразу с несколькими ключевыми направлениями.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Креативные индустрии</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Музыка, искусство, дизайн, fashion, медиа, кино, культурные проекты, креативные пространства и новые форматы.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">IT и технологии</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Цифровые продукты, SaaS, платформы, AI-проекты, технологические сервисы и новые бизнес-модели.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Предпринимательство</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Новые компании, малый и средний бизнес, социальное предпринимательство и проекты с потенциалом масштабирования.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">На стыке индустрий</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Особый фокус AQ — проекты, которые соединяют культуру, технологии и предпринимательство в единую экосистему.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 7 & 8. Инкубация и Акселерация */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Инкубация */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                Ранняя стадия
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Инкубация: превратить идею в работающий проект
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Инкубационные программы AQ предназначены для проектов на начальном этапе.
              </p>

              {/* Pathway */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 flex flex-wrap items-center gap-1.5">
                <span>Идея</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                <span>Продукт</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                <span>Аудитория</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                <span>Команда</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                <span>Бизнес-модель</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                <span className="text-red-600">Первые продажи</span>
              </div>

              {/* Components */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Обучение</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Менторство</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Трекинг</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Экспертиза рынка</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Бизнес-модель</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Тест продукта</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs font-medium">
              <strong className="text-red-400 font-bold block mb-1">Результат:</strong>
              На выходе появляется не просто идея, а проект, способный работать самостоятельно.
            </div>
          </div>

          {/* Акселерация */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                Масштабирование
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Акселерация: помочь сильным проектам расти быстрее
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Акселерационные программы работают с проектами, которые уже вышли на рынок и доказали жизнеспособность.
              </p>

              {/* Focus List */}
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-800 font-bold pt-2">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">Рост выручки & Продажи</div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">Маркетинг & Продукт</div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">Команда & Управление</div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">Выход на новые рынки</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs font-medium">
              <strong className="text-red-400 font-bold block mb-1">Результат:</strong>
              Более сильные компании, зрелые команды и проекты, готовые к следующему этапу роста.
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 9. Инвестиции в лучшие проекты + Legal Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-6 border border-slate-800 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase">
            <Zap className="w-4 h-4 text-red-500" />
            <span>Следующий уровень поддержки</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Инвестиции в лучшие проекты
          </h2>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            AQ не ограничивается обучением. Проекты, демонстрирующие сильные результаты в инкубационных и акселерационных программах, могут отдельно рассматриваться для инвестирования.
          </p>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm font-bold text-red-400 flex flex-wrap items-center justify-center gap-3">
            <span>Образование</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span>Инкубация</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span>Акселерация</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="text-white">Инвестиции</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="text-emerald-400">Рост</span>
          </div>

          {/* Legal Note Box */}
          <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-400">
              <AlertCircle className="w-5 h-5" />
              <span>Важное юридическое и операционное разграничение</span>
            </div>
            <p className="leading-relaxed">
              Средства <strong>AQ Endowment</strong> финансируют исключительно образовательные и инфраструктурные программы развития. Прямые инвестиции в отдельные коммерческие проекты осуществляются через обособленные инвестиционные механизмы AQ.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 10. Почему эта модель работает */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Преимущества институциональной модели
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Почему эта модель работает
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Долгосрочность</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Капитал продолжает работать годами, а не заканчивается после завершения одной программы.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Устойчивость</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              AQ получает собственный независимый и постоянный источник финансирования инициатив.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Системный эффект</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Финансируется не единичный проект, а инфраструктура постоянного появления новых проектов.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Масштабируемость</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Чем больше Endowment, тем больше программ, участников и компаний может поддерживать AQ.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 11. Блок для мецената */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-red-600 text-white space-y-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-200">
              Обращение к меценатам и партнерам
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
              Ваш вклад не заканчивается одной программой
            </h2>
            <p className="text-base sm:text-lg text-red-100 leading-relaxed font-normal">
              Классическое пожертвование решает конкретную задачу один раз. Endowment превращает вклад в капитал, который работает многие годы. Один вклад ежегодно помогает появляться новым предпринимателям, создателям, технологическим командам и компаниям.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-red-700/80 border border-red-400/40 text-center space-y-2">
            <p className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              «Вы финансируете не событие. Вы создаёте источник развития.»
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 12. Что получает донор */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Статусные привилегии и импакт
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Что получает донор
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Долгосрочное влияние</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Вклад работает не один год и создаёт постоянный накопительный социальный и экономический эффект.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Прозрачность</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Донор получает исчерпывающее понимание управления капиталом и целевого расходования инвестиционного дохода.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Участие в развитии экосистемы</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Возможность стать частью сообщества предпринимателей, меценатов и экспертных лидерах AQ.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Наследие</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Крупные вклады могут связываться с отдельными образовательными программами, направлениями или именными инициативами.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 13. Форматы участия */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Форматы сотрудничества
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Стать частью AQ Endowment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase">Формат 01</span>
              <h3 className="text-lg font-bold text-slate-900">Частный донор</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Личный вклад в формирование долгосрочного капитала фонда.
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({ ...formData, interestFormat: 'Частный донор' });
                scrollToSection('contact-form');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all"
            >
              Выбрать формат
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase">Формат 02</span>
              <h3 className="text-lg font-bold text-slate-900">Корпоративный донор</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Долгосрочное участие компании в развитии образования, предпринимательства и технологий.
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({ ...formData, interestFormat: 'Корпоративный донор' });
                scrollToSection('contact-form');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all"
            >
              Выбрать формат
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-red-50 border border-red-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase">Формат 03</span>
              <h3 className="text-lg font-bold text-slate-900">Именной капитал</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Крупный вклад финансирует отдельную программу в долгосрочной перспективе (напр. <em>AQ Tech Program supported by...</em>).
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({ ...formData, interestFormat: 'Именной капитал' });
                scrollToSection('contact-form');
              }}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all"
            >
              Выбрать формат
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase">Формат 04</span>
              <h3 className="text-lg font-bold text-slate-900">Стратегический партнёр</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Участие капиталом, экспертизой, менторством, рыночной инфраструктурой и доступом к клиентам.
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({ ...formData, interestFormat: 'Стратегический партнёр' });
                scrollToSection('contact-form');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all"
            >
              Выбрать формат
            </button>
          </div>
        </div>
      </section>

      {/* BLOCK 14. Почему AQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Экосистемный масштаб
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">
            AQ — экосистема развития людей и проектов
          </h2>
          <p className="text-slate-700 text-base max-w-3xl leading-relaxed">
            AQ объединяет образование, предпринимательство, культуру и технологии. Мы создаём среду, в которой идеи проходят путь от первых экспериментов до самостоятельных проектов и компаний.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Экосистема</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">7 Проектов</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Кураторство</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">Эксперты & Совет</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Формат</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">Инкубация & Импакт</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="text-xs text-slate-500 font-bold block">Прозрачность</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">Аудируемый капитал</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 15. Прозрачность и управление */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Институциональное доверие
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Капитал требует доверия. Доверие требует прозрачности.
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            AQ Endowment строится на принципах сохранения капитала, диверсификации, прозрачного управления и регулярной отчётности перед донорами.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-red-600 mb-2" />
            <h3 className="text-base font-bold text-slate-900">Юридическая структура</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Обособленный целевой капитал с разделением средств управления и операционных счетов.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <Lock className="w-6 h-6 text-red-600 mb-2" />
            <h3 className="text-base font-bold text-slate-900">Инвестиционная политика</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Приоритет сохранения капитала: строго регулируемые депозиты, государственные и корпоративные облигации.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <Award className="w-6 h-6 text-red-600 mb-2" />
            <h3 className="text-base font-bold text-slate-900">Аудит и отчётность</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ежегодная независимая аудиторская проверка и открытые отчеты перед попечительским советом и донорами.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 16. Как выглядит цикл (Интерактивная диаграмма) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-8 border border-slate-800 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Замкнутый цикл развития
            </span>
            <h2 className="text-3xl font-bold font-heading">
              Полный цикл капитала и импакта
            </h2>
          </div>

          {/* Cycle Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center text-xs font-bold">
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">1. Донор</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">2. Endowment</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">3. Инструменты</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">4. Инвест-доход</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">5. Образование</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">6. Инкубация</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">7. Акселерация</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">8. Проекты</div>
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">9. Инвестиции/Рост</div>
            <div className="p-3.5 rounded-xl bg-red-900/60 border border-red-700 text-red-200">10. Новые Доноры</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-center gap-3">
            <Repeat className="w-5 h-5 text-red-400 shrink-0" />
            <span>
              Замкнутый цикл: выпускники программ и успешные предприниматели в будущем сами становятся менторами, партнерами и донорами AQ Endowment.
            </span>
          </div>
        </div>
      </section>

      {/* BLOCK 17. FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Вопросы и ответы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-heading flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-red-600 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BLOCK 18 & Form. Финальный экран */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-slate-800 shadow-2xl">
          <div className="space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              Формирование капитала
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight">
              Создайте капитал, который продолжит работать завтра
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Если вам близка идея долгосрочно инвестировать в развитие людей, предпринимательства, технологий и культуры, давайте обсудим формат участия в AQ Endowment.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2">
              <span className="font-bold text-white block">Контакты дирекции фонда:</span>
              <p>Email: <a href="mailto:endowment@aqfoundation.org" className="text-red-400 hover:underline">endowment@aqfoundation.org</a></p>
              <p>Локация: Алматы, Казахстан</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-white text-slate-900 space-y-4 shadow-xl">
            <h3 className="text-xl font-bold font-heading text-slate-900">Заявка на обсуждение участия</h3>
            
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Имя *</label>
              <input
                type="text"
                required
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Компания / Организация</label>
              <input
                type="text"
                placeholder="ООО / ИП / Частное лицо"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Телефон или Email *</label>
              <input
                type="text"
                required
                placeholder="+7 (700) 000-00-00 / email@domain.com"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Формат интереса</label>
              <select
                value={formData.interestFormat}
                onChange={(e) => setFormData({ ...formData, interestFormat: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-red-600"
              >
                <option value="Частный донор">Частный донор</option>
                <option value="Корпоративный донор">Корпоративный донор</option>
                <option value="Именной капитал">Именной капитал</option>
                <option value="Стратегический партнёр">Стратегический партнёр</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Комментарий</label>
              <textarea
                rows={3}
                placeholder="Укажите ваши пожелания или вопросы..."
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Связаться с AQ</span>
            </button>
          </form>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Modal isOpen={isSubmitted} onClose={resetForm} title="Заявка принята">
        <div className="text-center py-6 space-y-4 text-slate-900">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-heading">Спасибо за ваш интерес к AQ Endowment!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Мы получили вашу заявку на формат «{formData.interestFormat}». Представитель попечительского совета и исполнительной дирекции фонда свяжется с вами в течение 24 часов.
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
          >
            Закрыть
          </button>
        </div>
      </Modal>

      {/* Navigation Ecosystem Footer */}
      <EcosystemNav currentProjectId="endowment" />
    </div>
  );
};

