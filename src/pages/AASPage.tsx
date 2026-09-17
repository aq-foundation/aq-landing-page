import React, { useState } from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { EVENTS_DATA } from '../data/mockCms';
import { StickyCTA } from '../components/common/StickyCTA';
import { InstagramIcon } from '../components/common/InstagramIcon';
import {
  Mic2,
  Calendar,
  MapPin,
  Ticket,
  ArrowRight,
  Image as ImageIcon,
  Upload,
  FileText,
  ExternalLink,
  Archive,
  Music2
} from 'lucide-react';

export const AASPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = EVENTS_DATA.filter((e) => e.project === 'AAS' && e.status === 'upcoming');
  const pastEvents = EVENTS_DATA.filter((e) => e.project === 'AAS' && e.status === 'past');
  const featuredNextEvent = upcomingEvents[0];

  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const scrollToNextEvent = () => {
    const el = document.getElementById('featured-event');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-24 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'AAS — Almaty Alternative Stage' }]} />
      </div>

      {/* BLOCK 01. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-pink-600/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider">
              <Mic2 className="w-4 h-4 text-pink-400" />
              <span>Независимая альтернативная сцена</span>
            </div>

            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl sm:text-7xl font-extrabold text-white font-heading tracking-tight leading-none">
                ALMATY ALTERNATIVE <span className="text-pink-500">STAGE</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
                Almaty Alternative Stage — независимая сцена Алматы, объединяющая авторские музыкальные проекты разных направлений: от рока, металла, фьюжна и электроники до хип-хопа, поп-панка и жанров за пределами массовой поп-сцены.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToNextEvent}
                className="px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-base transition-all shadow-lg shadow-pink-600/30 flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                <span>Афиша ближайшего концерта</span>
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition-all flex items-center gap-2"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram AAS</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/photos/almaty_alternative_stage.jpg"
              alt="Almaty Alternative Stage"
              className="w-full h-80 sm:h-[380px] object-cover rounded-2xl border-2 border-pink-500/40 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BLOCK 02. Главная Афиша Сезона (Featured Event) */}
      {featuredNextEvent && (
        <section id="featured-event" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-pink-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-5">
              <img
                src={featuredNextEvent.poster}
                alt={featuredNextEvent.title}
                className="w-full h-80 sm:h-[400px] rounded-2xl object-cover border border-slate-200 shadow-md"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                  Главная афиша
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {featuredNextEvent.price}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                {featuredNextEvent.title}
              </h2>

              <div className="grid grid-cols-2 gap-4 text-sm text-slate-800 py-3 border-y border-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>{featuredNextEvent.date} · {featuredNextEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>{featuredNextEvent.venue}, {featuredNextEvent.location}</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {featuredNextEvent.description}
              </p>

              {featuredNextEvent.lineup && (
                <div className="space-y-2">
                  <span className="text-xs text-slate-500 font-bold block">Лайнап участников:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {featuredNextEvent.lineup.map((artist, i) => (
                      <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-900 text-white flex items-center gap-1.5">
                        <Music2 className="w-3.5 h-3.5 text-pink-400" />
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/aas/events/${featuredNextEvent.id}`}
                  className="px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm shadow-lg shadow-pink-600/20 flex items-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Купить билет / Регистрация ({featuredNextEvent.price})</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOCK 03. Задача и Миссия проекта */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
            Миссия и концепция
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Площадка независимой авторской музыки
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl font-normal">
            Задача проекта — создавать площадку для независимых артистов, объединять разные направления альтернативной музыки и знакомить аудиторию с новыми авторскими проектами. На сцене AAS звучат рок, металл, фьюжн, электроника, хип-хоп, поп-панк и экспериментальный медиа-арт.
          </p>
        </div>
      </section>

      {/* BLOCK 04. Логика публикации событий (4 Шага) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
            Институциональный регламент
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Логика публикации события
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
              <Upload className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-pink-600 block">Шаг 01</span>
            <h3 className="text-base font-bold text-slate-900">Создать карточку & Афишу</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Формируется анонс мероприятия и загружается фирменная дизайнерская афиша проекта.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-purple-600 block">Шаг 02</span>
            <h3 className="text-base font-bold text-slate-900">Анонс & Подробная информация</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Заполняются дата, время, площадка, концепция шоу, регламент вечера и полный лайн-ап участников.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
              <ExternalLink className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-sky-600 block">Шаг 03</span>
            <h3 className="text-base font-bold text-slate-900">Билеты & Соцсети</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Подключаются внешние ссылки на регистрацию, продажу билетов и публикации в социальных сетях.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Archive className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 block">Шаг 04</span>
            <h3 className="text-base font-bold text-slate-900">Архив & Медиаотчёт</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              После проведения событие автоматически переходит в архив, обновляясь фото- и видеоотчётом.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 05. Список событий (Предстоящие vs Архив) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
              Каталог концертов
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-heading mt-1">
              Событийный анонс & Архив
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'upcoming' ? 'bg-pink-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Предстоящие ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'past' ? 'bg-pink-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Архив ({pastEvents.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((ev) => (
            <Link
              key={ev.id}
              href={`/aas/events/${ev.id}`}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:border-pink-400 hover-lift space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <img
                  src={ev.poster}
                  alt={ev.title}
                  className="w-full h-60 rounded-2xl object-cover border border-slate-200"
                />
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-pink-600">
                    <span>{ev.date}</span>
                    <span>{ev.price}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 font-heading">{ev.title}</h3>
                  <span className="text-xs text-slate-500 font-bold block mt-0.5">{ev.venue}</span>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2 font-medium">{ev.description}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-pink-600 flex items-center justify-between">
                <span>Страница события & Билеты</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BLOCK 06. Фото и Видео Галерея прошлых концертов */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-pink-600" />
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Фото и видео с прошлых концертов
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img src="/photos/almaty_alternative_stage.jpg" alt="AAS Stage photo" className="rounded-2xl object-cover h-44 w-full border border-slate-200 shadow-sm hover:scale-105 transition-transform" />
          <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" alt="Stage photo 2" className="rounded-2xl object-cover h-44 w-full border border-slate-200 shadow-sm" />
          <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop" alt="Stage photo 3" className="rounded-2xl object-cover h-44 w-full border border-slate-200 shadow-sm" />
          <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop" alt="Stage photo 4" className="rounded-2xl object-cover h-44 w-full border border-slate-200 shadow-sm" />
        </div>
      </section>

      {/* BLOCK 07. Социальные сети & Подписка */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pink-50/60 rounded-3xl p-10 text-center space-y-4 border border-pink-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Следите за анонсами в социальных сетях
          </h3>
          <p className="text-sm text-slate-700 font-medium max-w-md mx-auto">
            Подписывайтесь на официальный Instagram AAS, чтобы не пропустить старт продаж билетов, привозы независимых банд и закрытые афтерпати.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-pink-600 text-white font-bold text-sm hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Перейти в Instagram AAS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      {featuredNextEvent && (
        <StickyCTA
          label={`Купить билет (${featuredNextEvent.price})`}
          subLabel={featuredNextEvent.title}
          onClick={() => window.location.href = `/aas/events/${featuredNextEvent.id}`}
        />
      )}

      {/* Navigation Ecosystem Footer */}
      <EcosystemNav currentProjectId="aas" />
    </div>
  );
};

