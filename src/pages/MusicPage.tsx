import React, { useState } from 'react';
import { Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { ARTISTS_DATA, EVENTS_DATA, MusicArtist } from '../data/mockCms';
import { Modal } from '../components/common/Modal';
import {
  Disc,
  Play,
  Calendar,
  ArrowRight,
  Music2,
  HeartHandshake,
  Sparkles,
  Ticket
} from 'lucide-react';

export const MusicPage: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<MusicArtist | null>(null);

  const upcomingMusicEvents = EVENTS_DATA.filter((e) => e.status === 'upcoming');

  const scrollToArtists = () => {
    const el = document.getElementById('artists-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'AQ Music' }]} />
      </div>

      {/* BLOCK 01. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white relative overflow-hidden space-y-8 shadow-2xl border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Disc className="w-4 h-4 text-purple-400" />
            <span>Продюсерский Лейбл & Музыкальная Лаборатория</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Музыка как пространство развития <span className="text-purple-400">артиста и смыслов</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
              AQ Music — музыкальный лейбл и продюсерское направление фонда, объединяющее индивидуальное продюсирование, визуальную концепцию, психологический коучинг и сценическую интеграцию в события экосистемы (AAS, VMF).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToArtists}
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-base transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Резиденты лейбла</span>
            </button>
            <Link
              href="/aas"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Сцена Almaty Alternative Stage</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCK 02. Описание лейбла и продюсерского подхода */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
            Продюсерско-коучинговая философия
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-2">
            Как мы работаем с музыкальными проектами
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Фирменный стиль и концепция</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Работа с каждым артистом строится индивидуально: от айдентики, визуальной подачи и упаковки релиза до стратегии позиционирования.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Коучинг «Продюсер — Артист»</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Классическая модель дополняется психологическими и коучинговыми инструментами: преодоление творческих кризисов, командный баланс и ментальная устойчивость.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Music2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Сохранение аутентичного голоса</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Продюсирование AQ Music не навязывает шаблоны — наша задача состоит в том, чтобы сохранить подлинные идеи, смысл и видение участников коллективов.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 03. Резиденты (4 Музыкальных проекта из видеовизитки) */}
      <section id="artists-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
              Каталог проектов из презентации
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-1">
              Резиденты AQ Music
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            4 ключевых проекта
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTISTS_DATA.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-purple-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header with Logo Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-purple-100 text-purple-700">
                      {art.genre}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-2">
                      {art.name}
                    </h3>
                  </div>
                  {/* Brand Logo Stamp */}
                  <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-mono text-xs font-extrabold tracking-tighter border border-slate-700 shrink-0">
                    {art.logo}
                  </div>
                </div>

                {/* Photo & Description */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5">
                    <img
                      src={art.avatar}
                      alt={art.name}
                      className="w-full h-44 rounded-2xl object-cover border border-slate-200 shadow-sm"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-2">
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {art.description}
                    </p>
                    <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-[11px] text-purple-950 font-medium">
                      <strong className="text-purple-700 font-bold block mb-0.5">Продюсерский & Коучинговый подход:</strong>
                      {art.coachingApproach}
                    </div>
                  </div>
                </div>

                {/* Latest Release & Show Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {art.releases[0] && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                      <img
                        src={art.releases[0].cover}
                        alt={art.releases[0].title}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                      />
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-slate-500 font-bold">Свежий релиз ({art.releases[0].year})</span>
                        <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{art.releases[0].title}</h4>
                      </div>
                    </div>
                  )}

                  {art.upcomingShow && (
                    <Link
                      href={art.upcomingShow.href}
                      className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between text-xs font-bold text-red-700 hover:bg-red-100 transition-colors"
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold text-red-600 block">Ближайшее шоу</span>
                        <span className="line-clamp-1 text-slate-900">{art.upcomingShow.eventTitle}</span>
                      </div>
                      <Ticket className="w-4 h-4 text-red-600 shrink-0" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {art.socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors"
                    >
                      {s.platform}
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArtist(art)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 ml-auto"
                >
                  <span>Полный карточка</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 04. Связь с Almaty Alternative Stage (AAS) и событиями */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-purple-950 text-white space-y-6 border border-purple-900 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-800/80 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                Сценическая лаборатория
              </span>
              <h2 className="text-3xl font-bold font-heading text-white">
                Интеграция с площадкой AAS (Almaty Alternative Stage)
              </h2>
            </div>
            <Link
              href="/aas"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all flex items-center gap-2 shrink-0"
            >
              <span>Все лайвы AAS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm sm:text-base text-purple-200 leading-relaxed max-w-3xl">
            Артисты лейбла AQ Music проходят полный цикл подготовки к живым шоу и презентациям реликтов на регулярных концертах Almaty Alternative Stage и больших фестивалях типа Vegan Music Fest (VMF).
          </p>

          {/* Upcoming Live Shows List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {upcomingMusicEvents.map((e) => (
              <Link
                key={e.id}
                href={`/aas/events/${e.id}`}
                className="p-5 rounded-2xl bg-purple-900/60 border border-purple-700/80 hover:border-purple-500 flex items-center justify-between gap-4 transition-all"
              >
                <div className="space-y-1">
                  <span className="text-xs text-purple-300 font-bold block">{e.date} · {e.location}</span>
                  <h4 className="font-bold text-base text-white">{e.title}</h4>
                  <span className="text-xs text-red-400 font-bold">{e.venue}</span>
                </div>
                <Ticket className="w-6 h-6 text-purple-400 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 05. Заявка в лейбл */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-slate-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Вы создаёте собственную музыку?
          </h3>
          <p className="text-sm text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
            Присылайте записи и материалы своего проекта в команда A&R продюсеров и коучей AQ Music для рассмотрения возможности совместной работы и выступления на сцену AAS.
          </p>
          <div className="pt-2">
            <Link
              href="/networking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/20"
            >
              <span>Подать проект в AQ Music</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Artist Full Drawer/Modal */}
      {selectedArtist && (
        <Modal isOpen={!!selectedArtist} onClose={() => setSelectedArtist(null)} title={selectedArtist.name}>
          <div className="space-y-6 text-slate-900">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start gap-4 border-b border-slate-100 pb-4">
              <img
                src={selectedArtist.avatar}
                alt={selectedArtist.name}
                className="w-28 h-28 rounded-2xl object-cover border border-slate-200 shrink-0"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-100 text-purple-700 uppercase">
                    {selectedArtist.genre}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white font-mono text-[10px] font-bold">
                    {selectedArtist.logo}
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{selectedArtist.description}</p>
              </div>
            </div>

            {/* Coaching Section */}
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs space-y-1">
              <span className="font-bold text-purple-900 uppercase tracking-wider block">Продюсерский & Коучинговый подход:</span>
              <p className="text-purple-950 font-medium leading-relaxed">{selectedArtist.coachingApproach}</p>
            </div>

            {/* Releases */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Дискография & Релизы</h4>
              <div className="space-y-2">
                {selectedArtist.releases.map((r, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-medium">
                    <div className="flex items-center gap-3">
                      <img src={r.cover} alt={r.title} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                      <div>
                        <span className="font-bold text-slate-900 block">{r.title}</span>
                        <span className="text-slate-500">{r.year}</span>
                      </div>
                    </div>
                    <a
                      href={r.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-purple-500"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Слушать</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials & Video */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold">Ссылки:</span>
                {selectedArtist.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Navigation Ecosystem Footer */}
      <EcosystemNav currentProjectId="music" />
    </div>
  );
};

