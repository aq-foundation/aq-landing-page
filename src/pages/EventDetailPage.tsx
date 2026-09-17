import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { EVENTS_DATA } from '../data/mockCms';
import { StickyCTA } from '../components/common/StickyCTA';
import { Modal } from '../components/common/Modal';
import { Calendar, MapPin, Clock, Ticket, Share2, Check, ArrowRight, Music2 } from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const [, params] = useRoute('/aas/events/:id');
  const eventId = params?.id;
  const event = EVENTS_DATA.find((e) => e.id === eventId) || EVENTS_DATA[0];

  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedEvents = EVENTS_DATA.filter((e) => e.id !== event.id).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-16 pb-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: 'AAS', href: '/aas' },
            { label: 'Events', href: '/aas' },
            { label: event.title }
          ]}
          mobileBackText="Назад к событиям AAS"
          mobileBackHref="/aas"
        />
      </div>

      {/* Hero Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <img
              src={event.poster}
              alt={event.title}
              className="w-full h-80 sm:h-[420px] rounded-2xl object-cover border border-slate-200 shadow-sm"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-700">
              {event.project} Event
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
              {event.title}
            </h1>

            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-pink-600" />
                <span className="font-bold">{event.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-pink-600" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span>{event.venue}, {event.location}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsTicketModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-base transition-all shadow-md flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                <span>Купить билет ({event.price})</span>
              </button>

              <button
                onClick={handleShare}
                className="px-5 py-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-red-600 flex items-center gap-2 text-sm font-bold"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Ссылка скопирована' : 'Поделиться'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 02. О событии */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-heading">
          О событии
        </h2>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl font-medium">
          {event.description}
        </div>
      </section>

      {/* Block 03. Программа (Timeline) */}
      {event.programSchedule && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Программа вечера
          </h2>

          <div className="max-w-2xl space-y-3">
            {event.programSchedule.map((slot, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <span className="font-accent font-bold text-sm text-pink-600 w-16 shrink-0">{slot.time}</span>
                <span className="text-sm font-semibold text-slate-900">{slot.activity}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Block 04. Участники */}
      {event.lineup && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Участники и Артисты (Состав)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {event.lineup.map((artistName, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Music2 className="w-5 h-5 text-pink-600 shrink-0" />
                <span className="font-bold text-sm text-slate-900">{artistName}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Block 05. Медиа / Фотогалерея */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Фото и видео репортаж
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {event.gallery.map((imgUrl, i) => (
              <img
                key={i}
                src={imgUrl}
                alt={`${event.title} media ${i}`}
                className="w-full h-52 rounded-2xl object-cover border border-slate-200 shadow-sm"
              />
            ))}
          </div>
        </section>
      )}

      {/* Block 07. Другие события */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 font-heading">
          Другие события экосистемы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedEvents.map((re) => (
            <Link key={re.id} href={`/aas/events/${re.id}`} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:border-pink-400 space-y-3 flex flex-col justify-between">
              <div>
                <img src={re.poster} alt={re.title} className="w-full h-40 rounded-xl object-cover border border-slate-200" />
                <span className="text-[10px] font-bold text-pink-600 mt-2 block">{re.date}</span>
                <h4 className="font-bold text-sm text-slate-900 mt-0.5 line-clamp-1">{re.title}</h4>
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-pink-600 font-bold flex items-center justify-between">
                <span>Перейти</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ticket Purchase Modal */}
      <Modal isOpen={isTicketModalOpen} onClose={() => setIsTicketModalOpen(false)} title={`Регистрация / Билет: ${event.title}`}>
        <div className="space-y-4 text-slate-900">
          <p className="text-sm text-slate-700 font-medium">
            Для оформления входа укажите ваши контактные данные:
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Билет успешно забронирован!'); setIsTicketModalOpen(false); }} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Ваше имя</label>
              <input type="text" required placeholder="Имя Фамилия" className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-pink-600" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email для билета</label>
              <input type="email" required placeholder="example@mail.com" className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-pink-600" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-pink-600 text-white font-bold text-sm shadow-md mt-2">
              Подтвердить забронировать ({event.price})
            </button>
          </form>
        </div>
      </Modal>

      <StickyCTA
        label={`Купить билет (${event.price})`}
        subLabel={event.title}
        onClick={() => setIsTicketModalOpen(true)}
      />

      <EcosystemNav currentProjectId="aas" />
    </div>
  );
};
