import React, { useState } from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { ARTISTS_DATA, EVENTS_DATA } from '../data/mockCms';
import { StickyCTA } from '../components/common/StickyCTA';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { Modal } from '../components/common/Modal';
import {
  Leaf,
  Music,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const VMFPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Music' | 'Food' | 'Market' | 'Education' | 'Kids' | 'Eco'>('All');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applyType, setApplyType] = useState('Фудкорт');

  const principles = [
    { title: 'Music First', desc: 'Главный артист на фестивале — живое независимое звучание и живой звук.' },
    { title: '100% Vegan Space', desc: 'Единая зона питания и напитков исключительно этичного растительного происхождения.' },
    { title: 'Positive Veganism', desc: 'Открытая вдохновляющая атмосфера радости и созидания без агрессии и поучений.' },
    { title: 'Zero Waste', desc: 'Сортировка отходов, многоразовая посуда и полный отказ от одноразового пластика.' },
    { title: 'Open Culture', desc: 'Пространство равного дружелюбного доступа для гостей всех возрастов и взглядов.' }
  ];

  const directions = [
    { title: 'Живая музыка разных жанров', desc: 'От инди-эмбиента и фолка до драйвового рока и этно-электроники.' },
    { title: '100% vegan-фуд-корт', desc: '20+ заведений с авторскими бутербродами, боулами, роллами и десертами.' },
    { title: 'Маркет локальных брендов', desc: 'QARA BAZAR: ремесленные бренды, этичная косметика и эко-дизайн.' },
    { title: 'Практики и образование', desc: 'Лекторий DNA: мастер-классы, экологичный бизнес и лекции о здоровье.' },
    { title: 'Экологические инициативы', desc: 'Раздельный сбор отходов, станция Zero Waste и шеринг вещей.' },
    { title: 'Программа для взрослых и детей', desc: 'Интерактивные детские мастерские, зоны отдыха и семейные активности.' }
  ];

  const programItems = [
    { time: '12:00', title: 'Открытие Фудкорта & Маркета QARA BAZAR', category: 'Market' },
    { time: '13:00', title: 'Мастер-класс по растительной кулинарии', category: 'Food' },
    { time: '14:30', title: 'Лекторий DNA: Экологичный микробизнес', category: 'Education' },
    { time: '16:00', title: 'Детская эко-мастерская и лепка из глины', category: 'Kids' },
    { time: '17:30', title: 'Лайв-сет Le_chu (Ambient Folk)', category: 'Music' },
    { time: '19:00', title: 'Лекция по сортировке отходов Zero Waste', category: 'Eco' },
    { time: '20:30', title: 'Большой концерт Einstein & Saigon Fusion', category: 'Music' }
  ];

  const filteredProgram = activeCategory === 'All' 
    ? programItems 
    : programItems.filter((item) => item.category === activeCategory);

  const scrollToProgram = () => {
    const el = document.getElementById('vmf-program');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const vmfEvent = EVENTS_DATA.find((e) => e.id === 'vmf-2026') || EVENTS_DATA[0];

  return (
    <div className="space-y-20 pb-24 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'VMF — Vegan Music Fest' }]} />
      </div>

      {/* BLOCK 01. Hero & Festival Poster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Дата и место уточняются · Алматы</span>
            </div>

            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl sm:text-7xl font-extrabold text-white font-heading tracking-tight leading-none">
                VEGAN MUSIC <span className="text-emerald-400">FEST</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
                Открытый городской музыкальный фестиваль в Алматы, объединяющий современную музыку, vegan-культуру, еду, ремесленный маркет и ответственное отношение к окружающей среде.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 max-w-xl text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-4 font-medium">
              <div>
                <span className="text-emerald-400 font-bold block">{vmfEvent.date}</span>
                <span>{vmfEvent.venue}, {vmfEvent.location}</span>
              </div>
              <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                Вход свободный
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToProgram}
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Music className="w-5 h-5" />
                <span>Смотреть программу</span>
              </button>

              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition-all"
              >
                Подать заявку на участие
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/photos/vegan_music_fest.jpg"
              alt="Vegan Music Fest Poster"
              className="w-full h-80 sm:h-[380px] object-cover rounded-2xl border-2 border-emerald-500/40 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BLOCK 02. Краткая концепция */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Городской праздник для всех
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Концепция фестиваля VMF
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl font-normal">
            Цель фестиваля — познакомить широкую аудиторию с веганской культурой через позитивный опыт, живое общение и атмосферу большого городского события. VMF открыт абсолютно для всех — не только для веганов, но и для каждого, кто любит качественную авторскую музыку, вкусную еду и заботится о планете.
          </p>
        </div>
      </section>

      {/* BLOCK 03. Основные направления (6 карточек) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Фестивальная структура
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Основные направления
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((d, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center font-accent text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">{d.title}</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 04. Принципы фестиваля (5 принципов) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Манифест VMF
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Принципы фестиваля
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {principles.map((p, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-emerald-400 transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Принцип 0{idx + 1}</span>
              <h4 className="font-bold text-base text-slate-900 font-heading">{p.title}</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 05. Программа фестиваля с фильтрами */}
      <section id="vmf-program" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Расписание события
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-1">
              Программа VMF
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Music', 'Food', 'Market', 'Education', 'Kids', 'Eco'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'Вся программа' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 max-w-3xl">
          {filteredProgram.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-accent font-bold text-sm text-emerald-700 w-16 shrink-0">{item.time}</span>
                <span className="text-sm font-bold text-slate-900">{item.title}</span>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-bold uppercase">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 06. Музыкальный лайн-ап артистов */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Музыкальная сцена
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-1">
            Артисты и участники сцены
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS_DATA.map((art) => (
            <div key={art.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <img src={art.avatar} alt={art.name} className="w-full h-44 rounded-xl object-cover border border-slate-200" />
              <div>
                <span className="text-[10px] text-emerald-700 font-bold uppercase">{art.genre}</span>
                <h4 className="font-bold text-base text-slate-900 mt-0.5">{art.name}</h4>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 07. Заметная Дочерняя ссылка на Команду VMF (Обязательное требование) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-950 text-white space-y-6 shadow-2xl border border-emerald-900 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Организационный комитет
              </span>
              <h2 className="text-3xl font-bold font-heading text-white">
                Команда фестиваля VMF
              </h2>
              <p className="text-sm text-emerald-200 font-normal leading-relaxed">
                Познакомьтесь с продюсерами площадок, кураторами фудкорта, руководителями эко-инициатив и арт-директорами маркета VMF.
              </p>
            </div>

            <Link
              href="/vmf/team"
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center gap-2 shrink-0"
            >
              <span>Команда VMF</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCK 08. Партнёры & Споноры */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Сообщество и поддержка
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-1">
            Партнёры VMF
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-800">
            QARA BAZAR Market
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-800">
            Digital Nomad Academy
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-800">
            Zero Waste Kazakhstan
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-800">
            Transform Almaty Space
          </div>
        </div>
      </section>

      {/* BLOCK 09. Социальные сети & Подписка */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/60 rounded-3xl p-10 text-center space-y-4 border border-emerald-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Следите за анонсами VMF
          </h3>
          <p className="text-sm text-slate-700 font-medium max-w-md mx-auto">
            Подписывайтесь на официальный аккаунт фестиваля в Instagram, чтобы узнавать о конкурсах и бесплатных регистрациях.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram VMF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Participation Modal */}
      <Modal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} title="Заявка на участие в VMF">
        {applySubmitted ? (
          <div className="text-center py-6 space-y-4 text-slate-900">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Заявка принята!</h4>
            <p className="text-xs text-slate-600">Оргкомитет VMF ответит вам в течение 48 часов.</p>
            <button onClick={() => { setApplySubmitted(false); setIsApplyModalOpen(false); }} className="px-6 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold">
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setApplySubmitted(true); }} className="space-y-4 text-slate-900">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Формат участия</label>
              <select
                value={applyType}
                onChange={(e) => setApplyType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm"
              >
                <option value="Фудкорт">Веган-фудкорт (Ресторан / Корнер)</option>
                <option value="Маркет">Ремесленный маркет QARA BAZAR</option>
                <option value="Музыка">Музыкальный артист / Группа</option>
                <option value="Спикер">Спикер лектория DNA / Экология</option>
                <option value="Партнёр">Корпоративный партнёр</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Название проекта / Имя *</label>
              <input type="text" required placeholder="Наименование" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Телефон / Email *</label>
              <input type="text" required placeholder="+7 (700) 000-00-00" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm" />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md">
              Отправить заявку
            </button>
          </form>
        )}
      </Modal>

      <StickyCTA
        label="Смотреть программу VMF"
        subLabel="Vegan Music Fest"
        onClick={scrollToProgram}
      />

      {/* Unified Ecosystem Footer */}
      <EcosystemNav currentProjectId="vmf" />
    </div>
  );
};

