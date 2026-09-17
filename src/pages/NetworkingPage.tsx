import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EcosystemNav } from '../components/layout/EcosystemNav';
import { NETWORKING_PROFILES_DATA, NetworkingProfile } from '../data/mockCms';
import { NetworkingWizardModal } from '../components/networking/NetworkingWizardModal';
import { Modal } from '../components/common/Modal';
import { Users, Search, ShieldCheck, ArrowRight, UserPlus, Lock } from 'lucide-react';

export const NetworkingPage: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSphere, setSelectedSphere] = useState<string>('All');
  const [selectedProfile, setSelectedProfile] = useState<NetworkingProfile | null>(null);

  const spheres = ['All', 'Art', 'Business', 'Education', 'Creative', 'Production'];

  const filteredProfiles = NETWORKING_PROFILES_DATA.filter((p) => {
    const matchesSphere = selectedSphere === 'All' || p.sphere === selectedSphere;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.competencies.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSphere && matchesSearch;
  });

  const userScenarioSteps = [
    { num: '01', title: 'Принципы сообщества', desc: 'Посетитель знакомится с принципами открытого и закрытого нетворкинга AQ.' },
    { num: '02', title: 'Добровольная заявка', desc: 'Заполняет 5-шаговую анкету: указывает деятельность, таланты, контакты и запрос.' },
    { num: '03', title: 'Модерация', desc: 'Заявка проходит верификацию командой AQ для защиты участников от спама.' },
    { num: '04', title: 'Публикация в базе', desc: 'После одобрения профиль появляется в каталоге либо в закрытом реестре.' },
    { num: '05', title: 'Поиск & Коллаборация', desc: 'Участники находят друг друга через категории, компетенции и тип запроса.' }
  ];

  const scrollToDirectory = () => {
    const el = document.getElementById('community-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'AQ Networking' }]} />
      </div>

      {/* Hero Block - Strict Corporate White/Black/Red Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden space-y-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold">
            <Users className="w-3.5 h-3.5 text-red-500" />
            <span>Сообщество & Экспертная База</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold text-white font-heading tracking-tight">
            AQ NETWORKING
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed">
            Независимое сообщество для профессионального и творческого нетворкинга. Помогаем рассказывать о талантах, находить единомышленников и объединяться для проектов.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsWizardOpen(true)}
              className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-base transition-all shadow-xl shadow-red-600/25 flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              <span>Заполнить заявку участника</span>
            </button>

            <button
              onClick={scrollToDirectory}
              className="px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-base transition-colors"
            >
              Перейти к каталогу
            </button>
          </div>
        </div>
      </section>

      {/* Пользовательский сценарий (5 Visual Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Сценарий взаимодействия
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Как стать частью AQ Networking
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {userScenarioSteps.map((step, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative hover:border-red-400 transition-all">
              <span className="font-accent font-extrabold text-red-600 text-lg block">{step.num}</span>
              <h4 className="font-bold text-sm text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Защита данных и политика контактов */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                Защита контактных данных от парсинга
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Защищено</span>
              </h3>
              <p className="text-xs text-slate-600 max-w-2xl font-medium leading-relaxed">
                Контакты скрыты от спам-ботов. Каждый участник сам выбирает: показывать открытый контакт или получать запросы на связь через модераторов AQ Networking.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsWizardOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shrink-0"
          >
            Настройки видимости в анкете
          </button>
        </div>
      </section>

      {/* Каталог и Поиск */}
      <section id="community-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Каталог экспертов
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Участники и эксперты AQ
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Поиск по имени, городу или навыку..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 shadow-sm"
            />
          </div>
        </div>

        {/* Sphere Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {spheres.map((sph) => (
            <button
              key={sph}
              onClick={() => setSelectedSphere(sph)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedSphere === sph 
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20' 
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              {sph === 'All' ? 'Все сферы' : sph}
            </button>
          ))}
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((prof) => (
            <div
              key={prof.id}
              onClick={() => setSelectedProfile(prof)}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-red-400 hover-lift cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img src={prof.avatar} alt={prof.name} className="w-14 h-14 rounded-2xl object-cover border border-slate-200" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-base text-slate-900 font-heading">{prof.name}</h4>
                      {prof.verified && <ShieldCheck className="w-4 h-4 text-red-600" />}
                    </div>
                    <span className="text-xs text-slate-500 font-bold">{prof.sphere} · {prof.city}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {prof.competencies.map((comp, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold border border-red-100">
                      {comp}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">{prof.bio}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-red-600 flex items-center justify-between">
                <span>Профиль и запрос</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center space-y-4 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Готовы рассказать о своих компетенциях?
          </h3>
          <p className="text-sm text-slate-300 font-medium max-w-md mx-auto leading-relaxed">
            Заполните добровольную анкету из 10 пунктов для проверки модератором и вхождения в экспертную базу AQ.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsWizardOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-extrabold text-sm hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30"
            >
              <span>Подать заявку на модерацию</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Wizard Modal */}
      <NetworkingWizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <Modal isOpen={!!selectedProfile} onClose={() => setSelectedProfile(null)} title={selectedProfile.name}>
          <div className="space-y-5 text-slate-900">
            <div className="flex items-center gap-4">
              <img src={selectedProfile.avatar} alt={selectedProfile.name} className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shadow-sm" />
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">{selectedProfile.sphere}</span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1 font-heading">{selectedProfile.name}</h4>
                <p className="text-xs text-slate-600 font-bold">{selectedProfile.city}</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Таланты и компетенции:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProfile.competencies.map((c, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-bold">{c}</span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Чем могу быть полезен:</span>
              <p className="text-xs text-slate-800 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed">{selectedProfile.offering}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Кого или что ищу:</span>
              <p className="text-xs text-slate-800 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed">{selectedProfile.seeking}</p>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => { alert('Запрос на связь передан модераторам AQ Networking! Мы свяжемся с вами.'); setSelectedProfile(null); }}
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-md transition-colors"
              >
                Отправить запрос на связь модераторам AQ
              </button>
            </div>
          </div>
        </Modal>
      )}

      <EcosystemNav currentProjectId="networking" />
    </div>
  );
};

