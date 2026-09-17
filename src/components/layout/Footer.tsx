import React from 'react';
import { Link } from 'wouter';
import { PROJECTS_DATA } from '../../data/mockCms';
import { InstagramIcon } from '../common/InstagramIcon';
import { Mail, ShieldCheck, FileText, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/aq_logo.png"
                alt="AQ Foundation Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                AQ Foundation
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Фонд развития интегральной культуры. Пространство, где искусство, образование и бизнес действуют как единая устойчивая экосистема.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200">
                <Sparkles className="w-3 h-3" /> ART · EDUCATION · BUSINESS
              </span>
            </div>
          </div>

          {/* AQ Foundation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-accent">
              AQ Foundation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-600 transition-colors font-medium">
                  О фонде
                </Link>
              </li>
              {/* 
              <li>
                <Link href="/team" className="hover:text-red-600 transition-colors font-medium">
                  Команда
                </Link>
              </li>
              */}
              <li>
                <Link href="/endowment" className="hover:text-red-600 transition-colors font-medium">
                  AQ Endowment
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-accent">
              Проекты
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {PROJECTS_DATA.map((proj) => (
                <li key={proj.id}>
                  <Link href={proj.href} className="hover:text-red-600 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>{proj.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-accent">
              Связь
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-red-600" />
                  <span>Instagram @aq.foundation</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aqfoundation.org"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>info@aqfoundation.org</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AQ Foundation. Все права защищены.
          </div>
          
          <div className="flex flex-wrap items-center gap-6 font-medium">
            <a href="#" className="hover:text-slate-800 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Политика конфиденциальности</span>
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Обработка персональных данных</span>
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Реквизиты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
