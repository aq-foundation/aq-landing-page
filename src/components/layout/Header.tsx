import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { PROJECTS_DATA } from '../../data/mockCms';
import { InstagramIcon } from '../common/InstagramIcon';
import { Menu, X, ChevronDown, Heart, Sparkles, Building2, Disc, Mic2, Leaf, GraduationCap, ShoppingBag, Users } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Disc,
  Mic2,
  Leaf,
  GraduationCap,
  ShoppingBag,
  Users
};

export const Header: React.FC = () => {
  const [location] = useLocation();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(true);

  const handleNavClick = () => {
    setIsProjectsOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo using actual user aq_logo.png */}
        <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 group">
          <img
            src="/aq_logo.png"
            alt="AQ Foundation Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
              AQ Foundation
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">
              Интегральная культура
            </span>
          </div>
        </Link>

        {/* Desktop Main Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/about" 
            className={`text-sm font-semibold transition-colors hover:text-red-600 ${location === '/about' ? 'text-red-600 font-bold' : 'text-slate-700'}`}
          >
            О фонде
          </Link>

          {/* Mega Dropdown Hover Wrapper */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button 
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-red-600 py-1 ${isProjectsOpen || (location.startsWith('/') && location !== '/' && location !== '/about' && location !== '/team') ? 'text-red-600' : 'text-slate-700'}`}
            >
              <span>Проекты</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180 text-red-600' : ''}`} />
            </button>

            {/* Mega Dropdown Panel */}
            {isProjectsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] glass-dropdown rounded-2xl p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="col-span-2 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" /> 7 Направлений Экосистемы
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">AQ Foundation</span>
                </div>

                {PROJECTS_DATA.map((proj) => {
                  const Icon = ICON_MAP[proj.iconName] || Sparkles;
                  const isActive = location === proj.href;
                  return (
                    <Link
                      key={proj.id}
                      href={proj.href}
                      onClick={handleNavClick}
                      className={`group p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isActive 
                          ? 'bg-red-50/80 border-red-500/40 shadow-sm' 
                          : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                      }`}
                    >
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 bg-red-100 text-red-600"
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
                            {proj.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                          {proj.tagline}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* 
          <Link 
            href="/team" 
            className={`text-sm font-semibold transition-colors hover:text-red-600 ${location === '/team' ? 'text-red-600 font-bold' : 'text-slate-700'}`}
          >
            Команда
          </Link>
          */}
        </nav>

        {/* Right Desktop CTA & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-600 hover:border-slate-300 transition-all"
            aria-label="Instagram AQ Foundation"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <Link
            href="/endowment"
            onClick={handleNavClick}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all shadow-md shadow-red-600/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Поддержать AQ</span>
          </Link>
        </div>

        {/* Mobile Header Right */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/endowment"
            onClick={handleNavClick}
            className="px-3.5 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Поддержать</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-red-600"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dropdown border-b border-slate-200 max-h-[calc(100vh-80px)] overflow-y-auto p-5 animate-in slide-in-from-top duration-200">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={handleNavClick}
              className={`block py-2 text-base font-semibold ${location === '/' ? 'text-red-600 font-bold' : 'text-slate-800'}`}
            >
              Главная
            </Link>

            <Link
              href="/about"
              onClick={handleNavClick}
              className={`block py-2 text-base font-semibold ${location === '/about' ? 'text-red-600 font-bold' : 'text-slate-800'}`}
            >
              О фонде
            </Link>

            {/* Mobile Projects Accordion */}
            <div>
              <button
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
              >
                <span>Проекты AQ</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProjectsOpen ? 'rotate-180 text-red-600' : ''}`} />
              </button>

              {isMobileProjectsOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-200">
                  {PROJECTS_DATA.map((proj) => {
                    const Icon = ICON_MAP[proj.iconName] || Sparkles;
                    return (
                      <Link
                        key={proj.id}
                        href={proj.href}
                        onClick={handleNavClick}
                        className={`flex items-center gap-3 p-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          location === proj.href ? 'bg-red-50 text-red-600' : 'text-slate-700 hover:text-red-600'
                        }`}
                      >
                        <div 
                          className="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-red-100 text-red-600"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{proj.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 
            <Link
              href="/team"
              onClick={handleNavClick}
              className={`block py-2 text-base font-semibold ${location === '/team' ? 'text-red-600 font-bold' : 'text-slate-800'}`}
            >
              Команда
            </Link>
            */}

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link
                href="/endowment"
                onClick={handleNavClick}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-center block shadow-md shadow-red-600/20"
              >
                Поддержать AQ
              </Link>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <InstagramIcon className="w-4 h-4 text-red-600" />
                <span>Instagram @aq.foundation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
