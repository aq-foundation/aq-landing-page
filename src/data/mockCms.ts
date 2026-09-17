export interface Project {
  id: string;
  name: string;
  category: 'ART' | 'EDUCATION' | 'BUSINESS' | 'FOUNDATION';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  href: string;
  color: string;
  accentBg: string;
  badge: string;
  iconName: string;
}

export interface Trustee {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  detailedBio: string;
  achievements: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  responsibilities: string[];
  links?: { title: string; url: string }[];
  isVmfCore?: boolean;
  vmfRole?: string;
  vmfExperience?: string;
  vmfPowers?: string[];
}

export interface MusicArtist {
  id: string;
  name: string;
  genre: string;
  description: string;
  avatar: string;
  logo: string;
  coachingApproach: string;
  socials: { platform: string; url: string }[];
  releases: {
    title: string;
    year: string;
    cover: string;
    platformUrl: string;
  }[];
  videoUrl?: string;
  upcomingShow?: {
    eventTitle: string;
    date: string;
    venue: string;
    href: string;
  };
}

export interface EventItem {
  id: string;
  project: 'AAS' | 'VMF' | 'AQ Music' | 'QARA BAZAR';
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  description: string;
  poster: string;
  price: string;
  status: 'upcoming' | 'past';
  programSchedule?: { time: string; activity: string }[];
  lineup?: string[];
  gallery?: string[];
}

export interface CraftMaster {
  id: string;
  brandName: string;
  masterName: string;
  category: 'украшения' | 'одежда' | 'аксессуары' | 'декор' | 'искусство' | 'другое';
  description: string;
  image: string;
  location: string;
  instagram: string;
}

export interface NetworkingProfile {
  id: string;
  name: string;
  city: string;
  sphere: 'Art' | 'Business' | 'Education' | 'Creative' | 'Production';
  competencies: string[];
  bio: string;
  offering: string;
  seeking: string;
  verified: boolean;
  avatar: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aas',
    name: 'AAS',
    category: 'ART',
    tagline: 'Almaty Alternative Stage',
    shortDescription: 'Платформа для проведения альтернативных концертов, лайвов и перформансов.',
    fullDescription: 'Almaty Alternative Stage — это регулярная площадка для экспериментальных шоу, привозов независимых артистов и развития локальной сцены.',
    href: '/aas',
    color: '#EC4899',
    accentBg: 'from-pink-950/40 to-slate-950',
    badge: 'Живые концерты & Сцена',
    iconName: 'Mic2'
  },
  {
    id: 'vmf',
    name: 'VMF',
    category: 'ART',
    tagline: 'Vegan Music Fest',
    shortDescription: 'Музыкальный фестиваль 100% веганского пространства и осознанной культуры.',
    fullDescription: 'Vegan Music Fest — масштабный городской праздник музыки, экологичной еды, независимого маркета и нишевого образования.',
    href: '/vmf',
    color: '#22C55E',
    accentBg: 'from-emerald-950/40 to-slate-950',
    badge: 'Фестиваль & Экология',
    iconName: 'Leaf'
  }
];

export const TRUSTEES_DATA: Trustee[] = [
  {
    id: 'zhanna',
    name: 'Жанна Прашкевич',
    role: 'Попечительский совет AQ Foundation',
    bio: 'Эксперт по сервис-дизайну, маркетингу гостеприимства и Agile-коучингу.',
    avatar: '/photos/zhanna_prashkevich.jpeg',
    detailedBio: 'Практик с многолетним опытом консалтинга и развития предприятий в сфере сервиса и гостеприимства. Руководитель консалтинговой студии Prashkevich Co, фасилитатор больших групп, Agile Professional Certified специалист. Эксперт и спикер образовательных программ и акселераторов социального предпринимательства в Центральной Азии (Tamyr Platform 2025).',
    achievements: [
      'Agile Professional Certified & исследователь сервис-дизайна',
      'Консалтинг и систематизация бизнес-процессов предприятий гостеприимства',
      'Эксперт и спикер регионального акселератора Tamyr Platform 2025',
      'Автор курсов и методических материалов по развитию клиентского опыта'
    ]
  },
  {
    id: 'evgeniya',
    name: 'Евгения Абкеева',
    role: 'Попечительский совет AQ Foundation',
    bio: 'Бизнес-тренер, фасилитатор команд и основатель арт-сообщества в Алматы.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    detailedBio: 'Творческий и общественный деятель Алматы с более чем 10-летним опытом в корпоративном обучении и развитии команд (L&D, ex-Teamlead L&D Tele2 Kazakhstan). Автор и ведущая подкаста «На глубине». Основатель и вдохновитель арт-сообщества в Алматы, где гости участвуют в актёрских практиках, интеллектуальных играх и творческих встречах.',
    achievements: [
      '10+ лет опыта в сфере L&D (ex-Teamlead L&D Tele2 Kazakhstan)',
      'Основатель арт-сообщества иммерсивных и актёрских практик в Алматы',
      'Автор и ведущая концептуального подкаста «На глубине»',
      'Фасилитация бизнес-сессий и развитие культурных площадок'
    ]
  },
  {
    id: 'dana',
    name: 'Дана Шаяхмет',
    role: 'Попечительский совет AQ Foundation',
    bio: 'Исследователь и тренер в сфере креативной экономики и городского развития.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    detailedBio: 'Общественная деятельница и исследователь креативной экономики из Алматы. Член правления Creative Industries Alliance of Qazaqstan (CIAQ). Сооснователь инициативы City Solutions по обучению городских активистов и внедрению решений для комфортного города. Работала в AlmaU и Университете Нархоз, проводит фасилитационные и образовательные сессии (British Council).',
    achievements: [
      'Член правления Creative Industries Alliance of Qazaqstan (CIAQ)',
      'Сооснователь инициативы City Solutions для городских активистов',
      'Эксперт и фасилитатор международных образовательных программ (British Council)',
      'Участие в создании «Атласа новых профессий и компетенций» в Алматы'
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'm1',
    name: 'Алан Байбеков',
    role: 'Операционный директор AQ Foundation',
    bio: 'Управление процессами, финансами и юридической структурой экосистемы.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    responsibilities: ['Координация 3 музыкальных сцен VMF', 'Технический продакшн и логистика', 'Безопасность и регламент Zero Waste'],
    links: [{ title: 'LinkedIn', url: 'https://linkedin.com' }],
    isVmfCore: true,
    vmfRole: 'Главный продюсер площадок VMF',
    vmfExperience: '10+ лет опыта управления масштабными фестивальными площадками и обеспечения безопасности массовых городских событий в Центральной Азии.',
    vmfPowers: [
      'Утверждение технического и звукового райдера всех сцен VMF',
      'Подписание соглашений с муниципальными и парковыми службами',
      'Финальный контроль и приемка логистической инфраструктуры фестиваля'
    ]
  },
  {
    id: 'm-vmf-2',
    name: 'Данияр Нурланов',
    role: 'Куратор 100% Vegan Food Court VMF',
    bio: 'Селекция этичных заведений и контроль ресторанных стандартов фестиваля.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    responsibilities: ['Аудит и отбор 20+ веган-корнеров', 'Эко-сертификация продуктов', 'Соблюдение регламента Zero Waste на фудкорте'],
    links: [{ title: 'Instagram', url: 'https://instagram.com' }],
    isVmfCore: true,
    vmfRole: 'Куратор 100% Vegan Food Court',
    vmfExperience: 'Шеф-технолог растительной кухни с 8-летним стажем, консультант по внедрению устойчивого ресторанного менеджмента.',
    vmfPowers: [
      'Утверждение итогового меню всех корнеров зоны питания',
      'Официальный допуск резидентов фудкорта к участию в VMF',
      'Строгий контроль соблюдения правила 100% отсутствия одноразового пластика'
    ]
  },
  {
    id: 'm-vmf-3',
    name: 'Мария Рахимова',
    role: 'Руководитель программы Эко-инициатив VMF',
    bio: 'Разработка системы сортировки Zero Waste и просветительского лектория.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    responsibilities: ['Организация сортировочных станций', 'Координация эко-волонтеров', 'Взаимодействие с перерабатывающими заводами'],
    links: [{ title: 'Telegram', url: 'https://t.me' }],
    isVmfCore: true,
    vmfRole: 'Руководитель Эко-направления & Zero Waste',
    vmfExperience: 'Эколог, основатель городских социальных инициатив по раздельному сбору отходов и циклической экономике в Алматы.',
    vmfPowers: [
      'Принятие решений по экологической стандартизации всей площадки',
      'Распределение ресурсов и инвентаря для Zero Waste станций',
      'Утверждение программы и спикеров экологического лектория VMF'
    ]
  },
  {
    id: 'm-vmf-4',
    name: 'Аружан Рахимбаева',
    role: 'Арт-директор маркета QARA BAZAR × VMF',
    bio: 'Кураторство ремесленного маркета и зоны мастер-классов.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    responsibilities: ['Селекция 30+ мастеров локального ремесла', 'Дизайн пространственной навигации', 'Интеграция с бизнес-лекторием DNA'],
    links: [{ title: 'Instagram', url: 'https://instagram.com' }],
    isVmfCore: true,
    vmfRole: 'Куратор маркета локальных брендов',
    vmfExperience: 'Куратор крафтовых и художественных выставок, исследователь казахстанского этно-дизайна и локального ремесла.',
    vmfPowers: [
      'Согласование участия мастеров и брендов в маркет-зоне',
      'Утверждение визуального регламента оформления стендов',
      'Кураторство программы открытых ремесленных мастер-классов'
    ]
  },
  {
    id: 'm2',
    name: 'Амина Султанова',
    role: 'Арт-директор & Куратор AQ Music',
    bio: 'Поиск новых имён, селекция звучания и организация концертов AAS.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    responsibilities: ['A&R менеджмент', 'Программная дирекция AAS', 'Связи с артистами'],
    links: [{ title: 'Instagram', url: 'https://instagram.com' }]
  },
  {
    id: 'm3',
    name: 'Тимур Ибраев',
    role: 'Руководитель программы DNA',
    bio: 'Бизнес-тренер, акселерация предпринимателей и трекинг проектов.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    responsibilities: ['Проведение диагностических сессий', 'Разработка бизнес-дорожных карт', 'Менторство'],
    links: [{ title: 'Telegram', url: 'https://t.me' }]
  }
];

export const ARTISTS_DATA: MusicArtist[] = [
  {
    id: 'spiritual-dictators',
    name: 'Spiritual Dictators',
    genre: 'Post-Punk / Alternative Synth',
    description: 'Плотный гитарный рифф, метафоричные тексты, гипнотический ритм и тёмная драйвовая эстетика альтернативной сцены.',
    avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
    logo: 'SPIRITUAL DICTATORS',
    coachingApproach: 'Психологический трекинг идентичности группы: работа с концертной экспрессией без потери острой социальной концепции и эмоционального истощения.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Spotify', url: 'https://spotify.com' },
      { platform: 'YouTube', url: 'https://youtube.com' }
    ],
    releases: [
      { title: 'Neon Shadows LP', year: '2025', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600&auto=format&fit=crop', platformUrl: 'https://spotify.com' },
      { title: 'Almaty After Dark Single', year: '2024', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', platformUrl: 'https://spotify.com' }
    ],
    videoUrl: 'https://youtube.com',
    upcomingShow: {
      eventTitle: 'Almaty Alternative Stage Vol. 14',
      date: '28 Сентября 2026',
      venue: 'Transform Cultural Space',
      href: '/aas/events/aas-vol-14'
    }
  },
  {
    id: 'le-chu',
    name: 'Le_chu',
    genre: 'Ambient Folk / Neo-Ethno Electronic',
    description: 'Сочетание архаичного кобыза, фольклорного распева и современного аналогового эмбиента.',
    avatar: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop',
    logo: 'LE_CHU',
    coachingApproach: 'Раскрытие сакрального природного голоса и фольклорных архетипов; фасилитация сессий написания текстов в атмосфере доверия.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Apple Music', url: 'https://apple.com' },
      { platform: 'SoundCloud', url: 'https://soundcloud.com' }
    ],
    releases: [
      { title: 'Step Echoes EP', year: '2025', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', platformUrl: 'https://apple.com' }
    ],
    videoUrl: 'https://youtube.com',
    upcomingShow: {
      eventTitle: 'Almaty Alternative Stage Vol. 14',
      date: '28 Сентября 2026',
      venue: 'Transform Cultural Space',
      href: '/aas/events/aas-vol-14'
    }
  },
  {
    id: 'einstein',
    name: 'Einstein',
    genre: 'Indie Pop / Modern Soul',
    description: 'Мелодичные джазовые аранжировки, сложная гармония и глубокие лирические нарративы о человеке в мегаполисе.',
    avatar: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop',
    logo: 'EINSTEIN',
    coachingApproach: 'Коучинг взаимодействия музыкантов внутри состава, трансформация творческого тупика в новые аранжировочные формы.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Spotify', url: 'https://spotify.com' },
      { platform: 'Bandcamp', url: 'https://bandcamp.com' }
    ],
    releases: [
      { title: 'Theory of Emotion LP', year: '2024', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop', platformUrl: 'https://spotify.com' }
    ],
    videoUrl: 'https://youtube.com',
    upcomingShow: {
      eventTitle: 'Vegan Music Fest 2026',
      date: '15 Октября 2026',
      venue: 'Центральный Парк Культуры',
      href: '/vmf'
    }
  },
  {
    id: 'saigon-fusion',
    name: 'Saigon Fusion',
    genre: 'Experimental World Beats / Electronic Fusion',
    description: 'Жаркие живые перкуссии, элементы азиатского этно и синтезаторные импровизационные исследования.',
    avatar: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop',
    logo: 'SAIGON FUSION',
    coachingApproach: 'Продюсерский дизайн импровизационных сессий: удержание уличного драйва и фирменного видения группы при подготовке к крупным фестивалям.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'Mixcloud', url: 'https://mixcloud.com' }
    ],
    releases: [
      { title: 'Silk & Voltage Single', year: '2025', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', platformUrl: 'https://youtube.com' }
    ],
    videoUrl: 'https://youtube.com',
    upcomingShow: {
      eventTitle: 'Vegan Music Fest 2026',
      date: '15 Октября 2026',
      venue: 'Центральный Парк Культуры',
      href: '/vmf'
    }
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'vmf-2026',
    project: 'VMF',
    title: 'Vegan Music Fest 2026',
    date: '15 Октября 2026',
    time: '12:00 - 22:00',
    location: 'Алматы',
    venue: 'Центральный Парк Культуры',
    description: 'Открытый городской музыкальный фестиваль, приуроченный ко Всемирному дню вегана. Живая музыка, 100% vegan фудкорт, маркет QARA BAZAR и Zero Waste практики.',
    poster: '/photos/vegan_music_fest.jpg',
    price: 'Вход свободный',
    status: 'upcoming',
    programSchedule: [
      { time: '12:00', activity: 'Открытие Фудкорта & Маркета QARA BAZAR' },
      { time: '13:00', activity: 'Мастер-класс по растительной кулинарии' },
      { time: '14:30', activity: 'Лекторий DNA: Экологичный микробизнес' },
      { time: '16:00', activity: 'Детская эко-мастерская и лепка из глины' },
      { time: '17:30', activity: 'Лайв-сет Le_chu (Ambient Folk)' },
      { time: '19:00', activity: 'Лекция по сортировке отходов Zero Waste' },
      { time: '20:30', activity: 'Большой концерт Einstein & Saigon Fusion' }
    ],
    lineup: ['Einstein', 'Saigon Fusion', 'Le_chu'],
    gallery: [
      '/photos/vegan_music_fest.jpg'
    ]
  },
  {
    id: 'aas-vol-14',
    project: 'AAS',
    title: 'Almaty Alternative Stage Vol. 14: Post-Punk & Synth Night',
    date: '28 Сентября 2026',
    time: '19:00',
    location: 'Алматы',
    venue: 'Transform Cultural Space',
    description: 'Ночь независимой инди-сцены, пост-панка и гипнотических визуальных инсталляций. Выступление Spiritual Dictators, Le_chu и привезённых артистов из регионов.',
    poster: '/photos/almaty_alternative_stage.jpg',
    price: '5000 ₸',
    status: 'upcoming',
    programSchedule: [
      { time: '18:30', activity: 'Открытие дверей и виниловый сет' },
      { time: '19:30', activity: 'Выступление Le_chu' },
      { time: '20:30', activity: 'Spiritual Dictators (Full Live)' },
      { time: '22:00', activity: 'Афтерпати & Сетевой джем' }
    ],
    lineup: ['Spiritual Dictators', 'Le_chu', 'Special Guest DJ'],
    gallery: [
      '/photos/almaty_alternative_stage.jpg'
    ]
  },
  {
    id: 'aas-vol-15',
    project: 'AAS',
    title: 'Almaty Alternative Stage Vol. 15: Heavy Metal & Core',
    date: '12 Ноября 2026',
    time: '19:30',
    location: 'Алматы',
    venue: 'Motor Club Almaty',
    description: 'Агрессивный звук, драйв и тяжёлая альтернатива. Выступление метал- и коровских банд Алматы.',
    poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    price: '6000 ₸',
    status: 'upcoming',
    programSchedule: [
      { time: '19:00', activity: 'Открытие дверей' },
      { time: '19:30', activity: 'Открывающий сет' },
      { time: '20:30', activity: 'Хедлайнеры вечера' }
    ],
    lineup: ['Steppe Iron', 'Void Walker', 'Kipchak Core'],
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'aas-vol-13',
    project: 'AAS',
    title: 'Almaty Alternative Stage Vol. 13: Summer Electro-Acoustic',
    date: '12 Июля 2026',
    time: '20:00',
    location: 'Алматы',
    venue: 'Art-Asyl Outdoor Stage',
    description: 'Летний открытый концерт экспериментальной электро-акустики, кобыза и аналоговых синтезаторов под открытым небом.',
    poster: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop',
    price: '4000 ₸',
    status: 'past',
    lineup: ['Le_chu', 'Saigon Fusion', 'Asyl Acoustic'],
    gallery: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'aas-vol-12',
    project: 'AAS',
    title: 'Almaty Alternative Stage Vol. 12: Hip-Hop & Beat Science',
    date: '10 Мая 2026',
    time: '19:00',
    location: 'Алматы',
    venue: 'Transform Cultural Space',
    description: 'Андеграундный хип-хоп, лоу-фай биты, фристайл-джем и скретч-сессии.',
    poster: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    price: '3500 ₸',
    status: 'past',
    lineup: ['Beat-Maker Crew', 'Almaty Underground', 'MC Nomad'],
    gallery: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop'
    ]
  },
  {
    id: 'aas-vol-11',
    project: 'AAS',
    title: 'Almaty Alternative Stage Vol. 11: Pop-Punk & Indie Wave',
    date: '20 Марта 2026',
    time: '18:30',
    location: 'Алматы',
    venue: 'Hard Rock Bar Almaty',
    description: 'Весенний взрыв энергетики: инди-поп, поп-панк и гаражный рок от молодых авторских банд.',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    price: '3000 ₸',
    status: 'past',
    lineup: ['Einstein', 'Garage 404', 'Teenage Kicks'],
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop'
    ]
  }
];

export const MASTERS_DATA: CraftMaster[] = [
  {
    id: 'qm1',
    brandName: 'DALA SILVER',
    masterName: 'Айгуль Серикова',
    category: 'украшения',
    description: 'Современные серебряные украшения по мотивом степного орнамента.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    location: 'Алматы',
    instagram: '@dalasilver'
  },
  {
    id: 'qm2',
    brandName: 'KIPCHAK APPAREL',
    masterName: 'Арман Касымов',
    category: 'одежда',
    description: 'Оверсайз чапаны и кимоно из натурального льна и войлока.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop',
    location: 'Астана',
    instagram: '@kipchak.wear'
  },
  {
    id: 'qm3',
    brandName: 'TANYR CERAMICS',
    masterName: 'Динара Нурланова',
    category: 'декор',
    description: 'Авторская керамика ручной лепки с глазурными текстурами.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600&auto=format&fit=crop',
    location: 'Алматы',
    instagram: '@tanyr.clay'
  },
  {
    id: 'qm4',
    brandName: 'ATYRAU PHOTO STUDIO',
    masterName: 'Аня Григорьева',
    category: 'искусство',
    description: 'Арт-принты и концептуальные фотоальбомы Каспийского региона.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop',
    location: 'Атырау',
    instagram: '@atyrau.photo'
  }
];

export const NETWORKING_PROFILES_DATA: NetworkingProfile[] = [
  {
    id: 'np1',
    name: 'Ерлан Сакенов',
    city: 'Алматы',
    sphere: 'Business',
    competencies: ['Фандрайзинг', 'Финансовые модели', 'Инвестиции'],
    bio: 'Предприниматель в сферах Impact Tech и ресторанного веган-бизнеса.',
    offering: 'Менторство по привлекаемости инвесторов, оценка проектов.',
    seeking: 'Артистов и креаторов для создания совместных брендов.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'np2',
    name: 'Мадина Утепова',
    city: 'Астана',
    sphere: 'Creative',
    competencies: ['Брендинг', '3D Motion', 'Арт-дирекшн'],
    bio: 'Креативный директор студии идентичности, партнер VMF.',
    offering: 'Айдентика для культурных событий и фестивалей.',
    seeking: 'Продюсеров мероприятий для постоянного сотрудничества.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'np3',
    name: 'Руслан Ахметов',
    city: 'Алматы',
    sphere: 'Production',
    competencies: ['Звукорежиссура', 'Световое шоу', 'Stage Design'],
    bio: 'Инженер технического обеспечения концертов и фестивалей.',
    offering: 'Оборудование и сетап сцен для независимых площадок.',
    seeking: 'Интересные музыкальные шоу и перформансы.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  }
];
